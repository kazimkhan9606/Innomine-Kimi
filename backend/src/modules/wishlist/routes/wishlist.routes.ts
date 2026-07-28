import { Router } from 'express';
import { BookmarkController } from '../controller/bookmark.controller';
import { validate } from '../../../shared/middlewares/validate';
import { authenticate } from '../../../shared/middlewares/authenticate';
import {
  createBookmarkSchema,
  deleteBookmarkSchema,
  queryBookmarkSchema,
} from '../validation/bookmark.validation';

const router = Router();
const bookmarkController = new BookmarkController();

// All bookmark/wishlist endpoints require authentication
router.use(authenticate);

// POST /api/v1/bookmarks - Toggle bookmark
router.post(
  '/',
  validate(createBookmarkSchema),
  bookmarkController.toggleBookmark
);

// GET /api/v1/bookmarks - Get logged-in user's bookmarks
router.get(
  '/',
  validate(queryBookmarkSchema),
  bookmarkController.getUserBookmarks
);

// GET /api/v1/bookmarks/status/:innovationId - Check if bookmarked
router.get(
  '/status/:innovationId',
  validate(deleteBookmarkSchema),
  bookmarkController.checkBookmarkStatus
);

// POST /api/v1/bookmarks/:innovationId - Add bookmark explicitly
router.post(
  '/:innovationId',
  validate(deleteBookmarkSchema),
  bookmarkController.addBookmark
);

// DELETE /api/v1/bookmarks/:innovationId - Remove bookmark explicitly
router.delete(
  '/:innovationId',
  validate(deleteBookmarkSchema),
  bookmarkController.removeBookmark
);

export const wishlistRoutes = router;
export const bookmarkRoutes = router;
