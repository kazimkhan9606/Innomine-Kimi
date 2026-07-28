import { Document, Types } from 'mongoose';

export type VerificationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface IVerificationRequest extends Document {
  innovator: Types.ObjectId;
  documentUrl?: string;
  notes?: string;
  status: VerificationStatus;
  reviewedBy?: Types.ObjectId;
  reviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateVerificationDTO {
  documentUrl?: string;
  notes?: string;
}

export interface IReviewVerificationDTO {
  status: 'APPROVED' | 'REJECTED';
  notes?: string;
}
