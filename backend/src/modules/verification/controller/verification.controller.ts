import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { VerificationService } from '../service/verification.service';
import { successResponse } from '../../../shared/utils/response';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class VerificationController {
  private verificationService: VerificationService;

  constructor() {
    this.verificationService = new VerificationService();
  }

  public submitVerification = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;
      const request = await this.verificationService.submitRequest(userId, req.body);
      res
        .status(StatusCodes.CREATED)
        .json(successResponse(request, 'Verification request submitted successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getMyStatus = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;
      const status = await this.verificationService.getMyStatus(userId);
      res
        .status(StatusCodes.OK)
        .json(successResponse(status, 'Verification status retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public reviewVerification = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const adminId = req.user!.id;
      const { id } = req.params;
      const result = await this.verificationService.reviewVerification(
        id as string,
        adminId,
        req.body
      );
      res
        .status(StatusCodes.OK)
        .json(successResponse(result, 'Verification request reviewed successfully'));
    } catch (error) {
      next(error);
    }
  };
}
