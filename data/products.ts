export interface ProductVariant {
  id: string;
  title: string;
  volumeOrWeight: string;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
}

export interface BotanicalIngredient {
  sanskritName: string;
  botanicalName: string;
  action: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  location?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  sanskritName: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages?: string[];
  tagline: string;
  volumeOrWeight: string;
  inStock: boolean;
  doshaSuitability: "Tridoshic" | "Vata" | "Pitta" | "Kapha" | "Vata-Pitta" | "Pitta-Kapha" | "Vata-Kapha";
  classicalReference: string;
  keyIngredients: string[];
  botanicalActives: BotanicalIngredient[];
  benefits: string[];
  description: string;
  classicalPreparation: string;
  howToUse: string;
  dailyRitual: string;
  precautions: string;
  shelfLife: string;
  variants?: ProductVariant[];
  complementaryTreatmentSlugs?: string[];
  reviews?: ProductReview[];
}

export const PRODUCT_CATEGORIES = [
  "All Remedies",
  "Facial Care & Oils",
  "Hair & Scalp",
  "Body & Pain Relief",
  "Herbal Elixirs & Immunity",
  "Digestive & Teas",
] as const;

export const DOSHA_TYPES = [
  "All Doshas",
  "Tridoshic",
  "Vata",
  "Pitta",
  "Kapha",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "kumkumadi-radiance-tailam",
    slug: "kumkumadi-radiance-tailam",
    title: "Kumkumadi Miraculous Beauty Fluid",
    sanskritName: "कुङ्कुमादि तैलम्",
    category: "Facial Care & Oils",
    price: 1850,
    compareAtPrice: 2200,
    rating: 4.9,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1608248597359-57e05697669a?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1608248597359-57e05697669a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    ],
    tagline: "Authentic 26-herb saffron night elixir formulated according to the classical Ashtanga Hridaya text.",
    volumeOrWeight: "30 ml",
    inStock: true,
    doshaSuitability: "Tridoshic",
    classicalReference: "Ashtanga Hridaya (Kshudra Roga Chikitsa)",
    keyIngredients: [
      "Kashmiri Saffron (Kumkuma)",
      "Red Sandalwood (Rakta Chandana)",
      "Indian Madder (Manjistha)",
      "Sacred Lotus Pollen (Padma Kesara)",
      "Licorice Root (Yashtimadhu)",
    ],
    botanicalActives: [
      {
        sanskritName: "Kumkuma",
        botanicalName: "Crocus sativus",
        action: "Varnya (Complexion enhancer) & cell rejuvenator",
      },
      {
        sanskritName: "Rakta Chandana",
        botanicalName: "Pterocarpus santalinus",
        action: "Pitta-pacifying & cooling anti-inflammatory",
      },
      {
        sanskritName: "Manjistha",
        botanicalName: "Rubia cordifolia",
        action: "Rakta Shodhaka (Blood and dermal micro-circulation purifier)",
      },
      {
        sanskritName: "Yashtimadhu",
        botanicalName: "Glycyrrhiza glabra",
        action: "Melanin inhibitor & moisture barrier strengthener",
      },
    ],
    benefits: [
      "Illuminates dermal complexion and fades stubborn hyperpigmentation",
      "Stimulates natural collagen synthesis and softens fine lines",
      "Neutralizes free radical oxidative stress from urban pollution",
      "Balances sebum while providing deep cellular hydration",
    ],
    description:
      "Prepared through a slow, classical 72-hour Ayurvedic decoction process, Kumkumadi Tailam is Ayurveda's crowning jewel for skin revitalization. Kashmiri Saffron threads are steeped in goat milk and pure cold-pressed sesame oil alongside 25 rare botanicals to penetrate all seven layers of the skin (Twak).",
    classicalPreparation:
      "Herbs are decocted in bronze vessels (Kwatha) until concentrated to one-fourth volume, followed by slow simmering with pure sesame oil (Taila Paka Vidhi) until all moisture evaporates, yielding a pure golden therapeutic fluid.",
    howToUse:
      "Cleanse face thoroughly with lukewarm water. Take 3 to 4 drops of Kumkumadi Tailam on fingertips, gently warm between palms, and press into damp face and neck with gentle upward circular strokes.",
    dailyRitual:
      "Apply nightly as the final step in your evening ritual before rest, allowing the saffron compounds to work during the body's natural nocturnal rejuvenation cycle.",
    precautions:
      "For external cosmetic use only. If prone to severe cystic acne, limit usage to 2 drops every alternate night. Store away from direct sunlight.",
    shelfLife: "24 months from manufacturing date.",
    variants: [
      { id: "k-15ml", title: "Travel Flacon", volumeOrWeight: "15 ml", price: 990, compareAtPrice: 1200, inStock: true },
      { id: "k-30ml", title: "Standard Sacred Bottle", volumeOrWeight: "30 ml", price: 1850, compareAtPrice: 2200, inStock: true },
      { id: "k-50ml", title: "Grand Apothecary Size", volumeOrWeight: "50 ml", price: 2850, compareAtPrice: 3400, inStock: true },
    ],
    complementaryTreatmentSlugs: ["face-abhyanga-fascial-release", "abhyanga-swedam"],
    reviews: [
      {
        id: "rev-1",
        userName: "Ananya Deshmukh",
        rating: 5,
        date: "2 weeks ago",
        comment: "This oil is liquid gold. After 10 days of nightly application, dark spots from sun exposure have visibly faded and my skin feels deeply supple.",
        verifiedPurchase: true,
        location: "Mumbai",
      },
      {
        id: "rev-2",
        userName: "Dr. Vikram Sethi",
        rating: 5,
        date: "1 month ago",
        comment: "As someone who studies Ayurvedic texts, the authentic aroma of saffron, sandalwood, and goat milk proves this is prepared strictly per Ashtanga Hridaya.",
        verifiedPurchase: true,
        location: "Bengaluru",
      },
    ],
  },
  {
    id: "shata-dhauta-ghrita-cream",
    slug: "shata-dhauta-ghrita-cream",
    title: "Shata Dhauta Ghrita 100-Washed Ghee Cream",
    sanskritName: "शतधौत घृतम्",
    category: "Facial Care & Oils",
    price: 1450,
    compareAtPrice: 1750,
    rating: 4.95,
    reviewCount: 118,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    tagline: "Certified A2 Gir Cow Ghee washed 100 times in pure copper vessels with holy botanical water.",
    volumeOrWeight: "50 g",
    inStock: true,
    doshaSuitability: "Pitta",
    classicalReference: "Charaka Samhita (Chikitsa Sthana - Vranaropana)",
    keyIngredients: [
      "A2 Gir Cow Cultured Bilona Ghee",
      "Copper Vessel Infused Spring Water",
      "Organic Damask Rose Water (Gulab Jal)",
      "Sandalwood Hydrosol",
    ],
    botanicalActives: [
      {
        sanskritName: "Go Ghrita",
        botanicalName: "Clarified Butterfat (A2)",
        action: "Deep lipid barrier repair & tissue cooling",
      },
      {
        sanskritName: "Tamra Patra",
        botanicalName: "Copper Pot Electrolytes",
        action: "Micro-cleansing anti-bacterial antioxidant binding",
      },
      {
        sanskritName: "Shatapatri",
        botanicalName: "Rosa damascena",
        action: "Sita Virya (Potent cooling) & redness reducer",
      },
    ],
    benefits: [
      "Instantly quenches inflammation, sunburn, eczema, and skin redness",
      "Transforms heavy butter lipids into a featherweight, non-greasy silk cream",
      "Restores compromised skin barriers and shields against moisture loss",
      "Natural cooling antidote for aggravated Pitta skin conditions",
    ],
    description:
      "Shata Dhauta Ghrita is one of the most miraculous topical preparations in Ayurvedic dermatology. Pure organic A2 cow ghee is hand-whipped with pure water in sacred copper vessels exactly 100 times. This artisanal process breaks down lipid molecules into microscopic, easily absorbed particles that penetrate the deepest dermis without clogging pores.",
    classicalPreparation:
      "Churned in copper vessels with repeated washings of pure spring water 100 times sequentially, transmuting the golden ghee into a snowy-white, lightweight therapeutic emulsion.",
    howToUse:
      "Take a pea-sized amount and gently massage onto clean face, neck, or inflamed areas. Absorbs instantly with a soothing cooling sensation.",
    dailyRitual:
      "Ideal for morning and evening application, especially after sun exposure or whenever skin experiences heat, redness, or dryness.",
    precautions: "Keep in a cool, dry place away from moisture. Use a clean dry spatula or clean fingers.",
    shelfLife: "18 months from manufacturing date.",
    variants: [
      { id: "sdg-50g", title: "Standard Glass Jar", volumeOrWeight: "50 g", price: 1450, compareAtPrice: 1750, inStock: true },
      { id: "sdg-100g", title: "Luxury Heritage Jar", volumeOrWeight: "100 g", price: 2450, compareAtPrice: 2900, inStock: true },
    ],
    complementaryTreatmentSlugs: ["face-abhyanga-fascial-release", "shirodhara-netra-dhara"],
    reviews: [
      {
        id: "rev-3",
        userName: "Meera Krishnan",
        rating: 5,
        date: "3 weeks ago",
        comment: "Completely cured my chronic rosacea flare-ups! The texture is astonishingly light and absorbs like a dream.",
        verifiedPurchase: true,
        location: "Chennai",
      },
    ],
  },
  {
    id: "manjistha-glow-ubtan",
    slug: "manjistha-glow-ubtan",
    title: "Manjistha Radiance & Micro-Polishing Ubtan",
    sanskritName: "मञ्जिष्ठा कान्ति उद्वर्तनम्",
    category: "Facial Care & Oils",
    price: 650,
    compareAtPrice: 790,
    rating: 4.8,
    reviewCount: 76,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    tagline: "Stone-ground herbal cleansing polish for pore clarification and luminous even skin tone.",
    volumeOrWeight: "100 g",
    inStock: true,
    doshaSuitability: "Tridoshic",
    classicalReference: "Sushruta Samhita (Chikitsa Sthana)",
    keyIngredients: [
      "Wildcrafted Manjistha Root",
      "Nagarmotha (Nutgrass)",
      "Lodhra Bark",
      "Kasturi Manjal (Wild Turmeric)",
      "Chickpea & Green Gram Flours",
    ],
    botanicalActives: [
      {
        sanskritName: "Manjistha",
        botanicalName: "Rubia cordifolia",
        action: "Micro-lymphatic drainer and spot lightening agent",
      },
      {
        sanskritName: "Lodhra",
        botanicalName: "Symplocos racemosa",
        action: "Astringent (Kashaya) that firms skin and refines enlarged pores",
      },
      {
        sanskritName: "Kasturi Manjal",
        botanicalName: "Curcuma aromatica",
        action: "Non-staining natural antibacterial brightening root",
      },
    ],
    benefits: [
      "Gently buffs away dull dead skin cells without stripping natural lipids",
      "Clears congested pores and prevents breakout-causing sebum buildup",
      "Imparts an instant golden, lit-from-within Ayurvedic bridal glow",
    ],
    description:
      "A traditional grain and botanical powder blend inspired by royal Udvartana body purification rites. Handcrafted from wildcrafted Indian Madder, aromatic wild turmeric, and nutrient-dense sprouted legume flours.",
    classicalPreparation:
      "Sun-dried botanical barks and roots are micro-pulverized using traditional stone mills to ensure heat-sensitive botanical phytonutrients remain biologically potent.",
    howToUse:
      "Mix 1-2 teaspoons with rose water (for oily/Pitta skin), raw milk (for dry/Vata skin), or honey/yogurt. Apply evenly, let rest for 7-10 minutes, and gently rinse with circular buffs.",
    dailyRitual: "Use 2 to 3 times a week as a sacred exfoliation and masking step.",
    precautions: "Patch test prior to first use. Avoid direct eye contact.",
    shelfLife: "24 months.",
    variants: [
      { id: "mgu-100g", title: "100g Pouch", volumeOrWeight: "100 g", price: 650, compareAtPrice: 790, inStock: true },
      { id: "mgu-250g", title: "250g Value Jar", volumeOrWeight: "250 g", price: 1250, compareAtPrice: 1550, inStock: true },
    ],
    complementaryTreatmentSlugs: ["face-abhyanga-fascial-release", "abhyanga-kizhi"],
    reviews: [],
  },
  {
    id: "neelibringadi-hair-nectar",
    slug: "neelibringadi-hair-nectar",
    title: "Neelibringadi Intensive Root Therapy",
    sanskritName: "नीलीभृङ्गादि तैलम्",
    category: "Hair & Scalp",
    price: 890,
    compareAtPrice: 1050,
    rating: 4.85,
    reviewCount: 164,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    tagline: "Classical Kerala herbal hair oil cooked in pure cold-pressed coconut milk & four nourishing milks.",
    volumeOrWeight: "200 ml",
    inStock: true,
    doshaSuitability: "Pitta",
    classicalReference: "Sahasrayogam (Taila Prakarana)",
    keyIngredients: [
      "True Indigo Leaf (Neeli)",
      "False Daisy (Bhringaraj)",
      "Indian Gooseberry (Amla)",
      "Balloon Vine (Karnasphota / Indravalli)",
      "Cow Milk, Goat Milk, Buffalo Milk, Coconut Milk",
    ],
    botanicalActives: [
      {
        sanskritName: "Neeli",
        botanicalName: "Indigofera tinctoria",
        action: "Natural melanin booster that prevents premature graying",
      },
      {
        sanskritName: "Bhringaraj",
        botanicalName: "Eclipta alba",
        action: "Keshya (King of Hair Herbs) — awakens dormant hair follicles",
      },
      {
        sanskritName: "Amalaki",
        botanicalName: "Phyllanthus emblica",
        action: "Rich Vitamin C antioxidant strengthening hair shafts",
      },
      {
        sanskritName: "Indravalli",
        botanicalName: "Cardiospermum halicacabum",
        action: "Anti-fungal and scalp cooling antidote for stubborn dandruff",
      },
    ],
    benefits: [
      "Halts premature hair thinning, graying, and stress-induced shedding",
      "Deeply cools cranial heat (*Ushna*) to alleviate tension and promote sound sleep",
      "Conditions dry, brittle hair strands with rich essential fatty acids",
      "Revitalizes follicular micro-circulation for thicker, denser hair regrowth",
    ],
    description:
      "Neelibringadi Tailam is Kerala Ayurveda's most acclaimed clinical hair nectar. Fresh hand-squeezed botanical juices of Neeli and Bhringaraj are slowly simmered in virgin coconut oil alongside four distinct animal and plant milks for 48 hours to create a deeply penetrating nutrient elixir.",
    classicalPreparation:
      "Cooked strictly following the Sahasrayogam Ksheera Paka methodology, ensuring all milk proteins integrate seamlessly with the herbal decoction without rancidity.",
    howToUse:
      "Warm 15-20ml in a small bowl. Part hair in sections and apply directly onto the scalp with fingertips. Massage firmly for 10-15 minutes using circular pressure point stimulation.",
    dailyRitual:
      "Leave on for a minimum of 45 minutes or overnight. Wash with a mild SLS-free herbal cleanser such as Triphala Scalp Cleanser.",
    precautions: "For external scalp use only. Natural separation or slight herbal settling at base is normal.",
    shelfLife: "36 months.",
    variants: [
      { id: "nbh-100ml", title: "100 ml Bottle", volumeOrWeight: "100 ml", price: 490, inStock: true },
      { id: "nbh-200ml", title: "200 ml Classic Bottle", volumeOrWeight: "200 ml", price: 890, compareAtPrice: 1050, inStock: true },
      { id: "nbh-500ml", title: "500 ml Family Pack", volumeOrWeight: "500 ml", price: 1850, compareAtPrice: 2200, inStock: true },
    ],
    complementaryTreatmentSlugs: ["head-abhyanga-hair-treatment", "sirovasti", "shirodhara-netra-dhara"],
    reviews: [
      {
        id: "rev-4",
        userName: "Kavita Nair",
        rating: 5,
        date: "1 month ago",
        comment: "This has completely stopped my postpartum hair fall within 3 weeks. Plus the cooling effect helps me sleep like a baby.",
        verifiedPurchase: true,
        location: "Kochi",
      },
    ],
  },
  {
    id: "bhringraj-kesha-elixir",
    slug: "bhringraj-kesha-elixir",
    title: "Bhringraj & Brahmi Scalp Revitalizer",
    sanskritName: "भृङ्गराज ब्राह्मी तैलम्",
    category: "Hair & Scalp",
    price: 790,
    compareAtPrice: 950,
    rating: 4.8,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    tagline: "Sesame oil based meditative scalp tonic to strengthen roots and calm mental fatigue.",
    volumeOrWeight: "200 ml",
    inStock: true,
    doshaSuitability: "Vata-Pitta",
    classicalReference: "Bhavaprakasha Nighantu",
    keyIngredients: [
      "Organic Bhringraj (Eclipta alba)",
      "Centella Asiatica (Brahmi / Gotu Kola)",
      "Amla Fruit Extract",
      "Cold-Pressed Black Sesame Seed Oil",
    ],
    botanicalActives: [
      {
        sanskritName: "Brahmi",
        botanicalName: "Bacopa monnieri",
        action: "Medhya (Cognitive enhancer) and neurotransmitter pacifier",
      },
      {
        sanskritName: "Tila Taila",
        botanicalName: "Sesamum indicum",
        action: "Deep root penetration carrying herbs into hair bulbs",
      },
    ],
    benefits: [
      "Relieves cranial stress, mental burnout, and tension headaches",
      "Re-energizes weak, lifeless hair roots to stimulate voluminous density",
      "Replenishes moisture to dry, flaky scalps prone to seasonal Vata imbalance",
    ],
    description:
      "A harmonious blend of Bhringraj and Brahmi slow-cooked in pure black sesame oil. Designed for individuals experiencing both hair thinning and high stress from contemporary screen fatigue.",
    classicalPreparation: "Traditional Kwatha Siddha Taila method with 100% cold-pressed sesame foundation.",
    howToUse:
      "Gently warm oil, part hair, apply directly to crown (Sahasrara chakra), and gently knead down to base of neck.",
    dailyRitual: "Apply twice weekly before meditation or bed.",
    precautions: "Store in a cool amber bottle. For external use.",
    shelfLife: "24 months.",
    variants: [
      { id: "bb-200ml", title: "200 ml Bottle", volumeOrWeight: "200 ml", price: 790, compareAtPrice: 950, inStock: true },
    ],
    complementaryTreatmentSlugs: ["head-abhyanga-hair-treatment", "shirodhara-netra-dhara"],
    reviews: [],
  },
  {
    id: "triphala-scalp-cleanser",
    slug: "triphala-scalp-cleanser",
    title: "Triphala & Shikakai Scalp Cleanser",
    sanskritName: "त्रिफला शिकाकाई केशरञ्जनम्",
    category: "Hair & Scalp",
    price: 580,
    compareAtPrice: 690,
    rating: 4.75,
    reviewCount: 62,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    tagline: "100% sulfate-free natural saponin cleanser with holy basil and organic amla.",
    volumeOrWeight: "250 ml",
    inStock: true,
    doshaSuitability: "Tridoshic",
    classicalReference: "Ashtanga Sangraha",
    keyIngredients: [
      "Triphala (Amalaki, Haritaki, Bibhitaki)",
      "Shikakai Pods (Acacia concinna)",
      "Reetha (Soapnut)",
      "Tulsi (Holy Basil)",
      "Hibiscus Petals (Japapushpa)",
    ],
    botanicalActives: [
      {
        sanskritName: "Shikakai",
        botanicalName: "Senegalia rugata",
        action: "Natural plant-based saponins providing gentle cleansing foam",
      },
      {
        sanskritName: "Triphala",
        botanicalName: "Three Myrobalans",
        action: "Antioxidant trio purifying buildup and balancing scalp pH",
      },
    ],
    benefits: [
      "Cleanses heavy herbal oils effortlessly without parching hair strands",
      "Restores natural scalp microbiome balance and reduces itchiness",
      "Leaves hair with weightless bounce, natural sheen, and herbal freshness",
    ],
    description:
      "A purifying herbal wash that cleanses with naturally occurring saponins from wildcrafted Shikakai and Reetha berries rather than synthetic sulfates. Infused with freshly brewed Triphala decoction.",
    classicalPreparation: "Freshly brewed concentrated herb tea blended into a pure botanical cleansing base.",
    howToUse: "Apply to wet scalp, massage gently into rich lather, let botanicals sit for 2 minutes, and rinse thoroughly.",
    dailyRitual: "Use after Ayurvedic oiling rituals or for daily natural hair washing.",
    precautions: "Avoid contact with eyes. In case of contact, rinse thoroughly with fresh water.",
    shelfLife: "24 months.",
    variants: [
      { id: "tsc-250ml", title: "250 ml Pump Bottle", volumeOrWeight: "250 ml", price: 580, compareAtPrice: 690, inStock: true },
      { id: "tsc-500ml", title: "500 ml Eco Refill", volumeOrWeight: "500 ml", price: 980, compareAtPrice: 1200, inStock: true },
    ],
    complementaryTreatmentSlugs: ["head-abhyanga-hair-treatment"],
    reviews: [],
  },
  {
    id: "mahanarayana-joint-oil",
    slug: "mahanarayana-joint-oil",
    title: "Mahanarayana Restorative Joint Oil",
    sanskritName: "महानारायण तैलम्",
    category: "Body & Pain Relief",
    price: 750,
    compareAtPrice: 900,
    rating: 4.9,
    reviewCount: 176,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    tagline: "Vedic neuromuscular pain relief tailam infused with 52 therapeutic botanicals and pure sesame oil.",
    volumeOrWeight: "200 ml",
    inStock: true,
    doshaSuitability: "Vata",
    classicalReference: "Charaka Samhita (Chikitsa Sthana - Vata Vyadhi)",
    keyIngredients: [
      "Dashamoola (Ten Sacred Roots)",
      "Bala (Sida cordifolia)",
      "Ashwagandha (Indian Ginseng)",
      "Shatavari (Asparagus racemosus)",
      "Pure Sesame Oil & Cow Milk",
    ],
    botanicalActives: [
      {
        sanskritName: "Dashamoola",
        botanicalName: "Ten Medicinal Roots",
        action: "Master Vata-pacifier for deep neuromuscular relief and joint easing",
      },
      {
        sanskritName: "Bala",
        botanicalName: "Sida cordifolia",
        action: "Strengthens tendons, muscles, and nerve conductivity",
      },
      {
        sanskritName: "Rasna",
        botanicalName: "Pluchea lanceolata",
        action: "Classical anti-arthritic and anti-inflammatory botanical",
      },
    ],
    benefits: [
      "Eases chronic joint stiffness, lower back pain, and muscle spasms",
      "Restores synovial joint lubrication and flexibility in elderly & athletes",
      "Pacifies aggregated Vata dosha throughout the nervous and muscular systems",
      "Accelerates post-workout muscle repair and tissue revitalization",
    ],
    description:
      "One of the most revered formulations in classical Ayurveda, Mahanarayana Tailam is formulated with 52 wildcrafted herbs simmered in sesame oil and cow milk. The complex lipid composition penetrates deep into synovial joints, tendons, and nerve sheaths.",
    classicalPreparation:
      "Multi-stage decoction boiled over 5 days in brass urns with Dashamoola decoction and milk (Ksheera Paka), reducing slowly to maximize therapeutic terpene concentration.",
    howToUse:
      "Warm oil to comfortable body temperature. Apply generously over stiff joints, neck, back, or knees. Massage with firm strokes for 15 minutes. Follow with a warm water compress or hot shower for deeper absorption.",
    dailyRitual: "Apply daily before bathing or in the evening before rest for chronic joint wellness.",
    precautions: "For external application only. Do not apply over open wounds or acute bone fractures.",
    shelfLife: "36 months.",
    variants: [
      { id: "mn-200ml", title: "200 ml Bottle", volumeOrWeight: "200 ml", price: 750, compareAtPrice: 900, inStock: true },
      { id: "mn-500ml", title: "500 ml Clinic Size", volumeOrWeight: "500 ml", price: 1550, compareAtPrice: 1850, inStock: true },
    ],
    complementaryTreatmentSlugs: ["back-pain-package", "knee-pain-package", "neck-pain-package", "abhyanga-kizhi"],
    reviews: [
      {
        id: "rev-5",
        userName: "Rajendra Sharma",
        rating: 5,
        date: "3 weeks ago",
        comment: "Suffering from lumbar spondylosis for 4 years. Applying Mahanarayana oil followed by warm hot-water bottle gives immense relief that modern pain gels couldn't match.",
        verifiedPurchase: true,
        location: "New Delhi",
      },
    ],
  },
  {
    id: "dhanwantharam-restorative-thailam",
    slug: "dhanwantharam-restorative-thailam",
    title: "Dhanwantharam Classical Restorative Thailam",
    sanskritName: "धन्वन्तरं तैलम्",
    category: "Body & Pain Relief",
    price: 820,
    compareAtPrice: 980,
    rating: 4.9,
    reviewCount: 135,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    tagline: "The sovereign full-body rejuvenating oil for neuromuscular vitality, postnatal recovery & Abhyanga.",
    volumeOrWeight: "200 ml",
    inStock: true,
    doshaSuitability: "Vata",
    classicalReference: "Ashtanga Hridaya (Sootika Prakarana & Vata Chikitsa)",
    keyIngredients: [
      "Bala Root (Sida cordifolia)",
      "Yava (Barley Grain)",
      "Kulattha (Horse Gram)",
      "Dashamoola (Ten Roots)",
      "Sesame Oil & Cow's Milk",
    ],
    botanicalActives: [
      {
        sanskritName: "Bala",
        botanicalName: "Sida cordifolia",
        action: "Deep tissue nourisher and nervine tonic",
      },
      {
        sanskritName: "Dashamoola",
        botanicalName: "Ten Medicinal Roots",
        action: "Anti-spasmodic and restorative for full-body fatigue",
      },
    ],
    benefits: [
      "The premier oil for classical full-body Abhyanga self-massage",
      "Rebuilds physical vitality, muscle tone, and nervous stability",
      "Renowned for postnatal mothers recovering bodily strength",
      "Calms insomnia, restlessness, and chronic bodily dryness",
    ],
    description:
      "Named after Lord Dhanwanthari, the divine physician of the Gods. This 28-herb classical formulation is cooked with barley, horse gram, and Bala root to deliver deep cellular nourishment across all seven Dhatus (bodily tissues).",
    classicalPreparation: "Prepared through 21 classical heating stages to achieve maximum lipid-herb bioavailability.",
    howToUse:
      "Warm the oil generously and apply from head to toe using long sweeping strokes on limbs and circular motions over joints. Rest for 20-30 minutes before a warm bath.",
    dailyRitual: "Perform self-Abhyanga 2-3 times per week before sunrise for optimal vitality.",
    precautions: "Do not apply during active fever, acute indigestion, or immediately after a heavy meal.",
    shelfLife: "36 months.",
    variants: [
      { id: "dwt-200ml", title: "200 ml Bottle", volumeOrWeight: "200 ml", price: 820, compareAtPrice: 980, inStock: true },
      { id: "dwt-500ml", title: "500 ml Family Bottle", volumeOrWeight: "500 ml", price: 1690, compareAtPrice: 2100, inStock: true },
    ],
    complementaryTreatmentSlugs: ["abhyanga-swedam", "abhyanga-kizhi", "back-pain-package"],
    reviews: [],
  },
  {
    id: "murivenna-first-aid-oil",
    slug: "murivenna-first-aid-oil",
    title: "Murivenna Classical First-Aid & Sprain Oil",
    sanskritName: "मुरिवेण्णा तैलम्",
    category: "Body & Pain Relief",
    price: 450,
    compareAtPrice: 550,
    rating: 4.88,
    reviewCount: 94,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    tagline: "Authentic Kerala Kalaripayattu martial artist secret for sprains, bruises, fractures & burns.",
    volumeOrWeight: "200 ml",
    inStock: true,
    doshaSuitability: "Tridoshic",
    classicalReference: "Sahasrayogam (Taila Prakarana)",
    keyIngredients: [
      "Tambula (Betel Leaf)",
      "Sigru (Moringa Leaves)",
      "Kanya (Fresh Aloe Vera Gel)",
      "Palandu (Shallots / Allium cepa)",
      "Karanji (Pongamia pinnata)",
      "Pure Coconut Oil",
    ],
    botanicalActives: [
      {
        sanskritName: "Tambula & Sigru",
        botanicalName: "Piper betle & Moringa oleifera",
        action: "Potent natural analgesics and rapid tissue knitters",
      },
      {
        sanskritName: "Kumari",
        botanicalName: "Aloe barbadensis",
        action: "Accelerates dermal regeneration and wound healing",
      },
    ],
    benefits: [
      "Rapidly relieves acute ankle sprains, ligament twists, and sports contusions",
      "Accelerates bruise dissipation and eases painful swelling (*Shopha*)",
      "Calms minor kitchen burns and promotes clean scar-free skin healing",
    ],
    description:
      "Traditionally created by warrior healers of Kerala's Kalaripayattu martial lineage. Murivenna (meaning 'wound butter') combines the freshly extracted juices of betel leaf, moringa, aloe vera, and shallots in pure coconut oil.",
    classicalPreparation: "Simmered in coconut oil until leaf juices turn into a fragrant, emerald-green medicinal oil.",
    howToUse: "Soak a clean gauze piece in warm Murivenna oil and apply as a poultice over sprained joints, or gently massage over bruised areas.",
    dailyRitual: "Keep in household medicine chest as an indispensable natural first-aid remedy.",
    precautions: "For external use. If sprain persists or severe fracture is suspected, seek medical diagnosis immediately.",
    shelfLife: "36 months.",
    variants: [
      { id: "mrv-200ml", title: "200 ml Bottle", volumeOrWeight: "200 ml", price: 450, compareAtPrice: 550, inStock: true },
    ],
    complementaryTreatmentSlugs: ["knee-pain-package", "back-pain-package"],
    reviews: [],
  },
  {
    id: "chyawanprash-rasayana",
    slug: "chyawanprash-rasayana",
    title: "Swarna Chyawanprash Supreme Rasayana",
    sanskritName: "स्वर्ण च्यवनप्राश रसायनम्",
    category: "Herbal Elixirs & Immunity",
    price: 1450,
    compareAtPrice: 1700,
    rating: 5.0,
    reviewCount: 184,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    tagline: "Wild forest Amla preserve fortified with 48 herbs, A2 Gir cow ghee, raw forest honey & 24K Gold Bhasma.",
    volumeOrWeight: "500 g",
    inStock: true,
    doshaSuitability: "Tridoshic",
    classicalReference: "Charaka Samhita (Chikitsa Sthana - Rasayana Adhyaya)",
    keyIngredients: [
      "Wild Forest Amla (Emblica officinalis)",
      "A2 Gir Cow Cultured Ghee",
      "Raw Unprocessed Forest Honey",
      "Swarna Bhasma (Purified 24K Gold Calx)",
      "Ashwagandha, Shatavari, Pippali, Cardamom",
    ],
    botanicalActives: [
      {
        sanskritName: "Amalaki",
        botanicalName: "Phyllanthus emblica",
        action: "Supreme Rasayana (longevity rejuvenator) & lung tonifier",
      },
      {
        sanskritName: "Swarna Bhasma",
        botanicalName: "Micro-purified Gold Calx",
        action: "Ojas builder, cellular longevity promoter, and neuro-protector",
      },
      {
        sanskritName: "Pippali",
        botanicalName: "Piper longum",
        action: "Bio-enhancer carrying active polyphenols deep into tissues",
      },
    ],
    benefits: [
      "Builds robust Ojas (deep cellular immunity) against seasonal viral infections",
      "Fortifies respiratory lung capacity and upper airway defense",
      "Enhances metabolic Agni without aggravating acidity or internal heat",
      "Promotes sustained physical stamina, cognitive sharpness, and youthful vitality",
    ],
    description:
      "Prepared according to the strict classical protocols of the Charaka Samhita. Fresh wild Amla berries harvested from deep tribal forests are steamed in herbal decoctions, hand-pulped, slow-roasted in cultured A2 ghee, and blended with 48 therapeutic botanicals, raw forest honey, and micro-refined Swarna Bhasma.",
    classicalPreparation:
      "Handmade over copper wood-fired hearths adhering to classical Avaleha Paka standards without any refined sugars, glucose, or artificial preservatives.",
    howToUse:
      "Take 1 teaspoon (10-15g) twice daily on an empty stomach in the morning and evening, followed by a glass of warm organic milk or warm water.",
    dailyRitual: "Make it your foundational morning immunity tonic for the entire family.",
    precautions: "Diabetic individuals should consult their Ayurvedic physician prior to consumption due to natural honey content.",
    shelfLife: "24 months.",
    variants: [
      { id: "cp-500g", title: "500 g Sacred Glass Jar", volumeOrWeight: "500 g", price: 1450, compareAtPrice: 1700, inStock: true },
      { id: "cp-1kg", title: "1 kg Family Pack Jar", volumeOrWeight: "1 kg", price: 2650, compareAtPrice: 3200, inStock: true },
    ],
    complementaryTreatmentSlugs: ["abhyanga-swedam", "tarpana-vision"],
    reviews: [
      {
        id: "rev-6",
        userName: "Sanjay Singhania",
        rating: 5,
        date: "2 weeks ago",
        comment: "The difference between this and commercial drugstore Chyawanprash is night and day. You can taste the genuine forest amla, A2 ghee, and aromatic spices. Truly life-affirming!",
        verifiedPurchase: true,
        location: "Pune",
      },
    ],
  },
  {
    id: "brahmi-medhya-rasayana",
    slug: "brahmi-medhya-rasayana",
    title: "Brahmi Medhya Rasayana Cognitive Nectar",
    sanskritName: "ब्राह्मी मेध्य रसायनम्",
    category: "Herbal Elixirs & Immunity",
    price: 920,
    compareAtPrice: 1100,
    rating: 4.9,
    reviewCount: 97,
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    tagline: "Classical nootropic herbal jelly for mental focus, memory recall, and deep nervous serenity.",
    volumeOrWeight: "250 g",
    inStock: true,
    doshaSuitability: "Vata-Pitta",
    classicalReference: "Charaka Samhita (Chikitsa Sthana - Medhya Rasayana)",
    keyIngredients: [
      "Brahmi (Bacopa monnieri)",
      "Shankhpushpi (Convolvulus pluricaulis)",
      "Gotu Kola (Mandukaparni)",
      "Jyotishmati (Celastrus paniculatus)",
      "A2 Ghee & Jaggery",
    ],
    botanicalActives: [
      {
        sanskritName: "Brahmi & Shankhpushpi",
        botanicalName: "Bacopa & Convolvulus",
        action: "Synaptic communication enhancers and mental clarity stimulants",
      },
      {
        sanskritName: "Mandukaparni",
        botanicalName: "Centella asiatica",
        action: "Cerebral micro-circulation tonic & stress adapter",
      },
    ],
    benefits: [
      "Enhances memory retention, conceptual learning speed, and recall",
      "Soothes brain fog, anxiety, and mental exhaustion from screen overstimulation",
      "Nourishes the central nervous system (Majja Dhatu) for deep emotional balance",
    ],
    description:
      "Charaka Samhita specifically categorizes Brahmi, Shankhpushpi, Mandukaparni, and Yashtimadhu as the 4 divine 'Medhya Rasayanas' (intellect promoters). This delicious herbal jam provides bioavailable neurotransmitter nourishment for students, professionals, and seniors.",
    classicalPreparation: "Avaleha preparation infused with herbal ghees and medicinal honey.",
    howToUse: "Take 1 teaspoon (10g) in the morning after meditation or study, followed by a cup of warm milk.",
    dailyRitual: "Incorporate into morning cognitive routine for focused productivity.",
    precautions: "Store in a cool, dry place. Keep jar tightly sealed.",
    shelfLife: "24 months.",
    variants: [
      { id: "bmr-250g", title: "250 g Jar", volumeOrWeight: "250 g", price: 920, compareAtPrice: 1100, inStock: true },
    ],
    complementaryTreatmentSlugs: ["shirodhara-netra-dhara", "sirovasti"],
    reviews: [],
  },
  {
    id: "tridosha-digestive-tea",
    slug: "tridosha-digestive-tea",
    title: "Tridosha CCF Agni Balancing Herbal Tisane",
    sanskritName: "त्रिदोष दीपन पाचन पेयम्",
    category: "Digestive & Teas",
    price: 490,
    compareAtPrice: 600,
    rating: 4.85,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tagline: "Classical Cumin, Coriander, Fennel & Cardamom tisane to stimulate digestive fire and clear Ama toxins.",
    volumeOrWeight: "150 g",
    inStock: true,
    doshaSuitability: "Tridoshic",
    classicalReference: "Bhavaprakasha Samhita",
    keyIngredients: [
      "Organic Cumin Seeds (Jeeraka)",
      "Organic Coriander Seeds (Dhanyaka)",
      "Sweet Fennel Seeds (Mishreya)",
      "Green Cardamom Pods (Ela)",
      "Sun-Dried Ginger (Shunti)",
    ],
    botanicalActives: [
      {
        sanskritName: "Jeeraka & Dhanyaka",
        botanicalName: "Cuminum cyminum & Coriandrum sativum",
        action: "Deepana (Kindles metabolic Agni) & clears bloating",
      },
      {
        sanskritName: "Mishreya",
        botanicalName: "Foeniculum vulgare",
        action: "Pitta-cooling carminative soothing acid reflux and gas",
      },
    ],
    benefits: [
      "Gently ignites digestive fire (*Jatharagni*) without producing excess acidity",
      "Eliminates abdominal gas, bloating, and post-meal sluggishness",
      "Cleanses cellular endotoxins (*Ama*) from the gastrointestinal tract",
      "Naturally caffeine-free, hydrating, and harmonizing for all constitutions",
    ],
    description:
      "The legendary CCF (Cumin-Coriander-Fennel) tisane is Ayurveda's most foundational daily digestive elixir. Hand-blended with whole roasted organic seeds and green cardamom, it pacifies all three doshas while assisting gut balance.",
    classicalPreparation: "Sun-dried whole organic seeds, lightly fractured to release essential medicinal volatile oils.",
    howToUse:
      "Boil 1 tablespoon in 500ml of fresh water for 5-7 minutes. Strain into a thermos and sip warm throughout the day, especially 30 minutes after meals.",
    dailyRitual: "Sip warm throughout your day to maintain continuous metabolic equilibrium.",
    precautions: "Store in an airtight jar in a dark spice pantry.",
    shelfLife: "18 months.",
    variants: [
      { id: "ccf-150g", title: "150 g Pouch (30 Servings)", volumeOrWeight: "150 g", price: 490, compareAtPrice: 600, inStock: true },
      { id: "ccf-350g", title: "350 g Apothecary Tin", volumeOrWeight: "350 g", price: 890, compareAtPrice: 1100, inStock: true },
    ],
    complementaryTreatmentSlugs: ["abhyanga-swedam", "pada-abhyanga"],
    reviews: [
      {
        id: "rev-7",
        userName: "Pooja Verma",
        rating: 5,
        date: "1 month ago",
        comment: "This tea completely resolved my chronic post-lunch bloating! It tastes aromatic, soothing, and wonderfully light.",
        verifiedPurchase: true,
        location: "Hyderabad",
      },
    ],
  },
];
