# Ayur Veda Mantra — Website Development Master Prompt

## 1. Project Overview

We are building a **premium Ayurvedic wellness website from scratch** for a brand called **Ayur Veda Mantra**.

The website should feel:

- Premium
- Authentic
- Calm
- Trustworthy
- Ayurvedic
- Modern
- Minimal
- Wellness-focused
- Sophisticated rather than overly decorative

This is **not just a marketing website**. It is a full-stack website that combines:

1. Ayurvedic brand/marketing content
2. Treatment/service discovery
3. Consultation booking
4. Product/e-commerce functionality
5. Customer authentication
6. Shopping cart
7. Payments
8. Customer accounts
9. Database-backed content and transactions

The project should be built **systematically, page by page**, rather than attempting to build the entire website at once.

---

# 2. Brand

## Brand Name

**Ayur Veda Mantra**

## Logo

The project already contains the brand logo:

`logo.png`

Reference:

`[logo.png](file:///d:/Vibe%20code/veda-mantra/logo.png)`

Use the provided logo as the primary brand identity.

Before implementing the UI:

- Inspect the logo carefully.
- Understand its proportions.
- Use it appropriately in the navbar, footer, authentication pages and other relevant locations.
- Do not recreate or replace the logo unnecessarily.
- Maintain sufficient whitespace around the logo.
- Ensure the logo remains readable on both light and dark backgrounds.

---

# 3. Primary Brand Colors

The core visual identity should be based on:

### Dark Brown

`#2B241E`

Use for:

- Primary dark backgrounds
- Headings where appropriate
- Footer
- Premium sections
- Navigation elements where appropriate

### Ayurvedic Green

`#1D4F40`

Use for:

- Primary CTA buttons
- Links
- Active states
- Important UI elements
- Treatment-related sections
- Brand accents

### White

`#FFFFFF`

Use for:

- Main backgrounds
- Cards
- Content areas
- Contrast sections

### Black

`#000000`

Use primarily for:

- High-contrast typography
- Supporting text where appropriate

Do not introduce random colors.

Additional colors may only be introduced when necessary for:

- Success states
- Errors
- Warnings
- Form validation
- Payment states

These should remain visually compatible with the brand.

---

# 4. Design Direction

The visual language should communicate **luxury Ayurveda**, not a generic health website.

Avoid:

- Generic SaaS layouts
- Overly colorful Ayurvedic designs
- Excessive gradients
- Excessive rounded cards
- Excessive animations
- Stock-template appearance
- Cluttered sections
- Excessive use of green
- Huge decorative illustrations everywhere

Prefer:

- Generous whitespace
- Editorial-style layouts
- Elegant typography
- Strong visual hierarchy
- Natural imagery
- Subtle borders
- Refined cards
- Large photography
- Asymmetric layouts where appropriate
- Sophisticated CTA sections
- Subtle transitions
- Premium spacing
- Strong typography hierarchy

The website should look credible enough for a **premium Ayurveda clinic/wellness brand**.

---

# 5. Core Website Pages

The initial website must include:

1. Home
2. About
3. Treatments
4. Products
5. Consultation
6. Contact Us

However, because this is a full-stack website, additional functional pages/routes will also be required.

Potential supporting pages:

- Login
- Signup
- Forgot Password
- Account
- Account Profile
- Orders
- Order Details
- Cart
- Checkout
- Payment Success
- Payment Failure
- Product Details
- Treatment Details
- Consultation Booking Confirmation
- Privacy Policy
- Terms & Conditions
- Refund/Cancellation Policy

Do not build unnecessary pages immediately.

Add them when they become necessary for the corresponding feature.

---

# 6. Build Philosophy

Build the website **page by page as a reusable design system**.

Do NOT independently design every page.

First establish:

- Typography
- Colors
- Spacing
- Buttons
- Inputs
- Cards
- Navigation
- Footer
- Containers
- Section layouts
- Product cards
- Treatment cards
- Consultation components
- Modal/dialog patterns
- Loading states
- Empty states
- Error states

Then reuse these components throughout the website.

The goal is to create a **coherent design system**, not a collection of unrelated pages.

---

# 7. Recommended Development Order

Follow this general execution sequence.

## Phase 0 — Project Foundation

Set up:

- Next.js application
- TypeScript
- Tailwind CSS
- ESLint
- Environment configuration
- Component architecture
- Database architecture
- Authentication architecture
- Payment architecture
- Deployment configuration

Before building pages, establish the project structure.

