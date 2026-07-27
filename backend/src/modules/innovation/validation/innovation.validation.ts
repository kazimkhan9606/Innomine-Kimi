import { z } from 'zod';
import {
  InnovationStatus,
  Visibility,
  PricingModel,
  Difficulty,
} from '../interfaces/innovation.interface';
import { REGEX } from '../../../shared/constants';

const innovationBodySchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long').max(200),
  shortDescription: z.string().min(10, 'Short description must be at least 10 characters long').max(300),
  description: z.string().min(20, 'Description must be at least 20 characters long'),
  category: z.string().min(2, 'Category is required'),
  subcategory: z.string().min(2, 'Subcategory is required'),
  tags: z.array(z.string()).optional().default([]),
  coverImage: z.string().min(1, 'Cover image is required'),
  galleryImages: z.array(z.string()).optional().default([]),
  videoUrl: z.string().optional(),
  attachments: z.array(z.string()).optional().default([]),
  visibility: z.nativeEnum(Visibility).optional().default(Visibility.PUBLIC),
  status: z.nativeEnum(InnovationStatus).optional().default(InnovationStatus.DRAFT),
  pricingModel: z.nativeEnum(PricingModel).optional().default(PricingModel.FREE),
  price: z.number().min(0).optional().default(0),
  currency: z.string().optional().default('USD'),
  licenseType: z.string().optional(),
  githubUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  documentationUrl: z.string().optional(),
  technologyStack: z.array(z.string()).optional().default([]),
  difficulty: z.nativeEnum(Difficulty).optional().default(Difficulty.BEGINNER),
  estimatedDevelopmentTime: z.string().optional(),
  featured: z.boolean().optional().default(false),
  verified: z.boolean().optional().default(false),
});

export const createInnovationSchema = z.object({
  body: innovationBodySchema,
});

export const updateInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
  body: innovationBodySchema.partial(),
});

export const deleteInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
});

export const publishInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
});

export const archiveInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
});

export const verifyInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
});

export const likeInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
});

export const bookmarkInnovationSchema = z.object({
  params: z.object({
    id: z.string().regex(REGEX.OBJECT_ID, 'Invalid Innovation ID'),
  }),
});

export const queryInnovationSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional(),
    sortBy: z.string().optional(),
    sortOrder: z.enum(['asc', 'desc']).optional(),
    search: z.string().optional(),
    q: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    technology: z.string().optional(),
    category: z.string().optional(),
    subcategory: z.string().optional(),
    status: z.nativeEnum(InnovationStatus).optional(),
    visibility: z.nativeEnum(Visibility).optional(),
    pricingModel: z.nativeEnum(PricingModel).optional(),
    difficulty: z.nativeEnum(Difficulty).optional(),
    featured: z.enum(['true', 'false']).transform((val) => val === 'true').optional(),
    verified: z.enum(['true', 'false']).transform((val) => val === 'true').optional(),
    owner: z.string().regex(REGEX.OBJECT_ID).optional(),
    tag: z.string().optional(),
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
    createdAfter: z.string().optional(),
    createdBefore: z.string().optional(),
    includeDeleted: z.enum(['true', 'false']).transform((val) => val === 'true').optional(),
  }),
});
