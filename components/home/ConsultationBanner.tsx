import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Video, MapPin, CheckCircle, Clock, Award, Sparkles } from "lucide-react";

export function ConsultationBanner() {
  return (
    <section className="py-20 sm:py-28 bg-brand-green text-white relative overflow-hidden">
      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Doctor Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-dark border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Ayurvedic Vaidya Consultations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              Personalized Guidance from{" "}
              <span className="italic text-brand-gold-light block sm:inline">
                Chief Physician Dr. Anupama
              </span>
            </h2>

            <p className="text-sm sm:text-base text-brand-sand/90 font-light leading-relaxed max-w-2xl">
              Experience the clinical precision of classical Nadi Pariksha pulse diagnosis. Dr. Anupama Ramachandran (15+ Years Experience) evaluates root causative imbalances (Nidana), cellular accumulation (Ama), and constitutional vitality to prescribe customized healing regimens.
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
                <span>Tailored Sastric Herbal Prescription</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-sand">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Custom Panchakarma Treatment Roadmap</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                href="/consultation"
                variant="gold"
                size="lg"
                leftIcon={<Video className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-lg hover:scale-105 transition-all"
              >
                Book Online Video Call (₹800)
              </Button>
              <Button
                href="/consultation?mode=in-clinic"
                variant="outline"
                size="lg"
                leftIcon={<MapPin className="w-4 h-4" />}
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-brand-green"
              >
                Book In-Clinic Visit (₹1,200)
              </Button>
            </div>
          </div>

          {/* Right Doctor Image Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-white text-brand-brown p-6 rounded-sm shadow-2xl space-y-5">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-brown-light">
                <Image
                  src="https://images.unsplash.com/photo-1594824813589-325244585e5d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Anupama Ramachandran — Chief Ayurvedic Physician"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-brand-brown text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                  15+ Years Exp
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-brand-brown">
                    Dr. Anupama Ramachandran
                  </h3>
                  <span className="text-xs text-brand-green font-serif italic font-semibold">
                    BAMS, MD (Ayur)
                  </span>
                </div>
                <p className="text-xs text-brand-brown-muted font-light leading-relaxed">
                  Chief Physician & Senior Panchakarma Specialist leading clinical care and pulse diagnosis at Ayur Veda Mantra.
                </p>
              </div>

              <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between text-xs text-brand-brown-muted">
                <span className="flex items-center gap-1.5 text-brand-green font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Available Mon – Sat</span>
                </span>
                <span className="font-semibold text-brand-brown">Kochi Sanctum</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
