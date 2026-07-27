import { v2 as cloudinary } from 'cloudinary';
import { config } from '../../config';
import { UploadError } from '../errors';

if (config.cloudinary.cloudName && config.cloudinary.apiKey && config.cloudinary.apiSecret) {
  cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
  });
}

export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  folder: string = 'innomine/general',
  resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto'
): Promise<{ url: string; publicId: string }> => {
  return new Promise((resolve, reject) => {
    if (!config.cloudinary.cloudName) {
      return reject(new UploadError('Cloudinary is not configured'));
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: resourceType },
      (error, result) => {
        if (error || !result) {
          return reject(new UploadError(error?.message || 'Failed to upload to Cloudinary'));
        }
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
};

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    if (!config.cloudinary.cloudName) return;
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    // Log but do not fail the request if deletion fails
    console.error(`Failed to delete from Cloudinary: ${publicId}`, error);
  }
};
