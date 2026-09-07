import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TREATMENTS, Treatment } from "@/data/treatments";
import {
  Clock,
  CheckCircle2,
  Calendar,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const treatment = TREATMENTS.find((t) => t.slug === params.slug);
  if (!treatment) {
    return {
      title: "Treatment Not Found — Ayur Veda Mantra",
    };
  }

  return {
    title: `${treatment.title} — Ayurvedic Therapy | Ayur Veda Mantra`,
    description: treatment.tagline,
    openGraph: {
      title: `${treatment.title} — Classical Ayurvedic Therapy`,
      description: treatment.description,
      images: [{ url: treatment.image }],
    },
  };
}

export default function TreatmentDetailPage({ params }: PageProps) {
  const treatment = TREATMENTS.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = TREATMENTS.filter(
    (t) => t.id !== treatment.id && (t.category === treatment.category || t.featured)
  ).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Breadcrumb Strip (bg-white) */}
      <div className="bg-white border-b border-brand-brown-border py-3 text-xs text-brand-brown-muted">
        <Container size="xl" className="flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-green transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-brand-brown-border" />
          <Link href="/treatments" className="hover:text-brand-green transition-colors">
            Treatments
          </Link>
          <ChevronRight className="w-3 h-3 text-brand-brown-border" />
          <span className="text-brand-brown font-medium truncate max-w-xs">
            {treatment.title}
          </span>
        </Container>
      </div>

      {/* 2. Hero Header Section (bg-brand-brown) */}
      <section className="relative py-12 sm:py-20 bg-brand-brown text-white overflow-hidden">
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="gold" size="md">
                {treatment.category}
              </Badge>
              {treatment.sanskritName && (
                <span className="text-sm font-serif italic text-brand-gold-light">
                  {treatment.sanskritName}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              {treatment.title}
            </h1>

            <p className="text-sm sm:text-base text-brand-sand/80 font-light leading-relaxed">
              {treatment.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-brand-sand/90">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Duration: <strong>{treatment.duration}</strong></span>
              </div>
              {treatment.priceEstimate && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Estimated Session: <strong>{formatINR(treatment.priceEstimate)}</strong></span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Main Treatment Information & Booking Layout (bg-white) */}
      <section className="py-12 sm:py-20 flex-grow bg-white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Treatment Hero Image */}
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-luxury border-2 border-brand-brown-border">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Comprehensive Clinical Description */}
              <div className="bg-white rounded-sm p-8 border border-brand-brown-border shadow-card-soft space-y-4">
                <h2 className="text-2xl font-serif text-brand-brown font-medium">
                  Classical Description & Clinical Purpose
                </h2>
                <div className="w-10 h-0.5 bg-brand-green" />
                <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                  {treatment.description}
                </p>
              </div>

              {/* Key Clinical Benefits */}
              <div className="bg-white rounded-sm p-8 border border-brand-brown-border shadow-card-soft space-y-6">
                <h2 className="text-2xl font-serif text-brand-brown font-medium">
                  Therapeutic Benefits & Physiological Actions
                </h2>
                <div className="w-10 h-0.5 bg-brand-green" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-4 rounded-sm bg-white border border-brand-brown-border flex items-start gap-3 shadow-sm hover:border-brand-green transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-brown font-light">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Clinical Procedure */}
              <div className="bg-white rounded-sm p-8 border border-brand-brown-border shadow-card-soft space-y-6">
                <h2 className="text-2xl font-serif text-brand-brown font-medium">
                  Step-by-Step Clinical Procedure
                </h2>
                <div className="w-10 h-0.5 bg-brand-green" />

                <div className="space-y-4">
                  {treatment.process.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-4 p-4 rounded-sm bg-white border border-brand-brown-border shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center font-serif text-xs font-semibold shrink-0">
                        {sIdx + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-brand-brown font-medium">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended For & Ideal Candidates */}
              <div className="bg-white rounded-sm p-8 border border-brand-brown-border shadow-card-soft space-y-6">
                <h2 className="text-2xl font-serif text-brand-brown font-medium">
                  Who is this Treatment Recommended For?
                </h2>
                <div className="w-10 h-0.5 bg-brand-green" />

                <div className="flex flex-wrap gap-2.5">
                  {treatment.recommendedFor.map((rec, rIdx) => (
                    <span
                      key={rIdx}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-brand-brown-border text-xs text-brand-brown font-medium shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                      <span>{rec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Precautions & Guidance (bg-brand-brown) */}
              <div className="bg-brand-brown text-white rounded-sm p-8 border border-brand-gold/20 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-brand-gold">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="font-serif text-lg font-medium text-white">
                    Patient Guidelines & Clinical Precautions
                  </h3>
                </div>
                <p className="text-xs text-brand-sand/80 leading-relaxed font-light">
                  Patients are advised to consume light meals 1.5 to 2 hours prior to the therapy session. Direct exposure to cold breeze or chilled water immediately post-therapy is contraindicated. Chief Physician Dr. Anupama Ramachandran will provide individualized post-treatment guidance during your session.
                </p>
              </div>
            </div>

            {/* Right Sticky Booking Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white rounded-sm p-8 border-2 border-brand-green shadow-luxury space-y-6">
                <div className="space-y-2 pb-4 border-b border-brand-brown-border">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green">
                    Clinical Booking
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-brand-brown">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-brand-brown-muted font-light">
                    Conducted by trained certified therapists under Chief Physician supervision.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-brand-brown-border/60">
                    <span className="text-brand-brown-muted">Duration:</span>
                    <span className="font-medium text-brand-brown">{treatment.duration}</span>
                  </div>
                  {treatment.priceEstimate && (
                    <div className="flex justify-between py-1.5 border-b border-brand-brown-border/60">
                      <span className="text-brand-brown-muted">Estimated Fee:</span>
                      <span className="font-serif text-base font-bold text-brand-brown">
                        {formatINR(treatment.priceEstimate)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between py-1.5 border-b border-brand-brown-border/60">
                    <span className="text-brand-brown-muted">Category:</span>
                    <span className="font-medium text-brand-green">{treatment.category}</span>
                  </div>
                </div>

                {/* Primary Booking Buttons */}
                <div className="space-y-3 pt-2">
                  <Button
                    href={`/consultation?treatment=${treatment.slug}`}
                    variant="primary"
                    size="md"
                    leftIcon={<Calendar className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    Schedule Treatment Session
                  </Button>

                  <Button
                    href="/consultation"
                    variant="outline"
                    size="md"
                    leftIcon={<Stethoscope className="w-4 h-4" />}
                    className="w-full justify-center text-xs"
                  >
                    Pre-Treatment Doctor Consultation
                  </Button>
                </div>

                <div className="pt-4 border-t border-brand-brown-border/60 space-y-2 text-[11px] text-brand-brown-muted font-light">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>100% Classical Ayurvedic Tailams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>Sanitized private therapy suites</span>
                  </div>
                </div>
              </div>

              {/* Clinic Helpline Card (bg-brand-green) */}
              <div className="bg-brand-green text-white rounded-sm p-6 space-y-2 text-center shadow-md">
                <p className="font-serif text-sm font-semibold text-white">
                  Questions about this Therapy?
                </p>
                <p className="text-xs text-brand-sand/80 font-light">
                  Speak directly with our clinical coordinators.
                </p>
                <p className="text-sm font-semibold text-brand-gold-light pt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Related / Complementary Therapies (bg-white) */}
      {relatedTreatments.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-t border-brand-brown-border">
          <Container size="xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-serif italic text-brand-green uppercase tracking-widest">
                  Complementary Healing
                </span>
                <h3 className="text-2xl font-serif text-brand-brown font-normal">
                  Related Clinical Therapies
                </h3>
              </div>

              <Link
                href="/treatments"
                className="text-xs font-semibold text-brand-green hover:underline inline-flex items-center gap-1"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTreatments.map((rel) => (
                <div
                  key={rel.id}
                  className="group bg-white rounded-sm border border-brand-brown-border overflow-hidden shadow-card-soft transition-all duration-300 hover:shadow-luxury flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-brown-light">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="green" size="sm">
                        {rel.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-base font-medium text-brand-brown group-hover:text-brand-green transition-colors">
                      <Link href={`/treatments/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-brand-brown-muted line-clamp-2 font-light">
                      {rel.tagline}
                    </p>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={`/treatments/${rel.slug}`}
                      className="text-xs font-medium text-brand-green hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Therapy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
