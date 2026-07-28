import { AnalyticsRepository } from '../repository/analytics.repository';
import { IPlatformStats, IInnovationAnalytics } from '../interfaces/analytics.interface';
import { NotFoundError } from '../../../shared/errors';

export class AnalyticsService {
  private analyticsRepo: AnalyticsRepository;

  constructor() {
    this.analyticsRepo = new AnalyticsRepository();
  }

  public async getPlatformStats(): Promise<IPlatformStats> {
    return this.analyticsRepo.getPlatformStats();
  }

  public async getInnovationAnalytics(innovationId: string): Promise<IInnovationAnalytics> {
    const stats = await this.analyticsRepo.getInnovationAnalytics(innovationId);
    if (!stats) {
      throw new NotFoundError('Innovation not found');
    }
    return stats;
  }
}
