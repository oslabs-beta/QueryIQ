import { type Request, type Response } from 'express';

/**
 * Middleware for handling errors server-side 
 * Overwrites default Express error handler
*/
export const errorHandler = (err: Error, req: Request, res: Response): void => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
}