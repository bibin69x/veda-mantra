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
    <div className="min-h-screen bg-white pb-24">
      {/* Header Breadcrumbs */}
      <div className="bg-white border-b border-brand-brown-border/60 py-3">
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
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-brand-brown-border shadow-card space-y-8">
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

          <div className="space-y-6 text-xs sm:text-sm text-brand-brown leading-relaxed font-sans font-light">
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
                  <strong className="text-brand-brown">Clinical Intake & Diagnostic Notes:</strong> Symptoms, Prakriti dosha assessments, medical history, prior scans, and prescription records.
                </li>
                <li>
                  <strong className="text-brand-brown">Payment Transaction Logs:</strong> Razorpay secure tokenized transaction IDs (we never store credit card numbers or banking passwords).
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                3. Purpose of Clinical Data Processing
              </h2>
              <p className="text-brand-brown-muted">
                Your medical data is utilized strictly by certified physicians for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>Formulating personalized Panchakarma therapy plans and herbal prescriptions.</li>
                <li>Facilitating continuous physician follow-ups and telemetry consultations.</li>
                <li>Compounding and dispatching personalized apothecary medicines.</li>
                <li>Maintaining regulatory compliance with the Ministry of AYUSH.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                4. Data Security & Storage Standards
              </h2>
              <p>
                We employ bank-grade 256-bit SSL encryption for all network transmissions. Patient databases are hosted within secure ISO 27001-certified Indian data centers with strict role-based access control (RBAC). Only the treating physician and registered pharmacists can view medical profiles.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                5. Contacting the Grievance & Privacy Officer
              </h2>
              <p>
                If you have questions regarding your medical privacy or wish to request data erasure, please email our Data Protection Officer at:
              </p>
              <div className="p-4 bg-white rounded-xl border border-brand-brown-border text-xs space-y-1 mt-2">
                <p><strong>Privacy Desk:</strong> privacy@ayurvedamantra.com</p>
                <p><strong>Physical Address:</strong> Ayur Veda Mantra Sanctum, Kochi, Kerala — 682001, India.</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
