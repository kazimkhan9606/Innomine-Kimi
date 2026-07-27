You are now starting STAGE 3A of the Innomine project.

IMPORTANT

Stage 2 is COMPLETE.

Do NOT redesign or modify any frontend UI unless it is absolutely required for backend integration.

The frontend, layouts, design system, animations, typography, colors, spacing, responsiveness, navigation, and user experience are LOCKED.

Do NOT refactor working frontend code.

Do NOT introduce breaking changes.

Maintain complete compatibility with every existing page.

====================================================

PRIMARY GOAL OF STAGE 3A

Build the complete backend foundation that will support the existing frontend.

No placeholder architecture.

No temporary implementations.

Everything should be scalable and production-ready.

====================================================

PROJECT VISION

Innomine is NOT another Amazon.

It is a premium marketplace exclusively for innovative physical products.

Core pillars:

• Innovation-first discovery
• Verified innovators
• Story-driven commerce
• Premium experience
• Creator economy
• Community
• Trust
• Scalability

Every backend decision must support these principles.

====================================================

STAGE 3A OBJECTIVES

Design and implement the complete backend architecture.

This includes:

• Folder structure
• API architecture
• Database architecture
• Authentication architecture
• Authorization
• Validation
• Error handling
• Logging
• File upload architecture
• Image handling
• Search architecture
• Caching
• Environment configuration
• Security
• Scalability

====================================================

DO NOT IMPLEMENT YET

Do NOT build:

Payment

Orders

Checkout

Messaging

Notifications

Analytics

Recommendation Engine

Admin Dashboard

These belong to later stages.

====================================================

IMPLEMENT NOW

Backend project structure

API routing

Database schema

Authentication foundation

Authorization middleware

User model

Innovator model

Product model

Category model

Feed model

Creator model

Wishlist model

Search architecture

Media architecture

Configuration management

Validation layer

Error handling layer

Repository/service architecture

====================================================

DATABASE

Design production-ready schemas.

Relationships should be normalized.

Support future scaling.

Avoid duplicated data.

====================================================

AUTHENTICATION

Design complete authentication flow.

Support:

User accounts

Innovator accounts

Role-based permissions

Session handling

Protected routes

Future OAuth support

Future email verification

Future password reset

====================================================

API

Design REST APIs with clean versioning.

Organize endpoints logically.

Use proper HTTP methods.

Use consistent response formats.

Include validation and error responses.

====================================================

SECURITY

Implement:

Input validation

Rate limiting architecture

Authentication middleware

Authorization middleware

Sanitization

Environment variables

Secure secrets handling

====================================================

SEARCH

Design backend search architecture that supports:

Products

Innovators

Categories

Future semantic search

Filtering

Sorting

Pagination

====================================================

MEDIA

Design image architecture for:

Product images

Creator avatars

Innovation feed media

Gallery images

Future video uploads

Storage abstraction

====================================================

CODE QUALITY

Use clean architecture.

Separate:

Routes

Controllers

Services

Repositories

Utilities

Schemas

Types

Constants

Config

Middleware

Avoid duplicated code.

====================================================

DOCUMENTATION

Create documentation describing:

Architecture

Folder structure

Database schema

API structure

Authentication flow

Backend decisions

====================================================

VALIDATION

At the end verify:

✓ Frontend still builds

✓ No UI changed

✓ No routes broken

✓ No TypeScript errors

✓ No lint errors

✓ Backend architecture is production-ready

====================================================

OUTPUT

Provide:

1. Backend folder structure
2. Database schema
3. API endpoint list
4. Authentication architecture
5. Security architecture
6. Files created
7. Files modified
8. Rationale for major architectural decisions

Do not proceed to Stage 3B. Complete only Stage 3A.

# STAGE 3A - CRITICAL STARTUP BUG FIX

The backend does NOT start.

This is NOT a feature request.

Do NOT modify the frontend.

Do NOT modify the architecture.

Do NOT redesign anything.

Only fix the backend startup issue.

========================================================

CURRENT ERROR

npm run dev crashes immediately with:

ReferenceError:

Cannot access 'config' before initialization

Stack Trace:

src/config/index.ts

↓

src/shared/utils/logger.ts

↓

config.ts

The backend never starts.

========================================================

OBJECTIVE

Identify the ROOT CAUSE.

This is almost certainly a circular dependency.

Audit the import graph.

Find every file involved.

Typical examples include:

config.ts

↓

logger.ts

↓

config.ts

or

config.ts

↓

database.ts

↓

logger.ts

↓

config.ts

or any indirect circular import.

========================================================

TASKS

1.

Inspect

src/config/index.ts

2.

Inspect

src/shared/utils/logger.ts

3.

Inspect

src/config/database.ts

4.

Inspect

server.ts

5.

Inspect

app.ts

6.

Generate the dependency graph.

Identify every circular import.

========================================================

REQUIREMENTS

Break every circular dependency.

Move shared configuration into isolated files if necessary.

Logger must NOT depend on config in a way that creates cycles.

Configuration must initialize before logger.

Database must initialize after configuration.

Express must initialize after configuration.

Server must initialize after Express.

The initialization order must be deterministic.

========================================================

DO NOT

Do NOT remove functionality.

Do NOT disable logging.

Do NOT simplify configuration.

Do NOT hardcode values.

Do NOT use dynamic require() as a workaround.

Do NOT suppress the error.

Fix the architecture correctly.

========================================================

VALIDATION

The following commands MUST succeed.

npm run dev

npm run build

npm run type-check

npm run lint

Backend must boot successfully.

Health endpoint must respond.

No runtime exceptions.

========================================================

FINAL REPORT

Provide:

1. Root cause.

2. Circular dependency diagram.

3. Files modified.

4. Why the crash occurred.

5. Why the fix is correct.

6. Proof that npm run dev starts successfully.

# STAGE 3A - FINAL BACKEND STABILIZATION (DO NOT IMPLEMENT NEW FEATURES)

