import { User } from '../model/user.model';
import { IUser } from '../interfaces/user.interface';

class UserRepository {
  async findByEmail(
    email: string,
    includePassword = false
  ): Promise<IUser | null> {
    const query = User.findOne({ email: email.toLowerCase() });

    if (includePassword) {
      query.select('+password');
    }

    return query.exec();
  }

  async findById(id: string): Promise<IUser | null> {
    return User.findById(id).exec();
  }

  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData);
    return user.save();
  }

  async updateUser(
    id: string,
    updateData: Partial<IUser>
  ): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).exec();
  }

  async saveRefreshToken(id: string, token: string): Promise<void> {
    await User.findByIdAndUpdate(
      id,
      { refreshToken: token },
      { runValidators: true }
    ).exec();
  }

  async removeRefreshToken(id: string): Promise<void> {
    await User.findByIdAndUpdate(
      id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      { runValidators: true }
    ).exec();
  }

  /**
   * Update password safely.
   * Uses save() so the UserSchema pre('save') hook
   * automatically hashes the password.
   */
  async updatePassword(id: string, newPassword: string): Promise<void> {
    const user = await User.findById(id).select('+password');

    if (!user) {
      throw new Error('User not found');
    }

    user.password = newPassword;
    user.passwordChangedAt = new Date();

    await user.save();
  }

  async updateLastLogin(id: string): Promise<void> {
    await User.findByIdAndUpdate(
      id,
      {
        lastLogin: new Date(),
      },
      {
        runValidators: true,
      }
    ).exec();
  }
}

export const userRepository = new UserRepository();