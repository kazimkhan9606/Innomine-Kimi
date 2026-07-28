import { DashboardRepository } from '../repository/dashboard.repository';
import { IDashboardSummary } from '../interfaces/dashboard.interface';

export class DashboardService {
  private dashboardRepo: DashboardRepository;

  constructor() {
    this.dashboardRepo = new DashboardRepository();
  }

  public async getSummary(innovatorId: string): Promise<IDashboardSummary> {
    return this.dashboardRepo.getSummary(innovatorId);
  }
}
