/**
 * @openapi
 * tags:
 *   name: Bookmarks
 *   description: Save, unsave, check status, and list bookmarked innovations
 *
 * /api/v1/bookmarks:
 *   get:
 *     summary: List bookmarked innovations for logged-in user
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
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
 *         description: Bookmarked innovations retrieved successfully
 *   post:
 *     summary: Toggle bookmark for an innovation
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - innovationId
 *             properties:
 *               innovationId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bookmark toggled successfully
 *
 * /api/v1/bookmarks/status/{innovationId}:
 *   get:
 *     summary: Check if an innovation is bookmarked by logged-in user
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: innovationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bookmark status checked successfully
 *
 * /api/v1/bookmarks/{innovationId}:
 *   post:
 *     summary: Add bookmark explicitly
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: innovationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Bookmark added successfully
 *       409:
 *         description: Innovation already bookmarked
 *   delete:
 *     summary: Remove bookmark explicitly
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: innovationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bookmark removed successfully
 */