---

# Phase 1 — Design System

Create the initial design system.

Define:

### Colors

```text
Primary Brown: #2B241E
Primary Green: #1D4F40
White: #FFFFFF
Black: #000000
```

### Typography

Choose typography that feels:

- Elegant
- Premium
- Highly readable
- Suitable for an Ayurveda/wellness brand

Use a serif/sans-serif combination only if it improves the premium editorial feel.

Do not use too many fonts.

Define:

- Display heading
- H1
- H2
- H3
- Body
- Small text
- Button text
- Labels
- Captions

---

# Phase 2 — Global Components

Build reusable:

- Header
- Desktop navigation
- Mobile navigation
- Footer
- Button
- Secondary button
- Link
- Container
- Section wrapper
- Badge
- Card
- Form input
- Select
- Textarea
- Modal
- Toast
- Loading state
- Skeleton
- Empty state
- Error state

---

# Phase 3 — Homepage

Build the homepage first.

The homepage should communicate:

### Above the fold

- Ayur Veda Mantra branding
- Clear Ayurveda/wellness positioning
- Primary CTA
- Secondary CTA
- Premium imagery
- Strong visual hierarchy

Possible CTA directions:

- Explore Treatments
- Book Consultation
- Explore Products

### Homepage sections

Potential structure:

1. Hero
2. Brand introduction
3. Ayurveda philosophy
4. Featured treatments
5. Why Ayur Veda Mantra
6. Featured products
7. Consultation CTA
8. Testimonials
9. Wellness/education section
10. Final CTA
11. Footer

Do not blindly implement every section.

Use the content and brand positioning to determine the final hierarchy.

---

# Phase 4 — About

The About page should establish:

- Brand story
- Ayurveda philosophy
- Mission
- Vision
- Approach to wellness
- Practitioner/doctor information if provided
- Trust signals
- Facilities/environment
- Brand values

The page should feel editorial and storytelling-driven.

---

# Phase 5 — Treatments

Treatments should be structured as a proper content system.

Treatment listing page:

- Treatment categories
- Treatment cards
- Search/filter if required
- Short descriptions
- Duration
- Benefits
- CTA

Each treatment should have its own detail page.

Treatment detail should support:

- Treatment name
- Hero image
- Description
- Benefits
- Who it's for
- Process
- Duration
- What to expect
- Precautions where appropriate
- Consultation CTA
- Related treatments

Treatment content should eventually be database-driven rather than hardcoded into components.

---

# Phase 6 — Products / E-Commerce

Products are a core part of this website.

The Products experience should include:

### Product listing

- Product grid
- Product categories
- Search
- Filtering
- Sorting
- Product cards
- Price
- Availability
- Add to Cart

### Product detail

Each product should support:

- Product images
- Product name
- Short description
- Full description
- Price
- Discount/compare-at price if applicable
- Variants
- Quantity
- Stock availability
- Ingredients
- Benefits
- Usage instructions
- Shipping information
- Add to Cart
- Buy Now
- Related products
- Reviews

The product architecture should be designed so new products can be added through the database without changing frontend code.

---

# 7. Shopping Cart

Implement a proper cart system.

Users should be able to:

- Add products
- Remove products
- Increase quantity
- Decrease quantity
- View subtotal
- View applicable shipping
- View total
- Continue shopping
- Proceed to checkout

Cart should work for both:

- Guest users
- Authenticated users

If a guest logs in, intelligently merge the guest cart with their account cart.

---

# 8. Authentication

Implement authentication.

Required:

- Login
- Signup
- Logout
- Forgot password
- Password reset
- Session management

Support:

### Email Authentication

- Email
- Password

### Google Authentication

Provide:

**Continue with Google**

Google authentication should make signup/login faster.

Authentication must be secure.

Never expose:

- Passwords
- Authentication secrets
- Private API keys
- Payment secrets
- Database service-role credentials

in client-side code.

---

# 9. Customer Account

Authenticated users should have an Account area.

Possible structure:

```text
Account
├── Profile
├── Orders
├── Order Details
├── Addresses
├── Saved Information
├── Consultation Bookings
└── Logout
```

The MVP should only implement functionality that is actually required.

Do not over-engineer the account section.

---

# 10. Database

The application requires a proper database.

The database should store at minimum:

### Users

```text
users
```

### Profiles

```text
profiles
```

### Products

```text
products
```

### Product Images

```text
product_images
```

### Product Variants

```text
product_variants
```

