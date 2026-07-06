import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { asyncHandler } from '../../shared/middlewares/async-handler';
import { successResponse } from '../../shared/utils/api-response';
import mongoose from 'mongoose';

export const getHealthStatus = asyncHandler(async (req: Request, res: Response) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(StatusCodes.OK).json(
    successResponse({
      status: 'UP',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: dbStatus,
      environment: process.env.NODE_ENV,
    }, 'Server is healthy')
  );
});
