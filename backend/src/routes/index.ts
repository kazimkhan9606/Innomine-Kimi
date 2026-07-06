import { Router } from 'express';
import { healthRoutes } from '../modules/health/health.routes';

const router = Router();

// API Version 1
router.use('/health', healthRoutes);

export const apiRoutes = router;
