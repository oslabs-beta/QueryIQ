import { Router } from 'express';
import connectionController from '../controllers/connectionController';
import databaseController from '../controllers/databaseController';


const router = Router();

// const connectionInfo: {
//   host?: string,
//   port?: string,
//   database?: string,
//   user?: string, 
//   password?: string,
//   ssl?: boolean,
//   toURI: Function,
// } = {
//   host: 'localhost',
//   port: '5432',
//   database: 'Dev_db_test',
//   user: 'postgres',
//   password: 'Codesmith23*',
//   ssl: false,
//   toURI: (): string => {
//     return `$postgresql://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`
//   }
// };

// const connectionString = `postgresql://postgres:Codesmith23*@localhost:5432/Dev_db_test`;

//const connectionString = `postgresql://${connectionInfo.user}:${connectionInfo.password}@${connectionInfo.host}:${connectionInfo.port}/${connectionInfo.database}`;
//postgresql://postgres:Codesmith23*@localhost:5432/postgres

//validate DB and install pg_stats_extension
router.post('/connect',
  connectionController.dbConnect, 
  connectionController.createExtension, 
  databaseController.allStats,
  databaseController.testStats, 
  (req, res) => {
    console.log(res.locals.metrics)
    return res.status(200).json(res.locals.metrics)
})

export default router;