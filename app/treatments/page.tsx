"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TREATMENTS, TREATMENT_CATEGORIES, Treatment } from "@/data/treatments";
import { Clock, Search, CheckCircle2, ArrowRight, Calendar, Sparkles, ShieldCheck } from "lucide-react";
import { formatINR, cn } from "@/lib/utils";

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Treatments");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTreatments = TREATMENTS.filter((treatment: Treatment) => {
    const matchesCategory =
      selectedCategory === "All Treatments" || treatment.category === selectedCategory;
    const matchesSearch =
      treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      treatment.recommendedFor.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header Hero Banner (bg-brand-brown) */}
      <section className="relative py-16 sm:py-24 bg-brand-brown text-white overflow-hidden">
        <Container size="xl" className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown-light border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Classical Panchakarma & Clinical Therapies</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight max-w-3xl mx-auto">
            Sacred Healing Therapies &{" "}
            <span className="italic text-brand-gold-light font-light">
              Panchakarma Rituals
            </span>
          </h1>

          <div className="w-12 h-0.5 bg-brand-gold mx-auto my-5" />

          <p className="text-xs sm:text-base text-brand-sand/90 max-w-2xl mx-auto font-light leading-relaxed">
            Every therapy is conducted in strict alignment with classical Ayurvedic texts using freshly prepared medicated decoctions, organic cold-pressed oils, and individualized physician oversight by Chief Physician Dr. Anupama Ramachandran.
          </p>
        </Container>
      </section>

      {/* 2. Search & Category Filters (bg-white) */}
      <section className="py-8 bg-white border-b border-brand-brown-border sticky top-[72px] sm:top-[88px] z-30 shadow-sm">
        <Container size="xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {TREATMENT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "text-xs font-medium tracking-wide px-4 py-2 rounded-full transition-all shrink-0",
                      isActive
                        ? "bg-brand-green text-white shadow-sm font-semibold scale-105"
                        : "bg-white text-brand-brown border border-brand-brown-border hover:border-brand-green/60"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search symptom, therapy, or herb..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-brand-brown-border bg-white text-brand-brown placeholder:text-brand-brown-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
              />
              <Search className="w-4 h-4 text-brand-brown-muted absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-brand-brown-muted hover:text-brand-brown absolute right-3 top-2"
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Treatments Grid (bg-white) */}
      <section className="py-16 sm:py-24 bg-white flex-grow">
        <Container size="xl">
          {filteredTreatments.length === 0 ? (
            <div className="text-center py-16 space-y-4 max-w-md mx-auto">
              <p className="font-serif text-2xl text-brand-brown font-normal">
                No matching treatments found
              </p>
              <p className="text-xs text-brand-brown-muted">
                We couldn&apos;t find treatments matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;pain&rdquo;, &ldquo;abhyanga&rdquo;, or &ldquo;shirodhara&rdquo;.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All Treatments");
                  setSearchQuery("");
                }}
                variant="outline"
                size="sm"
              >
                Reset Search Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment: Treatment) => (
                <div
                  key={treatment.id}
                  className="group bg-white rounded-sm border border-brand-brown-border overflow-hidden shadow-card-soft hover:shadow-luxury hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-brown-light">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-3 left-3">
                        <Badge variant="green" size="sm" className="bg-white/95 text-brand-green font-semibold backdrop-blur-sm">
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

                    {/* Body Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        {treatment.sanskritName && (
                          <p className="text-xs font-serif italic text-brand-green mb-0.5">
                            {treatment.sanskritName}
                          </p>
                        )}
                        <h3 className="font-serif text-xl font-medium text-brand-brown group-hover:text-brand-green transition-colors">
                          <Link href={`/treatments/${treatment.slug}`}>
                            {treatment.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed line-clamp-2 font-light">
                        {treatment.tagline}
                      </p>

                      {/* Benefits Checklist */}
                      <div className="space-y-1.5 pt-3 border-t border-brand-brown-border/60">
                        <p className="text-[11px] font-semibold text-brand-brown uppercase tracking-wider">
                          Key Clinical Indications:
                        </p>
                        {treatment.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-brand-brown-muted font-light">
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
                      className="text-xs font-semibold text-brand-brown hover:text-brand-green inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Full Details & Protocol</span>
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
          )}
        </Container>
      </section>

      {/* 4. Panchakarma 3-Stage Guide (bg-brand-green) */}
      <section className="py-20 sm:py-24 bg-brand-green text-white border-t border-brand-green-dark">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-dark border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>पञ्चकर्म त्रिविध कर्म विधि</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              The Scientific Anatomy of a Panchakarma Journey
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto my-3" />
            <p className="text-xs sm:text-sm lg:text-base text-brand-sand/80 font-light leading-relaxed">
              True detoxification cannot happen abruptly. Classical Ayurveda methodically prepares the tissues, mobilizes dormant toxins (Ama), and rejuvenates the cellular matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-white text-brand-brown shadow-luxury space-y-4">
              <span className="text-xs font-serif font-bold text-brand-green uppercase tracking-widest">
                Stage 01 • पूर्वकर्म
              </span>
              <h3 className="text-2xl font-serif text-brand-brown font-medium">
                Purva Karma (Preparation)
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                Deep internal and external oleation (Snehana) with warm medicated ghee and rhythmic Abhyanga, followed by medicinal herbal steam (Swedam) to liquify toxins lodged in deep bodily tissues.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-white text-brand-brown shadow-luxury space-y-4">
              <span className="text-xs font-serif font-bold text-brand-gold-dark uppercase tracking-widest">
                Stage 02 • प्रधानकर्म
              </span>
              <h3 className="text-2xl font-serif text-brand-brown font-medium">
                Pradhana Karma (Detox)
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                The targeted elimination protocols (Vamana, Virechana, Basti, Nasya) prescribed specifically by Dr. Anupama to expel cellular waste and restore constitutional balance.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-white text-brand-brown shadow-luxury space-y-4">
              <span className="text-xs font-serif font-bold text-brand-green uppercase tracking-widest">
                Stage 03 • पश्चात्कर्म
              </span>
              <h3 className="text-2xl font-serif text-brand-brown font-medium">
                Paschat Karma (Rejuvenation)
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                Gradual restoration of digestive fire (Samsarjana Krama) using wholesome nourishing soups, Rasayana herbal tonics, and lifestyle guidance to lock in long-term vitality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Doctor Consultation CTA (bg-brand-brown) */}
      <section className="py-16 bg-brand-brown text-white border-t border-brand-brown-dark">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Personalized Diagnosis with Chief Physician Dr. Anupama
              </h3>
              <p className="text-xs sm:text-sm text-brand-sand/80 font-light">
                Not sure which treatment package is right for you? Book a comprehensive Nadi Pariksha consultation online or at our Kochi sanctum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button
                href="/consultation"
                variant="gold"
                size="lg"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book Nadi Pariksha
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-brand-brown"
              >
                Contact Centre
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
