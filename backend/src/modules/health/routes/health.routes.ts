import { Router, Request, Response } from 'express';
import { successResponse } from '../../../shared/utils/api-response';

const router = Router();

router.get('/live', (req: Request, res: Response) => {
  res.status(200).json(successResponse({ status: 'OK' }, 'Server is alive'));
});

router.get('/ready', (req: Request, res: Response) => {
  // In a real scenario, this might check DB connection or cache status
  res.status(200).json(successResponse({ status: 'OK' }, 'Server is ready'));
});

export const healthRoutes = router;