You are NOT implementing Stage 3B.

You are NOT adding new backend features.

You are fixing and completing Stage 3A until the backend is fully runnable on a fresh clone.

========================================================
CURRENT STATUS
========================================================

The backend architecture has been created.

However, the project is NOT fully usable.

It must be possible for a developer to clone the repository, follow the documentation, and successfully start the backend.

The project must be self-consistent.

========================================================
CURRENT ISSUES
========================================================

Issue 1

The backend refuses to start because required environment variables are missing.

Current error:

Invalid environment variables

MONGODB_URI

JWT_ACCESS_SECRET

JWT_REFRESH_SECRET

received undefined

Issue 2

Stage 3A must include complete developer setup.

A new developer should never be blocked by missing configuration.

========================================================
OBJECTIVE
========================================================

Complete Stage 3A properly.

Do NOT add business features.

Do NOT modify frontend.

Do NOT redesign architecture.

Only make the backend foundation complete and runnable.

========================================================
TASKS
========================================================

1.

Audit every environment variable required by:

config/index.ts

database.ts

jwt.ts

cloudinary.ts

server.ts

app.ts

Any other configuration file.

========================================================

2.

Create a complete

.env.example

Include every required variable.

Examples include:

PORT=

NODE_ENV=

MONGODB_URI=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

ACCESS_TOKEN_EXPIRES_IN=

REFRESH_TOKEN_EXPIRES_IN=

FRONTEND_URL=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

UPLOAD_MAX_SIZE=

RATE_LIMIT_WINDOW_MS=

RATE_LIMIT_MAX_REQUESTS=

EMAIL_HOST=

EMAIL_PORT=

EMAIL_USER=

EMAIL_PASSWORD=

Do not include real secrets.

========================================================

3.

Create or update the README.

Include complete setup instructions.

A new developer must be able to:

clone

install

copy .env.example to .env

fill required values

run backend

without guessing anything.

========================================================

4.

Validate environment variables correctly.

Keep fail-fast validation.

Do NOT disable Zod.

Do NOT bypass validation.

Instead, ensure:

all required variables are documented

optional variables are marked optional

error messages clearly explain what is missing

========================================================

5.

Audit startup sequence.

The backend should initialize in this order:

environment validation

↓

logger

↓

database

↓

express app

↓

routes

↓

server

No circular imports.

No startup race conditions.

========================================================

6.

Verify startup.

Run:

npm install

npm run dev

npm run build

npm run type-check

npm run lint

The backend must start successfully once a valid .env file is present.

========================================================

7.

Health endpoints

Verify:

/api/v1/health/live

/api/v1/health/ready

respond correctly.

========================================================

8.

Documentation

Provide:

Required environment variables

Example values

Which variables are mandatory

Which variables are optional

Common startup issues

How to connect MongoDB Atlas

How to generate JWT secrets

========================================================

FINAL REPORT
========================================================

Do not simply say "fixed."

Provide:

1. Root cause of the startup failure.

2. Files modified.

3. .env.example created.

4. README updated.

5. Complete list of required environment variables.

6. Verification that:

npm run dev

npm run build

npm run type-check

npm run lint

all succeed with a correctly configured .env.

Do NOT proceed to Stage 3B.
Complete Stage 3A only.

# STAGE 3B — AUTHENTICATION & AUTHORIZATION SYSTEM (MASTER PROMPT)

You are continuing the development of the Innomine project.

IMPORTANT:
This is NOT a redesign.
This is NOT a refactor.
This is NOT an architecture review.

Continue from the EXISTING repository exactly as it currently exists.

The backend infrastructure (Stage 3A) has already been completed and verified.

DO NOT modify or break anything that is already working.

--------------------------------------------------
PROJECT CONTEXT
--------------------------------------------------

Project Name:
Innomine

Project Type:
Premium Innovation-Focused E-Commerce Marketplace

The implementation MUST strictly follow:

1. PRD v1
2. Design System v1
3. Technical Architecture v1
4. Architecture Decisions v1

Do NOT invent new architecture.
Do NOT simplify the project.
Do NOT replace existing implementations.

Always follow the documentation.

--------------------------------------------------
CURRENT STATUS
--------------------------------------------------

Stage 1
✓ Planning Complete

Stage 2
✓ Frontend Foundation Complete

Stage 3A
✓ Backend Infrastructure Complete

Verified Working:

✓ Express Server
✓ TypeScript
✓ MongoDB Atlas
✓ Mongoose
✓ Environment Configuration
✓ Logging
✓ Health APIs
✓ ESLint
✓ Type Checking
✓ Build
✓ Socket.IO Initialization
✓ Modular Backend Structure

MongoDB Atlas connection is working correctly.

Do NOT modify the database connection logic unless absolutely required.

--------------------------------------------------
OBJECTIVE
--------------------------------------------------

Implement the COMPLETE Authentication & Authorization module.

This module must become the security foundation of the entire platform.

Future modules including:

Products
Orders
Wishlist
Cart
Payments
Innovation Verification
Admin Dashboard
Reels
Analytics

will depend on this module.

Therefore the implementation must be production ready.

--------------------------------------------------
STRICT RULES
--------------------------------------------------

DO NOT:

• rewrite existing code
• change folder structure
• replace existing logger
• replace configuration
• modify server startup
• modify database connection
• modify health routes
• change naming conventions
• downgrade quality

Only ADD what is required.

--------------------------------------------------
ARCHITECTURE
--------------------------------------------------

Follow the existing layered architecture.

Client

↓

Routes

↓

Controller

↓

Service

↓

Repository

↓

Database

Business logic belongs ONLY inside services.

Database logic belongs ONLY inside repositories.

Controllers must remain thin.

--------------------------------------------------
MODULE STRUCTURE
--------------------------------------------------

Create or complete:

modules/auth

modules/users

following the architecture already defined.

Each module should contain:

controller

service

repository

model

routes

validation

types

