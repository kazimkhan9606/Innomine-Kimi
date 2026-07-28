export const ROLES = {
  BUYER: 'BUYER',
  INNOVATOR: 'INNOVATOR',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const API = {
  PREFIX: '/api/v1',
  DOCS: '/api/docs',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

export const JWT = {
  ISSUER: 'innomine-api',
  AUDIENCE: 'innomine-client',
} as const;

export const COOKIES = {
  REFRESH_TOKEN: 'refreshToken',
} as const;

export const HEADERS = {
  AUTHORIZATION: 'Authorization',
  REQUEST_ID: 'X-Request-ID',
  FORWARDED_FOR: 'X-Forwarded-For',
} as const;

export const LIMITS = {
  UPLOAD_MAX_SIZE_MB: 5,
  UPLOAD_MAX_SIZE_BYTES: 5 * 1024 * 1024,
  RATE_LIMIT_AUTH_MAX: 10,       // Strict limit for login/register
  RATE_LIMIT_API_MAX: 100,       // General API limit
  RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000, // 15 mins
} as const;

export const REGEX = {
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
  OBJECT_ID: /^[0-9a-fA-F]{24}$/,
} as const;

export const MESSAGES = {
  SUCCESS: 'Operation successful',
  CREATED: 'Resource created successfully',
  VALIDATION_ERROR: 'Validation failed',
  UNAUTHORIZED: 'Authentication required',
  FORBIDDEN: 'You do not have permission to perform this action',
  NOT_FOUND: 'Resource not found',
  INTERNAL_ERROR: 'An unexpected error occurred',
} as const;

export const DEFAULT_VALUES = {
  SORT_BY: 'createdAt',
  SORT_ORDER: 'desc',
  USER_ROLE: 'BUYER',
  INNOVATION_STATUS: 'DRAFT',
  VISIBILITY: 'PUBLIC',
  CURRENCY: 'USD',
} as const;

