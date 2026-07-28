import { Document, Types } from 'mongoose';
import { IInnovation } from '../../innovation/interfaces/innovation.interface';
import { IUser } from '../../users/interfaces/user.interface';

export interface IBookmark extends Document {
  user: Types.ObjectId | IUser | string;
  innovation: Types.ObjectId | IInnovation | string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBookmarkQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
