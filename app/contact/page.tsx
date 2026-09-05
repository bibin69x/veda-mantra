"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const FAQS = [
  {
    question: "What is Nadi Pariksha and how does it diagnose my body type?",
    answer:
      "Nadi Pariksha is the ancient Ayurvedic science of pulse diagnosis. By gently reading the radial pulse with three fingers, our Senior Vaidyas decode the subtle vibrational rhythms of your Vata, Pitta, and Kapha doshas, uncovering deep cellular imbalances, metabolic toxins (Ama), and organ health before physical symptoms manifest.",
  },
  {
    question: "How do I prepare for an In-Clinic Panchakarma assessment?",
    answer:
      "For an accurate pulse diagnosis and clinical assessment, we recommend fasting for at least 2 hours prior to your visit. Wear loose, comfortable cotton clothing. Please bring along any previous diagnostic reports, scans, or active allopathic prescriptions for the physician's review.",
  },
  {
    question: "How are Online Video Consultations conducted?",
    answer:
      "Online consultations take place over high-definition secure video links (Google Meet / Zoom). Our Vaidyas conduct an in-depth Prakriti assessment, tongue and facial inspection (Darshana Pariksha), and clinical lifestyle questioning. A digital Sastric prescription with dietary protocols is issued within 2 hours.",
  },
  {
    question: "Are your classical medicines and oils 100% natural and safe?",
    answer:
      "Yes. Every formulation at Ayur Veda Mantra is slow-decocted strictly per the Charaka Samhita and Ashtanga Hridaya over 72 hours. We use wildcrafted botanicals, cultured A2 Gir cow ghee, and pure cold-pressed oils without synthetic preservatives, mineral oils, or artificial fragrances.",
  },
  {
    question: "Can I receive customized Panchakarma residential packages?",
    answer:
      "Yes, we offer 7-day, 14-day, and 21-day residential clinical Panchakarma detox retreats at our Kerala sanctuary. Packages include full boarding, organic Ayurvedic Sattvic meals, daily multi-stage therapies (*Purva, Pradhana, Paschat Karma*), and daily Vaidya monitoring.",
  },
  {
    question: "How long does shipping take for dispensary medicine orders?",
    answer:
      "All online pharmacy orders are compounded and dispatched within 24 hours via express courier. Delivery across major Indian metro cities takes 2–4 business days, with free shipping on all orders above ₹999.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-cream pb-24">
      {/* Editorial Hero Banner */}
      <section className="relative bg-brand-brown text-white py-16 lg:py-20 overflow-hidden border-b border-brand-brown-light/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <Badge
            variant="gold"
            size="md"
            className="mx-auto bg-brand-gold/20 text-brand-gold-light border-brand-gold/40"
          >
            Samparka • Sacred Sanctuary & Inquiries
          </Badge>

          <div className="space-y-2">
            <p className="font-serif italic text-brand-gold text-xs sm:text-sm tracking-widest">
              आरोग्यं परमं भाग्यम् स्वास्थ्यं सर्वार्थसाधनम्
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Connect with Our Vaidyas & Healing Sanctuary
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-brand-cream-dark leading-relaxed max-w-2xl mx-auto">
            Whether you seek guidance on Panchakarma admissions, custom herbal prescriptions, or scheduling a pulse diagnosis appointment, our medical coordinators are here to assist you.
          </p>
        </Container>
      </section>

      <Container size="xl" className="pt-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Location */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-brown">
                Treatment Sanctum
              </h3>
              <p className="text-xs text-brand-brown leading-relaxed">
                Ayur Veda Mantra Panchakarma Treatment & Research Centre
                <br />
                Temple Sanctum Enclave, Fort Road
                <br />
                Kochi, Kerala — 682001, India
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-green flex items-center gap-1 pt-2 border-t border-brand-brown-border/60">
              <ShieldCheck className="w-3.5 h-3.5" /> NABH Accredited Facility
            </span>
          </div>

          {/* Card 2: Phone & Hours */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-gold-dark flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-brown">
                Direct Helpline
              </h3>
              <p className="text-xs text-brand-brown leading-relaxed">
                General Inquiries: <strong className="font-mono text-brand-brown">+91 98765 43210</strong>
                <br />
                WhatsApp Medical Desk: <strong className="font-mono text-brand-brown">+91 98765 43211</strong>
                <br />
                Mon – Sun: 8:00 AM – 8:00 PM IST
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-gold-dark flex items-center gap-1 pt-2 border-t border-brand-brown-border/60">
              <Clock className="w-3.5 h-3.5" /> Emergency Support Available
            </span>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-brown/10 text-brand-brown flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-brown">
                Dispensary & Inquiries
              </h3>
              <p className="text-xs text-brand-brown leading-relaxed">
                Patient Care: <strong className="text-brand-green">care@ayurvedamantra.com</strong>
                <br />
                Doctor Consultations: <strong className="text-brand-green">appointments@ayurvedamantra.com</strong>
                <br />
                Research Inquiries: <strong className="text-brand-green">research@ayurvedamantra.com</strong>
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-brown-muted flex items-center gap-1 pt-2 border-t border-brand-brown-border/60">
              <MessageSquare className="w-3.5 h-3.5" /> Fast Response Within 24 Hours
            </span>
          </div>
        </div>

        {/* 2-Column: Inquiry Form & Sanctuary Location Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-brand-brown-border shadow-card space-y-6">
            <div className="space-y-1 border-b border-brand-brown-border/60 pb-4">
              <Badge variant="green" size="sm">
                Patient Inquiry Form
              </Badge>
              <h2 className="font-serif text-2xl font-bold text-brand-brown">
                Send a Message to Our Medical Desk
              </h2>
              <p className="text-xs text-brand-brown-muted">
                Our Vaidyas and healthcare coordinators will review your query and respond promptly.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-xl text-xs text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@example.com"
                      className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-xl text-xs text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      WhatsApp Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-xl text-xs text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-xl text-xs text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    >
                      <option value="General Inquiry">General Healthcare Inquiry</option>
                      <option value="Panchakarma Admission">Panchakarma Treatment Admission</option>
                      <option value="Online Consultation">Doctor Video Consultation Question</option>
                      <option value="Dispensary Medicine Refill">Apothecary Medicine Order / Refill</option>
                      <option value="Research Collaboration">Academic & Research Collaboration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                    Your Health Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your health requirements, questions about therapies, or preferred visit dates..."
                    className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-xl text-xs text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full justify-center shadow-md font-bold text-sm"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Send Inquiry to Medical Desk
                </Button>
              </form>
            ) : (
              <div className="p-8 bg-brand-sand/40 rounded-2xl border border-brand-brown-border text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-brand-brown">
                    Dhanyavadah! Inquiry Received
                  </h3>
                  <p className="text-xs text-brand-brown-muted max-w-md mx-auto leading-relaxed">
                    Our Senior Vaidyas and healthcare coordinators have received your message. We will reach out to you within 24 hours at <strong className="text-brand-brown">{formData.email}</strong>.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-brand-green font-semibold underline hover:text-brand-green-dark"
                >
                  Send Another Message &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sanctum Atmosphere & Doctor CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-brown text-white rounded-3xl p-8 space-y-5 border border-brand-brown-light/40 shadow-luxury">
              <Badge variant="gold" size="sm" className="bg-brand-gold/20 text-brand-gold-light border-brand-gold/40">
                Direct Vaidya Access
              </Badge>
              <h3 className="font-serif text-2xl font-bold">
                Need an Immediate Consultation?
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream-dark leading-relaxed">
                Skip the contact form and schedule an instant video consultation or in-clinic Nadi Pariksha with our Senior Certified Vaidyas directly.
              </p>
              <div className="pt-2">
                <Button
                  href="/consultation"
                  variant="gold"
                  size="md"
                  className="w-full justify-center shadow-md font-bold"
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Book Doctor Consultation Online
                </Button>
              </div>
            </div>

            {/* Clinic Visiting Hours Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-4">
              <h4 className="font-serif font-bold text-lg text-brand-brown border-b border-brand-brown-border/60 pb-3">
                Sanctum Treatment Timings
              </h4>
              <ul className="space-y-2.5 text-xs text-brand-brown">
                <li className="flex justify-between">
                  <span className="text-brand-brown-muted">Monday – Friday:</span>
                  <strong>8:00 AM – 8:00 PM IST</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-brand-brown-muted">Saturday & Sunday:</span>
                  <strong>8:00 AM – 8:00 PM IST</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-brand-brown-muted">Dispensary Pharmacy:</span>
                  <strong>Open 7 Days a Week</strong>
                </li>
                <li className="flex justify-between pt-2 border-t border-brand-brown-border/40 text-[11px] text-brand-green font-medium">
                  <span>* Prior appointment recommended for Nadi Pariksha.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Patient FAQs Accordion */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-brown-border shadow-card space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="gold" size="sm" className="mx-auto">
              Frequently Asked Questions
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
              Common Questions About Ayurvedic Therapies
            </h2>
            <p className="text-xs text-brand-brown-muted">
              Learn more about how our Panchakarma treatments, pulse diagnosis, and online consultations work.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-brand-brown-border/60 space-y-1">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="pt-4 first:pt-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
                  >
                    <span className="font-serif font-bold text-base text-brand-brown group-hover:text-brand-green transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="text-brand-green shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 pt-1 text-xs sm:text-sm text-brand-brown-muted leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
