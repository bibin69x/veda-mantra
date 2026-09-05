"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TREATMENTS, TREATMENT_CATEGORIES, Treatment } from "@/data/treatments";
import { Clock, Search, CheckCircle2, ArrowRight, Calendar, Sparkles, Shield, Heart } from "lucide-react";
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
    <div className="flex flex-col min-h-screen bg-brand-cream">
      {/* 1. Header Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-brand-brown text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1D4F40_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown-light border border-brand-brown-border/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Classical Panchakarma & Clinical Therapies</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight max-w-3xl mx-auto">
            Sacred Healing Therapies &{" "}
            <span className="italic text-brand-gold-light">
              Panchakarma Rituals
            </span>
          </h1>

          <div className="w-12 h-0.5 bg-brand-gold mx-auto my-5" />

          <p className="text-xs sm:text-base text-brand-sand/80 max-w-2xl mx-auto font-light leading-relaxed">
            Every therapy is conducted in strict alignment with classical Ayurvedic texts using freshly prepared medicated decoctions, organic cold-pressed oils, and individualized physician oversight.
          </p>
        </Container>
      </section>

      {/* 2. Search & Category Filters */}
      <section className="py-10 bg-white border-b border-brand-brown-border sticky top-[72px] sm:top-[88px] z-30 shadow-sm">
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
                        ? "bg-brand-green text-white shadow-sm"
                        : "bg-brand-cream text-brand-brown border border-brand-brown-border hover:bg-brand-sand/60"
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
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-brand-brown-border bg-brand-cream text-brand-brown placeholder:text-brand-brown-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all"
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

      {/* 3. Treatments Grid */}
      <section className="py-16 sm:py-24 bg-brand-cream flex-grow">
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
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-sand">
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

                      <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed line-clamp-2">
                        {treatment.tagline}
                      </p>

                      {/* Benefits Checklist */}
                      <div className="space-y-1.5 pt-3 border-t border-brand-brown-border/60">
                        <p className="text-[11px] font-semibold text-brand-brown uppercase tracking-wider">
                          Key Clinical Indications:
                        </p>
                        {treatment.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-brand-brown-muted">
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

      {/* 4. Panchakarma 3-Stage Guide */}
      <section className="py-20 sm:py-24 bg-white border-t border-brand-brown-border">
        <Container size="xl">
          <SectionHeading
            sanskritSubtitle="पञ्चकर्म त्रिविध कर्म विधि"
            tagline="The 3-Stage Process"
            title="The Scientific Anatomy of a Panchakarma Journey"
            description="True detoxification cannot happen abruptly. Classical Ayurveda methodically prepares the tissues, mobilizes dormant toxins (Ama), and rejuvenates the cellular matrix."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-brand-cream border border-brand-brown-border space-y-4">
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

            <div className="p-8 rounded-sm bg-brand-cream border border-brand-brown-border space-y-4">
              <span className="text-xs font-serif font-bold text-brand-gold uppercase tracking-widest">
                Stage 02 • प्रधानकर्म
              </span>
              <h3 className="text-2xl font-serif text-brand-brown font-medium">
                Pradhana Karma (Detox)
              </h3>
              <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                The targeted elimination protocols (Vamana, Virechana, Basti, Nasya) prescribed specifically by the Vaidya to expel cellular waste and restore constitutional balance.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-brand-cream border border-brand-brown-border space-y-4">
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
    </div>
  );
}
