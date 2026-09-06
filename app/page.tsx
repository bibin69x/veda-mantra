import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { FeaturedTreatmentsSection } from "@/components/home/FeaturedTreatmentsSection";
import { PanchakarmaProcessSection } from "@/components/home/PanchakarmaProcessSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VedicWisdomSection } from "@/components/home/VedicWisdomSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (bg-brand-brown with full-width background) */}
      <HeroSection />

      {/* 2. Philosophy & Tri-Dosha Science (bg-white) */}
      <PhilosophySection />

      {/* 3. Featured Treatments (bg-brand-green) */}
      <FeaturedTreatmentsSection />

      {/* 4. The 3 Stages of Authentic Panchakarma (bg-brand-brown) */}
      <PanchakarmaProcessSection />

      {/* 5. Chief Physician Consultation Banner (bg-brand-green) */}
      <ConsultationBanner />

      {/* 6. Patient Healing Stories & Verified Testimonials (bg-white) */}
      <TestimonialsSection />

      {/* 7. Vedic Wisdom & Classical Teachings (bg-brand-green) */}
      <VedicWisdomSection />
    </div>
  );
}
