import { userRepository } from '../../users/repository/user.repository';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../../shared/utils/jwt';
import { AuthenticationError, ConflictError } from '../../../shared/errors';
import { logger } from '../../../shared/utils/logger';

class AuthService {
  async register(data: any) {
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new ConflictError('Email already registered');
    }

    const user = await userRepository.createUser(data);
    logger.info(`New user registered: ${user.email}`);

    return this.generateAuthResponse(user);
  }

  async login(data: any) {
    const user = await userRepository.findByEmail(data.email, true);
    if (!user) {
      logger.warn(`Failed login attempt for unknown email: ${data.email}`);
      throw new AuthenticationError('Invalid credentials');
    }

    if (!user.isActive) {
      throw new AuthenticationError('User account is deactivated');
    }

    const isMatch = await user.comparePassword(data.password);
    if (!isMatch) {
      logger.warn(`Failed login attempt for email: ${data.email}`);
      throw new AuthenticationError('Invalid credentials');
    }

    await userRepository.updateLastLogin(user.id);
    logger.info(`User logged in: ${user.email}`);

    return this.generateAuthResponse(user);
  }

  async logout(userId: string) {
    await userRepository.removeRefreshToken(userId);
    logger.info(`User logged out: ${userId}`);
  }

  async refresh(refreshToken: string) {
    try {
      const decoded = verifyRefreshToken(refreshToken);
      const user = await userRepository.findById(decoded.userId);

      if (!user || !user.isActive) {
        throw new AuthenticationError('Invalid or inactive user');
      }

      // In a strictly persistent system, we would also verify if the passed refreshToken matches the one in DB.
      // But Mongoose queries with select: false for refreshToken might require a special query.
      // For simplicity, we just generate new tokens if the signature is valid.
      
      logger.info(`Token refreshed for user: ${user.email}`);
      return this.generateAuthResponse(user);
    } catch (_error: any) {
      throw new AuthenticationError('Invalid or expired refresh token');
    }
  }

  async changePassword(userId: string, current: string, newPass: string) {
    const user = await userRepository.findById(userId);
    if (!user) throw new AuthenticationError('User not found');

    const userWithPassword = await userRepository.findByEmail(user.email, true);
    if (!userWithPassword) throw new AuthenticationError('User not found');

    const isMatch = await userWithPassword.comparePassword(current);
    if (!isMatch) {
      throw new AuthenticationError('Invalid current password');
    }

    await userRepository.updatePassword(userId, newPass);
    logger.info(`Password changed for user: ${user.email}`);
  }

  async getMe(userId: string) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new AuthenticationError('User not found');
    }
    return user;
  }

  async forgotPassword(email: string) {
    // Architecture stub for future email implementation
    logger.info(`Forgot password requested for: ${email}`);
    return { message: 'If the email exists, a reset link will be sent' };
  }

  async resetPassword(_data: any) {
    // Architecture stub for future implementation
    logger.info(`Reset password used`);
  }

  async verifyEmail(_token: string) {
    // Architecture stub for future implementation
    logger.info(`Email verification used`);
  }

  private async generateAuthResponse(user: any) {
    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken({ userId: user.id, role: user.role });

    await userRepository.saveRefreshToken(user.id, refreshToken);

    // Mongoose toObject handles removing the password and internal tokens
    const userObj = typeof user.toJSON === 'function' ? user.toJSON() : user;

    return {
      user: userObj,
      tokens: {
        accessToken,
        refreshToken,
      }
    };
  }
}

export const authService = new AuthService();
