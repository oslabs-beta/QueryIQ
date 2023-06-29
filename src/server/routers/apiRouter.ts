/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import grafanaController from '../controllers/grafanaController';

const router = Router();

router.post(
  '/connect',
  grafanaController.createDataSource,
  grafanaController.createDashBoard,
  (req, res) => {
    return res.status(200).json(res.locals.dashboard);
  }
);

router.post('/query', grafanaController.getPgQueryMetrics, (req, res) => {
  return res.status(200).json(res.locals.query);
});

export default router;
