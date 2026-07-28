import { Schema, model } from 'mongoose';
import { IReview } from '../interfaces/review.interface';

const reviewSchema = new Schema<IReview>(
  {
    innovation: {
      type: Schema.Types.ObjectId,
      ref: 'Innovation',
      required: true,
      index: true,
    },
    reviewer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    isVerifiedBuyer: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.index({ innovation: 1, reviewer: 1 }, { unique: true });

export const Review = model<IReview>('Review', reviewSchema);
