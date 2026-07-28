import { Category } from '../model/category.model';
import { Innovation } from '../../innovation/model/innovation.model';
import { ICategory, ICreateCategoryDTO } from '../interfaces/category.interface';

export class CategoryRepository {
  public async create(payload: ICreateCategoryDTO): Promise<ICategory> {
    return Category.create({
      name: payload.name,
      slug: payload.slug,
      description: payload.description,
      icon: payload.icon,
      parentCategory: payload.parentCategoryId || null,
    });
  }

  public async findBySlug(slug: string): Promise<ICategory | null> {
    return Category.findOne({ slug, isActive: true }).lean().exec() as unknown as ICategory | null;
  }

  public async getAllWithCounts(): Promise<any[]> {
    const categories = await Category.find({ isActive: true }).sort({ name: 1 }).lean().exec();

    const counts = await Innovation.aggregate([
      { $match: { isDeleted: false, status: 'PUBLISHED', visibility: 'PUBLIC' } },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    const countMap: Record<string, number> = {};
    counts.forEach((item) => {
      if (item._id) {
        countMap[item._id.toString()] = item.count;
      }
    });

    return categories.map((cat) => ({
      ...cat,
      innovationCount: countMap[cat.name] || 0,
    }));
  }

  public async getBySlugWithInnovations(
    slug: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ category: ICategory | null; items: any[]; total: number }> {
    const category = await this.findBySlug(slug);
    if (!category) {
      return { category: null, items: [], total: 0 };
    }

    const filter = {
      category: category.name,
      isDeleted: false,
      status: 'PUBLISHED',
      visibility: 'PUBLIC',
    };

    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      Innovation.countDocuments(filter),
      Innovation.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('owner', 'name profileImage role')
        .lean()
        .exec(),
    ]);

    return { category, items, total };
  }
}
