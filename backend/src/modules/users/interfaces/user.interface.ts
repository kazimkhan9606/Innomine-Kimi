import { Document } from 'mongoose';

export type UserRole = 'BUYER' | 'INNOVATOR' | 'MODERATOR' | 'ADMIN';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // Optional because we don't return it by default
  role: UserRole;
  profileImage?: string;
  emailVerified: boolean;
  isActive: boolean;
  refreshToken?: string;
  lastLogin?: Date;
  passwordChangedAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  // Instance methods
  comparePassword(candidatePassword: string): Promise<boolean>;
}
