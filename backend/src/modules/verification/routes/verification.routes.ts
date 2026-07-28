import { Router } from 'express';
import { VerificationController } from '../controller/verification.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { authorize } from '../../../shared/middlewares/authorize';
import { validate } from '../../../shared/middlewares/validate';
import {
  createVerificationSchema,
  reviewVerificationSchema,
} from '../validation/verification.validation';

const router = Router();
const verificationController = new VerificationController();

// POST /api/v1/verification - Submit verification request
router.post(
  '/',
  authenticate,
  validate(createVerificationSchema),
  verificationController.submitVerification
);

// GET /api/v1/verification/my-status - Check own verification status
router.get('/my-status', authenticate, verificationController.getMyStatus);

// PATCH /api/v1/verification/:id/review - Review verification request (ADMIN only)
router.patch(
  '/:id/review',
  authenticate,
  authorize('ADMIN'),
  validate(reviewVerificationSchema),
  verificationController.reviewVerification
);

export const verificationRoutes = router;
