import mongoose from 'mongoose';
import { config } from '../../config';
import { IHealthStatus, IDatabaseHealthStatus, IVersionStatus } from './health.types';

export class HealthService {
  public static getHealth(): IHealthStatus {
    return {
      service: 'Innomine Backend',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: config.env,
      nodeVersion: process.version,
    };
  }

  public static async getDatabaseHealth(): Promise<IDatabaseHealthStatus> {
    const isConnected = mongoose.connection.readyState === 1;
    const start = Date.now();
    let latencyMs: number | null = null;

    try {
      if (isConnected && mongoose.connection.db) {
        await mongoose.connection.db.admin().ping();
        latencyMs = Date.now() - start;
      }
    } catch {
      latencyMs = null;
    }

    return {
      status: isConnected ? 'connected' : 'disconnected',
      connectionState: mongoose.connection.readyState,
      database: mongoose.connection.name || 'unknown',
      host: mongoose.connection.host || 'unknown',
      latencyMs,
    };
  }

  public static getVersion(): IVersionStatus {
    return {
      applicationVersion: '1.0.0',
      packageVersion: '1.0.0',
      apiVersion: 'v1',
      buildTimestamp: new Date().toISOString(),
      environment: config.env,
    };
  }
}
