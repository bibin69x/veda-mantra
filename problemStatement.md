# Ayur Veda Mantra — Product Specification & Problem Statement

## 1. Project Overview
**Ayur Veda Mantra** is a full-stack, luxury Ayurvedic wellness and healthcare web platform. The platform serves as the digital flagship for *Ayur Veda Mantra — Ayurveda Panchakarma Treatment & Research Centre*, combining high-trust clinical credibility with a modern, high-end digital commerce and consultation booking experience.

The platform embodies the following brand attributes:
- **Premium & Sophisticated**: Editorial design, generous whitespace, luxury typography, and refined aesthetics.
- **Authentic & Ayurvedic**: Rooted in genuine Vedic traditions and Panchakarma therapies without appearing cliché or dated.
- **Calm & Mindful**: Soothing color harmony, clear visual hierarchy, and frictionless interactions.
- **Trustworthy & Secure**: Clinical authenticity, secure data management, authenticated transactions, and server-validated payments.

---

## 2. Business Objectives
1. **Brand Authority & Awareness**: Establish Ayur Veda Mantra as a premier destination for holistic healing, authentic Panchakarma therapies, and research-backed Ayurvedic wellness.
2. **Direct E-Commerce Growth**: Provide a high-converting, friction-free online store for proprietary Ayurvedic medicines, wellness formulations, herbal teas, and body oils.
3. **Streamlined Consultation Bookings**: Facilitate both in-person clinic visits and remote online Ayurvedic doctor consultations through an intuitive scheduling funnel.
4. **Customer Retention & Loyalty**: Foster long-term wellness journeys through user accounts, order tracking, consultation history, and personalized treatment plans.
5. **Scalable Digital Foundation**: Build on a scalable, modern technology stack (Next.js, TypeScript, Tailwind CSS, Supabase PostgreSQL, Razorpay payment gateway, and Vercel) to support multi-channel expansion.

---

## 3. User Problems
- **Lack of Trust in Generic Wellness Sites**: Many online Ayurvedic portals appear cluttered, generic, or untrustworthy, lacking transparent credentials, ingredients, or practitioner profiles.
- **Disconnected Healthcare & Retail**: Users typically must navigate separate systems for consultation scheduling, treatment discovery, and medicine purchasing.
- **Complex & Confusing Regimens**: Users struggle to understand which Ayurvedic treatments (e.g., Panchakarma, Shirodhara, Abhyanga) or herbal products align with their specific body type (*Dosha*) or health concerns.
- **Friction in Booking & Purchasing**: Slow, non-responsive interfaces, poor mobile optimization, and clunky checkout or payment gateways deter prospective patients and shoppers.

---

## 4. Target Users
1. **Holistic Health Seekers**: Individuals seeking authentic, natural alternatives or complements to modern medicine for chronic ailments, detox, stress, and lifestyle management.
2. **Wellness & Luxury Lifestyle Consumers**: Discerning clients looking for high-grade organic body care, herbal remedies, rejuvenating therapies, and retreat experiences.
3. **Panchakarma Patients**: Patients requiring structured, multi-day clinical detoxification and therapeutic packages guided by certified Ayurvedic doctors.
4. **Returning Wellness Clients**: Loyal consumers who reorder daily wellness supplements, herbal teas, and skincare products.

---

## 5. User Goals
- Discover verified Ayurvedic treatments with clear descriptions of benefits, duration, contraindications, and expectations.
- Book online or in-person consultations with certified Ayurvedic practitioners effortlessly.
- Shop for authentic Ayurvedic remedies with complete ingredient transparency, usage directions, and customer reviews.
- Seamlessly manage carts, apply discounts, and complete secure payments via UPI, Cards, and Net Banking.
- Track past orders, view consultation history, manage shipping addresses, and update account details in a centralized dashboard.

---

