# Innomine Backend

The backend infrastructure for Innomine - a premium marketplace dedicated exclusively to innovative physical products.

## Technology Stack
- **Node.js** with **Express**
- **TypeScript**
- **MongoDB** (Mongoose)
- **Zod** (Validation)
- **Winston + Morgan** (Logging)
- **JWT** (Authentication)

## Project Architecture
The project follows a strict, domain-driven modular architecture designed to support a scalable, enterprise-grade premium marketplace.

- `src/config/`: Core configuration, MongoDB connection, and Zod environment validation.
- `src/modules/`: 18 isolated domain-driven feature modules (auth, users, products, etc.).
- `src/routes/`: Centralized route wiring.
- `src/shared/`: Shared infrastructure spanning constants, middlewares, types, and utils.

## Developer Setup Instructions

Follow these exact steps to run the backend locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
You MUST configure your environment variables before starting the server. The application uses "fail-fast" validation (via Zod) and will deliberately refuse to start if critical variables are missing.

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in the required variables.

**Required Variables:**
- `MONGODB_URI`: Your MongoDB connection string (e.g., MongoDB Atlas or local `mongodb://localhost:27017/innomine`).
- `JWT_ACCESS_SECRET`: A secure, random string for signing access tokens. (e.g., `openssl rand -base64 32`)
- `JWT_REFRESH_SECRET`: A secure, random string for signing refresh tokens.

*Note: All other variables (like Cloudinary, SMTP, Rate Limits) have fallback defaults or are marked as optional.*

### 3. Start the Server

**Development Mode (Nodemon):**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
npm start
```

### 4. Verify Installation
Once the server is running, verify it is healthy by checking the liveness probes:
- **Live Check**: `GET http://localhost:5000/api/v1/health/live`
- **Ready Check**: `GET http://localhost:5000/api/v1/health/ready`

Both endpoints should respond with `{"success": true, "message": "Server is alive/ready", ...}`.

## Common Startup Issues

- **`Invalid environment variables`**: The server will crash and output exact Zod error paths if `MONGODB_URI`, `JWT_ACCESS_SECRET`, or `JWT_REFRESH_SECRET` are missing or empty.
- **MongoDB Connection Retries**: If the database is unreachable, the backend will retry 5 times automatically before logging a failure. Ensure your MongoDB Atlas IP Access List includes your current IP address.

## Scripts
- `npm run dev`: Starts the server with Nodemon & TS-Node.
- `npm run build`: Compiles TypeScript to the `dist/` directory.
- `npm start`: Runs the compiled output in `dist/`.
- `npm run lint`: Runs ESLint against `src/`.
- `npm run type-check`: Verifies TypeScript typings without emitting files.
