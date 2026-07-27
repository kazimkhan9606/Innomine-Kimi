import { Response } from 'express';
import { MESSAGES } from '../constants';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T | null;
  errors: any[];
  timestamp: string;
}

export const successResponse = <T>(
  data: T,
  message: string = MESSAGES.SUCCESS
): ApiResponse<T> => {
  return {
    success: true,
    message,
    data,
    errors: [],
    timestamp: new Date().toISOString(),
  };
};

export const createdResponse = <T>(
  data: T,
  message: string = MESSAGES.CREATED
): ApiResponse<T> => {
  return {
    success: true,
    message,
    data,
    errors: [],
    timestamp: new Date().toISOString(),
  };
};

export const errorResponse = (
  message: string = MESSAGES.INTERNAL_ERROR,
  errors: any[] = []
): ApiResponse<null> => {
  return {
    success: false,
    message,
    data: null,
    errors,
    timestamp: new Date().toISOString(),
  };
};

export const paginationResponse = <T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
  message: string = MESSAGES.SUCCESS
) => {
  return {
    success: true,
    message,
    data: {
      items: data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      }
    },
    errors: [],
    timestamp: new Date().toISOString(),
  };
};

export const sendResponse = (res: Response, statusCode: number, payload: ApiResponse<any>) => {
  return res.status(statusCode).json(payload);
};
