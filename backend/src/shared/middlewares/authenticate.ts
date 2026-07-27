import { Response, NextFunction } from 'express';
import { AuthenticationError } from '../errors';
import { verifyAccessToken } from '../utils/jwt';
import { userRepository } from '../../modules/users/repository/user.repository';
import { AuthRequest } from '../interfaces/auth-request.interface';

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AuthenticationError('Authentication required');
    }

    const token = authHeader.split(' ')[1];
    
    if (!token) {
      throw new AuthenticationError('Authentication token missing');
    }

    const decoded = verifyAccessToken(token);

    const user = await userRepository.findById(decoded.userId);

    if (!user) {
      throw new AuthenticationError('User no longer exists');
    }

    if (!user.isActive) {
      throw new AuthenticationError('User account is deactivated');
    }

    if (user.passwordChangedAt && decoded.iat) {
      const changedTimestamp = parseInt((user.passwordChangedAt.getTime() / 1000).toString(), 10);
      if (decoded.iat < changedTimestamp) {
        throw new AuthenticationError('Password recently changed. Please log in again.');
      }
    }

    req.user = user;
    next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return next(new AuthenticationError('Authentication token has expired'));
    }
    if (error.name === 'JsonWebTokenError') {
      return next(new AuthenticationError('Invalid authentication token'));
    }
    next(error);
  }
};
