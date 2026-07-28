import { Router } from 'express';
import { InnovatorController } from '../controller/innovator.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { validate } from '../../../shared/middlewares/validate';
import { updateInnovatorProfileSchema } from '../validation/innovator.validation';

const router = Router();
const innovatorController = new InnovatorController();

// GET /api/v1/innovators/:id/profile - Public innovator profile with published innovations and stats
router.get('/:id/profile', innovatorController.getProfile);

// PATCH /api/v1/innovators/profile - Update innovator bio, social links, and expertise
router.patch('/profile', authenticate, validate(updateInnovatorProfileSchema), innovatorController.updateProfile);

export const innovatorsRoutes = router;
