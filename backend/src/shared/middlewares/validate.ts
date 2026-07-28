import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';
import { errorResponse } from '../utils/response';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.issues || (error as any).errors || [];
        const errors = issues.map((e: any) => ({
          path: Array.isArray(e.path) ? e.path.join('.') : String(e.path || ''),
          message: e.message,
        }));
        res.status(StatusCodes.BAD_REQUEST).json(errorResponse('Validation failed', errors));
        return;
      }
      return next(error);
    }
  };
};
