import http from 'http';
import { app } from './app';
import { config } from './config';
import { connectDatabase } from './config/database';
import { logger } from './shared/utils/logger';
import { initializeSocket } from './socket';

const startServer = async () => {
  try {
    await connectDatabase();

    const httpServer = http.createServer(app);
    
    // Initialize Socket.IO
    initializeSocket(httpServer);

    httpServer.listen(config.port, () => {
      logger.info(
        `Server running | Environment: [${config.env}] | Port: [${config.port}] | Mongo: [${config.mongoUri.split('@').pop() || 'Connected'}]`
      );
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err: Error) => {
      logger.error(`Unhandled Rejection: ${err.message}\nStack: ${err.stack || '-'}`);
      httpServer.close(() => process.exit(1));
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (err: Error) => {
      logger.error(`Uncaught Exception: ${err.message}\nStack: ${err.stack || '-'}`);
      process.exit(1);
    });
  } catch (error) {
    logger.error(`Failed to start server: ${error instanceof Error ? error.stack : error}`);
    process.exit(1);
  }
};

startServer();
