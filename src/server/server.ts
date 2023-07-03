import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import next from 'next';
import apiRouter from './routers/apiRouter';
import cors from 'cors';

// Required to pipe env variables into Express
import dotenv from 'dotenv';
dotenv.config();

// Attach port to PORT_EXPRESS, which should be set to 3001, or 3003-3999.
// If you see port running on 3002 during server start-up, you know that .env is not being loaded properly.
const port = process.env.PORT_EXPRESS || 3002;

const app: Application = express();

// The following code creates a new Next.js application and initializes it.
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// This code sets up the server for the Next.js application.
// It defines a route handler for all requests that come into the server.
// The route handler uses the Next.js request handler to render the appropriate page.
nextApp
  .prepare()
  .then(() => {
    app.get('*', (req: Request, res: Response) => {
      handle(req, res).catch((error) => {
        console.error(error);
        res.status(500).send('Error occured during Next.js message handling');
      });
    });
  })
  .catch((err: Error): void => {
    console.error(err);
    process.exit(1);
  });

// Sets up the server to parse JSON
app.use(express.json());

// This code allows the express server to communicate with other servers and allows for the use of the cors package to communicate with the front end.
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3333' }));

// This is the main router for the server
// It handles all the API requests
app.use('/api', apiRouter);

// This provides some test routes on the Express server when in development mode. Otherwise, does nothing.
if (process.env.NODE_ENV === 'development') {
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
    console.log('/ endpoint hit');
  });

  app.get('/user', (req: Request, res: Response) => {
    res.send('Hello from /user');
    console.log('/user endpoint hit');
  });
}

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

app.listen(port, () =>
  console.log(`> Express OK, served at http://localhost:${port}`)
);
