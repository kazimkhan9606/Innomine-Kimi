import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { HEADERS } from '../constants';

export const requestIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const reqId = req.get(HEADERS.REQUEST_ID) || uuidv4();
  req.id = reqId; // Assuming we extend Express Request type
  res.setHeader(HEADERS.REQUEST_ID, reqId);
  next();
};
