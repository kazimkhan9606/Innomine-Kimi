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

# INNOMINE — STAGE 2C
# FINAL DESIGN SYSTEM POLISH & PRODUCTION READINESS

You are continuing development of Innomine.

Innomine is NOT a generic e-commerce platform.

It is a premium marketplace dedicated exclusively to innovative physical products, hardware startups, AI devices, robotics, IoT, sustainability technologies, university research commercialization, engineering inventions, and breakthrough consumer technology.

Stage 1 (Project Foundation), Stage 2A (Design Foundation), and Stage 2B (Reusable Components) have already been completed successfully.

DO NOT redesign the website.

DO NOT rebuild components.

DO NOT change branding.

DO NOT introduce unnecessary features.

Your only objective is to polish, stabilize and productionize the existing design system so Stage 3 can focus entirely on building the actual product.

==================================================
PRIMARY OBJECTIVE
==================================================

Create a production-ready design system.

Every reusable component should look polished, feel consistent, and be scalable for the entire platform.

This is the LAST design-system stage.

After this, the design system is considered frozen.

==================================================
KEEP THE MAIN PRODUCT VISION
==================================================

While polishing the design system, always remember what Innomine is.

Every design decision should support:

• premium engineering products
• futuristic hardware
• startup innovation
• robotics
• AI devices
• sustainability
• clean Scandinavian/Japanese minimalism
• Apple-level polish
• Notion clarity
• Linear consistency
• Stripe professionalism

Avoid looking like:

❌ Amazon
❌ Alibaba
❌ Temu
❌ Generic Bootstrap template
❌ Material UI demo

Instead target:

✓ Apple
✓ Linear
✓ Stripe
✓ Arc Browser
✓ Vercel
✓ Notion
✓ Framer

==================================================
STAGE 2C TASKS
==================================================

-------------------------
1. Typography Polish
-------------------------

Review the complete typography hierarchy.

Improve

• font sizes
• font weights
• spacing
• line heights
• hierarchy
• readability

Typography should include:

Display XL

Display L

H1

H2

H3

H4

Body Large

Body Medium

Body Small

Caption

Label

Button Text

Code

Improve readability without making the interface heavier.

------------------------------------------------

2. Improve Text Contrast

Current muted text and placeholders are too light.

Improve semantic text colors.

Establish hierarchy.

Primary Text

Secondary Text

Muted Text

Placeholder

Disabled

Ensure accessibility.

------------------------------------------------

3. Final Semantic Color Tokens

Replace scattered colors with reusable semantic tokens.

Create final tokens for

Primary

Secondary

Accent

Background

Surface

Card

Border

Divider

Success

Warning

Danger

Info

Hover

Active

Disabled

Focus

Dark Mode equivalents

All components must consume these tokens.

------------------------------------------------

4. Standardize Spacing

Review every component.

Use one spacing system only.

Examples

4

8

12

16

20

24

32

40

48

64

Remove inconsistent spacing.

------------------------------------------------

5. Border Radius

Create one reusable radius system.

Small

Medium

Large

Extra Large

Use consistently across

Cards

Buttons

Inputs

Badges

Dialogs

Dropdowns

------------------------------------------------

6. Elevation

Create a consistent shadow system.

Surface

Raised

Floating

Modal

Popover

Dropdown

No random shadows.

------------------------------------------------

7. Component Review

Audit every reusable component.

Buttons

Inputs

Textarea

Checkbox

Switch

Tabs

Cards

Marketplace Card

Creator Card

Category Card

Badges

Alerts

Feedback

Loading

Typography

Review

spacing

alignment

hover

focus

disabled

sizes

consistency

------------------------------------------------

8. Forms

Improve

Placeholder contrast

Input spacing

Focus state

Validation state

Disabled state

Error state

Maintain existing API.

------------------------------------------------

9. Marketplace Components

Improve visual hierarchy only.

Do NOT redesign.

Review

Product Card

Category Card

Creator Card

Ratings

Prices

Discounts

Badges

Verification chips

Spacing

Image ratio

Typography

------------------------------------------------

10. Typography Showcase

Expand documentation.

Display every text style.

Display XL

Display L

H1

H2

H3

H4

Body

Caption

Label

Code

Include

font size

weight

line height

recommended usage

------------------------------------------------

11. UI Showcase (/ui)

Convert the current page into a polished internal documentation page.

