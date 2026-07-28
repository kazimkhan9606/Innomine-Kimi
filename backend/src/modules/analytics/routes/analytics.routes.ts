import { Router } from 'express';
import { AnalyticsController } from '../controller/analytics.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';

const router = Router();
const analyticsController = new AnalyticsController();

// GET /api/v1/analytics/platform - Platform-wide statistics
router.get('/platform', analyticsController.getPlatformStats);

// GET /api/v1/analytics/innovations/:id - Innovation analytics
router.get('/innovations/:id', authenticate, analyticsController.getInnovationAnalytics);

export const analyticsRoutes = router;
