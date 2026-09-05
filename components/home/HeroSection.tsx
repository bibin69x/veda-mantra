import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, Shield, Sparkles, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-brand-cream py-16 lg:py-24">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D4F40_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Ayurveda Panchakarma & Research Centre</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-brand-brown leading-[1.15] tracking-tight">
              Timeless Vedic Wisdom,{" "}
              <span className="italic font-light text-brand-green block sm:inline">
                Pure Holistic Healing.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-brown-muted max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Step into an authentic sanctuary of traditional Panchakarma detoxification, precision Nadi Pariksha pulse diagnosis, and pure classical herbal formulations crafted according to ancient Vedic scriptures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/consultation"
                variant="primary"
                size="lg"
                leftIcon={<Calendar className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-luxury"
              >
                Book Doctor Consultation
              </Button>
              <Button
                href="/treatments"
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore Treatments
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 sm:pt-8 border-t border-brand-brown-border/80 grid grid-cols-3 gap-4 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand-brown font-medium text-xs sm:text-sm">
                  <Award className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Classical Lineage</span>
                </div>
                <p className="text-[11px] sm:text-xs text-brand-brown-muted font-light">
                  Ashtanga Hridaya protocols
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand-brown font-medium text-xs sm:text-sm">
                  <Shield className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Certified Vaidyas</span>
                </div>
                <p className="text-[11px] sm:text-xs text-brand-brown-muted font-light">
                  Nadi Pariksha doctors
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand-brown font-medium text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>100% Pure Herbs</span>
                </div>
                <p className="text-[11px] sm:text-xs text-brand-brown-muted font-light">
                  Chemical-free decoctions
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                  alt="Ayurvedic Panchakarma and Herbal Oil Therapy"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-transparent to-transparent" />
                
                {/* Embedded Quote / Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-serif italic tracking-widest text-brand-gold-light uppercase">
                    Panchakarma Sanctum
                  </span>
                  <p className="font-serif text-lg font-medium text-white">
                    Restoring the sacred rhythm of body, mind, and spirit.
                  </p>
                </div>
              </div>

              {/* Floating Verified Stamp Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-sm shadow-luxury border border-brand-brown-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-serif font-bold text-base">
                  ॐ
                </div>
                <div>
                  <p className="text-xs font-serif font-semibold text-brand-brown">Ayurvedic Research</p>
                  <p className="text-[10px] text-brand-brown-muted">100% Classical Formulations</p>
                </div>
              </div>

              {/* Floating Rating Pill */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-brand-brown text-white p-4 rounded-sm shadow-luxury border border-brand-brown-light/50 flex items-center gap-3">
                <div className="text-brand-gold text-lg">★★★★★</div>
                <div className="text-left">
                  <p className="text-xs font-medium text-white">4.9/5 Rating</p>
                  <p className="text-[10px] text-brand-sand/70">Over 5,000+ Healed Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
