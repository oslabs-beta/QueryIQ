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

router.post('/query',  grafanaController.getPgQueryMetrics, (req, res) => {
  return res.status(200).json(res.locals.queryPanels);
});

router.delete(
  '/disconnect', 
  grafanaController.deleteDataSource, 
  grafanaController.deleteDashBoard, 
  (req, res) => {
  return res.status(200).send(res.locals.data);
});

router.delete(
  '/delete', 
  grafanaController.deleteQueryDashBoard, 
  (req, res) => {
  return res.status(200).send(res.locals.data);
});

router.delete(
  '/deleteAll', 
  grafanaController.deleteAllQueryDashBoards, 
  (req, res) => {
  return res.status(200).send(res.locals.data);
});

export default router;
