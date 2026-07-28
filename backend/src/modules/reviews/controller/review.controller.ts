import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ReviewService } from '../service/review.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class ReviewController {
  private reviewService: ReviewService;

  constructor() {
    this.reviewService = new ReviewService();
  }

  public createReview = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const reviewerId = req.user!.id;
      const review = await this.reviewService.createReview(reviewerId, req.body);
      res
        .status(StatusCodes.CREATED)
        .json(successResponse(review, 'Review submitted successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getInnovationReviews = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
      const result = await this.reviewService.getInnovationReviews(id as string, page, limit);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );
      res
        .status(StatusCodes.OK)
        .json(
          successResponse(
            {
              ...paginatedPayload,
              averageRating: result.averageRating,
              distribution: result.distribution,
            },
            'Reviews retrieved successfully'
          )
        );
    } catch (error) {
      next(error);
    }
  };
}
