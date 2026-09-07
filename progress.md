# Ayur Veda Mantra — Development Progress & Production Roadmap

## Current Phase

Phase 12 — Full-Site Pure 3-Color Background Palette Adaptation & Clinical Harmonization

## Overall Status

🟢 **Production Build Verified (51/51 Routes Pre-Rendered with Zero Errors — Strict White, Brand Brown `#2B241E`, and Brand Green `#1D4F40` Design System)**

---

## 1. Executive Summary of Recent Milestones

- **Single Chief Physician Transition**: Updated all doctor references across the entire application to feature exclusively **Dr. Anupama Ramachandran** (15+ Years Clinical Experience, BAMS, MD (Ayurveda), Senior Nadi Pariksha Specialist).
- **Google Analytics, GTM & GSC Integration**: Created `components/seo/Analytics.tsx` and injected GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`), Google Tag Manager (`NEXT_PUBLIC_GTM_ID`), and Google Search Console verification meta (`NEXT_PUBLIC_GSC_VERIFICATION`) into `app/layout.tsx`.
- **Production Supabase PostgreSQL Schema**: Created comprehensive `supabase/schema.sql` containing all 9 core clinical/e-commerce tables, RLS security policies, automated profile triggers, and seed data.
- **Dynamic SEO Indexing**: Generated dynamic `app/sitemap.ts` and `app/robots.ts` covering all 51 static and dynamic routes.
- **Production API Endpoints**: Implemented `/api/consultation`, `/api/contact`, and `/api/webhooks/razorpay` (with crypto HMAC-SHA256 signature verification).

---

## 2. Completed Architecture & Features (51 Routes)

### A. Chief Doctor & Consultation Engine
- [x] **Doctor Data Model (`data/doctors.ts`)**: Real single Chief Physician configuration:
  - **Name**: Dr. Anupama Ramachandran
  - **Title**: Chief Physician & Senior Panchakarma Specialist (`मुख्य आयुर्वेदाचार्या`)
  - **Degrees**: BAMS, MD (Ayurveda), Senior Nadi Pariksha Consultant
  - **Experience**: 15+ Years Classical Clinical Experience
  - **Consultation Rates**: Online Video Consultation ₹800 | In-Clinic Nadi Pariksha Visit ₹1,200
  - **Specialties**: Classical Panchakarma & Detox, Nadi Pariksha, Spine & Musculoskeletal Care, Women's Health & Hormonal Balance, Chronic Metabolic Disorders
  - **Languages**: English, Hindi, Malayalam, Tamil
- [x] **5-Step Doctor Booking Wizard (`/consultation`)**:
  - Step 1: Mode Selection (Online Video Call vs. In-Clinic Sanctum Visit) + 6 Ayurvedic health concern categories.
  - Step 2: Vaidya Selection (Single Chief Physician spotlight with credentials and clinical focus).
  - Step 3: Interactive 14-Day Calendar & Time Slot Picker.
  - Step 4: Medical Intake Sheet (Full name, phone, email, age, gender, language, symptoms, health history).
  - Step 5: Review Summary, GST computation, Razorpay payment trigger, instant booking reference, and dynamic `.ics` calendar invite export.

### B. Analytics & Search Engine Verification
- [x] **Analytics Component (`components/seo/Analytics.tsx`)**:
  - Google Tag Manager container script (`strategy="afterInteractive"`) with `<noscript>` iframe in `app/layout.tsx`.
  - Google Analytics 4 (`gtag.js`) automatic page view and route change tracking.
  - Client-side `logAnalyticsEvent()` helper for custom conversion tracking (e.g. `add_to_cart`, `begin_checkout`, `book_consultation`).
- [x] **Google Search Console**: Integrated `verification: { google: ... }` in Next.js `metadata`.
- [x] **Dynamic Sitemap & Robots (`app/sitemap.ts`, `app/robots.ts`)**: Automatic XML sitemap generation with priority weighting and crawler directives.
- [x] **JSON-LD Structured Data (`components/seo/JsonLd.tsx`)**: `MedicalBusiness` Knowledge Graph schema injected in `<head>`.

### C. Supabase Database & Auth Architecture
- [x] **PostgreSQL Schema (`supabase/schema.sql`)**:
  - `profiles`: Patient records, Dosha constitution, phone, role.
  - `doctors`: Physician credentials, fees, availability, ratings.
  - `treatments`: Panchakarma procedures, step-by-step protocols, Sastric citations.
  - `products`: Formulations, botanical ingredients, pricing, inventory.
  - `consultations`: Appointments, booking references, symptoms, Razorpay payment IDs, meeting links.
  - `orders` & `order_items`: E-commerce orders, delivery addresses, tracking numbers.
  - `inquiries`: Patient contact form submissions.
  - `user_addresses`: Multi-address book for quick checkout.
- [x] **Security & Automation**:
  - Row Level Security (RLS) enabled on all 9 tables.
  - `handle_new_user()` trigger on `auth.users` for automatic profile creation.
  - Client (`lib/supabase/client.ts`) and Server SSR (`lib/supabase/server.ts`) helpers.

### D. Core Website & User Experience
- [x] **Homepage (`/`)**: Rebuilt with strict 3-color background palette (**White**, **Brand Brown `#2B241E`**, and **Brand Green `#1D4F40`**):
  - 1. *Hero Section* (`bg-brand-brown` with full-bleed atmospheric background, Dr. Anupama focus, and consultation/treatment CTAs).
  - 2. *Philosophy & Tri-Dosha Science* (`bg-white` with clean white cards and Vedic elements).
  - 3. *Featured Panchakarma Treatments* (`bg-brand-green` with 11 clinical therapy packages).
  - 4. *Why Ayur Veda Mantra & Clinical Pillars* (`bg-white` with treatment sanctum visuals).
  - 5. *3-Stage Authentic Panchakarma Process* (`bg-brand-brown` detailing Purva Karma, Pradhana Karma, and Paschat Karma).
  - 6. *Chief Physician Consultation Banner* (`bg-brand-green` featuring Dr. Anupama Ramachandran).
  - 7. *Patient Healing Stories & Testimonials* (`bg-white` with clean clinical reviews).
  - 8. *Vedic Wisdom & Classical Teachings* (`bg-brand-green` with classical Shastra insights and emerald-tinted cards).
