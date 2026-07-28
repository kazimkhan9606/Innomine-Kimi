# STAGE 05 — MARKETPLACE CORE DEVELOPER WALKTHROUGH & VERIFICATION GUIDE
## Innomine Premium Innovation Marketplace Backend

Welcome to the **Stage 05 Developer Walkthrough** for the Innomine Premium Innovation Marketplace. This guide explains the architecture, modules, REST APIs, testing suites, verification commands, and future improvements for the complete Stage 05 Marketplace Core implementation.

---

### 1. Executive Summary & Vision

Innomine is an Innovation-First Marketplace dedicated exclusively to physical hardware, machinery, electronics, and devices. In Stage 05, we have implemented 18 feature-first modules providing discovery, engagement, collaboration, and platform governance for innovators and buyers.

---

### 2. Folder Structure & Architectural Pattern

Every feature module follows clean layered architecture:
```
src/modules/<module-name>/
├── __tests__/         # Automated Jest/Supertest API test suites
├── controller/        # HTTP controllers (request parsing, status codes, response formatting)
├── interfaces/        # TypeScript interfaces & DTOs
├── model/             # Mongoose schemas & indexes
├── repository/        # Database access layer with .lean() projection for reads
├── routes/            # Express router definitions with auth & Zod middleware
├── service/           # Business logic, transactions, and error throwing
├── swagger/           # OpenAPI 3.0 JSDoc annotations
└── validation/        # Zod validation schemas
```

---

### 3. Complete Module & API Directory

#### 3.1 Bookmarks / Wishlist (`src/modules/wishlist`)
- `POST /api/v1/wishlist/:innovationId`: Save/bookmark an innovation to user's wishlist.
- `DELETE /api/v1/wishlist/:innovationId`: Remove an innovation from wishlist.
- `GET /api/v1/wishlist`: Retrieve paginated list of bookmarked innovations.
- `GET /api/v1/wishlist/check/:innovationId`: Check if an innovation is bookmarked.

#### 3.2 Likes & Engagement (`src/modules/innovation`)
- `POST /api/v1/innovations/:id/like`: Toggle like/unlike on an innovation (increments/decrements `stats.likesCount`).
- `POST /api/v1/innovations/:id/view`: Record a view (anonymous or authenticated) and increment `stats.viewsCount`.

#### 3.3 Search Engine (`src/modules/search`)
- `GET /api/v1/search`: Multi-field search across title, description, category, tags, inventor, technology, problem solved, solution, country, institute, and company.
- `GET /api/v1/search/suggestions`: Fast autocomplete suggestions for search terms.
- `GET /api/v1/search/metadata`: Retrieve available search filters and aggregations.

#### 3.4 Advanced Filters & Recommendations (`src/modules/innovation`)
- `GET /api/v1/innovations`: Supports advanced filtering (`category`, `technology`, `country`, `stage`, `patentStatus`, `fundingStatus`, `openCollaboration`, `sort`).
- `GET /api/v1/innovations/recommendations/:id`: Get rule-based recommendations matching category, tags, technology, and inventor interests.

#### 3.5 Homepage Feeds (`src/modules/feed`)
- `GET /api/v1/feed`: Curation feed supporting `type=latest|trending|recommended|featured|popular|most_discussed|recently_updated`.
- `GET /api/v1/feed/home`: Composite homepage payload.

#### 3.6 Statistics & Platform Analytics (`src/modules/analytics`)
- `GET /api/v1/analytics/platform`: Return aggregate counts (total innovations, innovators, likes, bookmarks, views).
- `GET /api/v1/analytics/innovations/:id`: Specific innovation metrics and time series.

#### 3.7 Innovator Dashboard (`src/modules/dashboard`)
- `GET /api/v1/dashboard/innovator`: Comprehensive innovator analytics.
- `GET /api/v1/dashboard/summary`: High-level summary KPI cards for innovator dashboard.

#### 3.8 Comments & Discussions (`src/modules/comments`)
- `GET /api/v1/comments/innovation/:id`: Retrieve comment threads for an innovation.
- `POST /api/v1/comments`: Post a top-level comment or reply to a thread.

#### 3.9 Reviews & Ratings (`src/modules/reviews`)
- `GET /api/v1/reviews/innovation/:id`: Retrieve 1-5 star reviews and aggregate rating breakdown.
- `POST /api/v1/reviews`: Submit a verified review for an innovation (1 per user per innovation).