### Categories

```text
categories
```

### Cart

```text
carts
```

### Cart Items

```text
cart_items
```

### Orders

```text
orders
```

### Order Items

```text
order_items
```

### Payments

```text
payments
```

### Reviews

```text
reviews
```

### Treatments

```text
treatments
```

### Consultations

```text
consultations
```

### Addresses

```text
addresses
```

The exact schema should be designed before implementation.

Consider:

- Primary keys
- Foreign keys
- Indexes
- Unique constraints
- Timestamps
- Status fields
- Soft deletion where appropriate
- Data validation
- Access control

---

# 11. Payment Gateway

Because the website sells products, integrate a payment gateway.

The initial target market is India, so the payment architecture should support Indian payments.

The payment system should eventually support appropriate methods such as:

- UPI
- Cards
- Net Banking
- Wallets where supported

Keep the payment provider abstracted behind a service layer so it can be changed later without rewriting the checkout system.

Example architecture:

```text
Checkout
   ↓
Order Service
   ↓
Payment Service
   ↓
Payment Gateway
   ↓
Webhook
   ↓
Order Status Update
```

Never mark an order as paid based only on the frontend payment-success screen.

Payment confirmation should be validated server-side using the payment provider's verification mechanism/webhook.

---

# 12. Checkout

Checkout should include:

### Customer Information

- Name
- Email
- Phone

### Address

- Full name
- Address
- City
- State
- PIN code
- Country
- Phone

### Order Summary

- Products
- Quantity
- Price
- Shipping
- Total

### Payment

- Payment method
- Payment gateway interface

### Confirmation

After successful payment:

```text
Order Created
      ↓
Payment Verified
      ↓
Order Confirmed
      ↓
Confirmation Page
```

Provide a clear order ID.

---

# 13. Product Reviews

Users should be able to review products.

A review may include:

- Rating
- Review title
- Review text
- User
- Product
- Date

Only verified purchasers should be allowed to leave a verified-purchase review if this functionality is implemented.

Prevent:

- Duplicate reviews
- Unauthorized reviews
- Review manipulation

---

# 14. Consultation System

The Consultation page should provide a clear way for visitors to understand and request/book a consultation.

Possible consultation types:

- Online consultation
- In-person consultation

The exact booking flow should be finalized before implementation.

Potential information:

- Consultation type
- Date
- Time
- Customer details
- Reason for consultation
- Payment if applicable
- Confirmation

The system should be designed so consultation functionality can later be expanded without rebuilding the entire application.

---

# 15. Contact Us

Contact page should include:

- Contact information
- Location
- Phone
- Email
- Opening hours
- Contact form
- Map/location section if applicable
- Social links

The contact form should have:

- Name
- Email
- Phone
- Subject
- Message

Implement proper validation and spam protection where necessary.

---

# 16. Technical Architecture

The website will be hosted on:

**Vercel**

Recommended architecture:

```text
Frontend
Next.js
TypeScript
Tailwind CSS

        ↓

Application / API Layer
Next.js Server Components
Route Handlers / Server Actions
Service Layer

        ↓

Database
PostgreSQL / chosen database

        ↓

Authentication
Email + Google OAuth

        ↓

Payment
Indian payment gateway

        ↓

Deployment
Vercel
```

Keep business logic out of UI components.

Use a service-layer architecture.

Example:

```text
lib/
├── auth/
├── db/
├── payments/
├── products/
├── orders/
├── consultations/
└── reviews/
```

---

# 17. Environment Variables

All secrets must be stored in environment variables.

Examples:

```env
DATABASE_URL=
AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

PAYMENT_KEY_ID=
PAYMENT_KEY_SECRET=
PAYMENT_WEBHOOK_SECRET=
```

Never hardcode credentials.

Never commit `.env` files containing secrets.

Create:

```text
.env.example
```

with placeholder values.

---

# 18. Security Requirements

Security is part of the MVP.

Implement:

- Secure authentication
- Server-side authorization
- Protected account routes
- Input validation
- API validation
- Database access control
- Secure payment verification
- Webhook verification
- Rate limiting where appropriate
- CSRF protection where applicable
- XSS-safe rendering
- Secure cookies/session handling
- No secret exposure
- Proper error handling

Users must only be able to access their own:

- Profile
- Orders
- Addresses
- Consultations
- Private data

---

# 19. SEO Requirements

SEO is a core requirement.

Every public page should have:

