export interface Doctor {
  id: string;
  name: string;
  sanskritTitle: string;
  title: string;
  degrees: string;
  experience: string;
  bio: string;
  image: string;
  specialties: string[];
  languages: string[];
  onlineFee: number;
  clinicFee: number;
  availableDays: string[];
  rating: number;
  reviewCount: number;
  nextSlot: string;
}

export interface HealthConcern {
  id: string;
  title: string;
  sanskritName: string;
  description: string;
  iconName: string;
}

export const HEALTH_CONCERNS: HealthConcern[] = [
  {
    id: "spine-joints",
    title: "Spine & Joint Disorders",
    sanskritName: "सन्धिगत वात एवं पृष्ठशूल",
    description: "Sciatica, lumbar spondylosis, cervical pain, osteoarthritis, and chronic stiffness.",
    iconName: "Activity",
  },
  {
    id: "digestive-detox",
    title: "Digestive Health & Gut Detox",
    sanskritName: "अग्निमान्द्य एवं आमदोष",
    description: "IBS, acid reflux, chronic bloating, sluggish metabolism, and Ama toxin cleansing.",
    iconName: "Flame",
  },
  {
    id: "skin-hair",
    title: "Skin & Hair Revitalization",
    sanskritName: "त्वक् विकार एवं केशपतन",
    description: "Psoriasis, eczema, acne, hyperpigmentation, premature graying, and hair thinning.",
    iconName: "Sparkles",
  },
  {
    id: "womens-health",
    title: "Women's Health & Fertility",
    sanskritName: "स्त्रीरोग एवं प्रसूति तन्त्र",
    description: "PCOS/PCOD, menstrual irregularities, menopause transition, and postnatal care.",
    iconName: "Heart",
  },
  {
    id: "stress-insomnia",
    title: "Stress, Anxiety & Insomnia",
    sanskritName: "मानस रोग एवं अनिद्रा",
    description: "Mental burnout, hypertension, chronic fatigue, panic states, and sleep disruption.",
    iconName: "Moon",
  },
  {
    id: "immunity-metabolic",
    title: "Immunity & Preventive Wellness",
    sanskritName: "ओजस वृद्धि एवं रसायन",
    description: "Frequent respiratory infections, metabolic syndrome, lethargy, and seasonal detox.",
    iconName: "Shield",
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-anupama-ramachandran",
    name: "Dr. Anupama Ramachandran",
    sanskritTitle: "मुख्य आयुर्वेदाचार्या",
    title: "Chief Physician & Senior Panchakarma Specialist",
    degrees: "BAMS, MD (Ayurveda), Senior Pulse Diagnosis (Nadi Pariksha) Consultant",
    experience: "15+ Years Clinical Experience",
    bio: "With over 15 years of dedicated classical clinical practice, Dr. Anupama Ramachandran is the Chief Physician leading Ayur Veda Mantra. Specializing in classical Panchakarma protocols, Nadi Pariksha pulse diagnosis, chronic musculoskeletal recovery, and personalized Ayurvedic constitutional healing, Dr. Anupama combines ancient Sastric precision with compassionate, patient-centered clinical care.",
    image: "https://images.unsplash.com/photo-1594824813589-325244585e5d?auto=format&fit=crop&w=800&q=80",
    specialties: [
      "Classical Panchakarma & Detox",
      "Nadi Pariksha (Pulse Diagnosis)",
      "Spine, Joint & Musculoskeletal Care",
      "Women's Health & Hormonal Balance",
      "Digestive & Chronic Metabolic Disorders",
    ],
    languages: ["English", "Hindi", "Malayalam", "Tamil"],
    onlineFee: 800,
    clinicFee: 1200,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rating: 4.98,
    reviewCount: 520,
    nextSlot: "Available Today, 04:30 PM",
  },
];
