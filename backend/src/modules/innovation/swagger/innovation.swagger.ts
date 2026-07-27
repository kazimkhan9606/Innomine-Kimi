/**
 * @openapi
 * components:
 *   schemas:
 *     InnovationStatus:
 *       type: string
 *       enum: [DRAFT, PUBLISHED, UNDER_REVIEW, REJECTED, ARCHIVED]
 *     Visibility:
 *       type: string
 *       enum: [PUBLIC, PRIVATE]
 *     PricingModel:
 *       type: string
 *       enum: [FREE, PAID, LICENSE]
 *     Difficulty:
 *       type: string
 *       enum: [BEGINNER, INTERMEDIATE, ADVANCED]
 *     Innovation:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Virtual Unique Identifier
 *         title:
 *           type: string
 *         slug:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         subcategory:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         owner:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             name:
 *               type: string
 *             profileImage:
 *               type: string
 *             role:
 *               type: string
 *         coverImage:
 *           type: string
 *         galleryImages:
 *           type: array
 *           items:
 *             type: string
 *         videoUrl:
 *           type: string
 *         attachments:
 *           type: array
 *           items:
 *             type: string
 *         visibility:
 *           $ref: '#/components/schemas/Visibility'
 *         status:
 *           $ref: '#/components/schemas/InnovationStatus'
 *         pricingModel:
 *           $ref: '#/components/schemas/PricingModel'
 *         price:
 *           type: number
 *         currency:
 *           type: string
 *         licenseType:
 *           type: string
 *         githubUrl:
 *           type: string
 *         websiteUrl:
 *           type: string
 *         documentationUrl:
 *           type: string
 *         technologyStack:
 *           type: array
 *           items:
 *             type: string
 *         difficulty:
 *           $ref: '#/components/schemas/Difficulty'
 *         estimatedDevelopmentTime:
 *           type: string
 *         likes:
 *           type: integer
 *         bookmarks:
 *           type: integer
 *         views:
 *           type: integer
 *         downloads:
 *           type: integer
 *         ratingAverage:
 *           type: number
 *         ratingCount:
 *           type: integer
 *         commentsCount:
 *           type: integer
 *         featured:
 *           type: boolean
 *         verified:
 *           type: boolean
 *         isDeleted:
 *           type: boolean
 *         publishedAt:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 * /api/v1/innovations:
 *   get:
 *     summary: List and filter innovations
 *     tags: [Innovations]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10 }
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *       - in: query
 *         name: category
 *         schema: { type: string }
 *       - in: query
 *         name: status
 *         schema: { $ref: '#/components/schemas/InnovationStatus' }
 *       - in: query
 *         name: visibility
 *         schema: { $ref: '#/components/schemas/Visibility' }
 *       - in: query
 *         name: sortBy
 *         schema: { type: string, default: createdAt }
 *       - in: query
 *         name: sortOrder
 *         schema: { type: string, enum: [asc, desc], default: desc }
 *     responses:
 *       200:
 *         description: Successfully retrieved innovations list
 *   post:
 *     summary: Create a new innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, shortDescription, description, category, subcategory, coverImage]
 *             properties:
 *               title: { type: string }
 *               shortDescription: { type: string }
 *               description: { type: string }
 *               category: { type: string }
 *               subcategory: { type: string }
 *               coverImage: { type: string }
 *     responses:
 *       201:
 *         description: Innovation created successfully
 *
 * /api/v1/innovations/{id}:
 *   get:
 *     summary: Get innovation by ID
 *     tags: [Innovations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully retrieved innovation
 *   patch:
 *     summary: Update an innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully updated innovation
 *   delete:
 *     summary: Soft-delete an innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully deleted innovation
 *
 * /api/v1/innovations/slug/{slug}:
 *   get:
 *     summary: Get innovation by Slug
 *     tags: [Innovations]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully retrieved innovation
 *
 * /api/v1/innovations/{id}/publish:
 *   post:
 *     summary: Publish an innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully published innovation
 *
 * /api/v1/innovations/{id}/archive:
 *   post:
 *     summary: Archive an innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully archived innovation
 *
 * /api/v1/innovations/{id}/verify:
 *   post:
 *     summary: Verify an innovation (Admin/Moderator only)
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Successfully verified innovation
 *
 * /api/v1/innovations/{id}/like:
 *   post:
 *     summary: Toggle like on an innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Innovation like toggled successfully
 *
 * /api/v1/innovations/{id}/bookmark:
 *   post:
 *     summary: Toggle bookmark on an innovation
 *     tags: [Innovations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Innovation bookmark toggled successfully
 */

export {};
