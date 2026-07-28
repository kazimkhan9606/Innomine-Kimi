import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { asyncHandler } from '../../shared/middlewares/async-handler';
import { successResponse } from '../../shared/utils/response';
import { HealthService } from './health.service';

export const getHealth = asyncHandler(async (_req: Request, res: Response) => {
  const data = HealthService.getHealth();
  res.status(StatusCodes.OK).json(successResponse(data, 'Server is healthy'));
});

export const getDatabaseHealth = asyncHandler(async (_req: Request, res: Response) => {
  const data = await HealthService.getDatabaseHealth();
  const statusCode =
    data.status === 'connected' ? StatusCodes.OK : StatusCodes.SERVICE_UNAVAILABLE;
  res.status(statusCode).json(successResponse(data, `Database is ${data.status}`));
});

export const getVersion = asyncHandler(async (_req: Request, res: Response) => {
  const data = HealthService.getVersion();
  res.status(StatusCodes.OK).json(successResponse(data, 'Version info retrieved'));
});

export const getApplicationHealth = getHealth;
