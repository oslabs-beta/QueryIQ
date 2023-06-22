import Nextauth from "~/pages/api/auth/[...nextauth]"
import {type NextFunction, type RequestHandler} from 'express';

type DatabaseController = {
  allStats: RequestHandler,
  testStats: RequestHandler
}

const databaseController: DatabaseController = {
  allStats: async (req, res, next) => {
    console.log('allStats')
    const db = res.locals.dbConnection;
    const data = req.body.uri;
    
    // grab database name from req.body string, database assignment contigent upon db setup via uri || manual input
    const dataBase =
      data.split('.com/')[1] ||
      data.split('5432/').pop().split('/')[0].replace(/\s/g, '');
    try {
      const dbOverview = await db.query(
        'SELECT * FROM pg_stat_database WHERE datname = $1;',
        [dataBase]
      );
      res.locals.result.dbStats = dbOverview.rows;
      res.locals.result.conflicts = dbOverview.rows[0].conflicts;
      res.locals.result.deadlocks = dbOverview.rows[0].deadlocks;
      res.locals.result.transactionsCommitted = dbOverview.rows[0].xact_commit;
      res.locals.result.rolledBackTransactions =
        dbOverview.rows[0].xact_rollback;
      return next();
    } catch (error) {
      console.log('ERROR in databaseController.dbStats: ', error);
      res.locals.result.dbStats = null;
      res.locals.result.conflicts = null;
      res.locals.result.deadlocks = null;
      res.locals.result.transactionsCommitted = null;
      res.locals.result.rolledBackTransactions = null;
      return next();
    }
  },

  testStats: async (req, res, next) => {
    try {
      const db = res.locals.dbConnection;

      console.log('test stats')
      // Your specific query goes here
      const query = 'SELECT * FROM people;';
  
      // Execute the query
      const result = await db.query(query);
      // console.log(result)
  
      // Retrieve the query metrics
      const metricsQuery = 'SELECT * FROM pg_stat_statements WHERE query = $1;';
      const metricsResult = await db.query(metricsQuery, [query]);
      console.log(metricsResult)
  
      // Add the metrics to the response object
      res.locals.metrics = metricsResult;
  
      next(); // Proceed to the next middleware or route handler
    } catch (err) {
      next(err); // Pass the error to the error handling middleware
    }
  }

}

export default databaseController;