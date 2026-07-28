import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SearchService } from '../service/search.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';
import { ISearchQuery } from '../interfaces/search.interface';

export class SearchController {
  private searchService: SearchService;

  constructor() {
    this.searchService = new SearchService();
  }

  public searchInnovations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query: ISearchQuery = req.query as unknown as ISearchQuery;
      const result = await this.searchService.searchInnovations(query);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );
      res
        .status(StatusCodes.OK)
        .json(successResponse(paginatedPayload, 'Search results retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getFilterMetadata = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const metadata = await this.searchService.getFilterMetadata();
      res
        .status(StatusCodes.OK)
        .json(successResponse(metadata, 'Filter metadata retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };
}