--------------------------------------------------
USER MODEL
--------------------------------------------------

Create a production-ready User model.

Support:

Buyer

Innovator

Moderator

Administrator

Include:

name

email

password

role

profileImage

emailVerified

isActive

refreshToken

lastLogin

createdAt

updatedAt

passwordChangedAt

Use timestamps.

Password must NEVER be returned.

--------------------------------------------------
PASSWORD SECURITY
--------------------------------------------------

Use bcrypt.

Hash passwords before saving.

Never store plain passwords.

Implement:

comparePassword()

hashPassword()

--------------------------------------------------
AUTHENTICATION
--------------------------------------------------

Implement:

POST /api/v1/auth/register

POST /api/v1/auth/login

POST /api/v1/auth/logout

POST /api/v1/auth/refresh

GET /api/v1/auth/me

PATCH /api/v1/auth/change-password

Future placeholders:

verify-email

forgot-password

reset-password

Do not fully implement email sending yet.

Prepare clean architecture for it.

--------------------------------------------------
JWT
--------------------------------------------------

Use existing environment variables.

Generate:

Access Token

Refresh Token

Implement:

token generation

token verification

token refresh

token expiry

secure validation

--------------------------------------------------
AUTHORIZATION
--------------------------------------------------

Implement middleware:

authenticate

authorize

Support:

Guest

Buyer

Innovator

Moderator

Administrator

RBAC must be production ready.

--------------------------------------------------
VALIDATION
--------------------------------------------------

Use Zod.

Validate:

registration

login

password change

refresh token

Every request must be validated.

--------------------------------------------------
ERROR HANDLING
--------------------------------------------------

Use existing response structure.

Do not invent new formats.

Handle:

duplicate email

invalid credentials

missing token

expired token

invalid token

unauthorized

forbidden

validation failures

--------------------------------------------------
SECURITY
--------------------------------------------------

Implement:

password hashing

JWT validation

refresh token validation

protected routes

role middleware

secure logout

Do not reduce security.

--------------------------------------------------
DATABASE
--------------------------------------------------

Create repository methods only.

Examples:

findByEmail

findById

createUser

updateUser

saveRefreshToken

removeRefreshToken

updatePassword

No business logic inside repository.

--------------------------------------------------
SERVICE LAYER
--------------------------------------------------

Contains:

registration logic

login logic

logout logic

refresh logic

password update

current user

token generation

Business rules belong ONLY here.

--------------------------------------------------
CONTROLLER
--------------------------------------------------

Controllers should:

receive request

call service

return response

Nothing else.

--------------------------------------------------
API RESPONSE
--------------------------------------------------

Use the existing response format already used by the project.

Maintain consistency.

--------------------------------------------------
LOGGING
--------------------------------------------------

Continue using the existing logger.

Log:

registration

login

logout

failed login

password changes

authentication failures

Do not replace the logger.

--------------------------------------------------
MIDDLEWARE
--------------------------------------------------

Implement:

authenticate.ts

authorize.ts

optionalUser.ts (if required)

Use clean reusable middleware.

--------------------------------------------------
PROJECT QUALITY
--------------------------------------------------

Maintain:

TypeScript strict typing

ESLint compatibility

Build success

No type errors

No duplicate code

Reusable utilities

Production-level code

--------------------------------------------------
AFTER IMPLEMENTATION
--------------------------------------------------

Verify:

✓ npm run build

✓ npm run type-check

✓ npm run lint

No build errors.

No TypeScript errors.

Warnings only if absolutely unavoidable.

--------------------------------------------------
DELIVERABLE FORMAT
--------------------------------------------------

Work incrementally.

After completing each logical implementation:

1. Explain what was added.

2. List every file created.

3. List every file modified.

4. Explain why the implementation follows the PRD, Design System, Technical Architecture, and Architecture Decisions.

5. Stop and wait for confirmation before proceeding to the next logical block.

Never skip steps.

Never make hidden changes.

Never modify completed Stage 3A functionality.

This is Stage 3B only.

Focus exclusively on implementing a production-ready Authentication & Authorization system while preserving the existing architecture and codebase.

# INNOMINE — STAGE 3B MASTER PROMPT
## AUTHENTICATION & AUTHORIZATION (FULL IMPLEMENTATION)

You are continuing the existing Innomine repository.

THIS IS STAGE 3B.

DO NOT redesign.
DO NOT refactor.
DO NOT change the frontend.
DO NOT modify Stage 1.
DO NOT modify Stage 2.
DO NOT modify Stage 3A.

Everything that is already working MUST remain untouched.

The backend infrastructure, MongoDB Atlas connection, configuration, logger, Express server, Socket.IO initialization, environment configuration, health APIs and project architecture are already complete.

Your task is ONLY to implement the COMPLETE Authentication & Authorization system.

==================================================
PROJECT CONTEXT
==================================================

Project:
Innomine

Type:
Premium Innovation Marketplace

Follow STRICTLY:

• PRD v1
• Design System v1
• Technical Architecture v1
• Architecture Decisions v1

Do NOT invent architecture.

Follow the existing architecture already implemented.

==================================================
DO NOT CHANGE
==================================================

Never modify:

• config
• logger
• database connection
• health routes
• Express initialization
• Socket initialization
• middleware already working
• response helpers
• error handler
• folder structure
• coding standards
• naming conventions

Only ADD missing authentication functionality.

==================================================
GOAL
==================================================

Implement the COMPLETE authentication module.

No placeholders.

No TODOs.

No half implementations.

Everything must be production ready.

==================================================
USER MODEL
==================================================

Complete the existing User model.

Fields:

name

email

password

role

profileImage

emailVerified

isActive

refreshToken

lastLogin

passwordChangedAt

createdAt

updatedAt

Password must never be returned.

Refresh Token must never be returned.

Hash passwords automatically.

Implement comparePassword().

Implement proper timestamps.

Implement indexes.

==================================================
USER REPOSITORY
==================================================

