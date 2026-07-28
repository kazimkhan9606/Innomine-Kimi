import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DashboardService } from '../service/dashboard.service';
import { successResponse } from '../../../shared/utils/response';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class DashboardController {
  private dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  public getSummary = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const innovatorId = req.user!.id;
      const summary = await this.dashboardService.getSummary(innovatorId);
      res
        .status(StatusCodes.OK)
        .json(successResponse(summary, 'Dashboard summary retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };
}
