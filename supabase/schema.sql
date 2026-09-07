-- ==============================================================================
-- AYUR VEDA MANTRA — PRODUCTION SUPABASE POSTGRESQL SCHEMA
-- Classical Ayurveda Panchakarma Treatment & Research Centre
-- ==============================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Custom Enumeration Types
DO $$ BEGIN
    CREATE TYPE consultation_mode AS ENUM ('online', 'clinic');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE consultation_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled', 'rescheduled');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'failed', 'refunded');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE order_status AS ENUM ('placed', 'processing', 'shipped', 'out_for_delivery', 'delivered', 'cancelled', 'returned');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('patient', 'doctor', 'staff', 'admin');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ==============================================================================
-- 3. Profiles Table (Linked to Supabase auth.users)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    dosha_prakriti TEXT DEFAULT 'Tridoshic (Vata-Pitta-Kapha)',
    role user_role DEFAULT 'patient',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 4. Doctors Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.doctors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    sanskrit_title TEXT,
    title TEXT NOT NULL,
    degrees TEXT NOT NULL,
    experience_years TEXT NOT NULL,
    bio TEXT NOT NULL,
    image_url TEXT NOT NULL,
    specialties TEXT[] DEFAULT '{}',
    languages TEXT[] DEFAULT '{}',
    online_fee INTEGER NOT NULL DEFAULT 800,
    clinic_fee INTEGER NOT NULL DEFAULT 1200,
    available_days TEXT[] DEFAULT '{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}',
    rating NUMERIC(3,2) DEFAULT 4.98,
    review_count INTEGER DEFAULT 520,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 5. Panchakarma Treatments Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.treatments (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    sanskrit_name TEXT NOT NULL,
    category TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL,
    sessions INTEGER DEFAULT 1,
    price INTEGER NOT NULL,
    original_price INTEGER,
    summary TEXT NOT NULL,
    hero_image TEXT NOT NULL,
    clinical_benefits TEXT[] DEFAULT '{}',
    procedure_steps JSONB DEFAULT '[]'::jsonb,
    contraindications TEXT[] DEFAULT '{}',
    sastric_references TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 6. Apothecary Products Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.products (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    sanskrit_name TEXT NOT NULL,
    category TEXT NOT NULL,
    subcategory TEXT,
    price INTEGER NOT NULL,
    original_price INTEGER,
    volume TEXT NOT NULL,
    rating NUMERIC(3,2) DEFAULT 4.95,
    reviews_count INTEGER DEFAULT 120,
    stock_count INTEGER DEFAULT 100,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    hero_image TEXT NOT NULL,
    gallery_images TEXT[] DEFAULT '{}',
    ingredients JSONB DEFAULT '[]'::jsonb,
    benefits TEXT[] DEFAULT '{}',
    how_to_use TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 7. Consultations Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.consultations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_reference TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    doctor_id TEXT REFERENCES public.doctors(id) DEFAULT 'dr-anupama-ramachandran',
    mode consultation_mode NOT NULL DEFAULT 'online',
    concerns TEXT[] DEFAULT '{}',
    appointment_date DATE NOT NULL,
    appointment_time TEXT NOT NULL,
    patient_name TEXT NOT NULL,
    patient_email TEXT NOT NULL,
    patient_phone TEXT NOT NULL,
    patient_age INTEGER,
    patient_gender TEXT,
    preferred_language TEXT DEFAULT 'English',
    symptoms TEXT,
    medical_history TEXT,
    fee INTEGER NOT NULL,
    gst_amount INTEGER NOT NULL,
    total_amount INTEGER NOT NULL,
    payment_status payment_status DEFAULT 'pending',
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    status consultation_status DEFAULT 'confirmed',
    meeting_url TEXT,
    clinical_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 8. E-Commerce Orders Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    subtotal INTEGER NOT NULL,
    shipping_fee INTEGER NOT NULL DEFAULT 0,
    discount INTEGER NOT NULL DEFAULT 0,
    total INTEGER NOT NULL,
    payment_method TEXT NOT NULL DEFAULT 'razorpay',
    payment_status payment_status DEFAULT 'pending',
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    order_status order_status DEFAULT 'placed',
    tracking_number TEXT,
    courier_partner TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 9. Order Items Table
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    product_slug TEXT NOT NULL REFERENCES public.products(slug),
    product_name TEXT NOT NULL,
    unit_price INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    total_price INTEGER NOT NULL,
    image_url TEXT
);

-- ==============================================================================
-- 10. Saved User Delivery Addresses
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.user_addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    label TEXT DEFAULT 'Home',
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 11. Patient Inquiries & Contact Submissions
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    health_concern TEXT,
    preferred_mode TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 12. Row Level Security (RLS) Policies
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read/update their own profile
CREATE POLICY "Profiles are viewable by owner" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Profiles can be updated by owner" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Doctors, Treatments, Products: Public Read
CREATE POLICY "Doctors are viewable by everyone" ON public.doctors
    FOR SELECT USING (is_active = true);

CREATE POLICY "Treatments are viewable by everyone" ON public.treatments
    FOR SELECT USING (is_active = true);

CREATE POLICY "Products are viewable by everyone" ON public.products
    FOR SELECT USING (is_active = true);

-- Consultations: Owners can view, Any visitor can insert booking
CREATE POLICY "Users can view own consultations" ON public.consultations
    FOR SELECT USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = patient_email);

