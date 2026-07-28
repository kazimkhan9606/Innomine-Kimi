import { Router } from 'express';
import { DashboardController } from '../controller/dashboard.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';

const router = Router();
const dashboardController = new DashboardController();

// GET /api/v1/dashboard/summary - Retrieve innovator dashboard summary metrics
router.get('/summary', authenticate, dashboardController.getSummary);

export const dashboardRoutes = router;