Organize sections.

Buttons

Forms

Marketplace

Typography

Feedback

Cards

Badges

Loading

Icons

Spacing

Color Tokens

Use consistent spacing.

------------------------------------------------

12. Accessibility

Verify

Keyboard navigation

Focus rings

ARIA

Contrast

Hover

Disabled

Tab order

WCAG-friendly colors

------------------------------------------------

13. Motion

Keep motion subtle.

Hover

Button

Card

Fade

Loading

No flashy animations.

------------------------------------------------

14. Responsive

Verify every component.

Mobile

Tablet

Laptop

Desktop

Ultra-wide

No overflow.

No broken layouts.

------------------------------------------------

15. Dark Mode

Verify every reusable component.

Correct colors.

Correct contrast.

Correct shadows.

Correct surfaces.

------------------------------------------------

16. Cleanup

Remove

dead code

duplicate styles

unused utilities

unused tokens

temporary styles

development placeholders

==================================================
DO NOT
==================================================

Do NOT redesign the homepage.

Do NOT modify Stage 3.

Do NOT build new pages.

Do NOT add new business features.

Do NOT modify routing.

Do NOT change branding.

Do NOT create unnecessary animations.

Do NOT change APIs.

Focus only on polishing existing reusable components.

==================================================
FINAL VALIDATION
==================================================

Before completion verify:

✓ No React warnings

✓ No hydration warnings

✓ No duplicate key warnings

✓ No ESLint errors

✓ No TypeScript errors

✓ No console errors

✓ No broken routes

✓ Build passes

✓ Home page still works

✓ About page works

✓ Guidelines page works

✓ Terms page works

✓ UI page works

✓ Components remain reusable

==================================================
DELIVERABLES
==================================================

Provide a detailed completion report containing:

1. Executive Summary

2. Files Modified

3. Typography Improvements

4. Color Token Improvements

5. Component Improvements

6. Accessibility Improvements

7. Responsive Verification

8. Dark Mode Verification

9. Performance Notes

10. Cleanup Performed

11. Remaining Minor Issues (if any)

12. Production Readiness Score (/10)

13. Confirmation that Stage 2 is COMPLETE.

==================================================
IMPORTANT
==================================================

This is the FINAL design-system phase.

After completion, treat the design system as frozen.

Future work must focus on building the actual Innomine platform:

• Marketplace
• Product pages
• Creator profiles
• Authentication
• User dashboard
• Innovator dashboard
• Admin panel
• Reels feed
• Search
• Categories
• Checkout
• Payments
• Verification system
• Messaging
• Notifications
• AI-powered discovery

Do not continue improving the design system beyond this stage unless a critical issue is discovered.

The goal is to leave Stage 2 with a stable, scalable, production-quality UI foundation ready for rapid feature development in Stage 3.

# STAGE 2D — COMPLETE FRONTEND IMPLEMENTATION & PROJECT STABILIZATION (MASTER PROMPT)

You are continuing development of **Innomine**, a premium marketplace dedicated exclusively to innovative physical products.

This is **Stage 2D**.

Read these instructions carefully before making ANY changes.

────────────────────────────────────────
PROJECT CONTEXT
────────────────────────────────────────

Stage 1 is COMPLETE.

Stage 2A is COMPLETE.

Stage 2B is COMPLETE.

Stage 2C is COMPLETE.

The existing project already contains:

• Homepage
• Navbar
• Footer
• Static pages
• Design System
• Typography System
• Color Tokens
• Buttons
• Forms
• Marketplace Components
• Feedback Components
• UI Showcase
• Reusable UI Components
• Routing Foundation

These are considered LOCKED.

DO NOT redesign them.

DO NOT replace them.

DO NOT simplify them.

DO NOT remove any completed work.

DO NOT change the overall visual language.

The existing Apple × Linear × Stripe inspired premium aesthetic MUST remain unchanged.

Your job is to COMPLETE the frontend while preserving everything already built.

────────────────────────────────────────
PRIMARY OBJECTIVE
────────────────────────────────────────

Stage 2D converts Innomine into a COMPLETE frontend prototype.

There is NO backend integration.

Everything uses realistic mock data.

At the end of Stage 2D the application should look like a production marketplace whose backend simply hasn't been connected yet.

────────────────────────────────────────
STEP 1 — COMPLETE PROJECT AUDIT
────────────────────────────────────────

