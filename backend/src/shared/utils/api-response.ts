export const successResponse = <T>(data: T, message: string = 'Success') => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (message: string, errors?: any[]) => {
  return {
    success: false,
    message,
    errors: errors || [],
  };
};
