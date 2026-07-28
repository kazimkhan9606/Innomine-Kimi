import { InnovatorRepository } from '../repository/innovator.repository';
import { IInnovatorProfile, IUpdateInnovatorProfile } from '../interfaces/innovator.interface';
import { NotFoundError } from '../../../shared/errors';

export class InnovatorService {
  private innovatorRepo: InnovatorRepository;

  constructor() {
    this.innovatorRepo = new InnovatorRepository();
  }

  public async getProfile(innovatorId: string): Promise<IInnovatorProfile> {
    const profile = await this.innovatorRepo.getProfile(innovatorId);
    if (!profile) {
      throw new NotFoundError('Innovator profile not found');
    }
    return profile;
  }

  public async updateProfile(innovatorId: string, payload: IUpdateInnovatorProfile) {
    const updated = await this.innovatorRepo.updateProfile(innovatorId, payload);
    if (!updated) {
      throw new NotFoundError('Innovator profile not found');
    }
    return updated;
  }
}