Complete repository.

Must include:

findByEmail()

findById()

createUser()

updateUser()

updatePassword()

updateLastLogin()

saveRefreshToken()

removeRefreshToken()

No business logic inside repository.

==================================================
PASSWORD SECURITY
==================================================

Use bcrypt.

Never store plaintext password.

Hash password before save.

Never bypass pre-save hashing.

Password comparison must be reusable.

==================================================
JWT
==================================================

Use existing environment variables.

Generate:

Access Token

Refresh Token

Implement:

generateAccessToken()

generateRefreshToken()

verifyAccessToken()

verifyRefreshToken()

Support expiry.

Support invalid token detection.

Support expired token detection.

==================================================
VALIDATION
==================================================

Implement Zod validation.

Register

Login

Refresh

Logout

Change Password

Forgot Password

Reset Password

Verify Email

==================================================
AUTH SERVICE
==================================================

Implement ALL business logic.

Register

Login

Logout

Refresh Token

Change Password

Forgot Password

Reset Password

Verify Email

Get Current User

Update Last Login

Generate Tokens

Store Refresh Token

Remove Refresh Token

Check Duplicate Email

Validate Credentials

Sanitize Response

Never expose password.

==================================================
CONTROLLER
==================================================

Create thin controllers.

Controllers must ONLY:

Read request

Call service

Return response

No business logic.

==================================================
ROUTES
==================================================

Implement routes.

POST /api/v1/auth/register

POST /api/v1/auth/login

POST /api/v1/auth/logout

POST /api/v1/auth/refresh

POST /api/v1/auth/forgot-password

POST /api/v1/auth/reset-password

POST /api/v1/auth/verify-email

PATCH /api/v1/auth/change-password

GET /api/v1/auth/me

Wire routes into the existing router.

==================================================
AUTHENTICATION
==================================================

Implement authenticate middleware.

Read JWT.

Verify JWT.

Load current user.

Reject invalid users.

Reject inactive users.

Reject expired tokens.

==================================================
AUTHORIZATION
==================================================

Implement RBAC middleware.

Support:

BUYER

INNOVATOR

MODERATOR

ADMIN

Guest users remain unauthenticated.

==================================================
EMAIL
==================================================

Prepare architecture for email verification.

Prepare architecture for forgot password.

Prepare architecture for password reset.

Do NOT implement SMTP sending yet.

Keep service interfaces production ready.

==================================================
SECURITY
==================================================

Prevent duplicate emails.

Prevent invalid login.

Prevent unauthorized access.

Prevent forbidden access.

Prevent token replay.

Protect private routes.

Use secure JWT validation.

Use centralized error handling.

==================================================
LOGGING
==================================================

Use existing logger.

Log:

Register

Login

Logout

Password Change

Failed Login

Authentication Failure

Authorization Failure

Token Refresh

==================================================
API RESPONSES
==================================================

Continue using the existing response helper.

Do not create another response format.

==================================================
CODE QUALITY
==================================================

Strict TypeScript.

No "any".

No duplicated logic.

Reusable utilities.

Proper separation of concerns.

Follow:

Route

↓

Controller

↓

Service

↓

Repository

↓

Database

==================================================
FILES
==================================================

Create or complete every required file.

Do NOT leave placeholders.

Do NOT leave TODO comments.

Do NOT leave unfinished code.

==================================================
FINAL VERIFICATION
==================================================

Before finishing, automatically verify:

npm run build

npm run type-check

npm run lint

Fix every build error.

Fix every type error.

Fix every lint error that is introduced.

==================================================
FINAL OUTPUT
==================================================

When finished, provide:

1. Summary of everything implemented.

2. Complete list of newly created files.

3. Complete list of modified files.

4. API endpoints implemented.

5. Authentication flow.

6. Authorization flow.

7. Security features implemented.

8. Any assumptions made.

Do not stop midway.

Do not ask for confirmation.

Complete the ENTIRE Stage 3B in one execution while preserving all previous work.

# INNOMINE — STAGE 3C | MASTER PROMPT 1
## Backend Infrastructure, Configuration & Production Foundation

You are continuing the existing Innomine repository.

Stages 1A, 1B, 2A, 2B, 2C, 3A and 3B are COMPLETE and VERIFIED.

DO NOT redesign.
DO NOT rewrite existing code.
DO NOT modify any working frontend.
DO NOT break any existing APIs.
DO NOT modify authentication business logic.
DO NOT change folder naming.
DO NOT remove any existing feature.

Your responsibility is ONLY to complete the remaining backend infrastructure required before Marketplace and Product modules.

====================================================
PROJECT CONTEXT
====================================================

Project:
Innomine

Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT
- Zod
- Winston
- Morgan

Architecture

Feature First

Repository Pattern

Service Layer

Controller Layer

Shared Utilities

Clean Architecture

SOLID Principles

Strict TypeScript

====================================================
IMPORTANT RULES
====================================================

Preserve everything already implemented.

Existing Register/Login/JWT/Auth must continue working exactly as before.

Maintain backward compatibility.

Never introduce breaking changes.

Never create duplicate utilities.

Never duplicate business logic.

Never use "any".

Keep code reusable.

====================================================
OBJECTIVE
====================================================

Complete the backend infrastructure so the project becomes production-ready before implementing Marketplace modules.

This stage is ONLY infrastructure.

Do NOT implement:

- Products
- Categories
- Orders
- Cart
- Wishlist
- Marketplace
- Payments
- Cloudinary Uploads
- Feed
- Admin Panel

====================================================
TASK 1 — CONFIGURATION LAYER
====================================================

Complete and standardize:

src/config/

Create or improve:

- index.ts
- app.ts
- database.ts
- jwt.ts
- cors.ts
- logger.ts
- cloudinary.ts

Responsibilities:

database.ts
- retry strategy
- pool configuration
- timeout configuration

jwt.ts
- issuer
- audience
- expiry
- access token config
- refresh token config

