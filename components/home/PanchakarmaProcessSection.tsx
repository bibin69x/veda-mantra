import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, ShieldCheck, Droplets, Flame, HeartPulse } from "lucide-react";

const STAGES = [
  {
    step: "01",
    sanskrit: "Preparation Phase",
    title: "Purva Karma (Preparation)",
    subtitle: "Cellular Oleation & Toxin Mobilization",
    description:
      "Deep internal and external oleation (Snehana) using classical medicated ghees and warm herbal oils, paired with Dashamoola herbal steam (Swedana) to liquefy and dislodge chronic metabolic toxins (Ama) from cellular tissues into the digestive tract.",
    keyTherapies: ["Deepana & Pachana (Digestive Fire Kindle)", "Abhyanga (Warm Medicated Oil Massage)", "Swedam (Therapeutic Herbal Steam)"],
    icon: Droplets,
  },
  {
    step: "02",
    sanskrit: "Core Elimination Phase",
    title: "Pradhana Karma (Elimination)",
    subtitle: "The Five Sacred Purifications",
    description:
      "The core cleansing therapies prescribed strictly according to your pulse diagnosis: specialized herbal enemas (Basti), medicated nasal infusions (Nasya), gentle therapeutic purgation (Virechana), and targeted local therapies to root out biological toxins.",
    keyTherapies: ["Kashaya & Sneha Basti (Medicated Enemas)", "Nasya (Cranial & Sinus Infusion)", "Shirodhara & Local Kizhi Therapies"],
    icon: Flame,
  },
  {
    step: "03",
    sanskrit: "Post-Care & Rejuvenation",
    title: "Paschat Karma (Restoration)",
    subtitle: "Metabolic Reset & Rasayana Longevity",
    description:
      "Post-purification nourishment. Through a graduated Sastric dietary protocol (Samsarjana Krama), daily lifestyle counsel (Dinacharya), and potent herbal rasayanas, the newly cleared bodily channels absorb peak vital energy (Ojas) for lasting immunity.",
    keyTherapies: ["Samsarjana Krama (Graduated Dietetics)", "Classical Rasayana Vitality Tonics", "Personalized Lifestyle & Yoga Plan"],
    icon: HeartPulse,
  },
];

export function PanchakarmaProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-brown text-white relative overflow-hidden">
      <Container size="xl" className="relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-brown-light border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase">
            <span>Panchakarma Detoxification Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
            The Three Stages of Authentic Panchakarma
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto my-3" />
          <p className="text-xs sm:text-sm lg:text-base text-brand-sand/80 font-light leading-relaxed">
            True Ayurvedic detoxification is not a rushed spa procedure. It is a systematic, medically supervised 3-stage clinical transformation that eliminates toxins at the cellular root.
          </p>
        </div>

        {/* 3 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="bg-brand-brown-dark rounded-sm p-8 border border-brand-brown-light/60 flex flex-col justify-between space-y-6 hover:border-brand-gold/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Step Number & Sanskrit */}
                  <div className="flex items-center justify-between pb-3 border-b border-brand-brown-light/40">
                    <span className="font-serif text-3xl font-light text-brand-gold">
                      {stage.step}
                    </span>
                    <span className="text-xs font-serif italic text-brand-gold-light">
                      {stage.sanskrit}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-gold-light">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-sand/80 leading-relaxed font-light">
                    {stage.description}
                  </p>

                  {/* Key Therapies List */}
                  <div className="pt-3 border-t border-brand-brown-light/40 space-y-2">
                    <p className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider">
                      Key Inclusions:
                    </p>
                    {stage.keyTherapies.map((therapy, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-sand/90 font-light">
                        <span className="text-brand-gold">✦</span>
                        <span>{therapy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-brand-sand/60 font-light block">
                    Supervised daily by Dr. Anupama Ramachandran
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/consultation"
            variant="gold"
            size="lg"
            leftIcon={<Calendar className="w-4 h-4" />}
          >
            Schedule Panchakarma Consultation
          </Button>
          <Button
            href="/treatments"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="border-white/30 text-white hover:bg-white hover:text-brand-brown"
          >
            Explore All Panchakarma Packages
          </Button>
        </div>
      </Container>
    </section>
  );
}
