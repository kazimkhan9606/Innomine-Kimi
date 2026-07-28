import { Router } from 'express';
import { FeedController } from '../controller/feed.controller';
import { optionalAuthenticate } from '../../../shared/middlewares/authenticate';
import { validate } from '../../../shared/middlewares/validate';
import { feedQuerySchema } from '../validation/feed.validation';

const router = Router();
const feedController = new FeedController();

// GET /api/v1/feed/home - Homepage feed with featured, trending, newest, and recommended sections
router.get('/home', optionalAuthenticate, feedController.getHomepageFeed);

// GET /api/v1/feed/recommendations - Personalized or popular recommendations
router.get('/recommendations', optionalAuthenticate, validate(feedQuerySchema), feedController.getRecommendations);

export const feedRoutes = router;
