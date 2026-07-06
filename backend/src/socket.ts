import { Server as SocketIOServer } from 'socket.io';
import { Server as HttpServer } from 'http';
import { corsOptions } from './config/cors';
import { logger } from './shared/utils/logger';

export const initializeSocket = (httpServer: HttpServer): SocketIOServer => {
  const io = new SocketIOServer(httpServer, {
    cors: corsOptions,
  });

  io.on('connection', (socket) => {
    logger.debug(`Socket connected: ${socket.id}`);

    socket.on('disconnect', () => {
      logger.debug(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};
