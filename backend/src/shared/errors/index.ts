import { HTTP_STATUS } from '../constants';

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorCode: string;
  public readonly isOperational: boolean;
  public readonly errors: any[];

  constructor(
    statusCode: number,
    message: string,
    errorCode: string = 'APP_ERROR',
    errors: any[] = [],
    isOperational = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errors = errors;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, errors: any[] = []) {
    super(HTTP_STATUS.BAD_REQUEST, message, 'VALIDATION_ERROR', errors);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication failed') {
    super(HTTP_STATUS.UNAUTHORIZED, message, 'AUTHENTICATION_ERROR');
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Forbidden access') {
    super(HTTP_STATUS.FORBIDDEN, message, 'AUTHORIZATION_ERROR');
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(HTTP_STATUS.NOT_FOUND, message, 'NOT_FOUND_ERROR');
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Resource conflict') {
    super(HTTP_STATUS.CONFLICT, message, 'CONFLICT_ERROR');
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = 'Database operation failed') {
    super(HTTP_STATUS.INTERNAL_SERVER_ERROR, message, 'DATABASE_ERROR', [], false);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'Internal server error') {
    super(HTTP_STATUS.INTERNAL_SERVER_ERROR, message, 'INTERNAL_SERVER_ERROR', [], false);
  }
}

export class UploadError extends AppError {
  constructor(message: string = 'File upload failed') {
    super(HTTP_STATUS.BAD_REQUEST, message, 'UPLOAD_ERROR');
  }
}
