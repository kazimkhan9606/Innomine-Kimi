import dns from 'node:dns';

// Force Node.js to use Google DNS for MongoDB SRV lookups
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from 'mongoose';
import { config } from './index';
import { logger } from '../shared/utils/logger';

export const connectDatabase = async (): Promise<void> => {
  const retryCount = 5;
  let currentTry = 1;

  mongoose.connection.on('connected', () => {
    logger.info('MongoDB connected successfully');
  });

  mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`);
  });

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected');
  });

  // Graceful shutdown handling
  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    logger.info('MongoDB connection closed due to app termination');
    process.exit(0);
  });

  const connectWithRetry = async () => {
    try {
      await mongoose.connect(config.mongoUri, {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10,
        socketTimeoutMS: 45000,
      });

      logger.info(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
      logger.error(
        `Failed to connect to MongoDB. Try ${currentTry}/${retryCount}. Error: ${
          error instanceof Error ? error.message : String(error)
        }`
      );

      if (currentTry < retryCount) {
        currentTry += 1;
        logger.info('Retrying connection in 5 seconds...');
        setTimeout(connectWithRetry, 5000);
      } else {
        logger.error(
          `Server running without database connection after ${retryCount} retries.`
        );
      }
    }
  };

  await connectWithRetry();
};