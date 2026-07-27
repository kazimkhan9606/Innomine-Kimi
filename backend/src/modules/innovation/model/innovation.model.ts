import mongoose, { Schema } from 'mongoose';
import {
  IInnovation,
  InnovationStatus,
  Visibility,
  PricingModel,
  Difficulty,
} from '../interfaces/innovation.interface';
import { generateSlug } from '../../../shared/utils/slug';

const InnovationSchema = new Schema<IInnovation>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    subcategory: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    galleryImages: {
      type: [String],
      default: [],
    },
    videoUrl: {
      type: String,
    },
    attachments: {
      type: [String],
      default: [],
    },
    visibility: {
      type: String,
      enum: Object.values(Visibility),
      default: Visibility.PUBLIC,
      index: true,
    },
    status: {
      type: String,
      enum: Object.values(InnovationStatus),
      default: InnovationStatus.DRAFT,
      index: true,
    },
    pricingModel: {
      type: String,
      enum: Object.values(PricingModel),
      default: PricingModel.FREE,
    },
    price: {
      type: Number,
      min: 0,
      default: 0,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    licenseType: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    documentationUrl: {
      type: String,
    },
    technologyStack: {
      type: [String],
      default: [],
    },
    difficulty: {
      type: String,
      enum: Object.values(Difficulty),
      default: Difficulty.BEGINNER,
    },
    estimatedDevelopmentTime: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    bookmarks: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    downloads: {
      type: Number,
      default: 0,
    },
    ratingAverage: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    ratingCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    commentsCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },
    publishedAt: {
      type: Date,
      index: true,
    },
    likedBy: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      select: false,
      default: [],
    },
    bookmarkedBy: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      select: false,
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (_doc, ret: Record<string, any>) {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Mongoose Indexes
InnovationSchema.index({ createdAt: -1 });
InnovationSchema.index(
  {
    title: 'text',
    description: 'text',
    tags: 'text',
    technologyStack: 'text',
  },
  {
    weights: {
      title: 10,
      tags: 5,
      technologyStack: 3,
      description: 1,
    },
    name: 'innovation_text_search_idx',
  }
);

// Automatic slug generation hook
InnovationSchema.pre('validate', async function (next) {
  if (this.isModified('title') || !this.slug) {
    const sourceText = this.title || 'innovation';
    const baseSlug = generateSlug(sourceText);
    let candidate = baseSlug;
    let counter = 1;

    const Model = mongoose.model<IInnovation>('Innovation');
    while (await Model.exists({ slug: candidate, _id: { $ne: this._id } })) {
      candidate = `${baseSlug}-${counter++}`;
    }

    this.slug = candidate;
  }
  next();
});

export const Innovation = mongoose.model<IInnovation>('Innovation', InnovationSchema);
