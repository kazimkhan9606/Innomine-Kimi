export interface IPlatformStats {
  totalInnovations: number;
  totalPublishedInnovations: number;
  totalViews: number;
  totalLikes: number;
  totalBookmarks: number;
  categoryDistribution: { category: string; count: number }[];
  pricingDistribution: { pricingModel: string; count: number }[];
}

export interface IInnovationAnalytics {
  innovationId: string;
  views: number;
  likes: number;
  bookmarks: number;
  engagementRate: number;
}