## 6. Website Goals
- Deliver an editorial-grade, ultra-responsive digital experience across all mobile, tablet, and desktop viewports.
- Achieve sub-second page loads, near-instant navigation, and optimal Core Web Vitals (LCP < 2.0s, FID < 100ms, CLS < 0.1).
- Achieve high SEO discoverability for Ayurvedic treatments, conditions, and product lines through structured metadata and semantic HTML.
- Guarantee strict data isolation, zero secret leakage, server-side payment verification, and robust input validation.

---

## 7. Functional Requirements
- **Unified Navigation & Brand Shell**: Sticky header with brand logo, primary navigation links, cart drawer trigger with counter badge, and user authentication status.
- **Dynamic Content Management**: Database-driven catalog for treatments, product variants, categories, and patient reviews.
- **Real-Time Shopping Cart**: Hybrid guest-to-authenticated cart management with persistent local/session caching and instant database synchronization upon login.
- **Consultation Scheduling Engine**: Multi-step booking flow supporting online tele-consultation and in-clinic Panchakarma appointments.
- **End-to-End E-Commerce Checkout**: Multi-step address collection, pincode serviceability check, order summary, server-managed payment initiation, and webhook fulfillment.
- **Interactive Feedback & States**: Unified feedback mechanisms (toasts, loading skeletons, modal dialogs, and field-level validation messages).

---

## 8. Authentication Requirements (Supabase Auth)
- **Supported Methods**:
  - Email & Password with secure salting/hashing via Supabase Auth.
  - Google OAuth single sign-on ("Continue with Google") configured in Supabase.
- **Core Flows**:
  - User Registration & Email Confirmation.
  - Login with Supabase SSR session handling (cookies stored via `@supabase/ssr`).
  - Password Reset via Supabase automated secure email links.
  - Session Refresh & Graceful Logout.
- **Security & Authorization**:
  - Role-Based Access Control (Customer vs. Admin/Practitioner) enforced with Supabase Custom Claims and Row Level Security (RLS).
  - Next.js Route Middleware protecting `/account/*`, `/checkout`, and administrative endpoints.
  - Automatic guest cart merging upon user authentication.

---

## 9. Product & E-Commerce Requirements
- **Catalog Browsing**:
  - Grid and list views with responsive layouts (1 col mobile, 2 col tablet, 3-4 col desktop).
  - Dynamic filtering by Dosha type (*Vata, Pitta, Kapha*), health concern, category, price range, and in-stock availability.
  - Multi-attribute sorting (Featured, Price: Low to High, Price: High to Low, Newest, Top Rated).
- **Product Detail View (PDP)**:
  - High-resolution image gallery with thumbnails and zoom capabilities.
  - Product title, Ayurvedic formulation subtitle, SKU, pricing, and discount/compare-at pricing.
  - Variant selector (Size, Volume, Weight, Pack size) with dynamic price and inventory updates.
  - Rich accordion sections: *Full Description, Active Herbal Ingredients, Key Benefits, How to Use, Safety & Precautions, Shipping & Returns*.
  - Direct "Add to Cart" and "Buy Now" (express checkout) actions.
  - Cross-sell and upsell carousels (Related Products, Complementary Treatments).

---

## 10. Cart Requirements
- **Universal Cart Access**: Slide-out Cart Drawer and dedicated `/cart` page.
- **Cart Capabilities**:
  - Increment/decrement item quantity with automatic debounce and inventory bounds checking.
  - Remove items with undo toast option.
  - Dynamic calculation of subtotal, estimated taxes, and free shipping qualification progress bar.
  - Seamless merge of guest session cart with user account upon login/signup.
  - Real-time stock reservation and out-of-stock badge notification.

---

## 11. Checkout Requirements
- **Step 1: Contact Information**: Name, verified email, and phone number (for SMS/WhatsApp delivery updates).
- **Step 2: Shipping & Delivery Address**:
  - Recipient full name, address line 1, address line 2/landmark, city, state, PIN code, and phone.
  - Indian PIN code auto-lookup for city and state population.
  - Option to save address to customer profile for authenticated users.
