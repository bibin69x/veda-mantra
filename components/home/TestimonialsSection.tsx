import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-brown-border">
      <Container size="xl">
        <SectionHeading
          sanskritSubtitle="आरोग्य अनुभव एवं प्रशंसा"
          tagline="Healing Stories"
          title="Words of Rejuvenation from Our Patients"
          description="True healing is experienced in restored energy, eliminated pain, and revitalized physical peace. Read genuine experiences from patients treated at Ayur Veda Mantra."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-white rounded-sm p-8 border border-brand-brown-border flex flex-col justify-between space-y-6 shadow-sm transition-all duration-300 hover:shadow-luxury hover:border-brand-green"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-brand-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-gold/20" />
                </div>

                <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed italic font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-brand-brown-border/60 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-brand-brown-border">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif text-sm font-semibold text-brand-brown">
                      {t.author}
                    </h4>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-brand-brown-muted font-light">
                    {t.location} • <span className="text-brand-green font-medium">{t.treatmentOrProduct}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