Before writing ANY code, perform a full audit.

Inspect:

• Folder structure
• Routing
• Shared Components
• Design Tokens
• Typography
• Colors
• Buttons
• Forms
• Cards
• Marketplace Components
• Images
• Animations
• Accessibility
• Responsiveness
• Runtime warnings
• React warnings
• Next.js warnings
• Console errors
• Navigation
• Dynamic routes
• Broken imports
• Duplicate code

Identify every unfinished area.

Fix existing issues BEFORE creating new features.

────────────────────────────────────────
CRITICAL RULES
────────────────────────────────────────

1. Never modify completed features unless fixing bugs.

2. Never redesign the UI.

3. Never change spacing without reason.

4. Never change typography hierarchy.

5. Never introduce random colors.

6. Never duplicate reusable components.

7. Use the existing Design System everywhere.

8. Maintain visual consistency.

9. Maintain code quality.

10. Every new page must look like it belongs to Innommine.

────────────────────────────────────────
FIX ALL EXISTING ISSUES
────────────────────────────────────────

Eliminate ALL existing problems.

Including:

• Runtime errors
• Console errors
• React warnings
• Duplicate key warnings
• Framer Motion warnings
• AnimatePresence warnings
• Missing image warnings
• Image optimization warnings
• Broken imports
• Broken assets
• Broken navigation
• Internal Server Errors
• 404 pages
• Hydration mismatches
• Missing routes
• Layout inconsistencies
• Overflow issues
• Responsive bugs

Nothing should be ignored.

If a warning appears repeatedly, investigate the root cause and permanently fix it.

────────────────────────────────────────
IMAGE SYSTEM
────────────────────────────────────────

Audit every image.

Fix:

• Broken URLs
• Missing images
• Incorrect aspect ratios
• Missing alt text
• Missing sizes attribute
• Next/Image warnings
• Layout shift
• Lazy loading issues

Verify image optimization.

Remove every image-related warning.

────────────────────────────────────────
ROUTING
────────────────────────────────────────

Every route must function correctly.

No page should return:

404

500

Internal Server Error

Broken Navigation

Broken Dynamic Route

Broken Link

Verify:

Navbar

Footer

Cards

Categories

Buttons

Creator links

Product links

Everything must navigate correctly.

────────────────────────────────────────
REMOVE PLACEHOLDERS
────────────────────────────────────────

Delete every placeholder.

Examples:

Coming Soon

Coming in Stage 2B

Placeholder

TODO

Under Construction

Replace them with complete frontend implementations.

────────────────────────────────────────
EXPLORE PAGE
────────────────────────────────────────

Build a complete Explore experience.

Include:

• Hero Banner
• Search
• Featured Products
• Trending Products
• Editor Picks
• Recently Launched
• Recommended
• Popular Categories
• Filter Sidebar
• Sort Dropdown
• Product Grid
• Pagination or Infinite Loading

Use realistic mock data.

Minimum:

24 realistic hardware products.

────────────────────────────────────────
CATEGORIES
────────────────────────────────────────

Build a complete Categories section.

Include:

Technology

AI

Robotics

IoT

Healthcare

Agriculture

Energy

Consumer Electronics

Wearables

Industrial

Education

Automotive

Smart Home

Each category contains products.

Each category has its own page.

────────────────────────────────────────
DYNAMIC CATEGORY ROUTES
────────────────────────────────────────

Implement

/category/[slug]

Every category must render correctly.

No broken routes.

No 404s.

────────────────────────────────────────
PRODUCT DETAILS PAGE
────────────────────────────────────────

Build a premium product page.

Include:

• Gallery
• Multiple Images
• Zoom
• Product Title
• Creator
• Verified Badge
• Category
• Pricing
• Discount
• Rating
• Specifications
• Description
• Features
• Technical Details
• Reviews
• Wishlist
• Share
• Add to Cart
• Buy Now
• Related Products

Everything uses mock data.

────────────────────────────────────────
INNOVATORS PAGE
────────────────────────────────────────

Replace placeholder.

Include:

• Search
• Filters
• Verified Badge
• Creator Cards
• Followers
• Products
• Ratings
• Achievements
• Pagination

────────────────────────────────────────
CREATOR PROFILE
────────────────────────────────────────

Each creator profile should include:

Hero

Avatar

Bio

Achievements

Followers

Following

