import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { HEADERS } from '../constants';

export const requestIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const reqId = req.get(HEADERS.REQUEST_ID) || crypto.randomUUID();
  req.id = reqId; // Assuming we extend Express Request type
  res.setHeader(HEADERS.REQUEST_ID, reqId);
  next();
};
