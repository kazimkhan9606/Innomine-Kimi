import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AdminService } from '../service/admin.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';

export class AdminController {
  private adminService: AdminService;

  constructor() {
    this.adminService = new AdminService();
  }

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;
      const filter = {
        role: req.query.role as string | undefined,
        isActive:
          req.query.isActive !== undefined ? req.query.isActive === 'true' : undefined,
        search: req.query.search as string | undefined,
      };

      const result = await this.adminService.getUsers(filter, page, limit);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );
      res
        .status(StatusCodes.OK)
        .json(successResponse(paginatedPayload, 'Users retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public updateUserStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updated = await this.adminService.changeUserStatus(id as string, req.body);
      res
        .status(StatusCodes.OK)
        .json(successResponse(updated, 'User status updated successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getInnovations = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;
      const filter = {
        status: req.query.status as string | undefined,
        visibility: req.query.visibility as string | undefined,
        category: req.query.category as string | undefined,
      };

      const result = await this.adminService.getInnovations(filter, page, limit);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );
      res
        .status(StatusCodes.OK)
        .json(successResponse(paginatedPayload, 'Innovations retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public updateInnovationStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updated = await this.adminService.changeInnovationStatus(id as string, req.body);
      res
        .status(StatusCodes.OK)
        .json(successResponse(updated, 'Innovation status updated successfully'));
    } catch (error) {
      next(error);
    }
  };
}
