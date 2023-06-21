const express = import("express");
import { Application, NextFunction, Request, Response } from "express";

import next from "next";

const port = 3000;

const app: Application = express();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    app.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
  })
  .catch((err: Error) => {
    console.error(err.stack);
    process.exit(1);
  });

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
  console.log("/ endpoint hit");
});

app.get("/user", (req: Request, res: Response) => {
  res.send("Hello from the API");
  console.log("/user endpoint hit");
});

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    log: "Express global error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
