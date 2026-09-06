import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wind, Flame, Droplets, Leaf, Activity } from "lucide-react";

const DOSHAS = [
  {
    name: "Vata",
    sanskrit: "वात (वायु + आकाश)",
    elements: "Air & Space",
    governs: "Nerve impulses, cellular circulation, breathing rhythm, and joint mobility.",
    imbalanceSign: "Anxiety, insomnia, dry skin, chronic constipation, and joint stiffness.",
    remedy: "Warm Abhyanga oil massage, Kati Basti spine therapy, and grounding Sastric rasayanas.",
    icon: Wind,
  },
  {
    name: "Pitta",
    sanskrit: "पित्त (अग्नि + जल)",
    elements: "Fire & Water",
    governs: "Digestion, metabolic enzymes, cellular energy, liver function, and ocular vitality.",
    imbalanceSign: "Acid reflux, chronic inflammation, skin flare-ups, migraines, and irritability.",
    remedy: "Shirodhara, cooling medicated ghee, Netra Tarpana, and Takradhara herbal buttermilk.",
    icon: Flame,
  },
  {
    name: "Kapha",
    sanskrit: "कफ (जल + पृथ्वी)",
    elements: "Water & Earth",
    governs: "Bodily structure, joint lubrication, immunity, fluid balance, and physical stamina.",
    imbalanceSign: "Metabolic sluggishness, weight gain, sinus congestion, and lethargy.",
    remedy: "Udvartana herbal powder exfoliation, Dashamoola steam Swedam, and Kizhi boluses.",
    icon: Droplets,
  },
];

export function PhilosophySection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-brown-border">
      <Container size="xl">
        <SectionHeading
          sanskritSubtitle="त्रिदोष सिद्धान्त एवं पञ्चकर्म"
          tagline="Ayurvedic Science"
          title="The Sacred Balance of Tri-Dosha Harmony"
          description="Classical Ayurveda views human health as the dynamic equilibrium between biological energies (Doshas), metabolic fire (Agni), cellular tissues (Dhatus), and mental peace (Prasanna Atma)."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOSHAS.map((dosha) => {
            const Icon = dosha.icon;
            return (
              <div
                key={dosha.name}
                className="group relative rounded-sm p-8 bg-white border border-brand-brown-border transition-all duration-300 hover:shadow-luxury hover:border-brand-green flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center transition-colors group-hover:bg-brand-green group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-serif italic text-brand-green font-medium">
                      {dosha.sanskrit}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-brand-brown font-medium">
                      {dosha.name}{" "}
                      <span className="text-xs text-brand-brown-muted font-sans font-normal uppercase tracking-wider block sm:inline sm:ml-2">
                        ({dosha.elements})
                      </span>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed font-light">
                    {dosha.governs}
                  </p>

                  <div className="pt-4 border-t border-brand-brown-border/60 space-y-2.5 text-xs">
                    <div>
                      <span className="font-semibold text-brand-brown">When Imbalanced: </span>
                      <span className="text-brand-brown-muted font-light">{dosha.imbalanceSign}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-brand-green">Vedic Therapy: </span>
                      <span className="text-brand-brown-muted font-light">{dosha.remedy}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-brown-border/40 flex items-center gap-2 text-xs text-brand-brown-muted font-light">
                  <Leaf className="w-3.5 h-3.5 text-brand-green shrink-0" />
                  <span>Evaluated during Nadi Pariksha pulse diagnosis</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