Products

Gallery

Reviews

Social Links

Verification Status

────────────────────────────────────────
INNOVATION FEED
────────────────────────────────────────

Create a Product Hunt inspired feed.

Include:

Launch Posts

Creator Information

Product Images

Likes

Bookmarks

Comments

Verification Badge

Trending Badge

Infinite Scroll

Everything uses mock data.

────────────────────────────────────────
SEARCH
────────────────────────────────────────

Implement frontend search.

Search should filter:

Products

Categories

Innovators

Feed

Use mock datasets only.

────────────────────────────────────────
FILTERS
────────────────────────────────────────

Implement:

Category

Price

Availability

Verified

Rating

Newest

Trending

Popular

Everything works using frontend state.

────────────────────────────────────────
RESPONSIVENESS
────────────────────────────────────────

Audit every page.

Verify:

Desktop

Laptop

Tablet

Mobile

Ultra-wide

Fix:

Spacing

Wrapping

Overflow

Buttons

Navigation

Cards

Forms

Images

Typography

────────────────────────────────────────
ACCESSIBILITY
────────────────────────────────────────

Verify:

Keyboard Navigation

ARIA Labels

Focus States

Semantic HTML

Heading Hierarchy

Color Contrast

Accessible Forms

Accessible Buttons

────────────────────────────────────────
ANIMATIONS
────────────────────────────────────────

Use only subtle animations.

Maintain premium quality.

Avoid excessive movement.

Reuse existing animation patterns.

────────────────────────────────────────
PERFORMANCE
────────────────────────────────────────

Optimize:

Image Loading

Lazy Loading

Component Rendering

Reusable Components

Memoization where necessary

Avoid unnecessary rerenders.

────────────────────────────────────────
MOCK DATA
────────────────────────────────────────

Create reusable mock datasets.

Suggested files:

products.ts

categories.ts

innovators.ts

feed.ts

reviews.ts

Do NOT hardcode data inside components.

────────────────────────────────────────
CODE QUALITY
────────────────────────────────────────

Refactor duplicated code.

Improve maintainability.

Maintain folder architecture.

Avoid unnecessary complexity.

────────────────────────────────────────
DESIGN CONSISTENCY
────────────────────────────────────────

Every page MUST use:

Existing Typography

Existing Colors

Existing Shadows

Existing Border Radius

Existing Buttons

Existing Cards

Existing Forms

Existing Feedback Components

Existing Design Tokens

Nothing should visually feel different.

────────────────────────────────────────
FINAL VALIDATION
────────────────────────────────────────

Before considering Stage 2D complete, perform a complete project-wide verification.

Confirm that:

✓ No runtime errors remain.

✓ No console warnings remain.

✓ No React warnings remain.

✓ No Framer Motion warnings remain.

✓ No image warnings remain.

✓ No placeholder pages remain.

✓ No broken routes remain.

✓ No Internal Server Errors remain.

✓ No broken images remain.

✓ No duplicate components remain.

✓ No accessibility regressions remain.

✓ No responsive issues remain.

✓ Every page follows the Design System.

✓ Every navigation link works.

✓ Every card works.

✓ Every creator profile works.

✓ Every category page works.

✓ Every product page works.

✓ Every mock dataset works.

✓ The application feels like a complete production-ready marketplace frontend.

────────────────────────────────────────
IMPORTANT
────────────────────────────────────────

Do NOT stop after implementing only the requested features.

Think like a Senior Frontend Architect.

Continuously audit your own work while implementing.

If you discover any inconsistency, bug, code smell, visual issue, routing issue, responsiveness issue, accessibility issue, performance issue, or design inconsistency, fix it proactively without waiting for additional instructions.

The goal is that Stage 2D becomes the FINAL frontend milestone before backend integration. When this stage is complete, the frontend should require no structural redesign—only replacement of mock data with real APIs, authentication, database, payments, and other backend services in the next stages.

You are performing the FINAL stabilization and completion of Stage 2D for the Innomine frontend.

This is NOT a redesign.
This is NOT a refactor.
This is NOT Stage 3.

Your objective is to make the entire frontend production-quality, eliminate every runtime error, complete every unfinished feature, and preserve the existing design system exactly as implemented.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO NOT redesign anything.

DO NOT modify typography.

DO NOT modify spacing.

DO NOT modify colors.

DO NOT modify the design system.