#### 3.10 Categories Hierarchy (`src/modules/categories`)
- `GET /api/v1/categories`: Retrieve multi-level category tree with innovation counts.
- `POST /api/v1/categories`: Create a new category (ADMIN only).

#### 3.11 Notifications (`src/modules/notifications`)
- `GET /api/v1/notifications`: List paginated user notifications.
- `PATCH /api/v1/notifications/:id/read`: Mark an individual notification as read.
- `PATCH /api/v1/notifications/read-all`: Mark all notifications as read.

#### 3.12 Verification & Credibility (`src/modules/verification`)
- `POST /api/v1/verification`: Submit an innovator verification request.
- `GET /api/v1/verification/my-status`: Get current verification status (`PENDING`, `APPROVED`, `REJECTED`).
- `PATCH /api/v1/verification/:id/review`: Admin approve or reject a verification request (ADMIN only).

#### 3.13 Administration & Governance (`src/modules/admin`)
- `GET /api/v1/admin/users`: List platform users with search and role/status filters (ADMIN only).
- `PATCH /api/v1/admin/users/:id/status`: Activate or deactivate a user account (ADMIN only).
- `GET /api/v1/admin/innovations`: List all innovations including drafts and unlisted items (ADMIN only).
- `PATCH /api/v1/admin/innovations/:id/status`: Update innovation status or flag inappropriate content (ADMIN only).

---

### 4. How to Run & Verify the Project

#### 4.1 Environment Setup
Create a `.env` file in `backend/` with standard parameters:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/innomine-test
JWT_ACCESS_SECRET=your_test_access_secret_key_12345
JWT_REFRESH_SECRET=your_test_refresh_secret_key_12345
```

#### 4.2 Running Automated Test Suite
Open a terminal in `backend/` and run:
```bash
npm test
```
**Expected Output**:
```
Test Suites: 15 passed, 15 total
Tests:       36 passed, 36 total
Snapshots:   0 total
Time:        20.381 s
```
All 15 test suites execute against an in-memory or configured test database, validating status codes, authentication checks, validation schemas, and business logic.

#### 4.3 Running TypeScript Build Check
To verify strict TypeScript type checking without compilation errors:
```bash
npm run build
```
**Expected Output**:
```
Successfully compiled TypeScript to /dist
```

#### 4.4 Running the Development Server
```bash
npm run dev
```
- Server launches on `http://localhost:5000`.
- Health Check API: `http://localhost:5000/health`.
- OpenAPI Swagger UI: `http://localhost:5000/api-docs`.

---

### 5. Common Errors & Troubleshooting

1. **`401 Unauthorized - Authentication required`**:
   - Occurs when requesting protected endpoints (`/api/v1/wishlist`, `/api/v1/innovations/:id/like`, `/api/v1/dashboard/*`) without a valid `Authorization: Bearer <token>` header.
2. **`403 Forbidden - Insufficient permissions`**:
   - Occurs when a non-admin user attempts to access `/api/v1/admin/*` or create categories. Ensure your user's role is set to `ADMIN` in MongoDB.
3. **`409 Conflict - You already have a pending verification request` / `You have already reviewed this innovation`**:
   - Thrown by duplicate prevention guards in `VerificationService` and `ReviewService` when attempting duplicate submissions.
4. **`400 Bad Request - Validation Error`**:
   - Occurs when required fields in request body or URL params fail Zod validation (e.g., invalid ObjectId format, rating outside 1-5 range).

---

### 6. Future Improvements (Stage 06 & Beyond)

1. **Redis Caching Layer**:
   - Cache homepage feeds (`/api/v1/feed`), category hierarchies (`/api/v1/categories`), and search suggestions (`/api/v1/search/suggestions`) in Redis for sub-10ms response times.
2. **Elasticsearch / Atlas Search Integration**:
   - Upgrade from Mongoose regex queries to MongoDB Atlas Vector/Search or Elasticsearch for fuzzy matching and AI embeddings.
3. **Real-time Notifications via Socket.IO**:
   - Emit live WebSocket events when notifications are created so users receive instant alerts without polling.
4. **E-Commerce Checkout Integration**:
   - Connect the foundation `cart`, `orders`, and `payments` routers with Stripe/PayPal payment gateways in Stage 06.
