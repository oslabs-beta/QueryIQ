import { NextFunction, RequestHandler, Request, Response } from "express";
import { RequestBodyConnect } from '../../types/types'
import { dashBoardHelper } from "./dashBoardHelper";

// type GrafanaController = {
//   createDataSource: Promise<void>,
//   createDashBoard: RequestHandler
// }

const grafanaController = {
  createDataSource: async (req: Request, res: Response, next: NextFunction) => {
    const { graf_name, graf_pass, graf_port, db_name, db_url, db_username, db_server, db_password } = req.body;
    const url = `http://localhost:${graf_port}/api/datasources`;

    const body = {
      "orgId": 1,
      "name": `${db_name}`,
      "type": "postgres",
      "typeLogoUrl": "asd",
      "access": "proxy",
      "url": `${db_url}`,
      "user": `${db_username}`,
      "database": `${db_server}`,
      "basicAuth": false,
      "basicAuthUser": `${graf_name}`,
      "withCredentials": false,
      "isDefault": false,
      "jsonData": {
        "maxOpenConns": 100,
        "maxIdleConns": 100,
        "maxIdleConnsAuto": true,
        "connMaxLifetime": 14400,
        "database": "grafana",
        "sslmode": "disable",
        "postgresVersion": 1500
      },
      "secureJsonFields": {},
      "version": 2,
      "readOnly": false,
      "secureJsonData": {
        "password": `${db_password}`
      }
    }
  
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString('base64')}`
    }
  
    const payload = {
      "method": "POST",
      "headers": headers,
      "body": JSON.stringify(body),
    }
  
    try {
      const response = await fetch(url, payload);
      const data = await response.json();
      res.locals.data = data;
      res.locals.url = url;
      res.locals.headers = headers;
      // console.log(res.locals.body)
      return next();
    } catch (error) {
      return next({
        log: `${error}: error in the grafanaController.createDataSource`,
        status: 400,
        message: `${error}: error with the data source`
      })
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
    const url = res.locals.url;
    const headers = res.locals.headers;
    const body = dashBoardHelper(res.locals.data.datasource.uid);
    
    const payload = {
      "method": "POST",
      "headers": headers,
      "body": JSON.stringify(body),
    }
  
    try {
      const response = await fetch(url, payload);
      const data = await response.json();
      console.log('data:', data);
      // res.locals.dashboard = [data.slug, data.uid];
      res.locals.dashboard = { slug: data.slug, uid: data.uid } as {slug: string, uid: string};
      return next();
    } catch (error) {
      return next({
        log: `${error}: error in the grafanaController.createDashBoard`,
        status: 400,
        message: `${error}: error with the data source`
      })
    }
  },

}

export default grafanaController;