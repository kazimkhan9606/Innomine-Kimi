import { Innovation } from '../../innovation/model/innovation.model';
import { ISearchQuery } from '../interfaces/search.interface';

export class SearchRepository {
  public async searchInnovations(query: ISearchQuery): Promise<{ items: any[]; total: number }> {
    const page = query.page || 1;
    const limit = query.limit || 12;
    const skip = (page - 1) * limit;

    const filter: Record<string, any> = {
      isDeleted: false,
      status: 'PUBLISHED',
      visibility: 'PUBLIC',
    };

    // Text keyword search
    const projection: Record<string, any> = {};
    if (query.q && query.q.trim()) {
      filter.$text = { $search: query.q.trim() };
      projection.score = { $meta: 'textScore' };
    }

    // Category filter
    if (query.category) {
      const categories = Array.isArray(query.category) ? query.category : [query.category];
      filter.category = { $in: categories };
    }

    // Tags filter
    if (query.tags) {
      const tags = Array.isArray(query.tags) ? query.tags : [query.tags];
      filter.tags = { $in: tags };
    }

    // Technology stack filter
    if (query.technologyStack) {
      const tech = Array.isArray(query.technologyStack) ? query.technologyStack : [query.technologyStack];
      filter.technologyStack = { $in: tech };
    }

    // Pricing model filter
    if (query.pricingModel) {
      const models = Array.isArray(query.pricingModel) ? query.pricingModel : [query.pricingModel];
      filter.pricingModel = { $in: models };
    }

    // Price range filter
    if (query.minPrice !== undefined || query.maxPrice !== undefined) {
      filter.price = {};
      if (query.minPrice !== undefined) filter.price.$gte = query.minPrice;
      if (query.maxPrice !== undefined) filter.price.$lte = query.maxPrice;
    }

    // Readiness level filter
    if (query.readinessLevel !== undefined) {
      filter.readinessLevel = query.readinessLevel;
    }

    // Minimum likes filter
    if (query.minLikes !== undefined) {
      filter.likes = { $gte: query.minLikes };
    }

    // Minimum views filter
    if (query.minViews !== undefined) {
      filter.views = { $gte: query.minViews };
    }

    // Owner filter
    if (query.owner) {
      filter.owner = query.owner;
    }

    // Sort order construction
    let sort: Record<string, any> = {};
    const sortOrderVal = query.sortOrder === 'asc' ? 1 : -1;

    if (query.sortBy === 'relevance') {
      if (query.q && query.q.trim()) {
        sort = { score: { $meta: 'textScore' } };
      } else {
        sort = { createdAt: -1 };
      }
    } else if (query.sortBy === 'trending') {
      sort = { views: -1, likes: -1, createdAt: -1 };
    } else if (query.sortBy) {
      sort = { [query.sortBy]: sortOrderVal };
    } else {
      sort = { createdAt: -1 };
    }

    const [total, items] = await Promise.all([
      Innovation.countDocuments(filter),
      Innovation.find(filter, projection)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .populate('owner', 'name profileImage role')
        .lean()
        .exec(),
    ]);

    return { items, total };
  }
}
