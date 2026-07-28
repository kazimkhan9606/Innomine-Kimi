import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../service/user.service';
import { successResponse } from '../../../shared/utils/response';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getPublicProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const profile = await this.userService.getPublicProfile(id as string);
      res
        .status(StatusCodes.OK)
        .json(successResponse(profile, 'User profile retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public updateMyProfile = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;
      const updated = await this.userService.updateMyProfile(userId, req.body);
      res
        .status(StatusCodes.OK)
        .json(successResponse(updated, 'User profile updated successfully'));
    } catch (error) {
      next(error);
    }
  };
}
