import { Router } from 'express';
import connectionController from '../controllers/connectionController';

const router = Router();

//postgresql://postgres:Codesmith23*@localhost:5432/postgres

//validate DB and install pg_stats_extension
router.post(
  '/connect',
  connectionController.dbConnect,
  connectionController.createExtension,
  // databaseController.allStats,
  (req, res) => {
    console.log(res.locals);
    return res.status(200).json(res.locals);
  }
);

export default router;