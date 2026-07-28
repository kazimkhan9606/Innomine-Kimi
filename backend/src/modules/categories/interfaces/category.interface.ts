import { Document, Types } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  parentCategory?: Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateCategoryDTO {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  parentCategoryId?: string;
}
