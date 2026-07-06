import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { config } from '../../config';
import { logger } from '../utils/logger';
import { ApiError } from '../utils/api-error';
import { errorResponse } from '../utils/api-response';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? StatusCodes.BAD_REQUEST : StatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || StatusCodes[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }

  const { statusCode, message } = error;
  
  if (config.env === 'development') {
    logger.error(error);
  }

  res.status(statusCode).json(errorResponse(message));
};

import mongoose from 'mongoose';
