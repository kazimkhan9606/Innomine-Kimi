import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CategoryService } from '../service/category.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';

export class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  public createCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const category = await this.categoryService.createCategory(req.body);
      res
        .status(StatusCodes.CREATED)
        .json(successResponse(category, 'Category created successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getAllCategories = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const categories = await this.categoryService.getAllCategories();
      res
        .status(StatusCodes.OK)
        .json(successResponse(categories, 'Categories retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getCategoryBySlug = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { slug } = req.params;
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
      const result = await this.categoryService.getCategoryBySlug(slug as string, page, limit);
      const paginatedInnovations = createPaginatedResponse(
        result.innovations.items,
        result.innovations.total,
        result.innovations.page,
        result.innovations.limit
      );
      res
        .status(StatusCodes.OK)
        .json(
          successResponse(
            {
              category: result.category,
              innovations: paginatedInnovations,
            },
            'Category retrieved successfully'
          )
        );
    } catch (error) {
      next(error);
    }
  };
}
