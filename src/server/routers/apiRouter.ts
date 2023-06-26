import { Router } from 'express';
import grafanaController from '../controllers/grafanaController';

const router = Router();

router.post('/connect',
  grafanaController.createDataSource,
  (req, res) => {
    console.log(res.locals)
    return res.status(200).send('datasource created')
})

export default router;