import { Router } from 'express';
import { CommentController } from '../controller/comment.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';
import { validate } from '../../../shared/middlewares/validate';
import { createCommentSchema } from '../validation/comment.validation';

const router = Router();
const commentController = new CommentController();

// POST /api/v1/comments - Create a comment or reply
router.post('/', authenticate, validate(createCommentSchema), commentController.createComment);

// GET /api/v1/comments/innovation/:id - Retrieve comments for an innovation
router.get('/innovation/:id', commentController.getInnovationComments);

// DELETE /api/v1/comments/:id - Soft delete a comment
router.delete('/:id', authenticate, commentController.deleteComment);

export const commentsRoutes = router;
