/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextFunction, RequestHandler, Request, Response } from 'express';
import { type FormData } from '../../types/types';
import { dashBoardHelper } from './dashBoardHelper';
import { pgQueryHelper } from './pgQueryHelper';

interface GrafanaAPIHandler {
  (req: Request, res: Response, next: NextFunction): Promise<JSON | void>;
}

type GrafanaController = {
  createDataSource: GrafanaAPIHandler;
  createDashBoard: GrafanaAPIHandler;
  getPgQueryMetrics: GrafanaAPIHandler;
  deleteDataSource: GrafanaAPIHandler;
  deleteDashBoard: GrafanaAPIHandler;
  deleteQueryDashBoard: GrafanaAPIHandler;
};

interface QueryPanelResponse {
  slug: string;
  status: string;
  uid: string;
}

const grafanaController: GrafanaController = {
  //createDataSource method receives grafana and PGDB information from frontend and
  //creates datasource on the users local grafana instance
  createDataSource: async (req: Request, res: Response, next: NextFunction) => {
    const {
      graf_name,
      graf_pass,
      graf_port,
      db_name,
      db_url,
      db_username,
      db_server,
      db_password,
    } = req.body as FormData;

    //the user's local grafana instance
    const url = `http://localhost:${graf_port}/api/datasources`;

    //request body sent to grafana local API, includes all the user PGDB information
    const body = {
      orgId: 1,
      name: `${db_name}`,
      type: 'postgres',
      typeLogoUrl: 'asd',
      access: 'proxy',
      url: `${db_url}`,
      user: `${db_username}`,
      database: `${db_server}`,
      basicAuth: false,
      basicAuthUser: `${graf_name}`,
      withCredentials: false,
      isDefault: true,
      jsonData: {
        maxOpenConns: 100,
        maxIdleConns: 100,
        maxIdleConnsAuto: true,
        connMaxLifetime: 14400,
        sslmode: 'disable',
        postgresVersion: 1500,
      },
      secureJsonFields: {},
      version: 2,
      readOnly: false,
      secureJsonData: {
        password: `${db_password}`,
      },
    };

    //headers for request to Graf API, grants basic auth to graf account
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString(
        'base64'
      )}`,
    };

    const payload = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as Promise<JSON>;

      //persist the response and port for next fetch in createDashBoard
      res.locals.data = data;
      res.locals.graf_port = graf_port;
      res.locals.headers = headers;

      // setTimeout(() => {
      //   return next();
      // }, 5000);

      return next();
    } catch (error) {
      const errorMessage =
        // Ensure that what's being used in the template literal can indeed be converted to a string
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.createDataSource`,
        status: 400,
        message: `${errorMessage}: error with the data source`,
      });
    }
  },

  //createDashBoard method sends POST request to Graf Local API to create a preconfigured dashboard
  //(see dashBoardHelper) that contains all the graphs and metrics we need for the iFrames on the frontend
  createDashBoard: async (req: Request, res: Response, next: NextFunction) => {
    const { graf_port, headers } = res.locals as {
      graf_port: string;
      headers: {
        Accept: string;
        'Content-Type': string;
        Authorization: string;
      };
    };

    const url = `http://localhost:${graf_port}/api/dashboards/db`;

    //request body is created using helper function dashBoardHelper that inserts the uid from the data source creation
    //in all the areas necessary
    const body = dashBoardHelper(res.locals.data.datasource.uid);

    const payload = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    } as {
      method: string;
      headers: {
        Accept: string;
        'Content-Type': string;
        Authorization: string;
      };
      body: string;
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as {
        slug: string;
        status: string;
        uid: string;
      };

      //creating an array of all the iFrame urls to pass to the frontend
      const urlArray = [];
      for (let i = 1; i <= body.dashboard.panels.length; i++) {
        urlArray.push(
          `http://localhost:3000/d-solo/${data.uid}/${data.slug}?orgId=1&refresh=30s&panelId=${i}`
        );
      }

      //response is stored in res.locals.dashboard to send the to the frontend
      res.locals.dashboard = {
        slug: data.slug,
        dashboarduid: data.uid,
        status: data.status,
        iFrames: urlArray,
        datasourceuid: res.locals.data.datasource.uid,
      } as {
        slug: string;
        dashboarduid: string;
        status: string;
        iFrames: string[];
        datasourceuid: string;
      };
      return next();
    } catch (error) {
      const errorMessage =
        // Ensure that what's being used in the template literal can indeed be converted to a string
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.createDashBoard`,
        status: 400,
        message: `${errorMessage}: error with the data source`,
      });
    }
  },

  /**
   * @name getPgQueryMetrics
   * @description This function will get pg_stat_statement metrics from running an arbitrary query on a postgres database and return the URLs and URL metadata for the Grafana panel iFrames
   * @route /api/query
   * @param req {Object} req.body = {"query":"QUERY", "datasourceUID":"DATASOURCE_UID", "GrafanaCredentials":{"graf_name":"USERNAME","graf_port":"PORT","graf_pass":"PASSWORD"}}
   * @
   */
  getPgQueryMetrics: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { query, datasourceUID, GrafanaCredentials } = req.body as {
      query: string;
      datasourceUID: string;
      GrafanaCredentials: {
        graf_port: string;
        graf_name: string;
        graf_pass: string;
      };
    };

    const url = `http://localhost:${GrafanaCredentials.graf_port}/api/dashboards/db`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(
        `${GrafanaCredentials.graf_name}:${GrafanaCredentials.graf_pass}`
      ).toString('base64')}`,
    };
    const queryPanels = pgQueryHelper(query, datasourceUID);
    const payload = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(queryPanels),
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as QueryPanelResponse;

      if (process.env.NODE_ENV === 'development') {
        console.log(data);
      }

      const urlArray: string[] = [];

      // Create array of iframe URLs for each Grafana panel
      for (let i = 1; i <= queryPanels.dashboard.panels.length; i++) {
        urlArray.push(
          `http://localhost:3000/d-solo/${data.uid}/${data.slug}?orgId=1&panelId=${i}`
        );
      }

      // Attach metadata needed to generate iframe URLs to response, this object will be sent to client upon POST to /api/query
      res.locals.queryPanels = {
        slug: data.slug,
        uid: data.uid,
        status: data.status,
        iFrames: urlArray,
      } as {
        slug: string;
        uid: string;
        status: string;
        iFrames: string[];
      };

      return next();
    } catch (error) {
      const errorMessage =
        // Ensure that what's being used in the template literal can indeed be converted to a string
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.query`,
        status: 400,
        message: `${errorMessage}: error with the data source`,
      });
    }
  },

  deleteDataSource: async (req, res, next) => {
    const { dashboardUID, datasourceUID, GrafanaCredentials } = req.body as {
      dashboardUID: string;
      datasourceUID: string;
      GrafanaCredentials: {
        graf_port: string;
        graf_name: string;
        graf_pass: string;
      };
    };

    const { graf_name, graf_pass, graf_port } = GrafanaCredentials;

    const url = `http://localhost:${graf_port}/api/datasources/uid/${datasourceUID}`;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString(
        'base64'
      )}`,
    };

    const payload = {
      method: 'DELETE',
      headers: headers,
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as Promise<JSON>;

      res.locals.dashboardUID = dashboardUID;
      res.locals.GrafanaCredentials = GrafanaCredentials;
      res.locals.dataSourceResponse = data;

      return next();
    } catch (error) {
      const errorMessage =
        // Ensure that what's being used in the template literal can indeed be converted to a string
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.deleteDataSource`,
        status: 400,
        message: `${errorMessage}: error with the data source UID`,
      });
    }

   },

  deleteDashBoard: async (req, res, next) => {
    
    const { graf_name, graf_pass, graf_port } = res.locals.GrafanaCredentials;
    const { dashboardUID } = res.locals;

    const url = `http://localhost:${graf_port}/api/dashboards/uid/${dashboardUID}`;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString(
        'base64'
      )}`,
    };

    const payload = {
      method: 'DELETE',
      headers: headers,
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as Promise<JSON>;

      res.locals.data = {datasource: res.locals.dataSourceResponse, dashboard: data}

      return next();
    } catch (error) {
      const errorMessage =
        // Ensure that what's being used in the template literal can indeed be converted to a string
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.deleteDashboard`,
        status: 400,
        message: `${errorMessage}: error with the dashboard UID`,
      });
    }
  },

  deleteQueryDashBoard: async (req, res, next) => {
    const { dashboardUID, datasourceUID, GrafanaCredentials } = req.body as {
      dashboardUID: string;
      datasourceUID: string;
      GrafanaCredentials: {
        graf_port: string;
        graf_name: string;
        graf_pass: string;
      };
    };

    const { graf_name, graf_pass, graf_port } = GrafanaCredentials;

    const url = `http://localhost:${graf_port}/api/dashboards/uid/${dashboardUID}`;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString(
        'base64'
      )}`,
    };

    const payload = {
      method: 'DELETE',
      headers: headers,
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as Promise<JSON>;

      res.locals.data = data;

      return next();
    } catch (error) {
      const errorMessage =
        // Ensure that what's being used in the template literal can indeed be converted to a string
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.deleteQueryDashBoard`,
        status: 400,
        message: `${errorMessage}: error with the query dashboard UID`,
      });
    }
   },
};

export default grafanaController;
