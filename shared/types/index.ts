export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: { path: string; message: string }[];
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
