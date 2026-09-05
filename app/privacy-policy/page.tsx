import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Ayur Veda Mantra | Panchakarma Treatment & Research Centre",
  description:
    "Learn about how Ayur Veda Mantra protects patient confidentiality, medical case sheet data, and payment security in accordance with healthcare privacy standards.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-brand-brown font-medium">Privacy Policy</span>
          </nav>
        </Container>
      </div>

      <Container size="md" className="pt-10 sm:pt-14">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-brand-brown-border shadow-card space-y-8">
          <div className="space-y-3 border-b border-brand-brown-border pb-6">
            <Badge variant="gold" size="sm">
              Legal Compliance • DPDP Act 2023 & Healthcare Privacy
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
              Privacy Policy & Patient Data Governance
            </h1>
            <p className="text-xs text-brand-brown-muted">
              Last Updated: October 2024 • Ayur Veda Mantra Healthcare & Research Centre
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-brand-brown leading-relaxed font-sans">
            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                1. Commitment to Patient Confidentiality
              </h2>
              <p>
                At <strong>Ayur Veda Mantra</strong>, we revere the sacred relationship between Vaidya and Patient. We operate in strict compliance with the Digital Personal Data Protection (DPDP) Act 2023 and international healthcare privacy benchmarks. All diagnostic case sheets, pulse examination notes, and medical records are strictly confidential.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                2. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>
                  <strong className="text-brand-brown">Patient Profile Data:</strong> Full Name, Email, WhatsApp Phone, Date of Birth, Gender, and Delivery Address.
                </li>
                <li>
                  <strong className="text-brand-brown">Clinical Health Information:</strong> Chief health complaints, symptoms duration, known allergies, current allopathic/Ayurvedic prescriptions, and Prakriti constitutional assessments.
                </li>
                <li>
                  <strong className="text-brand-brown">Transaction & Payment Data:</strong> Razorpay cryptographic tokenized IDs, order receipts, and GST invoices. (We never store raw credit card numbers or UPI PINs on our servers).
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                3. Purpose of Processing
              </h2>
              <p>Your data is processed exclusively for:</p>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>Conducting personalized Ayurvedic consultations and generating Sastric medical prescriptions.</li>
                <li>Formulating and safely compounding customized herbal oils and rasayanas at our dispensary.</li>
                <li>Dispatching order tracking notifications and appointment calendar reminders via WhatsApp/Email.</li>
                <li>Ensuring clinical safety against herbal contraindications or drug interactions.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                4. Data Security & Encryption
              </h2>
              <p>
                All data transmission between your browser and our servers is encrypted using 256-bit SSL (TLS 1.3) protocols. Patient medical files are secured in database clusters with Row Level Security (RLS) and strict role-based practitioner authorization.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                5. Third-Party Integrations
              </h2>
              <p>
                We collaborate solely with verified, enterprise-grade infrastructure providers:
              </p>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li><strong>Razorpay:</strong> RBI-licensed compliant payment gateway.</li>
                <li><strong>Supabase:</strong> ISO 27001 certified encrypted PostgreSQL data storage.</li>
                <li><strong>Logistics Partners:</strong> BlueDart, Delhivery, and India Post solely for shipping labels.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                6. Patient Rights & Data Portability
              </h2>
              <p>
                You retain the right to request a complete copy of your medical case history, update address preferences, or request permanent deletion of non-clinical account data by contacting our Privacy Officer at <strong className="text-brand-green">privacy@ayurvedamantra.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
