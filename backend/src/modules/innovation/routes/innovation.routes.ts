import { Router, Response, NextFunction } from 'express';
import { innovationController } from '../controller/innovation.controller';
import { validate } from '../../../shared/middlewares/validate';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { verifyAccessToken } from '../../../shared/utils/jwt';
import { userRepository } from '../../users/repository/user.repository';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';
import {
  createInnovationSchema,
  updateInnovationSchema,
  deleteInnovationSchema,
  publishInnovationSchema,
  archiveInnovationSchema,
  verifyInnovationSchema,
  likeInnovationSchema,
  bookmarkInnovationSchema,
  queryInnovationSchema,
} from '../validation/innovation.validation';

const router = Router();

// Optional authentication middleware for public endpoints
const optionalAuth = async (req: AuthRequest, _res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      if (token) {
        const decoded = verifyAccessToken(token);
        const user = await userRepository.findById(decoded.userId);
        if (user && user.isActive) {
          req.user = user;
        }
      }
    }
  } catch (_err) {
    // Ignore token errors for optional authentication
  }
  next();
};

// Public & Optional Auth Routes
router.get('/', optionalAuth, validate(queryInnovationSchema), innovationController.list);
router.get('/slug/:slug', optionalAuth, innovationController.getBySlug);
router.get('/:id', optionalAuth, innovationController.getById);

// Protected Routes
router.post('/', authenticate, validate(createInnovationSchema), innovationController.create);
router.patch('/:id', authenticate, validate(updateInnovationSchema), innovationController.update);
router.delete('/:id', authenticate, validate(deleteInnovationSchema), innovationController.delete);

router.post('/:id/publish', authenticate, validate(publishInnovationSchema), innovationController.publish);
router.patch('/:id/publish', authenticate, validate(publishInnovationSchema), innovationController.publish);

router.post('/:id/archive', authenticate, validate(archiveInnovationSchema), innovationController.archive);
router.patch('/:id/archive', authenticate, validate(archiveInnovationSchema), innovationController.archive);

router.post('/:id/verify', authenticate, validate(verifyInnovationSchema), innovationController.verify);
router.patch('/:id/verify', authenticate, validate(verifyInnovationSchema), innovationController.verify);

router.post('/:id/like', authenticate, validate(likeInnovationSchema), innovationController.like);
router.post('/:id/bookmark', authenticate, validate(bookmarkInnovationSchema), innovationController.bookmark);

export const innovationRoutes = router;
