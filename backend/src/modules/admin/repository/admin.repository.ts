import { User } from '../../users/model/user.model';
import { Innovation } from '../../innovation/model/innovation.model';
import {
  IAdminUserFilter,
  IAdminInnovationFilter,
  IUpdateUserStatusDTO,
  IUpdateInnovationStatusDTO,
} from '../interfaces/admin.interface';

export class AdminRepository {
  public async listUsers(
    filter: IAdminUserFilter,
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: any[]; total: number }> {
    const query: any = {};
    if (filter.role) {
      query.role = filter.role;
    }
    if (typeof filter.isActive === 'boolean') {
      query.isActive = filter.isActive;
    }
    if (filter.search) {
      query.$or = [
        { name: { $regex: filter.search, $options: 'i' } },
        { email: { $regex: filter.search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      User.countDocuments(query),
      User.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('-password')
        .lean()
        .exec(),
    ]);

    return { items, total };
  }

  public async updateUserStatus(id: string, payload: IUpdateUserStatusDTO): Promise<any | null> {
    return User.findByIdAndUpdate(id, { isActive: payload.isActive }, { new: true })
      .select('-password')
      .lean()
      .exec();
  }

  public async listInnovations(
    filter: IAdminInnovationFilter,
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: any[]; total: number }> {
    const query: any = { isDeleted: false };
    if (filter.status) {
      query.status = filter.status;
    }
    if (filter.visibility) {
      query.visibility = filter.visibility;
    }
    if (filter.category) {
      query.category = filter.category;
    }

    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      Innovation.countDocuments(query),
      Innovation.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('owner', 'name email profileImage role')
        .lean()
        .exec(),
    ]);

    return { items, total };
  }

  public async updateInnovationStatus(
    id: string,
    payload: IUpdateInnovationStatusDTO
  ): Promise<any | null> {
    const update: any = {};
    if (payload.status) update.status = payload.status;
    if (payload.visibility) update.visibility = payload.visibility;

    return Innovation.findByIdAndUpdate(id, update, { new: true })
      .populate('owner', 'name email profileImage role')
      .lean()
      .exec();
  }
}
