# Innomine API Documentation

All routes are prefixed with `/api/v1`.
Interactive Swagger UI is available at `GET /api/docs`.

## Health Check
- `GET /health` : Liveness check
- `GET /health/application` : App resource usage (memory, cpu)
- `GET /health/database` : MongoDB connection status
- `GET /health/version` : API version and Node version

## Authentication
Requires JSON payloads. Standard Zod validation applies.
- `POST /auth/register` : Create a new `BUYER` or `INNOVATOR` account.
- `POST /auth/login` : Authenticate and receive `accessToken` and `refreshToken`.
- `POST /auth/refresh` : Exchange a valid `refreshToken` for a new token pair.
- `POST /auth/logout` : Invalidate token (Requires Bearer Token).
- `GET /auth/me` : Retrieve current authenticated user profile (Requires Bearer Token).
- `PATCH /auth/change-password` : Update password securely (Requires Bearer Token).

## Standard Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "errors": [],
  "timestamp": "2026-07-10T12:00:00.000Z"
}
```