- [x] **About Page (`/about`)**: Lineage, Charaka Samhita shloka, 4 guiding pillars, Dr. Anupama Ramachandran spotlight, Treatment Sanctum architecture.
- [x] **Treatments Catalog & Dynamic PDPs (`/treatments`, `/treatments/[slug]`)**: 11 clinical treatment pages with contraindications, step-by-step stages, and sticky booking sidebar.
- [x] **Apothecary Products Catalog & Dynamic PDPs (`/products`, `/products/[slug]`)**: 12 Sastric formulations with botanical ingredient breakdown, Ayurvedic actions, and customer reviews.
- [x] **Cart Drawer & Checkout (`/cart`, `/checkout`, `/checkout/success`)**: Slide-out cart drawer, free shipping progress bar, Indian address validation, Razorpay checkout, printable receipt.
- [x] **Authentication & Patient Dashboard (`/login`, `/register`, `/forgot-password`, `/account/*`)**: Overview, Order History, Doctor Consultations, Saved Addresses, Profile Settings.
- [x] **Contact & Legal Infrastructure (`/contact`, `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`)**: Inquiry dispatch form, DPDP Act 2023 compliance, medical disclaimer, formulation replacement policy.

---

## 3. Comprehensive Backend & Operational Gaps Audit (Critical Deficiencies & Missing Workflows)

Below is the detailed diagnostic of current workflows, where data goes today, and the missing infrastructure needed for live business operations:

### 🔴 Gap 1: Where do Appointment Bookings go?
* **Current State**:
  * Patient completes 5-step wizard at `/consultation` and clicks book/pay.
  * Submits payload to `POST /api/consultation`.
  * `/api/consultation` attempts to insert the appointment into Supabase `consultations` table.
  * **Critical Flaw**: If Supabase environment variables are missing or disconnected, it catches the error with `console.warn` and returns a mock success response `{ success: true, bookingReference: "AVM-..." }`. The patient sees a success screen, but **the data vanishes** into thin air if database keys are not connected.
* **Missing Features**:
  * ❌ No email notification sent to Chief Physician / Clinic Admin (`admin@ayurvedamantra.com`).
  * ❌ No confirmation email sent to the patient with appointment details, Google Meet link, Sastric fasting/preparation protocols, or clinic directions.
  * ❌ No live Google Calendar / Google Meet API integration (currently generates a static placeholder link `meet.ayurvedamantra.com/...` or client `.ics` download).
  * ❌ No Admin Appointment Portal for reception staff to view daily slots, mark attendance, or review patient medical history.

---

### 🔴 Gap 2: Where does Purchase & Checkout Information go?
* **Current State**:
  * Patient adds products to basket, enters Indian delivery address, selects payment method, and clicks "Place Order" at `/checkout`.
  * `handlePlaceOrder()` in `app/checkout/page.tsx` runs a client-side `setTimeout` (1.5s simulation).
  * It stores order data **exclusively in browser `sessionStorage`** under `latest_order_receipt` to render the confirmation screen at `/checkout/success`.
  * **Critical Flaw**: **It NEVER calls any backend API!** The order is never saved to the database (`orders` and `order_items` tables in Supabase remain completely empty). If the user closes their browser, the order record is permanently gone.
