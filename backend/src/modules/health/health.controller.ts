import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { asyncHandler } from '../../shared/middlewares/async-handler';
import { successResponse } from '../../shared/utils/response';
import mongoose from 'mongoose';
import os from 'os';

export const getHealth = asyncHandler(async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(
    successResponse({
      status: 'UP',
      timestamp: new Date().toISOString(),
    }, 'Server is healthy')
  );
});

export const getApplicationHealth = asyncHandler(async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(
    successResponse({
      status: 'UP',
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      cpuLoad: os.loadavg(),
      environment: process.env.NODE_ENV,
    }, 'Application is healthy')
  );
});

export const getDatabaseHealth = asyncHandler(async (req: Request, res: Response) => {
  const isConnected = mongoose.connection.readyState === 1;
  const status = isConnected ? 'connected' : 'disconnected';
  
  res.status(isConnected ? StatusCodes.OK : StatusCodes.SERVICE_UNAVAILABLE).json(
    successResponse({
      database: status,
      host: mongoose.connection.host,
      name: mongoose.connection.name,
    }, `Database is ${status}`)
  );
});

export const getVersion = asyncHandler(async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(
    successResponse({
      api: 'v1',
      node: process.version,
    }, 'Version info retrieved')
  );
});
