"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TREATMENTS, TREATMENT_CATEGORIES, Treatment } from "@/data/treatments";
import { Clock, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { cn, formatINR } from "@/lib/utils";

export function FeaturedTreatmentsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Treatments");

  const filteredTreatments =
    activeCategory === "All Treatments"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-brand-cream relative">
      <Container size="xl">
        <SectionHeading
          sanskritSubtitle="विशिष्ट पञ्चकर्म एवं चिकित्सा"
          tagline="Classical Therapies"
          title="Authentic Ayurvedic Clinical Treatments"
          description="Every treatment is conducted in accordance with ancient Ayurvedic protocols using freshly prepared medicated decoctions, organic herb-infused oils, and personalized therapeutic techniques."
          align="center"
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {TREATMENT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-xs sm:text-sm font-medium tracking-wide px-5 py-2.5 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-brand-green text-white shadow-md shadow-brand-green/20 scale-105"
                    : "bg-white text-brand-brown border border-brand-brown-border hover:border-brand-green/50 hover:bg-brand-sand/50"
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
              className="group bg-white rounded-sm overflow-hidden border border-brand-brown-border shadow-card-soft transition-all duration-300 hover:shadow-luxury hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-cream-dark">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
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

                  <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed line-clamp-2">
                    {treatment.tagline}
                  </p>

                  {/* Benefits Mini-List */}
                  <div className="space-y-1.5 pt-2 border-t border-brand-brown-border/60">
                    <p className="text-[11px] font-semibold text-brand-brown uppercase tracking-wider">
                      Key Clinical Benefits:
                    </p>
                    {treatment.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-brown-muted">
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
                  leftIcon={<Calendar className="w-3.5 h-3.5" />}
                >
                  Book Session
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-sm bg-brand-brown text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif font-normal text-white">
              Unsure which therapy suits your bodily constitution?
            </h4>
            <p className="text-xs sm:text-sm text-brand-sand/80 max-w-xl">
              Schedule a comprehensive Nadi Pariksha (Pulse Diagnosis) with our Senior Ayurvedic Vaidyas to determine your exact Prakriti and customized treatment plan.
            </p>
          </div>

          <Button
            href="/consultation"
            variant="gold"
            size="md"
            className="shrink-0"
          >
            Consult Our Vaidyas &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
