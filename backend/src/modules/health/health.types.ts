export interface IHealthStatus {
  service: string;
  uptime: number;
  timestamp: string;
  environment: string;
  nodeVersion: string;
}

export interface IDatabaseHealthStatus {
  status: string;
  connectionState: number;
  database: string;
  host: string;
  latencyMs: number | null;
}

export interface IVersionStatus {
  applicationVersion: string;
  packageVersion: string;
  apiVersion: string;
  buildTimestamp: string;
  environment: string;
}
