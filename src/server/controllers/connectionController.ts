import { RequestHandler, NextFunction } from 'express';
import { Pool } from 'pg';

type ConnectionController = {
  dbConnect: RequestHandler,
  createExtension: RequestHandler
}

const connectionController: ConnectionController = {
  dbConnect: async (req, res, next) => {
    console.log('dbConnect')
    const uri_string = req.body.uri;
    const pool = new Pool({
      connectionString: uri_string,
    });
    const db = {
      query: (text: string, params?: Array<string>) => {
        return pool.query(text, params);
      },
    };

    try {
      const testQuery = await pool.query('SELECT version();')
      console.log(testQuery)
      res.locals.dbConnection = db;
      res.locals.result = {};
      return next();

    } catch(error) {
      return next({
        log: `ERROR caught in connectController.dbConnect: ${error}`,
        status: 400,
        message:
          'ERROR: error has occured in connectController.dbConnect',
      })
    }
    

  },

  createExtension: async (req, res, next) => {
    const db = res.locals.dbConnection;
    const queryString = 'CREATE EXTENSION IF NOT EXISTS pg_stat_statements';

    console.log('createExtension')
    
    const extExists = await db.query(`SELECT extname
      FROM pg_extension
      WHERE extname = 'pg_stat_statements';`)

    console.log(extExists)

    try {
      await db.query(queryString);
      res.locals.result.validURI = true;
      return next();
    } catch (error) {
      return next({
        log: `ERROR caught in connectController.createExtension: ${error}`,
        status: 400,
        message:
          'ERROR: error has occured in connectController.createExtension',
      });
    }
  },
}

export default connectionController;