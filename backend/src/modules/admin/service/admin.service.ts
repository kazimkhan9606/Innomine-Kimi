import { AdminRepository } from '../repository/admin.repository';
import {
  IAdminUserFilter,
  IAdminInnovationFilter,
  IUpdateUserStatusDTO,
  IUpdateInnovationStatusDTO,
} from '../interfaces/admin.interface';
import { NotFoundError } from '../../../shared/errors';

export class AdminService {
  private adminRepo: AdminRepository;

  constructor() {
    this.adminRepo = new AdminRepository();
  }

  public async getUsers(filter: IAdminUserFilter, page: number = 1, limit: number = 20) {
    const { items, total } = await this.adminRepo.listUsers(filter, page, limit);
    return {
      items,
      total,
      page,
      limit,
    };
  }

  public async changeUserStatus(id: string, dto: IUpdateUserStatusDTO) {
    const updated = await this.adminRepo.updateUserStatus(id, dto);
    if (!updated) {
      throw new NotFoundError('User not found');
    }
    return updated;
  }

  public async getInnovations(
    filter: IAdminInnovationFilter,
    page: number = 1,
    limit: number = 20
  ) {
    const { items, total } = await this.adminRepo.listInnovations(filter, page, limit);
    return {
      items,
      total,
      page,
      limit,
    };
  }

  public async changeInnovationStatus(id: string, dto: IUpdateInnovationStatusDTO) {
    const updated = await this.adminRepo.updateInnovationStatus(id, dto);
    if (!updated) {
      throw new NotFoundError('Innovation not found');
    }
    return updated;
  }
}
