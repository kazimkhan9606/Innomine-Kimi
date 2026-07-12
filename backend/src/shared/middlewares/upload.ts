import multer from 'multer';
import { UploadError } from '../utils/api-error';
import { config } from '../../config';

// Memory storage is preferred when uploading straight to Cloudinary
const storage = multer.memoryStorage();

const fileFilter = (
  req: any,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new UploadError('Invalid file type. Only JPEG, PNG, WEBP, and GIF are allowed.'));
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: config.upload.maxSize,
  },
  fileFilter,
});

export const uploadAvatar = upload.single('avatar');
export const uploadProductImage = upload.single('image');
export const uploadProductGallery = upload.array('gallery', 10);