- Unique title
- Meta description
- Canonical URL
- Open Graph metadata
- Proper heading hierarchy
- Semantic HTML
- Image alt text
- Internal linking
- Clean URLs

Implement structured data where appropriate.

Potential schemas:

- Organization
- LocalBusiness
- Product
- Review
- BreadcrumbList
- Article where applicable

Products and treatments should have SEO-friendly URLs.

Example:

```text
/treatments/panchakarma
/products/herbal-oil
```

Avoid:

```text
/page?id=123
```

where clean routing is possible.

---

# 20. Performance

The website should be optimized for:

- Core Web Vitals
- Fast page loading
- Optimized images
- Responsive images
- Lazy loading where appropriate
- Server-side rendering/static generation where appropriate
- Minimal JavaScript
- Proper caching
- Optimized fonts

Do not add libraries unless they provide meaningful value.

---

# 21. Responsive Design

The website must work properly across:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop screens

Design mobile intentionally.

Do not simply shrink the desktop layout.

Pay particular attention to:

- Navigation
- Product grids
- Product detail
- Cart
- Checkout
- Forms
- Consultation booking
- Account pages

---

# 22. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Accessible buttons
- Proper labels
- Form error messages
- Sufficient contrast
- Focus states
- Alt text
- Screen-reader-friendly structure

Do not rely solely on color to communicate status.

---

# 23. UX Requirements

Every important interaction needs proper states.

For example:

### Button

```text
Default
Hover
Focus
Loading
Disabled
Success
Error
```

### Product

```text
Loading
Available
Low Stock
Out of Stock
Added to Cart
Error
```

### Payment

```text
Initiating
Processing
Success
Failed
Cancelled
Pending
```

### Forms

```text
Default
Focused
Valid
Invalid
Submitting
Success
Error
```

Do not leave users wondering whether an action worked.

---

# 24. Navigation

The primary navigation should include:

```text
Logo

Home
About
Treatments
Products
Consultation
Contact

Account
Cart
```

On mobile, use an appropriate mobile navigation pattern.

The header should remain consistent across the site.

---

# 25. Footer

Create a reusable premium footer containing:

### Brand

Ayur Veda Mantra

### Navigation

- Home
- About
- Treatments
- Products
- Consultation
- Contact

### Customer

- Account
- Orders
- Shipping
- Returns

### Legal

- Privacy Policy
- Terms & Conditions
- Refund Policy

### Contact

- Phone
- Email
- Location

### Social

Relevant social media links.

---

# 26. Content Architecture

Separate content from presentation wherever practical.

Avoid putting large amounts of business content directly inside JSX components.

For example:

```text
data/
├── treatments
├── products
├── testimonials
└── site
```

As the project evolves, database-driven content should replace static mock data where appropriate.

---

# 27. Image Strategy

Use high-quality Ayurvedic/wellness imagery.

Image direction:

- Natural
- Warm
- Authentic
- Premium
- Human
- Earthy
- Calm

Avoid generic corporate stock imagery.

Images should support the story rather than simply filling space.

Optimize all images for web delivery.

---

# 28. Component Architecture

Use reusable components.

Example:

```text
components/
├── layout/
│   ├── Header
│   ├── Footer
│   └── Container
│
├── ui/
│   ├── Button
│   ├── Input
│   ├── Modal
│   ├── Badge
│   └── Card
│
├── products/
│   ├── ProductCard
│   ├── ProductGrid
│   ├── ProductGallery
│   ├── ProductInfo
│   └── AddToCart
│
├── treatments/
│   ├── TreatmentCard
│   ├── TreatmentGrid
│   └── TreatmentDetails
│
├── consultation/
│   ├── ConsultationForm
│   └── BookingSummary
│
└── account/
    ├── AccountSidebar
    ├── OrderCard
    └── ProfileForm
```

Adapt the structure when implementation requires it.

Do not create unnecessary abstraction.

---

# 29. Development Rules

Follow these rules throughout development.

### Rule 1

Do not build the entire application in one step.

### Rule 2

Build one page/feature at a time.

### Rule 3

Before starting a new page, check existing components and reuse them.

### Rule 4

Do not duplicate components unnecessarily.

### Rule 5

Do not introduce new colors without a design reason.

### Rule 6

Do not introduce random fonts.

### Rule 7

Do not hardcode data that should eventually come from the database.

### Rule 8

Do not implement fake payment success logic.

### Rule 9

Do not expose secrets.

### Rule 10

Do not mark payment as successful from client-side state alone.

### Rule 11

