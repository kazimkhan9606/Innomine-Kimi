import { Document, Types } from 'mongoose';

export interface IReview extends Document {
  innovation: Types.ObjectId;
  reviewer: Types.ObjectId;
  rating: number;
  title?: string;
  content: string;
  isVerifiedBuyer: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateReviewDTO {
  innovationId: string;
  rating: number;
  title?: string;
  content: string;
}

export interface IReviewSummary {
  averageRating: number;
  totalReviews: number;
  distribution: { rating: number; count: number }[];
  items: any[];
  total: number;
}
