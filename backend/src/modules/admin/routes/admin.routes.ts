import { Router } from 'express';
import { AdminController } from '../controller/admin.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { authorize } from '../../../shared/middlewares/authorize';
import { validate } from '../../../shared/middlewares/validate';
import {
  updateUserStatusSchema,
  updateInnovationStatusSchema,
} from '../validation/admin.validation';

const router = Router();
const adminController = new AdminController();

// Apply ADMIN security to all admin routes
router.use(authenticate, authorize('ADMIN'));

// GET /api/v1/admin/users - List users with filtering
router.get('/users', adminController.getUsers);

// PATCH /api/v1/admin/users/:id/status - Update user active status
router.patch(
  '/users/:id/status',
  validate(updateUserStatusSchema),
  adminController.updateUserStatus
);

// GET /api/v1/admin/innovations - List all innovations
router.get('/innovations', adminController.getInnovations);

// PATCH /api/v1/admin/innovations/:id/status - Update innovation status or flag
router.patch(
  '/innovations/:id/status',
  validate(updateInnovationStatusSchema),
  adminController.updateInnovationStatus
);

export const adminRoutes = router;
