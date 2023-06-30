import { Router } from 'express';
import grafanaController from '../controllers/grafanaController';

const router = Router();

router.post('/connect',
  grafanaController.createDataSource,
  grafanaController.saveDataSource,
  grafanaController.createDashBoard,
  (req, res) => {
    return res.status(200).json(res.locals.dashboard)
})

export default router;