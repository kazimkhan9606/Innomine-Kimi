export interface Innovator {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  isVerified: boolean;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  icon?: string;
  productCount: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  thumbnailUrl: string;
  innovator: Innovator;
  category: string;
  tags: string[];
  rating: number;
  reviewsCount: number;
  isAvailable: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
  company?: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavMenuItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
