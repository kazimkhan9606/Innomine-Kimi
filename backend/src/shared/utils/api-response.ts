export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T | null;
  meta?: any;
  errors?: any[];
  timestamp: string;
}

export const successResponse = <T>(
  data: T,
  message: string = 'Success',
  meta?: any
): ApiResponse<T> => {
  return {
    success: true,
    message,
    data,
    meta,
    timestamp: new Date().toISOString(),
  };
};

export const errorResponse = (
  message: string,
  errors?: any[]
): ApiResponse<null> => {
  return {
    success: false,
    message,
    data: null,
    errors: errors || [],
    timestamp: new Date().toISOString(),
  };
};
