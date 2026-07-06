# STAGE 2A — PUBLIC EXPERIENCE & UI FOUNDATION

## ROLE

Assume you are the Principal Software Architect, Principal Frontend Engineer, Senior UI/UX Designer, Design System Architect, and Technical Lead responsible for building Innomine.

You are building a production-grade startup platform.

This is NOT a prototype.

This is NOT a template.

This is NOT a portfolio website.

Every engineering and design decision must prioritize:

- Premium user experience
- Scalability
- Maintainability
- Accessibility
- Performance
- Responsive design
- Clean architecture
- Reusable component design
- Long-term software quality

Think carefully before implementing.

Never sacrifice quality for speed.

---

# PROJECT CONTEXT

Innomine is the world's premium marketplace dedicated exclusively to innovative physical products.

The platform exists because innovators struggle to market revolutionary products through isolated websites.

Unlike Amazon or Flipkart, Innomine focuses entirely on innovation.

Every page must communicate:

- Innovation
- Trust
- Professionalism
- Modern technology
- Premium branding
- Simplicity
- Elegance

The product is always the hero.

The UI should never feel cluttered or generic.

The design language should be inspired by companies such as Apple, Linear, Stripe, Notion, Arc Browser, and Vercel—not by traditional marketplaces.

---

# PROJECT DOCUMENTATION

Before implementing anything, carefully read and understand:

- docs/PRD_v1.pdf
- docs/Design_System_v1.pdf
- docs/Technical_Architecture_v1.pdf
- docs/Architecture_Decisions_v1.md

These documents are the only source of truth.

Do not override them.

Do not redesign the product.

Do not introduce alternative architecture.

If a conflict exists, stop and explain it instead of making assumptions.

---

# CURRENT STAGE

Current Stage:

Stage 2A

Public Experience & UI Foundation

Stage 2A establishes the visual identity and reusable frontend architecture for Innomine.

Everything created in this stage will be reused throughout the project.

---

# OBJECTIVE

Build the complete public-facing frontend foundation using mock data only.

This stage should establish a premium design language, responsive layout system, reusable components, routing, animations, and all public informational pages.

No backend integration.

No business logic.

No authentication.

No database.

No API implementation.

The result should already feel like a polished premium product.

---

# IMPLEMENTATION SCOPE

## Global Layout

Implement:

- Root Layout
- Navigation Bar
- Sticky Navigation
- Mobile Navigation Drawer
- Footer
- Scroll Progress Indicator
- Theme Toggle
- Command Menu Placeholder
- Search UI (placeholder only)
- Notification Placeholder
- User Menu Placeholder

Navigation must support:

- Desktop
- Tablet
- Mobile

---

## Landing Page

Build a premium landing page containing:

### Hero

- Powerful headline
- Supporting text
- Primary CTA
- Secondary CTA
- Innovation-focused illustration or placeholder
- Subtle entrance animations

---

### Featured Innovations

Beautiful product showcase using mock data.

Premium product cards.

Hover animations.

---

### Innovation Categories

Interactive category cards.

Technology

AI

Robotics

Healthcare

Agriculture

IoT

Education

Renewable Energy

Manufacturing

Consumer Innovation

Accessibility

Sustainability

---

### Why Innomine

Explain the platform.

Problem

Solution

Benefits

Visual storytelling.

---

### How It Works

Three-step process.

Innovator

Marketplace

Customer

---

### Platform Statistics

Animated counters using mock data.

---

### Testimonials

Premium testimonial cards using placeholder data.

---

### Call To Action

Strong conversion section.

---

### Footer

Complete professional footer.

---

# PUBLIC PAGES

Implement:

- About
- Contact
- FAQ
- Privacy Policy
- Terms & Conditions
- Innovation Guidelines
- Become an Innovator
- Careers (placeholder)
- 404
- 500

These pages should follow the same premium layout and visual language.

---

# REUSABLE COMPONENT LIBRARY

Create reusable components only.

Buttons

Inputs

Text Areas

Checkboxes

Radio Buttons

Select

Badges

Tags

Cards

Product Cards

Category Cards

Feature Cards

Statistic Cards

Testimonial Cards

Dialogs

Drawers

Modals

Dropdown Menus

Breadcrumbs

Pagination

Skeleton Loaders

Empty States

Loading Indicators

Search Bar

Section Headers

CTA Components

Containers

Responsive Grid Components

Every component should be reusable.

---

# ROUTING

Implement routing only for public pages.

All routes must use App Router best practices.

No protected routes yet.

---

# DESIGN SYSTEM IMPLEMENTATION

Strictly follow the Design System.

Configure:

Inter Typography

Spacing Scale

Color Tokens

Radius Tokens

Shadows

Icons

Responsive Breakpoints

Light Theme

Dark Theme

CSS Variables

Motion Guidelines

Hover States

Focus States

Accessibility

---

# ANIMATIONS

Use Framer Motion.

Include:

Fade

Slide

Scale

Hover

Reveal on Scroll

Page Transition

Micro-interactions

Keep animations elegant and subtle.

Never excessive.

---

# RESPONSIVENESS

Support:

Desktop

Laptop

Tablet

Mobile

Ultra-wide

No layout should break.

---

# MOCK DATA

Use structured mock data.

Do NOT hardcode data inside components.

Create reusable mock data files.

Products

Categories

Testimonials

Statistics

Navigation

Footer Links

FAQ

Everything should be easily replaceable with API data in Stage 3.

---

# CODE QUALITY

Write:

Strict TypeScript

Reusable Components

Clean Folder Structure

Readable Code

Proper Naming

Minimal Duplication

Consistent Imports

Small Components

Scalable Architecture

---

# DO NOT IMPLEMENT

Authentication

Backend

MongoDB

REST APIs

Business Logic

JWT

Orders

Payments

Cart Functionality

Wishlist Functionality

Innovation Feed Logic

Product CRUD

Dashboards

Admin Features

Database Models

Real Search

Real Notifications

Only the UI.

---

# QUALITY REQUIREMENTS

The website must feel:

Premium

Minimal

Elegant

Fast

Modern

Professional

Trustworthy

Innovation-focused

Do not create a generic e-commerce appearance.

Avoid visual clutter.

Maintain generous whitespace.

Maintain excellent typography hierarchy.

---

# VERIFICATION

Before completion verify:

✓ No TypeScript errors

✓ No ESLint errors

✓ Responsive on all breakpoints

✓ Animations work correctly

✓ Theme switching works

✓ Navigation works

✓ All routes work

✓ Components are reusable

✓ Build succeeds

✓ Lighthouse-ready structure

---

# FINAL REPORT

Provide:

1. Pages implemented
2. Components created
3. Folder structure
4. Mock data files
5. Routes created
6. Animations implemented
7. Design system implementation summary
8. Verification results
9. Remaining work for Stage 2B

---

# CONFLICT RESOLUTION

If any requirement conflicts with:

- PRD
- Design System
- Technical Architecture Document
- Architecture Decision Record
- Stage 2A scope

STOP.

Explain the conflict.

Do not guess.

Do not change architecture.

Wait for clarification.

---

# FINAL INSTRUCTION

This stage defines the public identity of Innomine.

Treat every component, every page, every animation, and every interaction as production-quality work.

Build as if Innomine will launch publicly immediately after the frontend is connected to the backend in Stage 3.

Do not rush.

Think before implementing.

Quality is more important than speed.