cors.ts
- whitelist
- credentials
- production configuration
- development configuration

logger.ts
- winston initialization
- transports
- formatting

cloudinary.ts
- production-ready initialization

app.ts
- express configuration
- helmet
- compression
- trust proxy
- body parser
- security defaults

====================================================
TASK 2 — ENVIRONMENT VALIDATION
====================================================

Extend Zod validation.

Validate every environment variable.

Include:

NODE_ENV

PORT

MONGODB_URI

JWT_ACCESS_SECRET

JWT_REFRESH_SECRET

JWT_ACCESS_EXPIRY

JWT_REFRESH_EXPIRY

FRONTEND_URL

CORS_ORIGIN

SMTP_HOST

SMTP_PORT

SMTP_USER

SMTP_PASS

CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

RATE_LIMIT_WINDOW

RATE_LIMIT_MAX

UPLOAD_MAX_SIZE

Validation must fail immediately with meaningful messages.

====================================================
TASK 3 — GLOBAL CONSTANTS
====================================================

Create or improve:

shared/constants/

Move every hardcoded value into constants.

Include:

Roles

HTTP Status Codes

API Prefix

Pagination

JWT Constants

Cookie Names

Header Names

Regex

Validation Limits

Upload Limits

Response Messages

Error Messages

====================================================
TASK 4 — SHARED UTILITIES
====================================================

Improve shared/utils.

Include reusable helpers:

date

pagination

asyncHandler

crypto

response

token

string

object

file

logger

No duplicated logic.

====================================================
TASK 5 — STANDARD RESPONSE FORMAT
====================================================

Every API must return:

{
  success,
  message,
  data,
  errors,
  timestamp
}

Create reusable helpers:

successResponse()

createdResponse()

errorResponse()

paginationResponse()

Controllers must never manually build responses.

====================================================
TASK 6 — CUSTOM ERROR SYSTEM
====================================================

Create:

shared/errors/

Implement:

AppError

ValidationError

AuthenticationError

AuthorizationError

ConflictError

NotFoundError

DatabaseError

InternalServerError

Every error must contain:

statusCode

errorCode

message

====================================================
TASK 7 — GLOBAL ERROR HANDLER
====================================================

Improve global error middleware.

Handle:

Mongo Duplicate Key

Mongo Validation

JWT Errors

Cast Errors

Zod Errors

Validation Errors

Unknown Errors

Never expose stack trace in production.

Always log internally.

====================================================
TASK 8 — LOGGER
====================================================

Upgrade Winston.

Create:

logs/error.log

logs/combined.log

Integrate Morgan.

Every request must be logged.

Remove console.log from production code.

====================================================
TASK 9 — FOLDER CLEANUP
====================================================

Ensure backend follows:

src/

config/

modules/

shared/

constants/

errors/

middlewares/

types/

utils/

database/

Do not duplicate folders.

====================================================
TASK 10 — SHARED TYPES
====================================================

Create reusable types:

ApiResponse

Pagination

AuthenticatedRequest

JWTPayload

DatabasePagination

CommonDTOs

====================================================
TASK 11 — REPOSITORY CLEANUP
====================================================

Improve repositories.

No duplicated queries.

Consistent naming.

Strict typing.

Repository pattern only.

====================================================
TASK 12 — REMOVE MAGIC NUMBERS
====================================================

Replace hardcoded values such as:

5000

15m

7d

100

900000

with constants/configuration.

====================================================
TASK 13 — DOCUMENTATION
====================================================

Document:

Configuration

Utilities

Helpers

Exported functions

using TypeScript comments.

====================================================
TASK 14 — CODE QUALITY
====================================================

Maintain:

Strict TypeScript

SOLID Principles

Repository Pattern

Feature First Architecture

Reusable Components

No any

No duplicated logic

====================================================
DO NOT TOUCH
====================================================

Authentication logic

Register

Login

JWT implementation

Refresh Tokens

Password hashing

MongoDB schema

Database collections

Business logic

Frontend

API URLs

Existing routes

====================================================
FINAL VERIFICATION
====================================================

Before finishing automatically execute:

npm run build

npm run type-check

npm run lint

Fix every introduced issue.

Do not stop until all commands pass successfully.

====================================================
FINAL OUTPUT
====================================================

Provide:

1. Files Created

2. Files Modified

3. Architecture Improvements

4. Backward Compatibility Notes

5. Build Status

6. Type Check Status

7. Lint Status

8. Summary of completed infrastructure

Do NOT implement Products, Categories, Marketplace, Orders, Cart, Wishlist, Feed, Cloudinary Uploads, or Admin features in this prompt. Complete ONLY the backend production infrastructure while preserving every working feature from Stages 1A–3B.

# INNOMINE — STAGE 3C | MASTER PROMPT 2
## Backend Security, Middleware, Request Pipeline & Production Hardening

You are continuing the existing Innomine repository.

Stages 1A, 1B, 2A, 2B, 2C, 3A, 3B and Stage 3C Prompt 1 are COMPLETE.

DO NOT redesign anything.

DO NOT modify existing frontend.

DO NOT modify authentication business logic.

DO NOT change database schema.

DO NOT rename folders.

DO NOT change working APIs.

Everything already working must continue working exactly as before.

====================================================
OBJECTIVE
====================================================

Your objective is to harden the backend for production by implementing every remaining middleware, request pipeline improvement, security layer and application protection.

This prompt MUST NOT implement Products, Categories, Marketplace or Payments.

====================================================
TASK 1 — APPLICATION SECURITY
====================================================

Review and strengthen backend security.

Ensure the following middleware are correctly configured:

Helmet

Compression

Express JSON

Express URL Encoding

Trust Proxy

Request Size Limits

Security Headers

Disable x-powered-by

Hide unnecessary headers

Prevent stack traces in production.

====================================================
TASK 2 — CORS
====================================================

Implement production-ready CORS.

Support:

Development

Production

Environment-based whitelist

Credential support

