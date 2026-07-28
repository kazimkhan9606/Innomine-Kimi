/**
 * @openapi
 * tags:
 *   name: Search
 *   description: Full-text search and advanced multi-field filtering for innovations
 *
 * /api/v1/search/metadata:
 *   get:
 *     summary: Get available filter metadata (categories, pricing models, price range)
 *     tags: [Search]
 *     responses:
 *       200:
 *         description: Filter metadata retrieved successfully
 *
 * /api/v1/search:
 *   get:
 *     summary: Search and filter innovations
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search keyword
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price filter
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price filter
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [relevance, createdAt, likes, views, price, trending]
 *           default: relevance
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 */
