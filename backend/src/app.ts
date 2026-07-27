import express, { Request } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { corsOptions } from './config/cors';
import { apiRateLimiter } from './shared/middlewares/rate-limiter';
import { errorHandler } from './shared/middlewares/error-handler';
import { notFoundHandler } from './shared/middlewares/not-found';
import { requestIdMiddleware } from './shared/middlewares/request-id';
import { apiRoutes } from './routes';
import { logger } from './shared/utils/logger';

const app = express();

// Trust proxy for rate limiting behind load balancers
app.set('trust proxy', 1);
app.disable('x-powered-by');

// 1. Request ID Middleware
app.use(requestIdMiddleware);

// 2. Request Logging
morgan.token('id', (req: Request) => req.id || '-');
const morganFormat = process.env.NODE_ENV === 'production' 
  ? ':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms'
  : ':id :method :url :status :response-time ms - :res[content-length]';

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
}));

// 3. Security Middlewares
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
}));

// 4. Compression
app.use(compression());

// 5. Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 6. Rate Limiter
app.use(apiRateLimiter);

// 7. CORS
app.use(cors(corsOptions));

// Swagger Documentation
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 8. API Routes
import { healthRoutes } from './modules/health/routes/health.routes';
app.use('/api/v1/health', healthRoutes);
app.use('/api/v1', apiRoutes);

// 9. Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export { app };
