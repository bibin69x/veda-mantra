import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wind, Flame, Droplets, Leaf } from "lucide-react";

const DOSHAS = [
  {
    name: "Vata",
    sanskrit: "वात (वायु + आकाश)",
    elements: "Air & Space",
    governs: "Nerve impulses, circulation, breathing, and joint mobility.",
    imbalanceSign: "Anxiety, insomnia, dry skin, constipation, and joint aches.",
    remedy: "Warm Abhyanga oil massage, Kati Basti, and grounding herbs.",
    icon: Wind,
    color: "from-blue-50 to-amber-50/30",
  },
  {
    name: "Pitta",
    sanskrit: "पित्त (अग्नि + जल)",
    elements: "Fire & Water",
    governs: "Digestion, metabolism, cellular energy, and ocular vitality.",
    imbalanceSign: "Acidity, inflammation, skin flare-ups, migraines, and anger.",
    remedy: "Shirodhara, cooling herbal ghee, Tarpana, and Takradhara.",
    icon: Flame,
    color: "from-amber-50 to-orange-50/30",
  },
  {
    name: "Kapha",
    sanskrit: "कफ (जल + पृथ्वी)",
    elements: "Water & Earth",
    governs: "Bodily structure, joint lubrication, immunity, and stamina.",
    imbalanceSign: "Lethargy, weight gain, sinus congestion, and fluid retention.",
    remedy: "Udvartana dry powder massage, herbal steam Swedam, and Kizhi.",
    icon: Droplets,
    color: "from-emerald-50 to-teal-50/30",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-brand-brown-border">
      <Container size="xl">
        <SectionHeading
          sanskritSubtitle="त्रिदोष सिद्धान्त एवं पञ्चकर्म"
          tagline="Ayurvedic Philosophy"
          title="The Sacred Science of Tri-Dosha Harmony"
          description="According to classical Ayurveda, perfect health is the dynamic balance between body constitution (Doshas), digestive fire (Agni), tissue health (Dhatus), and serene mental peace (Prasanna Atma)."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOSHAS.map((dosha) => {
            const Icon = dosha.icon;
            return (
              <div
                key={dosha.name}
                className="group relative rounded-sm p-8 bg-brand-cream border border-brand-brown-border transition-all duration-300 hover:shadow-luxury hover:border-brand-gold/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
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

                  <div className="pt-3 border-t border-brand-brown-border/60 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-brand-brown">When Imbalanced: </span>
                      <span className="text-brand-brown-muted">{dosha.imbalanceSign}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-brand-green">Vedic Therapy: </span>
                      <span className="text-brand-brown-muted">{dosha.remedy}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-brown-border/40 flex items-center gap-2 text-xs text-brand-gold-dark font-medium">
                  <Leaf className="w-3.5 h-3.5 text-brand-green" />
                  <span>Customized by our Vaidyas during Nadi Pariksha</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
