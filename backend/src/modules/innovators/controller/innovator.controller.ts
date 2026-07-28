import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { InnovatorService } from '../service/innovator.service';
import { successResponse } from '../../../shared/utils/response';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class InnovatorController {
  private innovatorService: InnovatorService;

  constructor() {
    this.innovatorService = new InnovatorService();
  }

  public getProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const profile = await this.innovatorService.getProfile(id as string);
      res
        .status(StatusCodes.OK)
        .json(successResponse(profile, 'Innovator profile retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public updateProfile = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const innovatorId = req.user!.id;
      const updated = await this.innovatorService.updateProfile(innovatorId, req.body);
      res
        .status(StatusCodes.OK)
        .json(successResponse(updated, 'Innovator profile updated successfully'));
    } catch (error) {
      next(error);
    }
  };
}
