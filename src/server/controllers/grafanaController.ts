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
};

interface QueryPanelResponse {
  slug: string;
  status: string;
  uid: string;
}

const grafanaController: GrafanaController = {
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

    const url = `http://localhost:${graf_port}/api/datasources`;

    const body = {
      orgId: 1,
      name: `${db_name}`,
      type: 'postgres',
      typeLogoUrl: 'asd',
      access: 'proxy',
      url: `${db_url}`,
      user: `${db_username}`,
      database: `${db_server}`,
      //change basicAuth
      basicAuth: true,
      basicAuthUser: `${graf_name}`,
      withCredentials: false,
      isDefault: true,
      jsonData: {
        maxOpenConns: 100,
        maxIdleConns: 100,
        maxIdleConnsAuto: true,
        connMaxLifetime: 14400,
        // database: 'grafana',
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
      res.locals.data = data;
      res.locals.graf_port = graf_port;
      res.locals.headers = headers;
      res.locals.graf_name = graf_name;
      res.locals.graf_pass = graf_pass;
      res.locals.db_name = db_name;
      res.locals.db_url = db_url;
      res.locals.db_username = db_username;
      res.locals.db_server = db_server;
      res.locals.db_password = db_password;
      // console.log(res.locals.body)

      setTimeout(() => {
        return next();
      }, 5000);

      // return next();
    } catch (error) {
      return next({
        log: `${error}: error in the grafanaController.createDataSource`,
        status: 400,
        message: `${error}: error with the data source`,
      });
    }
  },

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

    const body = dashBoardHelper(res.locals.data.datasource.uid);

    res.locals.data.datasource.uid;

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

      const data = await response.json();
      const urlArray = [];

      //12 is because that's how many panels we currently have
      for (let i = 1; i <= 12; i++) {
        urlArray.push(
          `http://localhost:3000/d-solo/${data.uid}/${data.slug}?orgId=1&refresh=15s&panelId=${i}`
        );
      }

      res.locals.dashboard = {
        slug: data.slug,
        uid: data.uid,
        status: data.status,
        iFrames: urlArray,
      } as {
        slug: string;
        uid: string;
        status: string;
        iFrames: [];
      };
      return next();
    } catch (error) {
      return next({
        log: `${error}: error in the grafanaController.createDashBoard`,
        status: 400,
        message: `${error}: error with the data source`,
      });
    }
  },

  /**
   * @name getPgQueryMetrics
   * @description This function will get metrics from running an arbitrary query on a postgres database and return the
   * @route /api/query
   */
  getPgQueryMetrics: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { query, dashboardUID, GrafanaCredentials } = req.body as {
      query: string;
      dashboardUID: string;
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
    const queryPanels = pgQueryHelper(query, dashboardUID);
    const payload = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(queryPanels),
    };

    try {
      const response = await fetch(url, payload);
      const data = (await response.json()) as QueryPanelResponse;

      const urlArray: string[] = [];

      for (let i = 1; i <= 3; i++) {
        urlArray.push(
          `http://localhost:3000/d-solo/${data.uid}/${data.slug}?orgId=1&panelId=${i}`
        );
      }

      res.locals.queryPanels = {
        slug: data.slug,
        uid: data.uid,
        status: data.status,
        iFrames: urlArray,
      } as {
        slug: string;
        uid: string;
        status: string;
        iFrames: [];
      };
      return next();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);

      return next({
        log: `${errorMessage}: error in the grafanaController.query`,
        status: 400,
        message: `${errorMessage}: error with the data source`,
      });
    }
  },
};

export default grafanaController;
