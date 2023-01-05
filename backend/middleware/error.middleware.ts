import { Request, Response, NextFunction } from 'express';

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);
  next(error);
};

interface IErrorStack {
  message: string;
  stack: string;
}

export const errorHandlerMiddleware = (
  err: IErrorStack,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
