export interface IInnovatorProfile {
  _id: string;
  name: string;
  email?: string;
  role: string;
  profileImage?: string;
  bio?: string;
  companyName?: string;
  website?: string;
  expertise?: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  stats: {
    totalInnovations: number;
    totalViews: number;
    totalLikes: number;
  };
  innovations: any[];
}

export interface IUpdateInnovatorProfile {
  bio?: string;
  companyName?: string;
  website?: string;
  expertise?: string[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
