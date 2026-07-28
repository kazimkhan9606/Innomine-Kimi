/**
 * @openapi
 * tags:
 *   name: Verification
 *   description: Innovator Identity and Credibility Verification System
 *
 * /api/v1/verification:
 *   post:
 *     summary: Submit an innovator verification request
 *     tags: [Verification]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Verification request submitted successfully
 *       409:
 *         description: Verification request already pending
 *
 * /api/v1/verification/my-status:
 *   get:
 *     summary: Retrieve current user's verification status
 *     tags: [Verification]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verification status retrieved successfully
 *
 * /api/v1/verification/{id}/review:
 *   patch:
 *     summary: Admin review (approve or reject) a verification request
 *     tags: [Verification]
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
 *         description: Verification request reviewed successfully
 *       403:
 *         description: ADMIN permission required
 */