Allowed Methods

Allowed Headers

Reject unknown origins gracefully.

No wildcard (*) in production.

====================================================
TASK 3 — RATE LIMITING
====================================================

Implement global rate limiting.

Create separate rate limiters for:

Authentication

General APIs

Upload APIs

Health APIs

Support configurable values through environment variables.

Return meaningful rate limit responses.

====================================================
TASK 4 — REQUEST VALIDATION
====================================================

Improve validation middleware.

Requirements:

Reusable

Strong typing

Centralized

Zod support

Validation for:

Body

Query

Params

Headers

File Uploads

Return consistent validation errors.

====================================================
TASK 5 — REQUEST PIPELINE
====================================================

Improve Express request lifecycle.

Pipeline order should be:

Request Logging

Helmet

Compression

Body Parsing

Rate Limiter

CORS

Validation

Authentication

Authorization

Controllers

Error Handler

Verify middleware ordering.

====================================================
TASK 6 — AUTHENTICATION MIDDLEWARE
====================================================

Improve existing authentication middleware WITHOUT changing business logic.

Support:

Expired Tokens

Malformed Tokens

Invalid Tokens

Missing Tokens

Inactive Users

Deleted Users

Password Changed After Login

Populate authenticated user cleanly.

Strong typing for request.user.

====================================================
TASK 7 — AUTHORIZATION MIDDLEWARE
====================================================

Improve role-based authorization.

Support:

BUYER

INNOVATOR

MODERATOR

ADMIN

Allow multiple roles.

Return proper 403 responses.

Reusable middleware.

====================================================
TASK 8 — REQUEST LOGGING
====================================================

Improve request logging.

Log:

Method

Route

Status Code

Duration

IP Address

Authenticated User (if available)

Request ID

Do not log passwords or tokens.

====================================================
TASK 9 — REQUEST ID
====================================================

Generate unique Request IDs.

Attach Request ID to:

Every request

Every log

Every error response

Every success response

====================================================
TASK 10 — ERROR LOGGING
====================================================

Every error must log:

Timestamp

Request ID

Method

URL

Status Code

Stack Trace (development)

Minimal information (production)

====================================================
TASK 11 — SECURITY HEADERS
====================================================

Enable:

Content Security Policy

Referrer Policy

Frame Guard

HSTS

XSS Protection

NoSniff

Cross-Origin Policies

Configure safely.

====================================================
TASK 12 — COOKIE CONFIGURATION
====================================================

Prepare production-ready cookie configuration.

Support:

httpOnly

secure

sameSite

expiry

domain

path

Environment-aware configuration.

====================================================
TASK 13 — FILE UPLOAD SECURITY
====================================================

Prepare upload middleware.

Support:

Maximum Size

Allowed MIME Types

Allowed Extensions

Image Validation

Filename Sanitization

Reject malicious uploads.

Do NOT implement Cloudinary upload yet.

====================================================
TASK 14 — INPUT SANITIZATION
====================================================

Protect against:

NoSQL Injection

XSS

Prototype Pollution

Unexpected Object Injection

Trim strings

Normalize emails

Normalize URLs

====================================================
TASK 15 — PERFORMANCE
====================================================

Improve:

Compression

Connection Reuse

Efficient Middleware Ordering

Reusable Instances

Avoid duplicate object creation.

====================================================
TASK 16 — MIDDLEWARE CLEANUP
====================================================

Move every middleware into:

shared/middlewares/

No duplicated middleware.

Proper naming.

Reusable implementation.

====================================================
TASK 17 — TYPES
====================================================

Improve shared typing.

Include:

AuthenticatedRequest

RequestUser

ErrorResponse

ValidationErrorResponse

RequestContext

RequestID

Middleware Types

====================================================
TASK 18 — SECURITY CONSTANTS
====================================================

Move security-related values into constants.

Include:

Header Names

Cookie Names

Rate Limits

Token Prefixes

Authorization Header

Content Types

====================================================
TASK 19 — DO NOT TOUCH
====================================================

Do NOT modify:

Authentication service logic

Register

Login

Refresh

User Repository

JWT Generation

MongoDB Collections

Controllers

Frontend

Business Logic

Existing API contracts

====================================================
TASK 20 — FINAL VERIFICATION
====================================================

Before finishing automatically execute:

npm run build

npm run type-check

npm run lint

Fix every introduced issue.

Backend must start successfully using:

npm run dev

Verify existing authentication still works.

====================================================
FINAL OUTPUT
====================================================

Provide:

1. Files Created

2. Files Modified

3. Security Improvements

4. Middleware Added

5. Performance Improvements

6. Request Pipeline Summary

7. Build Status

8. Type Check Status

9. Lint Status

10. Runtime Verification

Do NOT implement Products, Categories, Marketplace, Orders, Payments, Feed, Cloudinary Uploads or Admin modules. Complete ONLY backend security, middleware, request lifecycle and production hardening while preserving every working feature from previous stages.

# INNOMINE — STAGE 3C | MASTER PROMPT 3
## Backend Developer Experience, API Documentation, Testing & Production Readiness

You are continuing the existing Innomine repository.

Stages 1A, 1B, 2A, 2B, 2C, 3A, 3B, Stage 3C Prompt 1 and Stage 3C Prompt 2 are COMPLETE.

DO NOT redesign anything.

DO NOT modify working APIs.

DO NOT modify authentication business logic.

DO NOT modify frontend.

DO NOT modify MongoDB schema.

Everything already working must continue working exactly as before.

====================================================
OBJECTIVE
====================================================

Complete the remaining backend developer infrastructure so that the backend becomes production-ready, maintainable, testable and properly documented.

This stage is NOT Marketplace.

This stage is NOT Product Module.

This stage is NOT Categories.

This stage is NOT Orders.

This stage is ONLY backend tooling and developer infrastructure.

====================================================
TASK 1 — SWAGGER / OPENAPI
====================================================

Implement complete Swagger documentation.

