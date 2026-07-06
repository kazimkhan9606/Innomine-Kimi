export interface HealthStatusResponse {
  status: string;
  timestamp: string;
  uptime: number;
  database: string;
  environment: string;
}
