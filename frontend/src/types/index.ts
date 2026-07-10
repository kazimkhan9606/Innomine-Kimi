export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  bio: string;
  followerCount: number;
  projectCount: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Specification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  creatorId: string;
  thumbnailUrl: string;
  galleryImages: string[];
  reviews: Review[];
  specifications: Specification[];
  createdAt: string;
}

export interface FeedPost {
  id: string;
  creatorId: string;
  productId?: string;
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}