* **Missing Features**:
  * ❌ No `POST /api/orders` API endpoint to validate items, compute GST, verify inventory, and persist the order in Supabase.
  * ❌ Clinic staff / pharmacy managers have **zero visibility** into who bought what product, where to ship it, or what address to label.
  * ❌ No Admin Order Dashboard to view orders, update fulfillment status (Processing -> Shipped -> Delivered), or assign tracking numbers (Delhivery, Bluedart, Speed Post).

---

### 🔴 Gap 3: Email Providers & Transactional Invoices
* **Current State**:
  * **Zero email service packages** are installed in `package.json` (no Resend, SendGrid, Postmark, or Nodemailer).
  * No email sending infrastructure or SMTP credentials configured.
* **Missing Features**:
  * ❌ **Customer Order Confirmation & Tax Invoice Email**: Automatic PDF/HTML receipt with itemized GST breakdown (CGST/SGST), billing/shipping address, and dispatch timeframe.
  * ❌ **Admin New Order Alert Email**: Instant email to the pharmacy dispatch team (`orders@ayurvedamantra.com`) with customer details, phone number, address, and packing list.
  * ❌ **Patient Doctor Appointment Email**: Full consultation details, appointment time slot, preparation guidelines, and video meeting credentials.
  * ❌ **Doctor / Clinic Reception Alert Email**: Instant alert to Dr. Anupama / front desk with patient name, age, phone number, reported symptoms, and medical intake sheet.
  * ❌ **Contact Form Dispatch Email**: When a patient submits `/contact`, no notification is sent to clinic staff or patient.

---

### 🔴 Gap 4: Admin Dashboard & Internal Management Portal
* **Current State**:
  * The site only has a **Patient Dashboard** (`/account/*`), currently displaying demo data for Radhika Sharma.
  * There is **NO Admin Portal** for the clinic team.
* **Missing Features**:
  * ❌ **Admin Orders Management (`/admin/orders`)**: Table of all e-commerce purchases, customer contact, shipping addresses, ordered herbs, payment status, and order dispatch controls.
  * ❌ **Admin Consultations Calendar (`/admin/consultations`)**: Daily/weekly schedule of Dr. Anupama's appointments, intake sheets, patient symptoms, and video join links.
  * ❌ **Admin Inquiries Inbox (`/admin/inquiries`)**: Viewer for contact form inquiries submitted via `/contact`.
  * ❌ **Admin Authentication & Role Gate**: Role-based access control (`role: 'admin'`) ensuring only clinic staff can access admin records.

---

### 🔴 Gap 5: Payment Gateway Server-Side Order Creation
* **Current State**:
  * Razorpay webhook listener is configured in `app/api/webhooks/razorpay/route.ts` with HMAC signature verification.
  * Checkout currently simulates payment completion.
* **Missing Features**:
  * ❌ Missing `POST /api/razorpay/create-order` endpoint to securely generate official Razorpay Order IDs (`order_...`) before opening the checkout modal.
  * ❌ Missing client-side payment verification handshake to verify signature and mark orders/consultations as `paid` in the database.

---

## 4. Master Checklist of Missing Items & Action Plan

| # | Missing Component | Priority | Status | Action Required |
|---|---|---|---|---|
| **1** | **Backend Orders API (`/api/orders`)** | 🚨 Critical | Missing | Create `app/api/orders/route.ts` to validate checkout, compute taxes, and save to Supabase `orders` & `order_items` tables. |
| **2** | **Wire Checkout to API** | 🚨 Critical | Missing | Update `app/checkout/page.tsx` to call `/api/orders` instead of just writing to `sessionStorage`. |
| **3** | **Transactional Email Service (Resend / Nodemailer)** | 🚨 Critical | Missing | Install email SDK (e.g. `resend`), set `RESEND_API_KEY`, and build email dispatch helper in `lib/email/`. |
| **4** | **HTML Email Templates** | 🚨 Critical | Missing | Build responsive, branded email templates for Order Invoices, Appointment Confirmations, Doctor Alerts, and Contact Form Alerts. |
| **5** | **Admin Dashboard (`/admin/*`)** | 🚨 High | Missing | Build internal staff dashboard to view real-time orders, shipping addresses, consultations schedule, and contact inquiries. |
| **6** | **Admin Email Routing Configuration** | 🚨 High | Missing | Define environment variables (`ADMIN_EMAIL=admin@ayurvedamantra.com`, `DOCTOR_EMAIL=doctor@ayurvedamantra.com`, `ORDERS_EMAIL=orders@ayurvedamantra.com`). |
| **7** | **Razorpay Server Order Creation** | 🚨 High | Missing | Implement `app/api/razorpay/create-order/route.ts` for real payment processing. |
| **8** | **Supabase Auth Integration** | 🟡 Medium | Prototype Mode | Connect real user signup/login to Supabase Auth (`auth.users`) to link orders and consultations to authenticated patient accounts. |
| **9** | **Cloud Supabase Setup** | 🟡 Medium | Ready for deploy | Create Supabase project, execute `supabase/schema.sql`, and populate `.env.local` with real URL and service role keys. |

