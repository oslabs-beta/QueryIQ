import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import next from 'next';

// Cannot use env from ../env.mjs due to issues with ESM
// import { env } from '../env.mjs';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3001;

const app: Application = express();

// Attach Next.js to Express
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    app.get('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
  })
  .catch((err: Error): void => {
    console.error(err);
    process.exit(1);
  });

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
  console.log('/ endpoint hit');
});

app.get('/user', (req: Request, res: Response) => {
  res.send('Hello from /user');
  console.log('/user endpoint hit');
});

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
