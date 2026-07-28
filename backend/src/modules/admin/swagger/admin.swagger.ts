/**
 * @openapi
 * tags:
 *   name: Admin
 *   description: Administration, Moderation and Platform Oversight
 *
 * /api/v1/admin/users:
 *   get:
 *     summary: Retrieve all platform users with filtering and pagination
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *       403:
 *         description: ADMIN permission required
 *
 * /api/v1/admin/users/{id}/status:
 *   patch:
 *     summary: Update a user's active status
 *     tags: [Admin]
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
 *         description: User status updated successfully
 *
 * /api/v1/admin/innovations:
 *   get:
 *     summary: Retrieve all innovations including drafts and unlisted
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Innovations retrieved successfully
 *
 * /api/v1/admin/innovations/{id}/status:
 *   patch:
 *     summary: Update an innovation's status or visibility
 *     tags: [Admin]
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
 *         description: Innovation status updated successfully
 */
