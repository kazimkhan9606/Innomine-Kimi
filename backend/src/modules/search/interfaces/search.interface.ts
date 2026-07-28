export interface ISearchQuery {
  q?: string;
  category?: string | string[];
  tags?: string | string[];
  technologyStack?: string | string[];
  pricingModel?: string | string[];
  minPrice?: number;
  maxPrice?: number;
  readinessLevel?: number;
  minLikes?: number;
  minViews?: number;
  owner?: string;
  sortBy?: 'relevance' | 'createdAt' | 'likes' | 'views' | 'price' | 'trending';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface ISearchResultItem {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  pricingModel: string;
  price: number;
  coverImage?: string;
  tags: string[];
  technologyStack: string[];
  owner: any;
  likes: number;
  views: number;
  bookmarks: number;
  createdAt: Date;
  score?: number;
}
