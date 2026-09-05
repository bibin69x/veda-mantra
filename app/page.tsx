import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { FeaturedTreatmentsSection } from "@/components/home/FeaturedTreatmentsSection";
import { WhyAyurVedaSection } from "@/components/home/WhyAyurVedaSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VedicWisdomSection } from "@/components/home/VedicWisdomSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Philosophy & Tri-Dosha Science */}
      <PhilosophySection />

      {/* 3. Featured Treatments (Body, Head & Face, Specialised, Pain Management) */}
      <FeaturedTreatmentsSection />

      {/* 4. Why Ayur Veda Mantra (Sanctuary & Clinical Pillars) */}
      <WhyAyurVedaSection />

      {/* 5. Classical Herbal Formulations & Oils */}
      <FeaturedProductsSection />

      {/* 6. Doctor Consultation Banner (Nadi Pariksha Booking) */}
      <ConsultationBanner />

      {/* 7. Patient Healing Stories & Verified Testimonials */}
      <TestimonialsSection />

      {/* 8. Vedic Wisdom & Lifestyle Teachings */}
      <VedicWisdomSection />
    </div>
  );
}
