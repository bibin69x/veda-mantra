import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Video, MapPin, CheckCircle, Clock } from "lucide-react";

export function ConsultationBanner() {
  return (
    <section className="py-20 sm:py-28 bg-brand-brown text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Doctor Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown-light border border-brand-brown-border/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase">
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              <span>Ayurvedic Vaidya Consultations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              Direct Guidance from{" "}
              <span className="italic text-brand-gold-light">
                Classical Ayurvedic Physicians
              </span>
            </h2>

            <p className="text-sm sm:text-base text-brand-sand/80 font-light leading-relaxed max-w-2xl">
              Experience the depth of authentic diagnosis. Our senior Vaidyas evaluate root causative factors (Nidana), cellular accumulation (Ama), and subtle energetic imbalances to prescribe personalized therapies and herbs.
            </p>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-sand">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Nadi Pariksha & Prakriti Analysis</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-sand">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Personalized Pathya (Dietary) Regimen</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-sand">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Custom Classical Herbal Prescription</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-sand">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Panchakarma Treatment Roadmap</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                href="/consultation"
                variant="gold"
                size="lg"
                leftIcon={<Video className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Book Online Video Call
              </Button>
              <Button
                href="/consultation?mode=in-clinic"
                variant="outline"
                size="lg"
                leftIcon={<MapPin className="w-4 h-4" />}
                className="w-full sm:w-auto border-brand-sand/40 text-brand-sand hover:bg-brand-sand hover:text-brand-brown"
              >
                Book In-Clinic Visit
              </Button>
            </div>
          </div>

          {/* Right Doctor Image Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-brand-brown-dark p-6 rounded-sm border border-brand-brown-light/60 shadow-2xl space-y-5">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594824813589-325244585e5d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Anupama Ramachandran — Chief Ayurvedic Physician"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-medium text-white">Dr. Anupama Ramachandran</h3>
                  <span className="text-xs text-brand-gold font-serif italic">BAMS, MD (Ayur)</span>
                </div>
                <p className="text-xs text-brand-sand/80 font-light">
                  Chief Physician & Senior Panchakarma Specialist with 15+ years of dedicated clinical practice.
                </p>
              </div>

              <div className="pt-3 border-t border-brand-brown-light/40 flex items-center justify-between text-xs text-brand-sand/70">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Next Slot: Available Today</span>
                </span>
                <span className="font-semibold text-brand-gold-light">INR ₹800</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
