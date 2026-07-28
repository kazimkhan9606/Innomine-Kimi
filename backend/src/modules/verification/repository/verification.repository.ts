import { VerificationRequest } from '../model/verification.model';
import {
  IVerificationRequest,
  ICreateVerificationDTO,
  IReviewVerificationDTO,
} from '../interfaces/verification.interface';

export class VerificationRepository {
  public async create(
    innovatorId: string,
    payload: ICreateVerificationDTO
  ): Promise<IVerificationRequest> {
    return VerificationRequest.create({
      innovator: innovatorId,
      documentUrl: payload.documentUrl,
      notes: payload.notes,
      status: 'PENDING',
    });
  }

  public async findByInnovator(innovatorId: string): Promise<IVerificationRequest | null> {
    return VerificationRequest.findOne({ innovator: innovatorId })
      .sort({ createdAt: -1 })
      .exec();
  }

  public async findById(id: string): Promise<IVerificationRequest | null> {
    return VerificationRequest.findById(id).exec();
  }

  public async getPendingRequests(
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: any[]; total: number }> {
    const filter = { status: 'PENDING' };
    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      VerificationRequest.countDocuments(filter),
      VerificationRequest.find(filter)
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit)
        .populate('innovator', 'name email profileImage role')
        .lean()
        .exec(),
    ]);

    return { items, total };
  }

  public async reviewRequest(
    id: string,
    adminId: string,
    payload: IReviewVerificationDTO
  ): Promise<IVerificationRequest | null> {
    return VerificationRequest.findByIdAndUpdate(
      id,
      {
        status: payload.status,
        notes: payload.notes,
        reviewedBy: adminId,
        reviewedAt: new Date(),
      },
      { new: true }
    ).exec();
  }
}
