/**
 * @openapi
 * tags:
 *   name: Categories
 *   description: Innovation Category System
 *
 * /api/v1/categories:
 *   get:
 *     summary: Retrieve all active categories with published innovation counts
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Categories retrieved successfully
 *   post:
 *     summary: Create a new category (ADMIN only)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Category created successfully
 *       401:
 *         description: Authentication required
 *       403:
 *         description: ADMIN role required
 *
 * /api/v1/categories/{slug}:
 *   get:
 *     summary: Retrieve category details and its published innovations
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category retrieved successfully
 *       404:
 *         description: Category not found
 */
