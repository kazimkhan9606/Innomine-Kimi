# Innomine Backend 🚀

The premium innovation-focused e-commerce marketplace backend. Built with a strict layered architecture, TypeScript, and robust security principles.

## Architecture
- **Feature-First**: Organized into modules (e.g. `/auth`, `/users`).
- **Layered**: Controllers (HTTP parsing) -> Services (Business Logic) -> Repositories (Database Ops) -> Models.
- **Validations**: Zod schemas for all inbound traffic.
- **Errors**: Centralized custom error classes mapped to HTTP status codes.

## Requirements
- Node.js 18+
- MongoDB 6+

## Installation
```bash
npm install
```

## Running Locally
Ensure your `.env` is populated (see `ENV.md`).
```bash
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Testing & Quality
- **Unit & Integration Tests**: `npm run test`
- **Linting**: `npm run lint`
- **Type Checking**: `npm run type-check`

## API Documentation
Interactive Swagger documentation is available at `/api/docs` when the server is running.
For a static list of endpoints, see `API.md`.
