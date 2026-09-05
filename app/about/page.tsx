import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  Award,
  Sparkles,
  HeartPulse,
  Leaf,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Microscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Ayur Veda Mantra | Panchakarma Treatment & Research Centre",
  description:
    "Discover the lineage, certified Vaidyas, and clinical research behind Ayur Veda Mantra — dedicated to authentic Vedic Panchakarma and natural holistic healing.",
};

const DOCTORS = [
  {
    name: "Dr. Anupama Ramachandran",
    title: "Chief Physician & Senior Panchakarma Specialist",
    degrees: "BAMS, MD (Ayurveda), Senior Nadi Pariksha Consultant",
    experience: "15+ Years Clinical Experience",
    bio: "With over 15 years of dedicated classical clinical practice, Dr. Anupama Ramachandran leads the medical faculty at Ayur Veda Mantra. Hailing from a deep tradition of Ayurvedic healing, Dr. Anupama specializes in authentic Panchakarma detoxification, Nadi Pariksha pulse diagnosis, chronic musculoskeletal disorders, and individualized Prakriti constitutional care.",
    image: "https://images.unsplash.com/photo-1594824813589-325244585e5d?auto=format&fit=crop&w=800&q=80",
    specialties: [
      "Classical Panchakarma",
      "Nadi Pariksha (Pulse Diagnosis)",
      "Spine & Musculoskeletal Care",
      "Hormonal & Women's Health",
      "Chronic Metabolic Recovery",
    ],
  },
];

