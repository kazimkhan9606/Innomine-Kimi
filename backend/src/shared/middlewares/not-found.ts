import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Not found - ${req.originalUrl}`));
};
