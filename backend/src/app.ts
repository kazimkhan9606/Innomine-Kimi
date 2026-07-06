import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { corsOptions } from './config/cors';
import { apiRateLimiter } from './shared/middlewares/rate-limiter';
import { errorHandler } from './shared/middlewares/error-handler';
import { notFoundHandler } from './shared/middlewares/not-found';
import { apiRoutes } from './routes';

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors(corsOptions));
app.use(apiRateLimiter);

// Logging and Compression
app.use(morgan('dev'));
app.use(compression());

// Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use('/api/v1', apiRoutes);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export { app };