const VALUES = [
  {
    icon: Leaf,
    title: "Vedic Sastric Fidelity",
    description: "Every formulation, medicated oil, and treatment procedure follows the unbroken tenets of the Charaka Samhita and Ashtanga Hridaya without modern shortcuts.",
  },
  {
    icon: Microscope,
    title: "Clinical Research & Purity",
    description: "All botanical extracts undergo rigorous laboratory verification for heavy metal safety, microbial purity, and active phytochemical potency.",
  },
  {
    icon: HeartPulse,
    title: "Individualized Care (Prakriti)",
    description: "Ayurveda recognizes no single universal cure. Every patient receives a tailored healing roadmap based on their unique biological constitution.",
  },
  {
    icon: ShieldCheck,
    title: "Sanctuary of Compassion",
    description: "Our treatment facilities are intentionally crafted to foster stillness, sensory peace, and deep cellular restoration away from modern noise.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      {/* 1. Editorial Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-brand-brown text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-brown-light border border-brand-brown-border/30 text-brand-gold-light text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Ayurveda Panchakarma Treatment & Research Centre</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight max-w-4xl mx-auto">
            Sacred Lineage. Clinical Research.{" "}
            <span className="italic text-brand-gold-light block sm:inline">
              Timeless Vedic Healing.
            </span>
          </h1>

          <div className="w-16 h-0.5 bg-brand-gold mx-auto my-6" />

          <p className="text-sm sm:text-base lg:text-lg text-brand-sand/80 max-w-2xl mx-auto font-light leading-relaxed">
            &ldquo;प्रयोजनं चास्य स्वस्थस्य स्वास्थ्यरक्षणम् आतुरस्य विकारप्रशमनं च&rdquo;
            <span className="block text-xs sm:text-sm text-brand-gold-light font-sans font-normal mt-2">
              — Charaka Samhita (To protect the health of the healthy and alleviate the affliction of the ill)
            </span>
          </p>
        </Container>
      </section>

      {/* 2. Story & Origin Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-brown-border">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                sanskritSubtitle="मूल परम्परा एवं स्थापना"
                tagline="Our Origin Story"
                title="Rooted in Unbroken Vedic Tradition"
                align="left"
                className="mb-4"
              />

              <div className="space-y-4 text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                <p>
                  <strong>Ayur Veda Mantra</strong> was established as an answer to the commercialization of ancient wellness. While the world embraced rapid, superficial spa rituals, our founding Vaidyas envisioned a dedicated clinical sanctuary where the true curative depth of authentic <strong>Panchakarma</strong> and <strong>Nadi Pariksha</strong> could be practiced without compromise.
                </p>
                <p>
                  Operating as both a specialized treatment sanctum and an active Ayurvedic research center, we bridge classical scriptures with contemporary clinical case documentation. Every medicated oil (Tailam), herbal decoction (Kashayam), and fermented elixir (Arishta) is crafted according to strict classical textual guidelines using wildcrafted forest herbs.
                </p>
                <p>
                  Our centre welcomes individuals seeking relief from chronic pain, metabolic disorders, autoimmune conditions, and modern stress, as well as those pursuing seasonal detoxification and Rasayana longevity.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-brand-brown-border/60">
                <div>
                  <p className="font-serif text-3xl text-brand-green font-normal">25,000+</p>
                  <p className="text-xs text-brand-brown-muted mt-1">Patients Healed</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-brand-gold font-normal">100%</p>
                  <p className="text-xs text-brand-brown-muted mt-1">Classical Purity</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-brand-green font-normal">350+</p>
                  <p className="text-xs text-brand-brown-muted mt-1">Herbal Formulations</p>
                </div>
              </div>
            </div>

            {/* Right Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-brand-cream">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="Authentic Ayurvedic Treatment Preparation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-serif italic text-brand-gold-light uppercase">
                    Ayurveda Research & Therapy
                  </p>
                  <p className="font-serif text-lg font-normal text-white mt-1">
                    Preserving the medicinal purity of classical herbal decoctions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Core Values & Principles */}
      <section className="py-20 sm:py-28 bg-brand-cream border-b border-brand-brown-border">
        <Container size="xl">
          <SectionHeading
            sanskritSubtitle="चतुर्विध सिद्धान्त"
            tagline="Our Guiding Pillars"
            title="The Four Foundations of Our Clinical Care"
            description="Our approach unites scriptural fidelity, rigorous quality verification, and deeply personalized clinical attention."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-sm p-8 border border-brand-brown-border shadow-card-soft space-y-4 flex flex-col justify-between transition-all duration-300 hover:shadow-luxury hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-brand-brown">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Meet Our Senior Vaidya */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-brown-border">
        <Container size="xl">
          <SectionHeading
            sanskritSubtitle="मुख्य आयुर्वेदाचार्या"
            tagline="Our Chief Physician"
            title="Guided by Classical Ayurvedic Mastery"
            description="Leading our clinical sanctum with 15+ years of unbroken Sastric lineage, postgraduate training, and pulse diagnosis mastery."
            align="center"
          />

          <div className="max-w-4xl mx-auto">
            {DOCTORS.map((doc, idx) => (
              <div
                key={idx}
                className="bg-brand-cream rounded-2xl border border-brand-brown-border overflow-hidden shadow-card flex flex-col md:flex-row gap-8 items-center p-6 sm:p-10 group hover:shadow-luxury transition-all duration-300"
              >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-brand-sand shrink-0 border border-brand-brown-border shadow-md">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-brand-brown text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {doc.experience}
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-green">
                      Chief Medical Officer & Vaidya
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown mt-0.5">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-brand-brown-muted font-mono mt-0.5">
                      {doc.degrees}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-brown leading-relaxed font-light pt-2 border-t border-brand-brown-border/60">
                    {doc.bio}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-brown-muted block">
                      Clinical Focus & Specialties:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-brand-brown-border text-brand-brown"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-3">
                    <Button
                      href="/consultation"
                      variant="primary"
                      size="md"
                      leftIcon={<Calendar className="w-4 h-4" />}
                    >
                      Book Consultation with Dr. Anupama
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. The Treatment Sanctum & Facilities */}
      <section className="py-20 sm:py-28 bg-brand-cream border-b border-brand-brown-border">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                sanskritSubtitle="चिकित्सालय परिवेश"
                tagline="Our Healing Sanctum"
                title="Sacred Architecture Crafted for Restoration"
                align="left"
                className="mb-4"
              />

              <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                Our centre is intentionally designed according to Vedic Vastu principles. Each therapy suite features traditional, hand-carved medicinal wood treatment tables (Dronis) sculpted from sacred Neem and Jackwood trees, which naturally amplify therapeutic bio-energy.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-brown">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>
                    <strong>Classical Droni Tables:</strong> Custom medicinal wood tables treated with herbal decoctions.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-brown">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>
                    <strong>Herbal Steam Sanctums:</strong> Direct infusion of freshly harvested Dashamoola herbs.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-brown">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>
                    <strong>Quiet Meditation & Recovery Lounges:</strong> Acoustic shielding for alpha-brainwave recovery.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="secondary" size="md">
                  Visit Our Centre in Person &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80"
                  alt="Therapy Suite"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-md mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                  alt="Herbal Preparation Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Consultation Booking Callout */}
      <section className="py-16 sm:py-20 bg-brand-green text-white">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Begin Your Journey Toward Sacred Restoration
              </h3>
              <p className="text-xs sm:text-sm text-brand-sand/80 font-light">
                Consult with our senior physicians to uncover the root cause of your symptoms and design your custom Panchakarma regimen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button
                href="/consultation"
                variant="gold"
                size="lg"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book Doctor Appointment
              </Button>
              <Button
                href="/treatments"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-green"
              >
                Explore All Treatments
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
