/**
 * @openapi
 * tags:
 *   name: Reviews
 *   description: Innovation Reviews and Ratings system
 *
 * /api/v1/reviews:
 *   post:
 *     summary: Submit a review and rating (1-5) for an innovation
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Review submitted successfully
 *       409:
 *         description: Review already exists for this user and innovation
 *
 * /api/v1/reviews/innovation/{id}:
 *   get:
 *     summary: Get reviews for an innovation with average rating and rating distribution
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reviews retrieved successfully
 */
