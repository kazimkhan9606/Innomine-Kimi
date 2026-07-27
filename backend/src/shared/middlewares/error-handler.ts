import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';
import { errorResponse } from '../utils/response';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = 500;
  let message: string;
  let errors: any[] = [];

  logger.error(`[Error] ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
  } else {
    // Handling generic errors, e.g., syntax errors, unhandled rejections
    message = err.message || 'An unexpected error occurred';
    
    // In development, you might want to send the stack trace
    if (process.env.NODE_ENV === 'development') {
      errors.push({ stack: err.stack });
    }
  }

  // Log the error
  logger.error(`[Error] ${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  if (statusCode === 500 && process.env.NODE_ENV !== 'test') {
    logger.error(err);
  }

  res.status(statusCode).json(errorResponse(message, errors.length > 0 ? errors : undefined));
};
