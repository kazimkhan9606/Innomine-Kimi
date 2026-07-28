import { Router } from 'express';
import { CategoryController } from '../controller/category.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { authorize } from '../../../shared/middlewares/authorize';
import { validate } from '../../../shared/middlewares/validate';
import { createCategorySchema } from '../validation/category.validation';

const router = Router();
const categoryController = new CategoryController();

// GET /api/v1/categories - Get all categories with innovation counts
router.get('/', categoryController.getAllCategories);

// GET /api/v1/categories/:slug - Get category details and its innovations
router.get('/:slug', categoryController.getCategoryBySlug);

// POST /api/v1/categories - Create a new category (ADMIN only)
router.post(
  '/',
  authenticate,
  authorize('ADMIN'),
  validate(createCategorySchema),
  categoryController.createCategory
);

export const categoriesRoutes = router;