Create production-ready API documentation.

Expose documentation at:

/api/docs

Requirements:

OpenAPI 3.1

Swagger UI

Auto-generated documentation

Proper grouping of endpoints

Authentication support

JWT Bearer authentication

Environment support

Version support

Every Auth endpoint must be documented.

Include:

Register

Login

Logout

Refresh

Forgot Password

Reset Password

Verify Email

Current User

Change Password

Every request body

Every response body

Every error response

Security schemes

Tags

Schemas

Examples

====================================================
TASK 2 — HEALTH APIs
====================================================

Implement production health endpoints.

Create:

GET /health

GET /health/database

GET /health/application

GET /version

Health response should include:

Application

Environment

Database Status

Node Version

API Version

Server Time

Uptime

Memory Usage

====================================================
TASK 3 — API VERSIONING
====================================================

Implement API versioning.

Current version:

v1

Prepare architecture for:

v2

Future versions should not require code duplication.

====================================================
TASK 4 — TESTING SETUP
====================================================

Configure:

Jest

Supertest

Testing environment

Testing configuration

Coverage configuration

Mock utilities

Database testing support

====================================================
TASK 5 — UNIT TESTS
====================================================

Create unit tests for:

Authentication Service

JWT Utility

Password Utility

Validation Helpers

Response Helpers

Middleware

Repository

Health APIs

====================================================
TASK 6 — INTEGRATION TESTS
====================================================

Create integration tests for:

Register

Login

Logout

Refresh

Current User

Change Password

Authentication Middleware

Authorization Middleware

Health APIs

====================================================
TASK 7 — MOCK UTILITIES
====================================================

Create reusable testing helpers.

Support:

Mock User

Mock JWT

Mock Request

Mock Response

Mock Next

Mock Database

Test Factory Helpers

====================================================
TASK 8 — POSTMAN COLLECTION
====================================================

Generate production-ready Postman Collection.

Include every API.

Include:

Environment Variables

Authentication Flow

JWT Tokens

Example Requests

Example Responses

Error Responses

====================================================
TASK 9 — THUNDER CLIENT COLLECTION
====================================================

Generate Thunder Client collection.

Ready for frontend development.

Every endpoint included.

====================================================
TASK 10 — README
====================================================

Rewrite backend README professionally.

Include:

Project Overview

Folder Structure

Installation

Environment Variables

Running Locally

Production Build

Testing

Linting

Type Checking

API Documentation

Authentication Flow

Architecture

====================================================
TASK 11 — API DOCUMENTATION
====================================================

Create:

API.md

Include:

Every Endpoint

Headers

Authentication

Parameters

Request Body

Response Body

Error Codes

Examples

====================================================
TASK 12 — ENVIRONMENT DOCUMENTATION
====================================================

Create:

ENV.md

Explain every environment variable.

Include:

Required

Optional

Default Values

Development Values

Production Values

====================================================
TASK 13 — PROJECT STRUCTURE VALIDATION
====================================================

Verify entire backend architecture.

Ensure every module follows:

Controller

Service

Repository

Model

Routes

Validation

Interfaces

Types

No architectural violations.

====================================================
TASK 14 — CLEANUP
====================================================

Remove:

Unused imports

Unused variables

Duplicate interfaces

Duplicate helpers

Dead code

Unused constants

Unused middleware

====================================================
TASK 15 — TYPESCRIPT QUALITY
====================================================

Strict typing everywhere.

No "any".

No ignored errors.

No unnecessary casting.

====================================================
TASK 16 — ESLINT
====================================================

Resolve every introduced warning.

Backend should be clean.

====================================================
TASK 17 — PRETTIER
====================================================

Format every file.

Consistent formatting.

====================================================
TASK 18 — VERIFY AUTHENTICATION
====================================================

Ensure previous features still work.

Verify:

Register

Login

Refresh

Logout

Current User

Change Password

MongoDB Connection

JWT

====================================================
TASK 19 — FINAL PROJECT VERIFICATION
====================================================

Automatically execute:

npm run build

npm run type-check

npm run lint

npm run dev

Verify backend starts successfully.

Verify Swagger opens.

Verify Health APIs respond correctly.

Verify Authentication still functions.

====================================================
DO NOT TOUCH
====================================================

Products

Categories

Marketplace

Cart

Wishlist

Orders

Payments

Cloudinary Uploads

Innovation Feed

Admin Panel

Frontend

Business Logic

Authentication Flow

JWT Logic

MongoDB Collections

====================================================
FINAL OUTPUT
====================================================

Provide:

1. Files Created

2. Files Modified

3. Swagger Summary

4. Test Coverage Summary

5. Postman Collection Summary

6. Thunder Client Collection Summary

7. Documentation Generated

8. README Improvements

9. Build Status

10. Type Check Status

11. Lint Status

12. Runtime Verification

Complete ONLY backend tooling, testing, documentation and developer experience while preserving every working feature from all previous stages.

# INNOMINE — STAGE 3C | MASTER PROMPT 4
## Final Backend Refinement, Production Audit, Refactoring & Release Verification

You are continuing the existing Innomine repository.

Stages 1A, 1B, 2A, 2B, 2C, 3A, 3B and ALL previous Stage 3C prompts are COMPLETE.

This is the FINAL prompt of Stage 3C.

This prompt MUST NOT introduce any new business modules.

Its objective is to make the backend production-ready, remove technical debt, verify architecture and ensure the project is stable before beginning the Marketplace (Stage 4).

====================================================
IMPORTANT RULES
====================================================

DO NOT redesign.

DO NOT rewrite existing modules.

DO NOT modify frontend.

DO NOT change API contracts.

DO NOT rename folders.

DO NOT rename existing routes.

DO NOT change MongoDB collections.

DO NOT break Register/Login/Auth.

DO NOT modify JWT business logic.

DO NOT modify database schemas unless absolutely necessary for bug fixes.

Everything that already works MUST continue working exactly as before.

