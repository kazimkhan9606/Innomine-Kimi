import { Document, Types } from 'mongoose';
import { IUser } from '../../users/interfaces/user.interface';

export enum InnovationStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  REJECTED = 'REJECTED',
  ARCHIVED = 'ARCHIVED',
}

export enum Visibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum PricingModel {
  FREE = 'FREE',
  PAID = 'PAID',
  LICENSE = 'LICENSE',
}

export enum Difficulty {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export interface IInnovation extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
  owner: Types.ObjectId | IUser | string;
  coverImage: string;
  galleryImages: string[];
  videoUrl?: string;
  attachments: string[];
  visibility: Visibility;
  status: InnovationStatus;
  pricingModel: PricingModel;
  price?: number;
  currency?: string;
  licenseType?: string;
  githubUrl?: string;
  websiteUrl?: string;
  documentationUrl?: string;
  technologyStack: string[];
  difficulty: Difficulty;
  estimatedDevelopmentTime?: string;
  likes: number;
  bookmarks: number;
  views: number;
  downloads: number;
  ratingAverage: number;
  ratingCount: number;
  commentsCount: number;
  featured: boolean;
  verified: boolean;
  isDeleted: boolean;
  publishedAt?: Date;
  likedBy?: Types.ObjectId[] | string[];
  bookmarkedBy?: Types.ObjectId[] | string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IInnovationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  q?: string;
  title?: string;
  description?: string;
  technology?: string;
  category?: string;
  subcategory?: string;
  status?: InnovationStatus;
  visibility?: Visibility;
  pricingModel?: PricingModel;
  difficulty?: Difficulty;
  featured?: boolean;
  verified?: boolean;
  owner?: string;
  tag?: string;
  minPrice?: number;
  maxPrice?: number;
  createdAfter?: string;
  createdBefore?: string;
  includeDeleted?: boolean;
}
