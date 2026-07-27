import { Router } from 'express';
import { authController } from '../controller/auth.controller';
import { validate } from '../../../shared/middlewares/validate';
import { authenticate } from '../../../shared/middlewares/authenticate';
import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
  refreshTokenSchema,
} from '../validation/auth.validation';

const router = Router();

// Public routes
router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.post('/refresh', validate(refreshTokenSchema), authController.refresh);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/verify-email', authController.verifyEmail);

// Protected routes
router.use(authenticate);

router.get('/me', authController.me);
router.post('/logout', authController.logout);
router.patch(
  '/change-password',
  validate(changePasswordSchema),
  authController.changePassword
);

export const authRoutes = router;
