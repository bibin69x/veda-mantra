"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  Calendar,
  ArrowRight,
  Video,
  Clock,
  CheckCircle2,
  Flame,
  FileText,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccountNav } from "@/components/account/AccountNav";

export default function AccountDashboardPage() {
  const [userName, setUserName] = useState("Radhika Sharma");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("ayur_veda_user_session");
      if (session) {
        try {
          const parsed = JSON.parse(session);
          if (parsed.name) setUserName(parsed.name);
        } catch (e) {
          console.error("Failed to parse user session", e);
        }
      }
    }
  }, []);

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
            <span className="text-brand-brown font-medium">Patient Dashboard</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Account Sidebar Navigation */}
          <AccountNav />

          {/* Main Account Content Area */}
          <main className="flex-1 space-y-8 w-full">
            {/* Welcome Banner */}
            <div className="bg-brand-brown text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-brand-brown-light/40 shadow-luxury">

              <div className="relative z-10 space-y-3">
                <Badge variant="gold" size="sm" className="bg-brand-gold/20 text-brand-gold-light border-brand-gold/40">
                  Ayur Veda Mantra Member Sanctum
                </Badge>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold">
                  Namaste, {userName}
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                  Your personalized wellness dashboard. Access your classical prescriptions, scheduled Nadi Pariksha sessions, and order deliveries.
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-brand-brown-border shadow-card space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted">
                  Active Orders
                </span>
                <p className="font-serif text-2xl font-bold text-brand-brown">1</p>
                <span className="text-[10px] text-brand-green font-medium">In Transit</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-brand-brown-border shadow-card space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted">
                  Consultations
                </span>
                <p className="font-serif text-2xl font-bold text-brand-brown">1</p>
                <span className="text-[10px] text-brand-gold-dark font-medium">Scheduled Tomorrow</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-brand-brown-border shadow-card space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted">
                  Ojas Points
                </span>
                <p className="font-serif text-2xl font-bold text-brand-green">450</p>
                <span className="text-[10px] text-brand-brown-muted">₹450 credit balance</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-brand-brown-border shadow-card space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted">
                  Constitution
                </span>
                <p className="font-serif text-lg font-bold text-brand-brown truncate">
                  Vata-Pitta
                </p>
                <span className="text-[10px] text-brand-green font-medium">Prakriti Verified</span>
              </div>
            </div>

            {/* Upcoming Consultation Alert Card */}
            <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-card space-y-5">
              <div className="flex items-center justify-between border-b border-brand-brown-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-green" />
                  <h2 className="font-serif text-lg font-bold text-brand-brown">
                    Upcoming Doctor Consultation
                  </h2>
                </div>
                <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-2.5 py-1 rounded-full">
                  Confirmed
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0 border border-brand-brown-border">
                    <Image
                      src="/Dr. Anupama Ramachandran.jpeg"
                      alt="Dr. Anupama Ramachandran"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-serif italic text-brand-gold-dark">
                      Chief Ayurvedic Physician
                    </span>
                    <h3 className="font-serif text-base font-bold text-brand-brown">
                      Dr. Anupama Ramachandran
                    </h3>
                    <p className="text-xs text-brand-brown-muted flex items-center gap-1.5 pt-0.5">
                      <Clock className="w-3.5 h-3.5 text-brand-green" />
                      Tomorrow, 10:15 AM – 11:00 AM (IST)
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <Button
                    variant="primary"
                    size="sm"
                    leftIcon={<Video className="w-4 h-4" />}
                    onClick={() => alert("Google Meet video link will be active 15 minutes before the session.")}
                  >
                    Join Video Call
                  </Button>
                  <Button
                    href="/account/consultations"
                    variant="outline"
                    size="sm"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Orders Overview */}
            <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-card space-y-5">
              <div className="flex items-center justify-between border-b border-brand-brown-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-brand-brown" />
                  <h2 className="font-serif text-lg font-bold text-brand-brown">
                    Recent Remedy Orders
                  </h2>
                </div>
                <Link
                  href="/account/orders"
                  className="text-xs font-semibold text-brand-green hover:underline flex items-center gap-1"
                >
                  View All Orders &rarr;
                </Link>
              </div>

              {/* Order Row */}
              <div className="p-4 rounded-xl bg-white border border-brand-brown-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-brand-brown">
                      ORD-AVM-849201
                    </span>
                    <span className="bg-brand-green/10 text-brand-green border border-brand-green/20 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      In Transit • BlueDart Express
                    </span>
                  </div>
                  <p className="text-xs text-brand-brown-muted">
                    Kumkumadi Miraculous Fluid (30ml), Mahanarayana Joint Oil (200ml)
                  </p>
                  <p className="text-[11px] text-brand-brown-muted">
                    Placed on Oct 28, 2024 • Total: <strong className="text-brand-brown font-mono">₹2,600</strong>
                  </p>
                </div>

                <Button
                  href="/account/orders"
                  variant="outline"
                  size="sm"
                  className="shrink-0 text-xs"
                >
                  Track Dispatch
                </Button>
              </div>
            </div>

            {/* Dosha & Lifestyle Recommendation Card */}
            <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif text-lg font-bold text-brand-brown">
                  Seasonal Dinacharya Guidance for Vata-Pitta
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-brown leading-relaxed">
                During this season, pacify erratic Vata by practicing warm sesame oil self-abhyanga before 7:00 AM. Balance internal Pitta by sipping our Tridosha CCF tisane warm throughout the day. Avoid excessive raw or cold foods.
              </p>
              <div className="pt-1 flex gap-3">
                <Link
                  href="/products?category=Digestive+%26+Teas"
                  className="text-xs font-semibold text-brand-green hover:underline"
                >
                  Explore Digestive Teas &rarr;
                </Link>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
