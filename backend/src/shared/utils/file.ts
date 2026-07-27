import path from 'path';

/**
 * File utility helpers
 */

export const getExtension = (filename: string): string => {
  return path.extname(filename).toLowerCase();
};

export const isValidImageExtension = (filename: string): boolean => {
  const ext = getExtension(filename);
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
};

export const generateUniqueFilename = (originalName: string): string => {
  const ext = getExtension(originalName);
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  return `${timestamp}-${random}${ext}`;
};
