import { userRepository } from '../repository/user.repository';
import { NotFoundError } from '../../../shared/errors';

export class UserService {
  public async getPublicProfile(userId: string) {
    const user = await userRepository.findById(userId);
    if (!user || !user.isActive) {
      throw new NotFoundError('User profile not found');
    }
    return {
      _id: user._id,
      name: user.name,
      role: user.role,
      profileImage: user.profileImage,
      createdAt: user.createdAt,
    };
  }

  public async updateMyProfile(userId: string, payload: { name?: string; profileImage?: string }) {
    const updated = await userRepository.updateUser(userId, payload);
    if (!updated) {
      throw new NotFoundError('User not found');
    }
    return updated;
  }
}
