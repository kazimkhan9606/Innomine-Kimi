export interface IFeedQuery {
  page?: number;
  limit?: number;
  category?: string;
}

export interface IHomepageFeed {
  featured: any[];
  trending: any[];
  newest: any[];
  recommended: any[];
}
