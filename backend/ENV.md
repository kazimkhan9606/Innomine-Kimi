# Environment Variables Documentation

Copy `.env.example` to `.env` and fill in the values before starting the application.

## Core Setup
- `NODE_ENV`: Application environment (`development` | `production` | `test`). Defaults to `development`.
- `PORT`: HTTP Server port. Defaults to `5000`.
- `FRONTEND_URL`: URL of the Next.js frontend (used for CORS and emails).

## Database
- `MONGODB_URI`: MongoDB connection string. Required.

## Security & Authentication
- `JWT_ACCESS_SECRET`: Highly secure string for signing short-lived access tokens. Required.
- `JWT_REFRESH_SECRET`: Highly secure string for signing long-lived refresh tokens. Required.
- `JWT_ACCESS_EXPIRY`: Lifespan of access token (e.g., `15m`).
- `JWT_REFRESH_EXPIRY`: Lifespan of refresh token (e.g., `7d`).
- `CORS_ORIGIN`: Whitelisted CORS origin, typically matches `FRONTEND_URL`.

## Infrastructure Configuration
- `RATE_LIMIT_WINDOW_MS`: Timeframe for rate limiting in ms. Default `900000` (15m).
- `RATE_LIMIT_MAX`: Max requests per window. Default `100`.
- `UPLOAD_MAX_SIZE_MB`: Max file upload size. Default `5`.

## Integrations (Optional for now)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: For transactional emails.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: For media uploads.
