# Ayur Veda Mantra — Ayurveda Panchakarma Treatment & Research Centre

![Ayur Veda Mantra](/logo.png)

A luxury, full-stack Ayurvedic wellness and clinical healthcare digital flagship built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Supabase (PostgreSQL with RLS & Auth SSR)**, and **Razorpay Standard Payment Gateway**.

---

## 🌿 Project Overview

**Ayur Veda Mantra** bridges timeless classical Vedic healing traditions (*Charaka Samhita*, *Ashtanga Hridaya*, *Sushruta Samhita*) with a modern, editorial luxury digital experience. The platform supports:

1. **Panchakarma Clinical Therapies Catalog**: 11 classical therapies with 3-stage procedural guidance (*Purva Karma, Pradhana Karma, Paschat Karma*), clinical indications, and contraindications.
2. **Sacred Apothecary E-Commerce Store**: 12 proprietary formulations, cold-pressed oils, and immunity rasayanas with dynamic volume variant selection, Dosha affinity filters, and classical *Paka Vidhi* breakdowns.
3. **Universal Cart & Slide-Out Drawer**: State management with `localStorage` client persistence, gamified Free Delivery progress bar (Free > ₹999), and promo code validation.
4. **5-Step Doctor Consultation Booking Engine**: Dual-mode booking (Online Video Call ₹800 vs In-Clinic Nadi Pariksha Visit ₹1,200), doctor selection, 14-day interactive time slot picker, medical profile intake, and dynamic `.ics` calendar exports.
5. **E-Commerce Checkout & Order Receipts**: Multi-step Indian address validation, PIN code verification, and Razorpay standard checkout.
6. **Authentication & Patient Dashboard**: Supabase Auth (`/login`, `/register`, `/forgot-password`), order tracking ledger, medical case sheets, address book, and Prakriti Dosha settings.
7. **Legal Compliance & SEO**: DPDP Act 2023 compliant privacy policy, medical disclaimers, 7-day formulation replacement guarantee, and Google Knowledge Graph `MedicalBusiness` JSON-LD schemas.

---

## 🎨 Design System & Typography

- **Color Palette**:
  - Primary Dark Brown: `#2B241E`
  - Ayurvedic Forest Green: `#1D4F40`
  - Warm White: `#FFFFFF`
  - Sacred Cream: `#FBF9F5`
  - Muted Gold: `#C5A059`
- **Typography**:
  - Headings: `Cormorant Garamond` (Regal, editorial Vedic serif)
  - Interface & Body: `Plus Jakarta Sans` (Clean, highly readable sans-serif)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `18.17.0` or higher
- npm or yarn

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-org/ayur-veda-mantra.git
cd ayur-veda-mantra
npm install
```

### 3. Environment Variables Setup
Create a `.env.local` file by copying `.env.example`:
```bash
cp .env.example .env.local
```

Configure your credentials:
```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# Razorpay Payment Gateway (India)
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_your_key_id"
RAZORPAY_KEY_ID="rzp_test_your_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_secret"
RAZORPAY_WEBHOOK_SECRET="your_razorpay_webhook_secret"
```

### 4. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```
Pre-renders all **46 static and dynamic routes** with zero errors.

---

## 📁 Repository Structure

```
veda-mantra/
├── app/
│   ├── about/                   # Sanctum origin, lineage & Vaidya faculty
│   ├── account/                 # Customer dashboard & sub-modules
│   │   ├── addresses/           # Saved delivery addresses
│   │   ├── consultations/       # Scheduled video calls & case sheets
│   │   ├── orders/              # Order history & invoice downloads
│   │   └── profile/             # Patient details & Dosha profile
│   ├── cart/                    # Dedicated shopping cart page
│   ├── checkout/                # Checkout & address verification
│   │   └── success/             # Order confirmation receipt
│   ├── consultation/            # 5-Step doctor booking engine
│   ├── contact/                 # Inquiries form, clinic hours & FAQs
│   ├── forgot-password/         # Password recovery
│   ├── login/                   # Member sign-in with demo quick-login
│   ├── privacy-policy/          # DPDP Act 2023 privacy policy
│   ├── products/                # Apothecary catalog
│   │   └── [slug]/              # Dynamic PDP pre-rendering (12 routes)
│   ├── refund-policy/           # 7-day replacement guarantee
│   ├── register/                # Patient registration & Dosha prompt
│   ├── terms-and-conditions/    # Medical disclaimer & terms of sale
│   ├── treatments/              # Panchakarma treatment catalog
│   │   └── [slug]/              # Dynamic treatment procedural pages (11 routes)
│   ├── globals.css              # Custom utilities, animations & theme
│   └── layout.tsx               # Root layout with CartProvider & JSON-LD
├── components/
│   ├── account/                 # AccountNav sidebar
│   ├── cart/                    # CartDrawer component
│   ├── home/                    # Homepage hero, wisdom & doctor sections
│   ├── layout/                  # Sticky Header & luxury Footer
│   ├── products/                # ProductDetailClient interactive component
│   ├── seo/                     # MedicalBusiness JSON-LD schema
│   └── ui/                      # Badge, Button, Card, Container, SectionHeading
├── context/
│   └── CartContext.tsx          # Universal cart state with localStorage sync
├── data/
│   ├── doctors.ts               # Doctor credentials & health concerns
│   ├── products.ts              # 12 classical formulations & botanicals
│   ├── testimonials.ts          # Verified patient reviews
│   └── treatments.ts            # 11 Panchakarma therapies & procedures
├── lib/
│   ├── razorpay/                # Razorpay client & webhook handlers
│   ├── supabase/                # Supabase SSR browser & server helpers
│   └── utils.ts                 # Styling utilities (clsx & tailwind-merge)
└── public/
    └── logo.png                 # High-resolution brand emblem
```

---

## 🛡️ Security & Compliance

- **Server-Verified Payments**: Strict two-phase order fulfillment with Razorpay cryptographic HMAC-SHA256 signature verification.
- **Healthcare Privacy**: Patient data handling adhering to the **Digital Personal Data Protection (DPDP) Act 2023** and **GDPR**.
- **Data Protection**: Supabase PostgreSQL database protected with Row Level Security (RLS) policies.

---

## 📜 License

Private and proprietary. Developed for **Ayur Veda Mantra — Ayurveda Panchakarma Treatment & Research Centre**.
