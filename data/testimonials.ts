export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatmentOrProduct: string;
  rating: number;
  quote: string;
  verified: boolean;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Dr. Ananya Sharma",
    location: "New Delhi",
    treatmentOrProduct: "7-Day Panchakarma & Shirodhara",
    rating: 5,
    quote: "As an allopathic physician, I was initially skeptical. The precision of pulse diagnosis (Nadi Pariksha) and the profound neurological calm achieved through Shirodhara and Kati Basti resolved my chronic cervical pain that years of physiotherapy could not fix.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    author: "Vikram Malhotra",
    location: "Bengaluru",
    treatmentOrProduct: "Back Pain Treatment Package",
    rating: 5,
    quote: "Suffering from L4-L5 disc protrusion made desk work excruciating. The Kati Basti and Elakizhi series at Ayur Veda Mantra completely restored my spinal flexibility. Their Vaidyas are deeply knowledgeable and compassionate.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "3",
    author: "Meera Krishnan",
    location: "Mumbai",
    treatmentOrProduct: "Kumkumadi Tailam & Face Abhyanga",
    rating: 5,
    quote: "The Kumkumadi facial treatment and herbal fluid gave my skin a glow I hadn't seen in a decade. You can immediately sense the authenticity and purity of the ingredients compared to commercial brands.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
];