---

## 5. Technical Implementation Roadmap for Missing Backend Features

```mermaid
graph TD
    subgraph "1. E-Commerce Order Flow"
        A["Patient Checkout (/checkout)"] --> B["POST /api/orders"]
        B --> C["Supabase (orders & order_items)"]
        B --> D["Email Service (Resend)"]
        D --> E["Customer: GST Tax Invoice Email"]
        D --> F["Admin: Pharmacy Packing & Dispatch Alert"]
    end

    subgraph "2. Doctor Consultation Flow"
        G["Patient Booking (/consultation)"] --> H["POST /api/consultation"]
        H --> I["Supabase (consultations)"]
        H --> J["Email Service (Resend)"]
        J --> K["Patient: Appointment Confirmation + Preparation Guide"]
        J --> L["Doctor: Intake Sheet + Symptoms Alert"]
    end

    subgraph "3. Admin Staff Portal"
        M["Clinic Admin Login (/admin)"] --> N["Orders Manager (View addresses, update dispatch)"]
        M --> O["Consultations Schedule (View patient intake, daily slots)"]
        M --> P["Inquiry Inbox (Manage contact leads)"]
    end
```

---

## 6. Page-by-Page Real Data Customization Roadmap

We will customize the website page-by-page in the following sequential order:

### 📍 Step 1: Homepage (`/`)
- Replace hero tagline and intro copy with client's exact brand phrasing.
- Update clinic stats (e.g. patients healed, years in practice).
- Verify doctor banner details for Dr. Anupama Ramachandran.

### 📍 Step 2: About Us Page (`/about`)
- Customize the founding lineage story and clinic heritage.
- Finalize Dr. Anupama Ramachandran's bio, educational degrees, and clinical specializations.
- Update sanctuary facilities (therapy rooms, steam sanctums).

### 📍 Step 3: Panchakarma Treatments (`/treatments` & `/treatments/[slug]`)
- Audit all 11 treatment packages against client's exact clinic offerings:
  - Exact session pricing and multi-day package costs.
  - Duration in minutes (e.g. 60m vs 90m).
  - Authentic Sanskrit shloka references and clinical contraindications.

### 📍 Step 4: Apothecary Products (`/products` & `/products/[slug]`)
- Audit all 12 herbal formulations against client's inventory:
  - Actual MRP pricing and bottle volumes (e.g. 100ml, 200ml, 500g).
  - Exact botanical ingredients with Ayurvedic botanical Latin names.
  - Product packaging photography.

### 📍 Step 5: Doctor Consultation Booking Engine (`/consultation`)
- Set clinic working hours and real available appointment slots.
- Confirm online consultation fee (₹800) and in-clinic consultation fee (₹1,200).
- Customize patient intake questions if specialized medical history fields are needed.

### 📍 Step 6: Contact Page (`/contact`)
- Enter exact physical clinic address, PIN code, and Google Maps location.
- Enter clinic helpline phone number and official WhatsApp support number.
- Adjust clinic operating days and consultation hours.

### 📍 Step 7: Legal & Policy Pages (`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`)
- Add clinic's registered legal entity name, GSTIN number, and registered office.
- Finalize cancellation and medicine return policies.

### 📍 Step 8: Cloud Setup & Production Deployment
- Connect cloud Supabase instance and execute `supabase/schema.sql`.
- Add live Razorpay, Email (Resend), and Google Analytics credentials to production environment variables.
- Deploy to Vercel and map custom domain (`ayurvedamantra.com`).

---

## 7. Verification & Build Logs

- **Build Command**: `npm.cmd run build`
- **Output**: **51 / 51 pages pre-rendered successfully (Exit Code 0)**
- **TypeScript**: 0 errors
- **ESLint**: 0 warnings
- **Core Web Vitals**: Zero layout shift, optimized fonts (`next/font`), static pre-rendering across all treatment PDPs and product PDPs.

