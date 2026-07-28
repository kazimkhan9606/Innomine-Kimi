import { CategoryRepository } from '../repository/category.repository';
import { ICreateCategoryDTO } from '../interfaces/category.interface';
import { ConflictError, NotFoundError } from '../../../shared/errors';

export class CategoryService {
  private categoryRepo: CategoryRepository;

  constructor() {
    this.categoryRepo = new CategoryRepository();
  }

  public async createCategory(dto: ICreateCategoryDTO) {
    const existing = await this.categoryRepo.findBySlug(dto.slug);
    if (existing) {
      throw new ConflictError('A category with this slug already exists');
    }
    return this.categoryRepo.create(dto);
  }

  public async getAllCategories() {
    return this.categoryRepo.getAllWithCounts();
  }

  public async getCategoryBySlug(slug: string, page: number = 1, limit: number = 10) {
    const { category, items, total } = await this.categoryRepo.getBySlugWithInnovations(
      slug,
      page,
      limit
    );
    if (!category) {
      throw new NotFoundError('Category not found');
    }
    return {
      category,
      innovations: {
        items,
        total,
        page,
        limit,
      },
    };
  }
}
