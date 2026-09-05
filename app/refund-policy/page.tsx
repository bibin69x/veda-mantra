import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, RotateCcw, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Ayur Veda Mantra",
  description:
    "Review our 7-day replacement guarantee, consultation cancellation rules, and Panchakarma retreat refund procedures.",
};

export default function RefundPolicyPage() {
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
            <span className="text-brand-brown font-medium">Refund & Cancellation</span>
          </nav>
        </Container>
      </div>

      <Container size="md" className="pt-10 sm:pt-14">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-brand-brown-border shadow-card space-y-8">
          <div className="space-y-3 border-b border-brand-brown-border pb-6">
            <Badge variant="gold" size="sm">
              Dispensary & Treatment Guarantees
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-brand-brown-muted">
              Effective Date: October 2024 • Ayur Veda Mantra Panchakarma Sanctum
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-brand-brown leading-relaxed font-sans">
            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-brand-green" />
                1. Herbal Medicines & Formulations 7-Day Replacement
              </h2>
              <p>
                Due to the sacred and consumable nature of authentic Ayurvedic oils, rasayanas, and churnas, opened bottles or unsealed jars cannot be returned for hygiene and pharmaceutical safety. However:
              </p>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>
                  If you receive a package that is damaged in transit, broken, or has a broken tamper-evident seal, please photograph the parcel and notify us within <strong>7 days</strong> of delivery.
                </li>
                <li>
                  We will immediately dispatch a fresh replacement jar or issue a 100% full refund to the original payment method with zero return shipping costs to you.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                2. Doctor Consultation Cancellations & Rescheduling
              </h2>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>
                  <strong>Cancellation with Full Refund:</strong> If cancelled at least <strong>12 hours</strong> prior to the scheduled appointment slot, a 100% refund is initiated within 3–5 business days.
                </li>
                <li>
                  <strong>Rescheduling:</strong> Free of charge up to <strong>4 hours</strong> before the scheduled appointment.
                </li>
                <li>
                  <strong>Doctor Rescheduling:</strong> In the rare event an emergency surgery or clinical exigency prevents the attending Vaidya from taking your slot, we will offer immediate priority rebooking or an instant full refund.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                3. Panchakarma Residential Treatment Retreats
              </h2>
              <p>
                For multi-day residential Panchakarma detox packages (7, 14, or 21 days):
              </p>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>Cancellations made <strong>15 days or more</strong> prior to the retreat start date receive a 90% refund (10% retained for bespoke herbal decoction preparation).</li>
                <li>Cancellations made between <strong>7 to 14 days</strong> prior receive a 50% refund.</li>
                <li>Cancellations within <strong>less than 7 days</strong> are non-refundable but may be transferred to a future date within 12 months.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                4. Refund Processing Timelines
              </h2>
              <p>
                Approved refunds are processed automatically back to the original funding source (UPI, Credit/Debit Card, or Net Banking) via Razorpay. Depending on your issuing bank, the credit will appear on your statement within <strong>3 to 5 business days</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                5. How to Initiate a Request
              </h2>
              <p>
                To request a replacement or consultation refund, contact our patient care desk with your Order/Booking Reference ID at <strong className="text-brand-green">care@ayurvedamantra.com</strong> or call our helpline at <strong className="font-mono text-brand-brown">+91 98765 43210</strong>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
