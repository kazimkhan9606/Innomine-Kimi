/**
 * @openapi
 * tags:
 *   name: Health
 *   description: System health, database connection status, and API version information
 *
 * components:
 *   schemas:
 *     HealthStatus:
 *       type: object
 *       properties:
 *         service:
 *           type: string
 *           example: Innomine Backend
 *         uptime:
 *           type: number
 *           example: 124.5
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: 2026-07-28T12:00:00.000Z
 *         environment:
 *           type: string
 *           example: development
 *         nodeVersion:
 *           type: string
 *           example: v20.10.0
 *     DatabaseHealthStatus:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: connected
 *         connectionState:
 *           type: integer
 *           example: 1
 *         database:
 *           type: string
 *           example: innomine
 *         host:
 *           type: string
 *           example: cluster0.mongodb.net
 *         latencyMs:
 *           type: number
 *           nullable: true
 *           example: 5
 *     VersionStatus:
 *       type: object
 *       properties:
 *         applicationVersion:
 *           type: string
 *           example: 1.0.0
 *         packageVersion:
 *           type: string
 *           example: 1.0.0
 *         apiVersion:
 *           type: string
 *           example: v1
 *         buildTimestamp:
 *           type: string
 *           format: date-time
 *           example: 2026-07-28T12:00:00.000Z
 *         environment:
 *           type: string
 *           example: development
 *
 * /api/v1/health:
 *   get:
 *     summary: Get overall backend service health status
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Server is healthy
 *                 data:
 *                   $ref: '#/components/schemas/HealthStatus'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *
 * /api/v1/health/database:
 *   get:
 *     summary: Get MongoDB database connection health and latency
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Database is connected
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Database is connected
 *                 data:
 *                   $ref: '#/components/schemas/DatabaseHealthStatus'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       503:
 *         description: Database is disconnected
 *
 * /api/v1/version:
 *   get:
 *     summary: Get API and package version information
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Version info retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Version info retrieved
 *                 data:
 *                   $ref: '#/components/schemas/VersionStatus'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
