import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Stethoscope, Sparkles, BookOpen, Check } from "lucide-react";

const PILLARS = [
  {
    icon: Stethoscope,
    title: "Classical Nadi Pariksha",
    description: "Deep pulse examination by Chief Physician Dr. Anupama Ramachandran, detecting subtle Dosha imbalances before symptoms manifest.",
  },
  {
    icon: Sparkles,
    title: "Authentic Panchakarma Theaters",
    description: "Equipped with traditional hand-carved medicinal wood Dronis (treatment tables) and certified bronze Dhara vessels.",
  },
  {
    icon: ShieldCheck,
    title: "100% Wildcrafted Botanicals",
    description: "We use exclusively pure, lab-tested organic herbs, A2 Gir cow medicated ghee, and cold-pressed therapeutic oils.",
  },
  {
    icon: BookOpen,
    title: "Vedic Research & Evidence",
    description: "Rooted in the Ashtanga Hridaya and Charaka Samhita scriptures, validated with modern clinical monitoring.",
  },
];

export function WhyAyurVedaSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-brand-brown-border overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=80"
                alt="Ayur Veda Mantra Treatment Centre"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1.5 sm:space-y-2">
                <span className="text-[11px] sm:text-xs font-serif italic text-brand-gold-light uppercase tracking-widest">
                  Sanctuary of Healing
                </span>
                <p className="font-serif text-lg sm:text-xl font-normal text-white leading-snug">
                  Designed for profound physical, cellular, and mental purification.
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-brand-brown text-white p-4 sm:p-6 rounded-sm shadow-xl sm:shadow-2xl sm:max-w-xs border border-brand-gold/20">
              <p className="font-serif text-xl sm:text-2xl text-brand-gold font-normal">15+ Years</p>
              <p className="text-xs text-brand-sand/80 mt-1 font-light leading-relaxed">
                Of clinical dedication to authentic Ayurvedic and Panchakarma healing.
              </p>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <SectionHeading
              sanskritSubtitle="परम्परा एवं प्रामाणिकता"
              tagline="Why Ayur Veda Mantra"
              title="A Sacred Standard of Clinical Authenticity"
              description="We do not offer generic spa rituals. Ayur Veda Mantra operates as a dedicated Ayurvedic treatment and research sanctuary where therapies are tailored specifically to your unique bio-energy."
              align="left"
              className="mb-6 sm:mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="space-y-2.5 p-4 sm:p-5 rounded-sm bg-white border border-brand-brown-border shadow-sm hover:border-brand-green transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-medium text-brand-brown">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-brand-brown-muted leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Checklist of Guarantees */}
            <div className="pt-4 border-t border-brand-brown-border/60 space-y-2.5">
              <div className="flex items-start gap-3 text-xs text-brand-brown font-light">
                <div className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Zero chemical preservatives, synthetic fragrances, or adulterated oils.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-brand-brown font-light">
                <div className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Custom dietetic & lifestyle regimen provided with every therapy package.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
