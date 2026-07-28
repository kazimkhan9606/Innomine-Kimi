import { Document, Types } from 'mongoose';

export interface IComment extends Document {
  innovation: Types.ObjectId;
  author: Types.ObjectId;
  content: string;
  parentComment?: Types.ObjectId;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateCommentDTO {
  innovationId: string;
  content: string;
  parentCommentId?: string;
}
