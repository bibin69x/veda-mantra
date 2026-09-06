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
    <div className="min-h-screen bg-white pb-24">
      {/* Header Breadcrumbs */}
      <div className="bg-white border-b border-brand-brown-border/60 py-3">
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
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-brand-brown-border shadow-card space-y-8">
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

          <div className="space-y-6 text-xs sm:text-sm text-brand-brown leading-relaxed font-sans font-light">
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
                2. Doctor Consultation Cancellation & Refunds
              </h2>
              <ul className="list-disc list-inside space-y-1 text-brand-brown-muted pl-2">
                <li>
                  <strong>Cancellation 12+ Hours Before:</strong> 100% full refund or free rescheduling to any available slot.
                </li>
                <li>
                  <strong>Cancellation Under 12 Hours:</strong> 50% refund or one-time complimentary rescheduling.
                </li>
                <li>
                  <strong>Physician Unavailability:</strong> In the rare event a physician is called into urgent clinical duties, you will receive a 100% immediate refund or priority slot booking.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                3. Residential Panchakarma Retreats
              </h2>
              <p>
                For multi-day residential detox packages requiring private sanctum room bookings and specialized herb compounding, cancellations made 7 or more days prior to admission receive a 100% refund minus a 5% administrative bank processing charge.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                4. Refund Processing Timelines
              </h2>
              <p>
                Approved refunds are processed through our payment gateway (Razorpay) back to your original source (UPI, Credit/Debit Card, NetBanking) within <strong>3 to 5 business days</strong>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
