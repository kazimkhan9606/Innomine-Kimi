/**
 * @openapi
 * tags:
 *   name: Comments
 *   description: Innovation Discussion and Q&A system
 *
 * /api/v1/comments:
 *   post:
 *     summary: Create a comment or reply on an innovation
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Comment created successfully
 *
 * /api/v1/comments/innovation/{id}:
 *   get:
 *     summary: Retrieve comments for an innovation
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 */
