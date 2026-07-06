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
      logger.info(`Server running in ${config.env} mode on port ${config.port}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err: Error) => {
      logger.error(`Unhandled Rejection: ${err.message}`);
      httpServer.close(() => process.exit(1));
    });
  } catch (error) {
    logger.error(`Failed to start server: ${error}`);
    process.exit(1);
  }
};

startServer();
