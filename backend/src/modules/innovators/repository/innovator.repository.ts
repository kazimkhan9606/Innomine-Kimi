import { User } from '../../users/model/user.model';
import { Innovation } from '../../innovation/model/innovation.model';
import { IInnovatorProfile, IUpdateInnovatorProfile } from '../interfaces/innovator.interface';

export class InnovatorRepository {
  public async getProfile(innovatorId: string): Promise<IInnovatorProfile | null> {
    const user = await User.findOne({ _id: innovatorId, isDeleted: false, isActive: true })
      .select('-password -refreshTokens -passwordResetToken -emailVerificationToken')
      .lean()
      .exec();

    if (!user) {
      return null;
    }

    const [innovations, statsAgg] = await Promise.all([
      Innovation.find({ owner: innovatorId, isDeleted: false, status: 'PUBLISHED', visibility: 'PUBLIC' })
        .sort({ createdAt: -1 })
        .limit(20)
        .lean()
        .exec(),
      Innovation.aggregate([
        { $match: { owner: innovatorId, isDeleted: false, status: 'PUBLISHED' } },
        {
          $group: {
            _id: null,
            totalViews: { $sum: '$views' },
            totalLikes: { $sum: '$likes' },
          },
        },
      ]),
    ]);

    const totalViews = statsAgg.length > 0 ? statsAgg[0].totalViews : 0;
    const totalLikes = statsAgg.length > 0 ? statsAgg[0].totalLikes : 0;

    return {
      _id: user._id.toString(),
      name: user.name,
      role: user.role,
      profileImage: user.profileImage,
      bio: (user as any).bio,
      companyName: (user as any).companyName,
      website: (user as any).website,
      expertise: (user as any).expertise || [],
      socialLinks: (user as any).socialLinks || {},
      stats: {
        totalInnovations: innovations.length,
        totalViews,
        totalLikes,
      },
      innovations,
    };
  }

  public async updateProfile(
    innovatorId: string,
    payload: IUpdateInnovatorProfile
  ): Promise<any | null> {
    const updated = await User.findOneAndUpdate(
      { _id: innovatorId, isDeleted: false, isActive: true },
      { $set: payload },
      { new: true }
    )
      .select('-password -refreshTokens -passwordResetToken -emailVerificationToken')
      .lean()
      .exec();

    return updated;
  }
}
