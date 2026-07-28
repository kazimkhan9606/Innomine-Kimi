import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CommentService } from '../service/comment.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class CommentController {
  private commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  public createComment = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const authorId = req.user!.id;
      const comment = await this.commentService.createComment(authorId, req.body);
      res
        .status(StatusCodes.CREATED)
        .json(successResponse(comment, 'Comment created successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getInnovationComments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;
      const result = await this.commentService.getInnovationComments(id as string, page, limit);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );
      res
        .status(StatusCodes.OK)
        .json(successResponse(paginatedPayload, 'Comments retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public deleteComment = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.id;
      const userRole = req.user!.role;
      await this.commentService.deleteComment(id as string, userId, userRole);
      res
        .status(StatusCodes.OK)
        .json(successResponse(null, 'Comment deleted successfully'));
    } catch (error) {
      next(error);
    }
  };
}
