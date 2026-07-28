import { VerificationRepository } from '../repository/verification.repository';
import {
  ICreateVerificationDTO,
  IReviewVerificationDTO,
} from '../interfaces/verification.interface';
import { ConflictError, NotFoundError } from '../../../shared/errors';

export class VerificationService {
  private verificationRepo: VerificationRepository;

  constructor() {
    this.verificationRepo = new VerificationRepository();
  }

  public async submitRequest(innovatorId: string, dto: ICreateVerificationDTO) {
    const existing = await this.verificationRepo.findByInnovator(innovatorId);
    if (existing && existing.status === 'PENDING') {
      throw new ConflictError('You already have a pending verification request');
    }

    return this.verificationRepo.create(innovatorId, dto);
  }

  public async getMyStatus(innovatorId: string) {
    const request = await this.verificationRepo.findByInnovator(innovatorId);
    if (!request) {
      return { status: 'NOT_SUBMITTED', request: null };
    }
    return { status: request.status, request };
  }

  public async reviewVerification(id: string, adminId: string, dto: IReviewVerificationDTO) {
    const updated = await this.verificationRepo.reviewRequest(id, adminId, dto);
    if (!updated) {
      throw new NotFoundError('Verification request not found');
    }
    return updated;
  }
}
