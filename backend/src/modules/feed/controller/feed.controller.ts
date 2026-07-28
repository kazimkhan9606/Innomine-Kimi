import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { FeedService } from '../service/feed.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class FeedController {
  private feedService: FeedService;

  constructor() {
    this.feedService = new FeedService();
  }

  public getHomepageFeed = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user?.id;
      const data = await this.feedService.getHomepageFeed(userId);
      res
        .status(StatusCodes.OK)
        .json(successResponse(data, 'Homepage feed retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getRecommendations = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user?.id;
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
      const result = await this.feedService.getRecommendations(userId, page, limit);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );
      res
        .status(StatusCodes.OK)
        .json(successResponse(paginatedPayload, 'Recommendations retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };
}
