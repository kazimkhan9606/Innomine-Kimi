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