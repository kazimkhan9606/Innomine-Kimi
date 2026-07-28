/**
 * @openapi
 * tags:
 *   name: Feed
 *   description: Homepage feed and personalized recommendation engine
 *
 * /api/v1/feed/home:
 *   get:
 *     summary: Get structured homepage feed (featured, trending, newest, recommended)
 *     tags: [Feed]
 *     responses:
 *       200:
 *         description: Homepage feed retrieved successfully
 *
 * /api/v1/feed/recommendations:
 *   get:
 *     summary: Get personalized or popular innovation recommendations
 *     tags: [Feed]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Recommendations retrieved successfully
 */