Every completed feature must be tested before moving forward.

### Rule 12

Do not break previously completed pages while implementing new functionality.

---

# 30. Progress Tracking

Create and maintain:

```text
progress.md
```

This file is the source of truth for project execution.

Track:

- Completed work
- Current work
- Pending work
- Blockers
- Bugs
- Decisions
- Next steps

Use this format:

```md
# Ayur Veda Mantra — Development Progress

## Current Phase

Phase 0 — Project Foundation

## Overall Status

🟡 In Progress

---

## Completed

- [ ] Project initialization
- [ ] Design system
- [ ] Header
- [ ] Footer
- [ ] Homepage
- [ ] About
- [ ] Treatments
- [ ] Products
- [ ] Product detail
- [ ] Authentication
- [ ] Google authentication
- [ ] Cart
- [ ] Checkout
- [ ] Payment gateway
- [ ] Account
- [ ] Orders
- [ ] Consultation
- [ ] Contact
- [ ] SEO
- [ ] Security review
- [ ] Performance optimization
- [ ] Production deployment

---

## Currently Working On

### Task

Example: Design System

### Status

🟡 In Progress

### Details

Describe exactly what is being implemented.

---

## Blockers

None

---

## Bugs

None

---

## Decisions

- Primary brand color: #2B241E
- Secondary brand color: #1D4F40
- Deployment: Vercel
- Authentication: Email + Google
- Website includes e-commerce
- Payment gateway required

---

## Next Steps

1. Complete current task
2. Test current implementation
3. Update progress.md
4. Move to next task
```

Update this file after every meaningful development milestone.

---

# 31. Problem Statement

Create and maintain:

```text
problemStatement.md
```

This document should define the complete product requirements.

It should contain:

1. Project overview
2. Business objective
3. User problems
4. Target users
5. User goals
6. Website goals
7. Functional requirements
8. Authentication requirements
9. Product/e-commerce requirements
10. Cart requirements
11. Checkout requirements
12. Payment requirements
13. Consultation requirements
14. Account requirements
15. Database requirements
16. Treatment requirements
17. Review requirements
18. SEO requirements
19. Security requirements
20. Accessibility requirements
21. Performance requirements
22. Responsive requirements
23. Technical architecture
24. Design system
25. Page requirements
26. API requirements
27. Error states
28. Empty states
29. Loading states
30. Future scalability
31. Acceptance criteria

This document should be treated as the **product specification**.

---

# 32. Definition of Done

A feature is NOT considered complete merely because the UI exists.

A feature is complete only when:

- UI is implemented
- Responsive behavior works
- Data flow works
- Validation works
- Loading states work
- Error states work
- Empty states work
- Authentication/authorization works where required
- Database integration works where required
- Security requirements are satisfied
- SEO is implemented where applicable
- The feature has been tested
- Existing functionality has not been broken
- `progress.md` has been updated

---

# 33. Important Development Instruction

We are building this project **incrementally**.

Do not make assumptions about future requirements when they are not necessary.

When implementing a feature:

1. Understand the requirement.
2. Check the existing architecture.
3. Check `problemStatement.md`.
4. Check `progress.md`.
5. Reuse existing components.
6. Implement the smallest complete version.
7. Test it.
8. Fix issues.
9. Update `progress.md`.
10. Only then move to the next feature.

If a requirement is unclear or has architectural consequences, explain the options before making a major decision.

---

# 34. First Objective

Before building the actual pages, perform the following:

### Step 1

Inspect the existing project structure.

### Step 2

Inspect:

```text
logo.png
```

### Step 3

Create:

```text
problemStatement.md
progress.md
```

### Step 4

Define the initial technical architecture.

### Step 5

Define the initial design system.

### Step 6

Create the global layout:

- Header
- Navigation
- Footer
- Container system

### Step 7

Build the homepage.

Do not start building Treatments, Products, Checkout, Authentication, or other complex functionality until the foundation is stable.

---

# 35. Final Quality Standard

The final website should feel like a **real premium Ayurveda brand**, not a demo project.

Prioritize:

**Brand → UX → Design system → Performance → SEO → Security → Functionality → Scalability**

Every page should feel like it belongs to the same brand.

The final experience should be:

> Calm, premium, trustworthy, authentic, modern Ayurveda — with a seamless transition from discovering the brand to booking a consultation or purchasing a product.

Build thoughtfully. Do not rush into implementation. Treat this as a production-quality product even though the project is initially being developed incrementally.