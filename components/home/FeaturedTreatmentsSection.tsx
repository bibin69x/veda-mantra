"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TREATMENTS, TREATMENT_CATEGORIES, Treatment } from "@/data/treatments";
import { Clock, CheckCircle2, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { cn, formatINR } from "@/lib/utils";

export function FeaturedTreatmentsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Treatments");

  const filteredTreatments =
    activeCategory === "All Treatments"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-brand-green text-white relative overflow-hidden">
      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-dark border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Classical Therapies & पञ्चकर्म</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
            Authentic Ayurvedic Clinical Treatments
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto my-3" />
          <p className="text-xs sm:text-sm lg:text-base text-brand-sand/80 font-light leading-relaxed">
            Every clinical procedure is administered in accordance with classical Sastric scriptures using freshly decocted herbal oils, traditional bronze vessels, and individualized Prakriti protocols.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {TREATMENT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-xs sm:text-sm font-medium tracking-wide px-5 py-2 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-brand-gold text-brand-brown font-semibold shadow-lg scale-105"
                    : "bg-brand-green-dark/80 text-white border border-white/20 hover:border-brand-gold/60"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment: Treatment) => (
            <div
              key={treatment.id}
              className="group bg-white text-brand-brown rounded-sm overflow-hidden shadow-luxury transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-brown-light">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="green" size="sm" className="bg-white/95 text-brand-green font-semibold backdrop-blur-sm shadow-sm">
                      {treatment.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{treatment.duration}</span>
                    </span>
                    {treatment.priceEstimate && (
                      <span className="font-serif font-semibold text-brand-gold-light bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        From {formatINR(treatment.priceEstimate)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <div>
                    {treatment.sanskritName && (
                      <p className="text-xs font-serif italic text-brand-green mb-1">
                        {treatment.sanskritName}
                      </p>
                    )}
                    <h3 className="text-xl font-serif text-brand-brown font-medium group-hover:text-brand-green transition-colors">
                      {treatment.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed line-clamp-2 font-light">
                    {treatment.tagline}
                  </p>

                  {/* Benefits Mini-List */}
                  <div className="space-y-1.5 pt-3 border-t border-brand-brown-border/60">
                    <p className="text-[11px] font-semibold text-brand-brown uppercase tracking-wider">
                      Key Clinical Benefits:
                    </p>
                    {treatment.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-brown-muted font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-brand-brown-border/40 mt-4 flex items-center justify-between gap-3">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-xs font-medium text-brand-brown hover:text-brand-green inline-flex items-center gap-1 transition-colors"
                >
                  <span>Therapy Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Button
                  href={`/consultation?treatment=${treatment.slug}`}
                  variant="primary"
                  size="sm"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-sm bg-brand-brown text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-brand-gold/20">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-normal text-white">
              Unsure which therapy suits your bodily constitution?
            </h4>
            <p className="text-xs sm:text-sm text-brand-sand/80 max-w-xl font-light">
              Schedule a comprehensive Nadi Pariksha pulse diagnosis with Chief Physician Dr. Anupama Ramachandran to design your custom clinical roadmap.
            </p>
          </div>

          <Button
            href="/consultation"
            variant="gold"
            size="md"
            className="shrink-0"
          >
            Consult Chief Vaidya &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
