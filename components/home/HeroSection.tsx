import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, ShieldCheck, Award, HeartPulse, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-brown text-white">
      {/* 1. Immersive Full-Width Background Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
          alt="Authentic Ayurvedic Panchakarma & Natural Healing Sanctum"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Layered luxury scrim & gradient overlays for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/85 to-brand-brown/65" />
        <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply" />
      </div>

      {/* 2. Hero Content Container */}
      <Container size="xl" className="relative z-10 py-20 sm:py-28 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-brown-light/80 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase backdrop-blur-md shadow-lg">
            <span>Ayurveda Panchakarma Treatment & Research Centre</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-white leading-[1.12] tracking-tight">
            Sacred Lineage. Precision Pulse Diagnosis.{" "}
            <span className="italic text-brand-gold-light block sm:inline font-light">
              Timeless Panchakarma Healing.
            </span>
          </h1>

          {/* Sanskrit Lineage Mantra & Subtitle */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="font-serif italic text-base sm:text-lg text-brand-sand/90 tracking-wide">
              &ldquo;शरीरेन्द्रियसत्त्वात्मसंयोगो धारि जीवितम्&rdquo;
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-brand-sand/80 font-light leading-relaxed">
              Experience the profound depth of classical Ayurvedic medicine. Guided by Chief Physician{" "}
              <strong className="text-brand-gold-light font-medium">Dr. Anupama Ramachandran</strong> (15+ Years Clinical Experience), we restore constitutional equilibrium through authentic Panchakarma therapies, Nadi Pariksha, and individualized herbal healing.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/consultation"
              variant="gold"
              size="lg"
              leftIcon={<Calendar className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Doctor Consultation
            </Button>
            <Button
              href="/treatments"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-brand-brown backdrop-blur-sm"
            >
              Explore Panchakarma Therapies
            </Button>
          </div>

          {/* Clinical Trust & Lineage Pillars */}
          <div className="pt-10 sm:pt-14 border-t border-brand-sand/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-brand-gold font-medium text-xs sm:text-sm">
                <Award className="w-4 h-4 shrink-0" />
                <span>15+ Years Mastery</span>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-sand/70 font-light">
                Chief Physician Dr. Anupama
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-brand-gold font-medium text-xs sm:text-sm">
                <HeartPulse className="w-4 h-4 shrink-0" />
                <span>Nadi Pariksha</span>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-sand/70 font-light">
                Classical Pulse Diagnosis
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-brand-gold font-medium text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Sastric Fidelity</span>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-sand/70 font-light">
                Charaka Samhita Protocols
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-brand-gold font-medium text-xs sm:text-sm">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Dual Mode Care</span>
              </div>
              <p className="text-[11px] sm:text-xs text-brand-sand/70 font-light">
                Online & In-Clinic Sanctum
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
