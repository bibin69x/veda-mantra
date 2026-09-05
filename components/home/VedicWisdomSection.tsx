import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Sun, Moon, Sparkles } from "lucide-react";

const ARTICLES = [
  {
    title: "Dinacharya: The Vedic Sacred Morning Ritual for Radiant Vitality",
    category: "Daily Living (दिनचर्या)",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    slug: "dinacharya-morning-ritual",
    excerpt: "Why tongue scraping (Jihwa Nirlekhana), warm water with cumin, and 5 minutes of Nasya oil drops clear cranial channels before dawn.",
  },
  {
    title: "Panchakarma Demystified: The Five Classical Elimination Protocols",
    category: "Clinical Therapeutics (पञ्चकर्म)",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    slug: "panchakarma-five-elimination-protocols",
    excerpt: "Understand how Purva Karma (preparatory oleation) liquifies deep cellular toxins before biological elimination takes place.",
  },
  {
    title: "Ritucharya: Seasonal Diet & Cleansing for Monsoon & Autumn",
    category: "Seasonal Wellness (ऋतुचर्या)",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    slug: "ritucharya-seasonal-diet-cleansing",
    excerpt: "How shifting weather dampens metabolic fire (Agni) and the specific herbal decoctions to pacify provoked Vata and Pitta.",
  },
];

export function VedicWisdomSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-cream border-b border-brand-brown-border">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            sanskritSubtitle="वेद ज्ञान एवं जीवन शैली"
            tagline="Vedic Wisdom"
            title="Teachings from the Classical Texts"
            description="Explore centuries of holistic medicine, daily regimens, and seasonal protocols to sustain vibrant health naturally."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Link
            href="/journal"
            className="mt-6 md:mt-0 text-sm font-medium text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1.5 underline-offset-4 hover:underline shrink-0"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-sm border border-brand-brown-border overflow-hidden shadow-card-soft transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-sand">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold text-brand-green uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-brand-brown-muted font-medium">
                    {art.readTime}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-brand-brown group-hover:text-brand-green transition-colors leading-snug">
                    <Link href={`/journal/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/journal/${art.slug}`}
                  className="text-xs font-semibold text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
