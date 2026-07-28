/**
 * @openapi
 * tags:
 *   name: Analytics
 *   description: Platform-wide and innovation-specific statistics and analytics
 *
 * /api/v1/analytics/platform:
 *   get:
 *     summary: Retrieve platform-wide statistics (innovations, views, likes, bookmarks, category distribution)
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Platform statistics retrieved successfully
 *
 * /api/v1/analytics/innovations/{id}:
 *   get:
 *     summary: Retrieve analytics for a specific innovation
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Innovation analytics retrieved successfully
 */