CREATE POLICY "Anyone can create a consultation booking" ON public.consultations
    FOR INSERT WITH CHECK (true);

-- Orders: Owners can view, Any checkout can insert
CREATE POLICY "Users can view own orders" ON public.orders
    FOR SELECT USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = email);

CREATE POLICY "Anyone can insert orders" ON public.orders
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own order items" ON public.order_items
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.orders
            WHERE orders.id = order_items.order_id
            AND (orders.user_id = auth.uid() OR orders.email = auth.jwt() ->> 'email')
        )
    );

CREATE POLICY "Anyone can insert order items" ON public.order_items
    FOR INSERT WITH CHECK (true);

-- User Addresses: User specific
CREATE POLICY "Users can manage own addresses" ON public.user_addresses
    FOR ALL USING (auth.uid() = user_id);

-- Inquiries: Public insert
CREATE POLICY "Anyone can insert inquiries" ON public.inquiries
    FOR INSERT WITH CHECK (true);

-- ==============================================================================
-- 13. Automatic User Profile Creation Trigger
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, phone, avatar_url, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
        COALESCE(NEW.raw_user_meta_data->>'phone', ''),
        COALESCE(NEW.raw_user_meta_data->>'avatar_url', ''),
        'patient'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ==============================================================================
-- 14. Seed Clinical Data: Chief Physician Dr. Anupama Ramachandran
-- ==============================================================================
INSERT INTO public.doctors (
    id, name, sanskrit_title, title, degrees, experience_years, bio, image_url,
    specialties, languages, online_fee, clinic_fee, available_days, rating, review_count
) VALUES (
    'dr-anupama-ramachandran',
    'Dr. Anupama Ramachandran',
    'मुख्य आयुर्वेदाचार्या',
    'Chief Physician & Senior Panchakarma Specialist',
    'BAMS, MD (Ayurveda), Senior Pulse Diagnosis (Nadi Pariksha) Consultant',
    '15+ Years Clinical Experience',
    'With over 15 years of dedicated classical clinical practice, Dr. Anupama Ramachandran is the Chief Physician leading Ayur Veda Mantra. Specializing in classical Panchakarma protocols, Nadi Pariksha pulse diagnosis, chronic musculoskeletal recovery, and personalized Ayurvedic constitutional healing, Dr. Anupama combines ancient Sastric precision with compassionate, patient-centered clinical care.',
    '/Dr. Anupama Ramachandran.jpeg',
    ARRAY['Classical Panchakarma & Detox', 'Nadi Pariksha (Pulse Diagnosis)', 'Spine, Joint & Musculoskeletal Care', 'Women''s Health & Hormonal Balance', 'Digestive & Chronic Metabolic Disorders'],
    ARRAY['English', 'Hindi', 'Malayalam', 'Tamil'],
    800,
    1200,
    ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    4.98,
    520
) ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    degrees = EXCLUDED.degrees,
    experience_years = EXCLUDED.experience_years,
    bio = EXCLUDED.bio,
    specialties = EXCLUDED.specialties;
