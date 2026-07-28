import { Schema, model } from 'mongoose';
import { IVerificationRequest } from '../interfaces/verification.interface';

const verificationRequestSchema = new Schema<IVerificationRequest>(
  {
    innovator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    documentUrl: {
      type: String,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'REJECTED'],
      default: 'PENDING',
      index: true,
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    reviewedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const VerificationRequest = model<IVerificationRequest>(
  'VerificationRequest',
  verificationRequestSchema
);
