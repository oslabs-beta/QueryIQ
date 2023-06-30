/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextFunction, RequestHandler, Request, Response } from 'express';
import { RequestBodyConnect } from '../../types/types';
import { dashBoardHelper } from './dashBoardHelper';
import { testCopy } from './testCopy';

interface GrafanaAPIHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

type GrafanaController = {
  grafanaFetch: GrafanaAPIHandler;
  createDataSource: GrafanaAPIHandler;
  saveDataSource: GrafanaAPIHandler;
  createDashBoard: GrafanaAPIHandler;
};

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
    } = req.body;

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
      const data = await response.json();
      console.log('data source created');
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

    // console.log("graf_name:", graf_name);
    // console.log("graf_pass:", graf_pass);
    // console.log("graf_port:", graf_port);
    // console.log("db_name:", db_name);
    // console.log("db_url:", db_url);
    // console.log("db_username:", db_username);
    // console.log("db_server:", db_server);
    // console.log("db_password:", db_password);
    // console.log('url:', url)

    // const config = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString('base64')}`,
    // "Connection" : "keep-alive",
    // "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // "Access-Control-Allow-Credentials": "true"
    //   },
    //   body: {
    //     name: `${db_name}`,
    //     type: 'postgres',
    //     url: `${db_url}`,
    //     user: `${db_username}`,
    //     access: 'proxy',
    //     database: `${db_server}`,
    //     secureJsonData: {
    //       password: `${db_password}`
    //       },
    //     basicAuth: false
    //   }
    // };

    // console.log('config:', config)

    // try {
    //   const response = await fetch(url, config);

    // if (!response.ok) {
    //   const message = `An error has occured: ${response.status}`;
    //   throw new Error(message);
    // }

    // console.log('Response:', response);
    // const data = await response.json();
    // res.locals.dashboard = dashBoardHelper(data.datasource.uid);
    // console.log('Data:', data);
    // console.log('Datasource created:', data);

    //   return next();
    // } catch (error) {
    //   console.log(error)
    //   return next({
    //     log: `${error}: error in the grafanaController.createDataSource`,
    //     status: 400,
    //     message: `${error}: error with the data source`
    //   })
    // }
  },

  createDashBoard: async (req: Request, res: Response, next: NextFunction) => {
    const { graf_port, headers } = res.locals;
    const url = `http://localhost:${graf_port}/api/dashboards/db`;
    // console.log('👽url and headers', { url: url, headers: headers });
    // console.log( '❗️createDashBoard', ':', 'res.locals.data', ':', res.locals.data);
    //  console.log('❗️❗️UID: ', res.locals.data.datasource.uid);
    console.log('in create dashboard');

    // const body = dashBoardHelper(res.locals.data.datasource.uid);

    const body = testCopy(res.locals.data.datasource.uid);

    // console.log( '❗️❗️UID from body after dashboardhelper: ', body.dashboard.annotations.list[1]?.datasource.uid);
    const payload = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    };

    try {
      // console.log('❗️❗️❗️TRYING TO CREATE DASHBOARD');
      const response = await fetch(url, payload);

      const data = await response.json();
      // console.log('❗️data:', data);
      // res.locals.dashboard = [data.slug, data.uid];
      // “http://localhost:3000/d-solo/” + {uid} +”/” +{slug} + “?” +”orgId=1”+”panelId=3”
      const urlArray = [];
      const dataLink = `http://localhost:3000/connections/datasources/edit/${res.locals.data.datasource.uid}`;

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
        datasourceurl: dataLink,
        iFrames: urlArray,
      } as {
        slug: string;
        uid: string;
        status: string;
        datasourceurl: string;
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

  saveDataSource: async (req, res, next) => {
    const uid = res.locals.data.datasource.uid;
    console.log('in saveDataSource');

    const {
      graf_name,
      graf_pass,
      db_name,
      db_url,
      db_username,
      db_server,
      db_password,
    } = res.locals;

    const { graf_port, headers } = res.locals;
    const url = `http://localhost:${graf_port}/api/datasources/uid/${uid}`;

    const body = {
      id: 1,
      uid: 'updated UID',
      orgId: 1,
      name: 'it worked?????',
      type: 'postgres',
      access: 'proxy',
      url: `${db_url}`,
      password: `${db_password}`,
      user: `${db_username}`,
      database: `${db_server}`,
      basicAuth: true,
      basicAuthUser: `${graf_name}`,
      secureJsonData: {
        basicAuthPassword: `${graf_pass}`,
      },
      isDefault: false,
      jsonData: null,
    };

    const payload = {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(url, payload);
      const data = await response.json();
      console.log('data:', data);

      // console.log('data source created');
      // res.locals.data = data;
      // res.locals.graf_port = graf_port;
      // res.locals.headers = headers;
      // res.locals.graf_name = graf_name;
      // res.locals.graf_pass = graf_pass;
      // res.locals.db_name = db_name;
      // res.locals.db_url = db_url
      // res.locals.db_username = db_username;
      // res.locals.db_server = db_server;
      // res.locals.db_password = db_password;
      // console.log(res.locals.body)

      return next();
    } catch (error) {
      return next({
        log: `${error}: error in the grafanaController.saveDataSource`,
        status: 400,
        message: `${error}: error with the data source`,
      });
    }
  },

  // console.log(JSON.stringify(obj, null, 4))

  grafanaFetch: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const response = await fetch(
      // TODO: change to .env variable
      'https://influx-prod-13-prod-us-east-0.grafana.net/api/v1/push/influx/write',
      {
        method: 'post',
        headers: {
          // prettier-ignore
          Authorization: `Bearer ${process.env.GRAFANA_GCLOUD_HOSTED_METRICS_ID!}:${process.env.GRAFANA_HTTP_METRICS_PROMETHEUS_API_KEY!}`,
          'Content-Type': 'text/plain',
        },
        /***************************************************
         * body must be in Prometheus style format:
         * --> const body = 'test,bar_label=abc,source=grafana_cloud_docs metric=35.2';
         *
         * Name: Prometheus style name(required)
         * Label: Identifies a specific visualization of a metric
         * Source: The source of the metric, the instance job that is generating the metric
         * Metric: Metric to be pushed up, the specific value
         **************************************************/
        body: JSON.stringify(req.body),
      }
    );
    const data = response.status;
    res.locals.grafanaFetch = data;
    console.log(data);
    next();
  },
};

export default grafanaController;
