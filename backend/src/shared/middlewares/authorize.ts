import { Response, NextFunction } from 'express';
import { AuthorizationError } from '../errors';
import { AuthRequest } from '../interfaces/auth-request.interface';

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new AuthorizationError('User not authenticated for this action'));
    }

    if (!roles.includes(req.user.role)) {
      return next(new AuthorizationError('You do not have permission to perform this action'));
    }

    next();
  };
};
