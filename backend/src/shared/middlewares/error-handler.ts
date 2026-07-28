import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppError } from '../errors';
import { errorResponse } from '../utils/response';
import { logger } from '../utils/logger';
import { config } from '../../config';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message: string;
  let errors: any[] = [];

  logger.error(`[Error] ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errors = err.errors;
  } else if (err.name === 'CastError') {
    statusCode = StatusCodes.BAD_REQUEST;
    message = `Invalid ${err.path}: ${err.value}`;
  } else if (err.name === 'ValidationError') {
    statusCode = StatusCodes.BAD_REQUEST;
    message = err.message || 'Validation Error';
    if (err.errors) {
      errors = Object.values(err.errors).map((val: any) => ({
        path: val.path,
        message: val.message,
      }));
    }
  } else if (err.code === 11000) {
    statusCode = StatusCodes.CONFLICT;
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    message = `Duplicate field value entered for ${field}`;
  } else if (err.name === 'JsonWebTokenError') {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = 'Invalid token';
  } else if (err.name === 'TokenExpiredError') {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = 'Token expired';
  } else {
    // Handling generic errors, e.g., syntax errors, unhandled rejections
    message = err.message || 'An unexpected error occurred';
    
    // In development, you might want to send the stack trace
    if (config.env === 'development') {
      errors.push({ stack: err.stack });
    }
  }

  // Log the error
  logger.error(`[Error] ${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  if (statusCode === StatusCodes.INTERNAL_SERVER_ERROR && config.env !== 'test') {
    logger.error(err);
  }

  res.status(statusCode).json(errorResponse(message, errors.length > 0 ? errors : undefined));
};