- **Step 3: Billing Address**: Same as shipping toggle or distinct billing entry for GST invoicing.
- **Step 4: Order Review & Pricing Breakdown**: Itemized list, subtotal, shipping fee, promotional discounts, and grand total in INR (₹).
- **Step 5: Payment Dispatch**: Seamless handoff to Indian payment gateway modal/redirect.

---

## 12. Payment Requirements (Razorpay Gateway)
- **Target Market**: India (INR ₹ currency standard).
- **Payment Provider**: **Razorpay** (India's leading compliant payment infrastructure).
- **Supported Payment Channels via Razorpay Standard Checkout**:
  - UPI (Google Pay, PhonePe, Paytm, BHIM, QR code instant intent).
  - Credit/Debit Cards (Visa, MasterCard, RuPay, American Express).
  - Net Banking across 50+ major Indian banks.
  - Supported Wallets (Paytm, Mobikwik, etc.) & PayLater options.
- **Architecture & Security**:
  - Razorpay SDK integration (`razorpay` Node.js client on server, `checkout.js` on client).
  - Strict two-phase order fulfillment:
    1. Client requests order creation -> Server calculates amount, calls Razorpay Orders API (`orders.create`), and returns `order_id` & `key_id`.
    2. Client completes payment -> Razorpay dispatches signed Webhook event (`order.paid` / `payment.captured`) -> Server verifies cryptographic HMAC-SHA256 signature using `RAZORPAY_WEBHOOK_SECRET`, transitions Supabase `orders` status to `PAID`, updates inventory, and confirms order.
  - **Zero Trust Rule**: Never transition an order to confirmed/paid based solely on client-side frontend redirect callbacks.

---

## 13. Consultation System Requirements
- **Consultation Modes**:
  - *Online Ayurvedic Tele-Consultation* (Video/Audio call with Vaidya/Doctor).
  - *In-Clinic Consultation & Panchakarma Assessment* (Physical clinic visit).
- **Booking Workflow**:
  1. Select consultation type and health concern area.
  2. Choose preferred Doctor/Vaidya (or automatic next-available allocation).
  3. Real-time calendar slot selector (Date and time-slot selection with timezone handling).
  4. Patient intake form (Age, Gender, Chief complaints, Medical history, Lifestyle notes).
  5. Consultation fee payment via Razorpay (or clinic pay-on-arrival option if enabled).
  6. Instant confirmation with calendar invite (.ics) and confirmation email/SMS.

---

## 14. Customer Account Requirements
- **Dashboard Overview**: Quick summary of recent orders, upcoming consultations, and saved addresses.
- **Order Management (`/account/orders`)**:
  - Historical order list with status chips (`Processing`, `Dispatched`, `In Transit`, `Delivered`, `Cancelled`).
  - Detailed order view with itemized receipts, tracking number, carrier link, and invoice download.
- **Consultation History (`/account/consultations`)**:
  - Upcoming appointments with video link access and rescheduling options.
  - Past consultation summaries, doctor notes, and prescribed treatment recommendations.
- **Address Book (`/account/addresses`)**: Add, edit, delete, and designate default shipping and billing addresses.
- **Profile Settings (`/account/profile`)**: Update name, contact phone, email, and password change utility.

---

## 15. Database & Schema Requirements (Supabase PostgreSQL)
Supabase PostgreSQL database with Row Level Security (RLS) enabled on all tables:

| Entity | Description & Primary Fields |
| :--- | :--- |
| `users` | Managed via Supabase `auth.users` (`id`, `email`, `created_at`) |
| `profiles` | `id` (references `auth.users.id`), `first_name`, `last_name`, `phone`, `avatar_url`, `dosha_type`, `created_at` |
| `categories` | `id`, `name`, `slug`, `description`, `image_url`, `parent_id` (FK) |
| `products` | `id`, `title`, `slug`, `short_desc`, `full_desc`, `base_price`, `compare_at_price`, `sku`, `category_id` (FK), `is_published`, `created_at` |
| `product_variants` | `id`, `product_id` (FK), `title` (e.g. "100ml"), `sku`, `price`, `compare_price`, `stock_quantity` |
| `product_images` | `id`, `product_id` (FK), `image_url` (Supabase Storage), `alt_text`, `sort_order` |
| `treatments` | `id`, `title`, `slug`, `tagline`, `description`, `duration_minutes`, `price_estimate`, `hero_image_url`, `benefits` (JSONB), `process` (JSONB), `precautions` (JSONB) |
| `carts` | `id`, `user_id` (FK nullable for guests), `session_token`, `expires_at`, `created_at` |
| `cart_items` | `id`, `cart_id` (FK), `product_id` (FK), `variant_id` (FK), `quantity` |
| `orders` | `id`, `order_number`, `user_id` (FK nullable), `status` (PENDING/PAID/SHIPPED/DELIVERED/CANCELLED), `subtotal`, `shipping_fee`, `total_amount`, `shipping_address` (JSONB), `billing_address` (JSONB) |
| `order_items` | `id`, `order_id` (FK), `product_id` (FK), `variant_id` (FK), `price_at_purchase`, `quantity`, `product_name`, `variant_name` |
| `payments` | `id`, `order_id` (FK), `gateway` ("RAZORPAY"), `razorpay_order_id`, `razorpay_payment_id`, `razorpay_signature`, `status`, `amount`, `currency` |
| `consultations` | `id`, `user_id` (FK nullable), `type` (ONLINE/IN_PERSON), `doctor_id`, `scheduled_at`, `status` (CONFIRMED/COMPLETED/CANCELLED), `patient_notes`, `meeting_url` |
| `reviews` | `id`, `product_id` (FK), `user_id` (FK), `rating` (1-5), `title`, `comment`, `is_verified_purchase`, `status` (APPROVED/PENDING) |
| `addresses` | `id`, `user_id` (FK), `full_name`, `phone`, `address_line_1`, `address_line_2`, `city`, `state`, `pincode`, `country`, `is_default` |

---

## 16. Treatment System Requirements
- Dedicated treatment taxonomy: *Panchakarma Detox, Rejuvenation & Rasayana, Stress & Sleep Therapies, Pain Management, Skin & Hair Wellness*.
- Listing page with filtering by therapy category and wellness objective.
- Individual Treatment Showcase (`/treatments/[slug]`):
  - Editorial header with Sanskrit terminology and English translation.
  - Clear breakdown of *Therapy Duration*, *Recommended Frequency*, and *Ideal Candidates*.
  - Step-by-step procedural breakdown (*Purva Karma, Pradhana Karma, Paschat Karma*).
  - Direct CTA to schedule a pre-treatment doctor consultation.

---

## 17. Product Review Requirements
- 5-star rating aggregation with distribution breakdown (percentage of 5, 4, 3, 2, 1-star ratings).
- Verified Buyer badge automatically applied when reviewer has a completed order matching the product ID.
- Text review submission form with character constraints and optional photo attachments.
- Spam protection, rate limiting, and profanity filtering.
- Moderation workflow in administration layer for public visibility.

---

## 18. SEO Requirements
- Comprehensive OpenGraph and Twitter card metadata on all pages.
- Canonical URL declarations to prevent duplicate content indexing.
- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- Automated JSON-LD structured schema markup:
  - `Organization` and `MedicalBusiness` / `HealthAndBeautyBusiness` schema on Homepage and About.
  - `Product` and `AggregateRating` schema on Product Detail pages.
  - `MedicalProcedure` schema on Treatment Detail pages.
  - `BreadcrumbList` schema across all deep catalog routes.
- XML sitemap generation (`/sitemap.xml`) and clean `robots.txt` configuration.
- Search-friendly, human-readable slug paths (e.g., `/treatments/shirodhara-stress-relief`).

---

## 19. Security Requirements
- All sensitive keys (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`) stored exclusively in environment variables with strict server-only isolation for secrets.
- **Supabase Row Level Security (RLS)**: Enforce RLS policies so users can only view and mutate their own profile, orders, addresses, and consultation bookings.
- **Razorpay Webhook Verification**: Cryptographic HMAC-SHA256 signature validation of all inbound Razorpay webhook events before updating database order statuses.
- Cross-Site Scripting (XSS) prevention via React/Next.js automatic escaping and sanitization of user-supplied HTML.
- Cross-Site Request Forgery (CSRF) protection on all state-mutating API routes and Server Actions.
- Comprehensive Server-Side Validation using Zod on all payload inputs.
- SQL injection immunity guaranteed via Supabase / PostgreSQL parameterized client queries.
- Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Content-Type-Options, and X-Frame-Options headers.

---

## 20. Accessibility Requirements (WCAG 2.1 AA)
- High contrast ratios (> 4.5:1 for normal text, > 3:1 for large display headings).
- Full keyboard navigability (visible focus indicators, logical tab orders, esc-key dismissable modals and drawers).
- Semantic labeling with `aria-label`, `aria-expanded`, and `aria-live` for dynamic cart updates.
- Descriptive alternative text (`alt`) on all content images; decorative graphics marked with `alt=""` or `aria-hidden="true"`.
- Form inputs accompanied by explicit `<label>` tags and descriptive error announcements.

---

## 21. Performance Requirements & Core Web Vitals
- **Largest Contentful Paint (LCP)**: ≤ 2.0 seconds.
- **First Input Delay / INP**: ≤ 100 milliseconds.
- **Cumulative Layout Shift (CLS)**: ≤ 0.05.
- Next.js Image Optimization (`next/image`) for automatic WebP/AVIF transcoding, responsive `srcset`, and placeholder blur.
- Dynamic imports and code-splitting for heavy client components (e.g., payment modals, date pickers).
- Efficient server-side caching and stale-while-revalidate strategies for static catalog pages.

---

## 22. Responsive Design Requirements
- **Mobile First Approach**: Optimized touch targets (minimum 44x44px), thumb-friendly navigation drawer, and sticky checkout action bars.
- **Breakpoints**:
  - `sm`: 640px (large mobile phones)
  - `md`: 768px (tablets & portrait iPads)
  - `lg`: 1024px (laptops & landscape tablets)
  - `xl`: 1280px (desktop monitors)
  - `2xl`: 1536px (wide screens)
- Fluid typography and fluid spacing using CSS variables and clamp scales.

---

## 23. Technical Architecture
```text
┌─────────────────────────────────────────────────────────────┐
│                    Next.js App Router                       │
│        (React Server Components + Client Islands)           │
├──────────────────────────────┬──────────────────────────────┤
│         Presentation         │        API & Actions         │
│  - Tailwind CSS + Vanilla    │  - Server Actions            │
│  - Custom Design Tokens      │  - Next.js Route Handlers    │
│  - Lucide Icons              │  - Zod Validation            │
├──────────────────────────────┴──────────────────────────────┤
│                        Service Layer                        │
│  lib/supabase/client         lib/supabase/server            │
│  lib/razorpay/client         lib/services/orders            │
│  lib/services/treatments     lib/services/consultations     │
├──────────────────────────────┬──────────────────────────────┤
│       Data & Backend         │     External Integrations    │
│  - Supabase PostgreSQL (RLS) │  - Razorpay Orders & Webhook │
│  - Supabase Auth (SSR)       │  - Google OAuth via Supabase │
│  - Supabase Media Storage    │  - Transactional Email (Resend)
├──────────────────────────────┴──────────────────────────────┤
│                 Deployment & Edge Hosting                   │
│                     Vercel Platform                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 24. Design System & Brand Identity

### Brand Palette
- **Primary Dark Brown (`#2B241E`)**: Primary dark backgrounds, luxury typography, deep accents, headers, and footer base.
- **Ayurvedic Green (`#1D4F40`)**: Signature lotus brand tone, primary CTA buttons, active states, badges, and treatment accents.
- **Pure White (`#FFFFFF`)**: Clean backgrounds, card containers, and contrast elements.
- **Deep Black (`#000000`)**: High-contrast body text and crisp boundaries.
- **Warm Cream / Sand (`#FBF9F5`)**: Subtle background tint for soothing section alternations.
- **Muted Gold / Ochre Accent (`#C5A059`)**: Rare highlight accents for luxury certifications and star ratings.

### Typography
- **Display & Headings**: Elegant serif (e.g., *Cinzel*, *Playfair Display*, or *Cormorant Garamond*) for regal Ayurvedic authority.
- **Body & Interface**: High-legibility modern sans-serif (e.g., *Plus Jakarta Sans*, *Inter*, or *Outfit*) for crisp readability across mobile and desktop.

### Brand Asset
- **Logo**: `logo.png` located at `[logo.png](file:///d:/Vibe%20code/veda-mantra/logo.png)` containing the Ayurvedic Green Lotus and Dark Brown brand typography.

---

## 25. Page-by-Page Specifications

### 1. Home Page (`/`)
- **Hero Section**: Premium brand statement, dual CTAs (*Explore Treatments*, *Book Consultation*), high-aesthetic imagery.
- **Philosophy Intro**: Core Ayurvedic ethos of balance, doshas, and natural rejuvenation.
- **Featured Treatments Grid**: Top clinical Panchakarma and therapeutic offerings.
- **Why Ayur Veda Mantra**: Pillars of authenticity, certified Vaidyas, organic herbs, and clinical research.
- **Featured Products Carousel**: Top-selling herbal medicines and wellness oils with "Quick Add".
- **Doctor Consultation Banner**: Direct invite to book virtual or physical diagnosis.
- **Testimonials & Case Studies**: Verified patient recovery stories and wellness reviews.
- **Journal / Wisdom Section**: Educational Ayurvedic lifestyle articles.
- **Global Footer**.

### 2. About Page (`/about`)
- The founding vision of Ayur Veda Mantra Treatment & Research Centre.
- The lineage of Ayurvedic practice and medicinal herbal sourcing standards.
- Meet the Vaidyas / Doctors (Credentials, specializations, background).
- Clinic & Retreat facility gallery.

### 3. Treatments Listing & Detail (`/treatments`, `/treatments/[slug]`)
- avialable treatment are as below 

Body Therapies
 Abhyanga + Swedam
 Abhyanga + Kizhi
 Pada Abhyanga

Head & Face
 Face Abhyanga – Fascial Release
 Head Abhyanga – Hair Treatment

Specialised Treatments
 Shirodhara + Netra Dhara
 Sirovasti
 Tarpana (for Vision)

Pain Management
 Neck Pain Treatment Package
 Back Pain Treatment Package
 Knee Pain Treatment Package
- Rich detail pages with procedure steps, benefits, duration, and direct appointment booking hook.

### 4. Products Listing & Detail (`/products`, `/products/[slug]`)
- E-commerce catalog with search, filter, and sorting.
- Detail page with gallery, variant selection, ingredient transparency, reviews, and cart actions.

### 5. Consultation Booking (`/consultation`)
- Interactive step-by-step appointment booking engine with doctor selection, date/time pickers, and patient intake.

### 6. Contact Us (`/contact`)
- Clinic location map, opening hours, direct phone, email, and validated contact message form.

### 7. Auth & Account Pages (`/login`, `/signup`, `/account/*`)
- Secure authentication gates, user profile, order tracking, address book, and consultation history.

### 8. Legal Pages (`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`)
- Compliant legal, cancellation, and shipping guidelines.

---

## 26. API & Service Layer Requirements
- `POST /api/auth/callback` — Supabase OAuth & PKCE auth exchange handler.
- `GET /api/products` & `GET /api/products/[slug]` — Supabase product catalog queries with filter parameters.
- `GET /api/treatments` & `GET /api/treatments/[slug]` — Supabase treatment information queries.
- `POST /api/cart` & `PATCH /api/cart/items/[id]` — Cart synchronization and item mutations (Session / Supabase).
- `POST /api/checkout/razorpay/create-order` — Razorpay Orders API initialization with amount validation.
- `POST /api/payments/razorpay/verify` — Client payment verification endpoint.
- `POST /api/payments/razorpay/webhook` — Razorpay Webhook listener with HMAC SHA256 signature verification for order status updates.
- `POST /api/consultations/book` — Supabase appointment reservation and notification dispatch.
- `POST /api/contact` — Validated contact message receipt and email dispatch.

---

## 27. Error States & Handling
- **Input Validation Errors**: Inline field error messages with red-tinted borders and explicit helper text.
- **Payment Failure**: Dedicated failure screen explaining the cause (card declined, network timeout, user cancellation) with a "Try Again" or "Choose Another Method" CTA without losing cart contents.
- **Network / API Errors**: Non-intrusive toast alerts with retry capabilities.
- **404 Not Found & 500 Server Error Pages**: Branded, calm recovery pages guiding users back to the Homepage or Catalog.

---

## 28. Empty States
- **Empty Cart**: Calming illustration/message ("Your wellness basket is empty") with a prominent "Explore Products" or "Discover Treatments" CTA.
- **Empty Orders**: "You haven't placed any orders yet" with a button to shop herbal formulations.
- **Empty Consultations**: "No upcoming appointments" with a direct link to schedule a consultation.
- **No Search/Filter Results**: Helpful notice suggesting broader search terms or a "Reset Filters" button.

---

## 29. Loading States & Feedback
- **Page Transitions**: Smooth top-progress bar indicator.
- **Data Fetching**: Content-shaped skeleton loaders instead of jarring full-screen spinners.
- **Action Buttons**: Integrated spinner with disabled state while asynchronous actions (Add to Cart, Complete Payment, Submit Form) are in progress.
- **Toast Notifications**: Slide-in confirmations for "Added to Cart", "Address Saved", and "Appointment Booked".

---

## 30. Future Scalability & Extensibility
- **Multi-Clinic Locations**: Support for multiple physical treatment centers across Indian metro cities.
- **International Shipping & Currency Conversion**: Future multi-currency switcher (USD, EUR, GBP, AED) with global shipping tier integrations.
- **Doctor Tele-Medicine Portal**: Dedicated physician dashboard for video consultations, digital prescription authoring, and patient medical notes.
- **Personalized Dosha Quiz**: Interactive assessment tool calculating user constitution (Vata/Pitta/Kapha) and recommending tailored product/treatment regimens.

---

## 31. Acceptance Criteria & Definition of Done
A feature or page is strictly considered **DONE** when and only when:
1. **Design & Aesthetics**: Adheres strictly to the brand palette (`#2B241E`, `#1D4F40`, `#FFFFFF`), typography, and luxury editorial design rules.
2. **Responsiveness**: Flawlessly verified across mobile (375px), tablet (768px), and desktop (1440px).
3. **Data Integrity & Flow**: Connected to live database/API or standardized service layer; no orphaned mock data.
4. **Validation**: All user inputs sanitized and validated both client-side and server-side.
5. **State Coverage**: Loading skeletons, empty states, error fallbacks, and success feedback fully implemented.
6. **Security Verified**: Zero client-side credential exposure; server-side payment verification; protected user routes.
7. **SEO & Accessibility**: Metadata, structured data, semantic headings, and keyboard/screen-reader accessibility verified.
8. **Testing**: Code compiled without TypeScript or linting errors, and manually verified end-to-end.
9. **Documentation**: `progress.md` updated with exact task status and milestones.