DO NOT remove components.

DO NOT change layouts.

DO NOT break existing working pages.

Only fix bugs and complete missing functionality.

Before changing any file, inspect whether it already works.
Modify only what is necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. NEXT.JS 16 DYNAMIC ROUTE FIXES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The project currently throws errors such as:

"A param property was accessed directly with params.slug."

"searchParams is a Promise."

These errors exist across multiple routes.

Fix EVERY route to use the official Next.js 16 API.

Audit:

app/product/[id]

app/category/[slug]

app/innovator/[id]

app/explore

Any other page using params or searchParams.

Remove ALL runtime warnings.

Browser console must become clean.

Terminal must become clean.

npm run dev must show zero runtime errors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. PRODUCT ROUTE FIX
━━━━━━━━━━━━━━━━━━━━━━

Currently

/product/1

returns 404.

Investigate why.

Verify:

product ids

slug generation

lookup logic

dynamic routing

Ensure every product card opens the correct page.

Every product must display:

gallery

title

creator

price

description

specifications

reviews

related products

404 should only appear for truly invalid ids.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CATEGORY ROUTES
━━━━━━━━━━━━━━━━━━━━━━

Currently category pages crash.

Fix dynamic category routing.

Verify every category slug.

Examples:

AI

Robotics

IoT

Smart Home

Wearables

Healthcare

Energy

Consumer Electronics

Every category page must:

load

display products

show title

show description

have no runtime errors

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. SEARCH
━━━━━━━━━━━━━━━━━━━━━━

Search currently does not filter.

Implement real search.

Search must filter by:

product title

description

creator

category

keywords

URL Search Params must work.

Searching:

AI

Robot

Headset

Ring

Drone

Keyboard

must return different results.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. FILTERS
━━━━━━━━━━━━━━━━━━━━━━

Filters were promised but do not exist.

Implement fully functional filters.

Include:

Category

Price

Verified Creator

Newest

Highest Rated

Most Popular

Filters must update UI immediately.

Filters must sync with URL parameters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. MOCK DATABASE
━━━━━━━━━━━━━━━━━━━━━━

Documentation claims:

24+ products

Currently only ~8 appear.

Populate the mock database completely.

Minimum:

24 products

10 creators

10+ categories

Every creator owns products.

Every category contains products.

No duplicate ids.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. PRODUCT IMAGES
━━━━━━━━━━━━━━━━━━━━━━

Several cards show broken images.

Audit every image.

Replace broken URLs.

Use working high-quality royalty-free images.

No missing thumbnails.

No layout shifts.

No broken icons.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. MOBILE NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━

Current hamburger menu:

opens grey overlay

menu unusable

Fix mobile navigation.

Requirements:

smooth animation

close on outside click

ESC closes

focus trap

scroll lock

accessible

No grey frozen screen.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. FEED
━━━━━━━━━━━━━━━━━━━━━━

Current feed is image-only.

Improve experience without redesign.

Maintain card design.

Option A:

light autoplay videos

OR

Option B:

image reels with progress interaction

Must feel like an innovation feed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. RESPONSIVE AUDIT
━━━━━━━━━━━━━━━━━━━━━━

Audit:

320px

375px

390px

768px

1024px

1440px

No overflow.

No clipped text.

No broken cards.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. QA
━━━━━━━━━━━━━━━━━━━━━━

Run:

npm run lint

npm run type-check

npm run build

Fix every issue.

Remove:

console warnings

hydration warnings

React warnings

Next warnings

Image warnings

Accessibility warnings

TypeScript warnings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. FINAL VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

✔ Explore

✔ Categories

✔ Category Details

✔ Product Details

✔ Innovators

✔ Innovator Profiles

✔ Feed

✔ About

✔ Navbar

✔ Footer

✔ Mobile Navigation

✔ Search

✔ Filters

✔ Dynamic Routes

✔ Images

✔ Mock Data

✔ Responsive

✔ Accessibility

✔ Build

Do not mark the task complete until every item passes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL OUTPUT
━━━━━━━━━━━━━━━━━━━━━━

Return:

1. Files modified

2. Bugs fixed

3. Features completed

4. Remaining issues (if any)

5. Screenshots or verification proving:

- dynamic routing works
- product pages work
- category pages work
- search works
- filters work
- mobile menu works
- build succeeds

Do NOT claim success unless every verification has been completed.