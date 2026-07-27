# Innomine Innovation Marketplace Module API Documentation (`INNOVATION_API.md`)

This document provides complete, production-ready specification of all Innovation Module REST APIs for the Innomine Marketplace, including headers, parameters, request body schemas, response payloads, authentication rules, and authorization permissions.

---

## Table of Contents
1. [Overview](#1-overview)
2. [Authentication & Permissions](#2-authentication--permissions)
3. [Endpoints](#3-endpoints)
   - [3.1 Create Innovation](#31-create-innovation-post-apiv1innovations)
   - [3.2 List & Filter Innovations](#32-list--filter-innovations-get-apiv1innovations)
   - [3.3 Get Innovation by ID](#33-get-innovation-by-id-get-apiv1innovationsid)
   - [3.4 Get Innovation by Slug](#34-get-innovation-by-slug-get-apiv1innovationsslugslug)
   - [3.5 Update Innovation](#35-update-innovation-patch-apiv1innovationsid)
   - [3.6 Soft-Delete Innovation](#36-soft-delete-innovation-delete-apiv1innovationsid)
   - [3.7 Publish Innovation](#37-publish-innovation-postpatch-apiv1innovationsidpublish)
   - [3.8 Archive Innovation](#38-archive-innovation-postpatch-apiv1innovationsidarchive)
   - [3.9 Verify Innovation (Admin/Moderator)](#39-verify-innovation-postpatch-apiv1innovationsidverify)
   - [3.10 Toggle Like](#310-toggle-like-post-apiv1innovationsidlike)
   - [3.11 Toggle Bookmark](#311-toggle-bookmark-post-apiv1innovationsidbookmark)
4. [Error Response Format & Status Codes](#4-error-response-format--status-codes)

---

## 1. Overview
Base URL: `/api/v1/innovations`

All responses follow the standard Innomine JSON envelope:
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation description"
}
```

---

## 2. Authentication & Permissions
- **Public access**: `GET /api/v1/innovations`, `GET /api/v1/innovations/:id`, `GET /api/v1/innovations/slug/:slug` (only `PUBLISHED` & `PUBLIC` innovations returned unless authenticated as Owner/Admin/Moderator).
- **Bearer Token Header**:
  ```http
  Authorization: Bearer <accessToken>
  ```
- **Ownership enforcement**: Users with `INNOVATOR` role can only update, delete, publish, or archive their own innovations.
- **Admin/Moderator bypass**: Administrators can update, delete, publish, or archive any innovation. Moderators/Administrators can verify innovations.

---

## 3. Endpoints

### 3.1 Create Innovation (`POST /api/v1/innovations`)
Create a new innovation listing in `DRAFT` status.

#### Requirements
- **Auth**: Required (`Bearer <token>`)
- **Roles**: `INNOVATOR`, `ADMIN`

#### Headers
```http
Content-Type: application/json
Authorization: Bearer <accessToken>
```

#### Request Body
```json
{
  "title": "Nova AI Desk Assistant",
  "shortDescription": "An autonomous desktop AI companion with motorized gimbal tracking.",
  "description": "Nova AI Desk Assistant combines advanced computer vision with local LLMs...",
  "category": "AI & ML",
  "subcategory": "Hardware Assistants",
  "tags": ["AI", "Robotics", "Desk", "Automation"],
  "coverImage": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "galleryImages": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758"
  ],
  "visibility": "PUBLIC",
  "pricingModel": "PAID",
  "price": 299,
  "currency": "USD",
  "technologyStack": ["Python", "PyTorch", "ESP32", "C++"],
  "difficulty": "ADVANCED"
}
```

#### Response (`201 Created`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "title": "Nova AI Desk Assistant",
    "slug": "nova-ai-desk-assistant",
    "shortDescription": "An autonomous desktop AI companion with motorized gimbal tracking.",
    "category": "AI & ML",
    "status": "DRAFT",
    "visibility": "PUBLIC",
    "price": 299,
    "likes": 0,
    "bookmarks": 0,
    "views": 0,
    "createdAt": "2026-07-27T12:00:00.000Z"
  },
  "message": "Innovation created successfully"
}
```

---

### 3.2 List & Filter Innovations (`GET /api/v1/innovations`)
Retrieve a paginated list of innovations with rich search, filtering, and sorting capabilities.

#### Requirements
- **Auth**: Optional (if unauthenticated, returns only `PUBLISHED` and `PUBLIC` items)

#### Query Parameters
| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | Integer | `1` | Page number |
| `limit` | Integer | `10` | Number of items per page (max 100) |
| `search` / `q` | String | undefined | Full-text search on title, tags, description |
| `category` | String | undefined | Exact match on category |
| `subcategory` | String | undefined | Exact match on subcategory |
| `status` | String | `PUBLISHED` | Filter by status (`DRAFT`, `PUBLISHED`, etc.) |
| `visibility` | String | `PUBLIC` | Filter by visibility (`PUBLIC`, `PRIVATE`) |
| `pricingModel` | String | undefined | `FREE`, `PAID`, `LICENSE` |
| `minPrice` | Number | undefined | Minimum price filter |
| `maxPrice` | Number | undefined | Maximum price filter |
| `featured` | Boolean | undefined | Filter featured innovations |
| `verified` | Boolean | undefined | Filter verified innovations |
| `owner` | String | undefined | Filter by owner ID |
| `tag` | String | undefined | Filter by specific tag |
| `sortBy` | String | `createdAt` | Sort field (`createdAt`, `views`, `likes`, `price`, `title`) |
| `sortOrder` | String | `desc` | `asc` or `desc` |

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "66a0f3d9e01b2a0013f9c011",
        "title": "Nova AI Desk Assistant",
        "slug": "nova-ai-desk-assistant",
        "category": "AI & ML",
        "owner": {
          "_id": "66a0f3d9e01b2a0013f9c000",
          "name": "Dr. Elena Vance",
          "profileImage": "https://example.com/profile.jpg",
          "role": "INNOVATOR"
        },
        "status": "PUBLISHED",
        "price": 299,
        "likes": 142,
        "bookmarks": 45,
        "views": 1250,
        "featured": true,
        "verified": true
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 48,
      "limit": 10,
      "hasNext": true,
      "hasPrevious": false
    }
  },
  "message": "Innovations retrieved successfully"
}
```

---

### 3.3 Get Innovation by ID (`GET /api/v1/innovations/:id`)
Retrieve full details of an innovation by its MongoDB ObjectID and asynchronously increment its view counter.

#### Requirements
- **Auth**: Optional (required if private or draft)
- **Permissions**: Owner, Admin, or Moderator can view private/draft innovations.

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "title": "Nova AI Desk Assistant",
    "slug": "nova-ai-desk-assistant",
    "status": "PUBLISHED",
    "views": 1251,
    "likes": 142,
    "bookmarks": 45,
    "owner": {
      "_id": "66a0f3d9e01b2a0013f9c000",
      "name": "Dr. Elena Vance"
    }
  },
  "message": "Innovation retrieved successfully"
}
```

---

### 3.4 Get Innovation by Slug (`GET /api/v1/innovations/slug/:slug`)
Retrieve an innovation by its SEO-friendly unique slug.

#### Requirements
- **Auth**: Optional

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "title": "Nova AI Desk Assistant",
    "slug": "nova-ai-desk-assistant"
  },
  "message": "Innovation retrieved successfully"
}
```

---

### 3.5 Update Innovation (`PATCH /api/v1/innovations/:id`)
Update existing innovation properties. Note: Slugs are re-generated automatically if the title changes.

#### Requirements
- **Auth**: Required (`Bearer <token>`)
- **Permissions**: Owner of the innovation or Admin

#### Request Body
```json
{
  "price": 279,
  "shortDescription": "Updated description with new voice features."
}
```

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "price": 279
  },
  "message": "Innovation updated successfully"
}
```

---

### 3.6 Soft-Delete Innovation (`DELETE /api/v1/innovations/:id`)
Soft-delete an innovation by setting `isDeleted = true`.

#### Requirements
- **Auth**: Required
- **Permissions**: Owner or Admin

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "isDeleted": true
  },
  "message": "Innovation deleted successfully"
}
```

---

### 3.7 Publish Innovation (`POST/PATCH /api/v1/innovations/:id/publish`)
Transition an innovation status to `PUBLISHED` and set `publishedAt`.

#### Requirements
- **Auth**: Required
- **Permissions**: Owner or Admin
- **Rules**: Cannot publish a deleted innovation (`409 Conflict`).

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "status": "PUBLISHED",
    "publishedAt": "2026-07-27T12:15:00.000Z"
  },
  "message": "Innovation published successfully"
}
```

---

### 3.8 Archive Innovation (`POST/PATCH /api/v1/innovations/:id/archive`)
Transition an innovation status to `ARCHIVED`.

#### Requirements
- **Auth**: Required
- **Permissions**: Owner or Admin

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "status": "ARCHIVED"
  },
  "message": "Innovation archived successfully"
}
```

---

### 3.9 Verify Innovation (`POST/PATCH /api/v1/innovations/:id/verify`)
Toggle or grant verified status on an innovation.

#### Requirements
- **Auth**: Required (`Bearer <token>`)
- **Permissions**: `ADMIN`, `MODERATOR` only

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "id": "66a0f3d9e01b2a0013f9c011",
    "verified": true
  },
  "message": "Innovation verified successfully"
}
```

---

### 3.10 Toggle Like (`POST /api/v1/innovations/:id/like`)
Like or unlike an innovation for the authenticated user and update aggregate `likes` count.

#### Requirements
- **Auth**: Required (`Bearer <token>`)

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "innovation": { ... },
    "liked": true,
    "likesCount": 143
  },
  "message": "Innovation like toggled successfully"
}
```

---

### 3.11 Toggle Bookmark (`POST /api/v1/innovations/:id/bookmark`)
Bookmark or remove bookmark on an innovation for the authenticated user and update aggregate `bookmarks` count.

#### Requirements
- **Auth**: Required (`Bearer <token>`)

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": {
    "innovation": { ... },
    "bookmarked": true,
    "bookmarksCount": 46
  },
  "message": "Innovation bookmark toggled successfully"
}
```

---

## 4. Error Response Format & Status Codes

All error responses return standard Innomine error format:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Detailed error explanation",
    "details": []
  }
}
```

### Common HTTP Status Codes & Error Codes
| HTTP Status | Error Code | Description |
| :--- | :--- | :--- |
| `400 Bad Request` | `VALIDATION_ERROR` | Request body or query params failed schema validation |
| `401 Unauthorized` | `UNAUTHORIZED` | Missing or invalid JWT access token |
| `403 Forbidden` | `FORBIDDEN` | Authenticated user is not the owner or lacks role permissions |
| `404 Not Found` | `NOT_FOUND` | Innovation ID or slug does not exist (or is soft-deleted) |
| `409 Conflict` | `CONFLICT` | Attempting to publish an already deleted innovation |
| `500 Internal Error` | `INTERNAL_SERVER_ERROR` | Unexpected server error |
