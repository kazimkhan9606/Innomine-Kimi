import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AnalyticsService } from '../service/analytics.service';
import { successResponse } from '../../../shared/utils/response';

export class AnalyticsController {
  private analyticsService: AnalyticsService;

  constructor() {
    this.analyticsService = new AnalyticsService();
  }

  public getPlatformStats = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stats = await this.analyticsService.getPlatformStats();
      res
        .status(StatusCodes.OK)
        .json(successResponse(stats, 'Platform statistics retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getInnovationAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const stats = await this.analyticsService.getInnovationAnalytics(id as string);
      res
        .status(StatusCodes.OK)
        .json(successResponse(stats, 'Innovation analytics retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };
}
