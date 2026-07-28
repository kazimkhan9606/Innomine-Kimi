/**
 * @openapi
 * tags:
 *   name: Dashboard
 *   description: Innovator portfolio summary and engagement analytics dashboard
 *
 * /api/v1/dashboard/summary:
 *   get:
 *     summary: Get innovator portfolio summary metrics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard summary retrieved successfully
 *       401:
 *         description: Authentication required
 */
