import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions — Ayur Veda Mantra | Panchakarma Treatment & Research Centre",
  description:
    "Review the terms of service, medical consultation disclaimers, and e-commerce conditions of use for Ayur Veda Mantra.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-brand-cream pb-24">
      {/* Header Breadcrumbs */}
      <div className="bg-brand-sand/40 border-b border-brand-brown-border/60 py-3">
        <Container size="xl">
          <nav className="flex items-center space-x-2 text-xs text-brand-brown-muted">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <span className="text-brand-brown font-medium">Terms & Conditions</span>
          </nav>
        </Container>
      </div>

      <Container size="md" className="pt-10 sm:pt-14">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-brand-brown-border shadow-card space-y-8">
          <div className="space-y-3 border-b border-brand-brown-border pb-6">
            <Badge variant="gold" size="sm">
              Terms of Service • Medical & E-Commerce Terms
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
              Terms and Conditions of Use
            </h1>
            <p className="text-xs text-brand-brown-muted">
              Effective Date: October 2024 • Ayur Veda Mantra Centre
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-brand-brown leading-relaxed font-sans">
            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                1. Medical Consultation Disclaimer
              </h2>
              <p>
                All Ayurvedic tele-consultations and clinic visits are conducted by qualified, certified Ayurvedic Vaidyas holding BAMS / MD (Ayurveda) degrees recognized by the National Commission for Indian System of Medicine (NCISM). Ayurvedic therapies aim to balance the bodily doshas (*Vata, Pitta, Kapha*) and restore metabolic Agni. They are not intended as emergency critical care substitutes for acute trauma, emergency surgery, or life-threatening crises.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                2. Sastric Herbal Formulations & Usage
              </h2>
              <p>
                All products sold via our online dispensary are classical or proprietary Ayurvedic formulations prepared in accordance with the Ayurvedic Pharmacopoeia of India (API) and classical textbooks (*Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya, Sahasrayogam*). Patients must adhere strictly to the recommended dosages and timing (*Aushadha Sevana Kala*) indicated on the label or prescribed by our physicians.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                3. Consultation Scheduling & Rescheduling
              </h2>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>Appointments may be rescheduled up to 4 hours prior to the slot without any penalty.</li>
                <li>Patients joining video consultations are expected to enter the room within 10 minutes of the scheduled time.</li>
                <li>In-clinic visits require arrival 10 minutes before the slot for vitals recording and preliminary case intake.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                4. Pricing, Taxes & Payment Verification
              </h2>
              <p>
                All prices are displayed in Indian National Rupees (INR ₹) and are inclusive of statutory Goods & Services Tax (GST). All electronic transactions are verified cryptographically via Razorpay standard gateway with server-validated HMAC-SHA256 signatures.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                5. Intellectual Property
              </h2>
              <p>
                All visual assets, logo marks, treatment procedural documentation, classical translations, and botanical compounding methods displayed on this platform are the intellectual property of <strong>Ayur Veda Mantra</strong>. Unauthorized reproduction or commercial mirroring is prohibited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Kochi, Kerala.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
