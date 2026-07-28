import { Router } from 'express';
import { ReviewController } from '../controller/review.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { validate } from '../../../shared/middlewares/validate';
import { createReviewSchema } from '../validation/review.validation';

const router = Router();
const reviewController = new ReviewController();

// POST /api/v1/reviews - Submit a review for an innovation
router.post('/', authenticate, validate(createReviewSchema), reviewController.createReview);

// GET /api/v1/reviews/innovation/:id - Get reviews for an innovation with average and distribution
router.get('/innovation/:id', reviewController.getInnovationReviews);

export const reviewsRoutes = router;
