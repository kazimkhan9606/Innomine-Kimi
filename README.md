# Innomine

Innomine is a premium innovation-first marketplace dedicated exclusively to innovative physical products. It connects innovators, startups, engineers, researchers, universities, and creators with buyers seeking breakthrough products.

## Project Structure

This is a monorepo containing the following applications:

- `frontend/` - Next.js 15 App Router application with Tailwind CSS, Shadcn/UI, and TypeScript
- `backend/` - Node.js + Express.js API with modular feature-based architecture and TypeScript
- `shared/` - Shared TypeScript types and constants for both frontend and backend
- `docs/` - Project documentation (PRD, Design System, Technical Architecture, ADRs)

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI (Radix UI + Framer Motion)
- Zustand (Global state)
- TanStack Query (Server state)
- React Hook Form + Zod

### Backend
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Socket.IO
- Winston (Logging)
- Zod (Validation)

## Development Setup

### Prerequisites
- Node.js (v24+)
- npm
- MongoDB (local or Atlas)

### Getting Started

1. Clone the repository
2. Set up environment variables based on `.env.example` in both `frontend/` and `backend/` directories

#### Start Backend
```bash
cd backend
npm install
npm run dev
```
The API will run on `http://localhost:5000`

#### Start Frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:3000`

## Documentation

Please refer to the `docs/` directory for detailed specifications:
- `PRD_v1.pdf`: Product Requirements Document
- `Design_System_v1.pdf`: UI/UX Design System
- `Technical_Architecture_v1.pdf`: Technical Architecture Document
- `Architecture_Decisions_v1.md`: Architecture Decision Records (ADRs)