import { Request, Response, NextFunction } from 'express';
import { authService } from '../service/auth.service';
import { successResponse } from '../../../shared/utils/response';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.register(req.body);
      res.status(201).json(successResponse(data, 'Registration successful'));
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.login(req.body);
      res.status(200).json(successResponse(data, 'Login successful'));
    } catch (error) {
      next(error);
    }
  }

  async logout(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (req.user) {
        await authService.logout(req.user.id);
      }
      res.status(200).json(successResponse(null, 'Logout successful'));
    } catch (error) {
      next(error);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const data = await authService.refresh(refreshToken);
      res.status(200).json(successResponse(data, 'Token refreshed'));
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { currentPassword, newPassword } = req.body;
      await authService.changePassword(req.user!.id, currentPassword, newPassword);
      res.status(200).json(successResponse(null, 'Password updated successfully'));
    } catch (error) {
      next(error);
    }
  }

  async me(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const user = await authService.getMe(req.user!.id);
      res.status(200).json(successResponse(user, 'User profile retrieved'));
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.forgotPassword(req.body.email);
      res.status(200).json(successResponse(data, 'Forgot password processed'));
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.resetPassword(req.body);
      res.status(200).json(successResponse(data, 'Password reset successful'));
    } catch (error) {
      next(error);
    }
  }

  async verifyEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.verifyEmail(req.body.token);
      res.status(200).json(successResponse(data, 'Email verified'));
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
