/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Authentication and authorization endpoints (Register, Login, Refresh, Logout, Profile, Password)
 *
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: Dr. Elena Vance
 *         email:
 *           type: string
 *           format: email
 *           example: elena.vance@innomine.com
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           example: StrongPassword123!
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: elena.vance@innomine.com
 *         password:
 *           type: string
 *           format: password
 *           example: StrongPassword123!
 *     RefreshTokenRequest:
 *       type: object
 *       required:
 *         - refreshToken
 *       properties:
 *         refreshToken:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6...
 *     ChangePasswordRequest:
 *       type: object
 *       required:
 *         - currentPassword
 *         - newPassword
 *       properties:
 *         currentPassword:
 *           type: string
 *           format: password
 *           example: OldPassword123!
 *         newPassword:
 *           type: string
 *           format: password
 *           minLength: 8
 *           example: NewStrongPassword456!
 *     AuthUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 66a0f3d9e01b2a0013f9c000
 *         name:
 *           type: string
 *           example: Dr. Elena Vance
 *         email:
 *           type: string
 *           example: elena.vance@innomine.com
 *         role:
 *           type: string
 *           example: INNOVATOR
 *     AuthResponseData:
 *       type: object
 *       properties:
 *         user:
 *           $ref: '#/components/schemas/AuthUser'
 *         accessToken:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6...
 *         refreshToken:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6...
 *
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: User registered successfully
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
 *                   example: User registered successfully
 *                 data:
 *                   $ref: '#/components/schemas/AuthResponseData'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Validation error or Email already in use
 *
 * /api/v1/auth/login:
 *   post:
 *     summary: Authenticate a user and receive JWT tokens
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login successful
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
 *                   example: Login successful
 *                 data:
 *                   $ref: '#/components/schemas/AuthResponseData'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Invalid credentials
 *
 * /api/v1/auth/refresh:
 *   post:
 *     summary: Refresh JWT access token using a valid refresh token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RefreshTokenRequest'
 *     responses:
 *       200:
 *         description: Token refreshed successfully
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
 *                   example: Token refreshed successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     accessToken:
 *                       type: string
 *                     refreshToken:
 *                       type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Invalid or expired refresh token
 *
 * /api/v1/auth/logout:
 *   post:
 *     summary: Log out current user and invalidate refresh token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
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
 *                   example: Logged out successfully
 *                 data:
 *                   type: object
 *                   nullable: true
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Unauthorized
 *
 * /api/v1/auth/me:
 *   get:
 *     summary: Get profile of the currently authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
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
 *                   example: Profile retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/AuthUser'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Unauthorized
 *
 * /api/v1/auth/change-password:
 *   patch:
 *     summary: Change password for currently authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePasswordRequest'
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Current password is incorrect
 *       401:
 *         description: Unauthorized
 */
