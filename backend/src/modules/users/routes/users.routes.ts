import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { validate } from '../../../shared/middlewares/validate';
import { updateProfileSchema } from '../validation/user.validation';

const router = Router();
const userController = new UserController();

// PATCH /api/v1/users/me - Update own user profile
router.patch('/me', authenticate, validate(updateProfileSchema), userController.updateMyProfile);

// GET /api/v1/users/:id - Get public user profile
router.get('/:id', userController.getPublicProfile);

export const usersRoutes = router;
