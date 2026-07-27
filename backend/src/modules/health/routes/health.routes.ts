import { Router } from 'express';
import { getHealth, getDatabaseHealth, getApplicationHealth, getVersion } from '../health.controller';

const router = Router();

router.get('/', getHealth);
router.get('/database', getDatabaseHealth);
router.get('/application', getApplicationHealth);
router.get('/version', getVersion);

export const healthRoutes = router;
