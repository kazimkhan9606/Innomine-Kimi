import { z } from 'zod';

export const createVerificationSchema = z.object({
  body: z.object({
    documentUrl: z.string().url().optional(),
    notes: z.string().max(500).optional(),
  }),
});

export const reviewVerificationSchema = z.object({
  body: z.object({
    status: z.enum(['APPROVED', 'REJECTED']),
    notes: z.string().max(500).optional(),
  }),
});
