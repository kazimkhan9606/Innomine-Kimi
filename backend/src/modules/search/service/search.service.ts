import { SearchRepository } from '../repository/search.repository';
import { ISearchQuery } from '../interfaces/search.interface';
import { Innovation } from '../../innovation/model/innovation.model';

export class SearchService {
  private searchRepo: SearchRepository;

  constructor() {
    this.searchRepo = new SearchRepository();
  }

  public async searchInnovations(query: ISearchQuery) {
    const page = query.page || 1;
    const limit = query.limit || 12;
    const { items, total } = await this.searchRepo.searchInnovations(query);

    return {
      items,
      total,
      page,
      limit,
    };
  }

  public async getFilterMetadata() {
    const filter = {
      isDeleted: false,
      status: 'PUBLISHED',
      visibility: 'PUBLIC',
    };

    const [categories, pricingModels, priceRange] = await Promise.all([
      Innovation.distinct('category', filter),
      Innovation.distinct('pricingModel', filter),
      Innovation.aggregate([
        { $match: filter },
        {
          $group: {
            _id: null,
            minPrice: { $min: '$price' },
            maxPrice: { $max: '$price' },
          },
        },
      ]),
    ]);

    const minPrice = priceRange.length > 0 ? priceRange[0].minPrice || 0 : 0;
    const maxPrice = priceRange.length > 0 ? priceRange[0].maxPrice || 0 : 0;

    return {
      categories: categories.sort(),
      pricingModels: pricingModels.sort(),
      priceRange: {
        min: minPrice,
        max: maxPrice,
      },
    };
  }
}
