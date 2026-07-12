export interface PaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const getPaginationData = (options: PaginationOptions, defaultLimit = 10) => {
  const page = Math.max(1, options.page || 1);
  const limit = Math.max(1, Math.min(100, options.limit || defaultLimit));
  const skip = (page - 1) * limit;

  const sort: Record<string, 1 | -1> = {};
  if (options.sortBy) {
    sort[options.sortBy] = options.sortOrder === 'desc' ? -1 : 1;
  } else {
    sort['createdAt'] = -1; // Default sorting
  }

  return { page, limit, skip, sort };
};

export const createPaginatedResponse = <T>(
  items: T[],
  total: number,
  page: number,
  limit: number
): PaginatedResult<T> => {
  return {
    items,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};