====================================================
PRIMARY OBJECTIVE
====================================================

This is a COMPLETE backend audit.

Your responsibility is to inspect the ENTIRE backend and make it production-ready.

Fix inconsistencies.

Remove technical debt.

Improve maintainability.

Improve scalability.

Improve readability.

Improve documentation.

Improve developer experience.

Improve code quality.

DO NOT add Marketplace functionality.

====================================================
TASK 1 — COMPLETE ARCHITECTURE AUDIT
====================================================

Inspect every module.

Verify:

Controllers

Services

Repositories

Models

Routes

Validation

Middlewares

Utilities

Types

Configuration

Shared Helpers

Constants

Ensure every file follows the same architecture.

Remove architectural inconsistencies.

====================================================
TASK 2 — REFACTOR DUPLICATED CODE
====================================================

Inspect the entire backend.

Remove duplicated:

Validation

JWT logic

Utility functions

Response formatting

Pagination

Error handling

Logging

Helper methods

Database helpers

Repository logic

Authentication helpers

Create reusable shared implementations.

====================================================
TASK 3 — TYPESCRIPT AUDIT
====================================================

Inspect every file.

Requirements:

No "any"

No unused interfaces

No duplicated interfaces

Strict typing

Strong return types

Strong generic typing

Proper DTOs

Proper request typing

Proper response typing

No ignored TypeScript errors

====================================================
TASK 4 — PERFORMANCE REVIEW
====================================================

Inspect backend performance.

Improve:

Middleware ordering

Database queries

Mongoose usage

Connection reuse

Response generation

Async execution

Imports

Object creation

Memory usage

Prevent unnecessary allocations.

====================================================
TASK 5 — SECURITY REVIEW
====================================================

Audit entire backend.

Verify:

JWT Security

Authentication

Authorization

Rate Limiting

Validation

Headers

Sanitization

Cookie configuration

Input validation

Error exposure

Environment handling

Logging

Remove any security weaknesses.

====================================================
TASK 6 — DATABASE REVIEW
====================================================

Inspect MongoDB layer.

Verify:

Indexes

Unique constraints

Query efficiency

Repository implementation

Schema consistency

Connection handling

Pooling

Retry logic

No duplicated queries.

====================================================
TASK 7 — LOGGER REVIEW
====================================================

Inspect Winston.

Ensure:

Consistent formatting

Request logging

Error logging

Production logging

Development logging

Log rotation ready

No console.log remains.

====================================================
TASK 8 — DOCUMENTATION REVIEW
====================================================

Review all generated documentation.

Ensure:

README

API.md

ENV.md

Swagger

Comments

Architecture documentation

Configuration documentation

Everything is consistent.

====================================================
TASK 9 — CLEANUP
====================================================

Remove:

Unused imports

Unused variables

Dead code

Unused constants

Unused middleware

Commented code

Duplicate files

Temporary code

Debug logs

Development leftovers

====================================================
TASK 10 — PROJECT STRUCTURE REVIEW
====================================================

Verify folder hierarchy.

Ensure feature-first architecture.

No misplaced files.

No duplicated folders.

No inconsistent naming.

====================================================
TASK 11 — API CONSISTENCY
====================================================

Verify every endpoint.

Consistent:

Responses

Status Codes

Messages

Error Format

Authentication

Validation

Pagination

====================================================
TASK 12 — BACKWARD COMPATIBILITY
====================================================

Verify that ALL previously completed work still functions.

Frontend compatibility must remain intact.

Do NOT break:

Authentication

JWT

Register

Login

Refresh

Logout

Current User

Health APIs

Version APIs

====================================================
TASK 13 — BUILD VERIFICATION
====================================================

Automatically execute:

npm run build

npm run type-check

npm run lint

npm run dev

Backend must start successfully.

No build failures.

No runtime failures.

====================================================
TASK 14 — MANUAL API VERIFICATION
====================================================

Verify:

POST /auth/register

POST /auth/login

POST /auth/logout

POST /auth/refresh

GET /auth/me

PATCH /auth/change-password

GET /health

GET /health/database

GET /version

Ensure every endpoint responds correctly.

====================================================
TASK 15 — FINAL QUALITY AUDIT
====================================================

Inspect the entire backend for:

Scalability

Maintainability

Code readability

SOLID principles

Repository pattern

Layer separation

Error handling

Logging

Security

Testing

Documentation

Performance

Developer experience

Production readiness

====================================================
TASK 16 — DO NOT IMPLEMENT
====================================================

Do NOT implement:

Marketplace

Products

Categories

Orders

Wishlist

Cart

Payments

Cloudinary Upload

Innovation Feed

Innovator Dashboard

Admin Dashboard

Notifications

Search

Recommendations

Analytics

These belong to future stages.

====================================================
FINAL ACCEPTANCE CRITERIA
====================================================

The backend must satisfy ALL of the following:

✓ Production Ready

✓ MongoDB Connected

✓ JWT Working

✓ Authentication Working

✓ Authorization Working

✓ Validation Working

✓ Logging Working

✓ Error Handling Working

✓ Documentation Complete

✓ Swagger Working

✓ Health APIs Working

✓ Version API Working

✓ Build Successful

✓ Type Check Successful

✓ Lint Successful

✓ Backend Starts Successfully

✓ No Regression Introduced

====================================================
FINAL OUTPUT
====================================================

When finished provide:

1. Executive Summary

2. Files Created

3. Files Modified

4. Architecture Improvements

5. Security Improvements

6. Performance Improvements

7. Documentation Generated

8. Testing Summary

9. Swagger Summary

10. Final Backend Folder Structure

11. Build Status

12. Type Check Status

13. Lint Status

14. Runtime Verification

15. Remaining Future Modules (without implementing them)

Do not stop until every task above has been completed successfully.

This concludes Stage 3C. The backend should now be production-ready and prepared for Stage 4 (Marketplace & Core Business Modules) while preserving every working feature implemented in previous stages.