import { Router } from 'express';
import {
  getHealth,
  getDatabaseHealth,
  getApplicationHealth,
  getVersion,
} from '../health.controller';

const healthRouter = Router();

healthRouter.get('/', getHealth);
healthRouter.get('/health', getHealth);
healthRouter.get('/database', getDatabaseHealth);
healthRouter.get('/health/database', getDatabaseHealth);
healthRouter.get('/application', getApplicationHealth);
healthRouter.get('/version', getVersion);

const versionRouter = Router();
versionRouter.get('/', getVersion);

export const healthRoutes = healthRouter;
export const versionRoutes = versionRouter;
