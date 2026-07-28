/**
 * @openapi
 * tags:
 *   name: Innovators
 *   description: Innovator profile enhancement and portfolio management
 *
 * /api/v1/innovators/{id}/profile:
 *   get:
 *     summary: Get public innovator profile with stats and published innovations
 *     tags: [Innovators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Innovator profile retrieved successfully
 *       404:
 *         description: Innovator profile not found
 *
 * /api/v1/innovators/profile:
 *   patch:
 *     summary: Update innovator profile details (bio, website, social links)
 *     tags: [Innovators]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Innovator profile updated successfully
 *       401:
 *         description: Authentication required
 */
