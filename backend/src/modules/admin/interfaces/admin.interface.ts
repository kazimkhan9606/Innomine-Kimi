export interface IAdminUserFilter {
  role?: string;
  isActive?: boolean;
  search?: string;
}

export interface IAdminInnovationFilter {
  status?: string;
  visibility?: string;
  category?: string;
}

export interface IUpdateUserStatusDTO {
  isActive: boolean;
}

export interface IUpdateInnovationStatusDTO {
  status?: string;
  visibility?: string;
}
