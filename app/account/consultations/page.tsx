"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Video,
  MapPin,
  Clock,
  Download,
  FileText,
  CheckCircle2,
  ChevronRight,
  Plus,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccountNav } from "@/components/account/AccountNav";

const UPCOMING_CONSULTATIONS = [
  {
    id: "AVM-2026-8921",
    doctorName: "Dr. Anupama Ramachandran",
    doctorTitle: "Chief Physician & Senior Panchakarma Specialist",
    image: "/Dr. Anupama Ramachandran.jpeg",
    date: "Tomorrow, Oct 30, 2024",
    time: "10:15 AM – 11:00 AM IST",
    mode: "Online Video Tele-Consultation",
    status: "Confirmed",
    concern: "Spine & Joint Disorders (Sciatica / Lumbar stiffness)",
  },
];

const PAST_CONSULTATIONS = [
  {
    id: "AVM-2024-4109",
    doctorName: "Dr. Anupama Ramachandran",
    doctorTitle: "Chief Physician & Senior Panchakarma Specialist",
    image: "/Dr. Anupama Ramachandran.jpeg",
    date: "July 18, 2024",
    mode: "In-Clinic Sanctum Visit & Nadi Pariksha",
    diagnosis: "Pitta-Vata aggravation with mild Agnimandya (digestive sluggishness)",
    prescribedTherapies: ["Abhyanga Swedam (7 Sessions)", "Shirodhara (3 Sessions)"],
    prescribedRemedies: ["Kumkumadi Tailam", "Tridosha CCF Tisane"],
  },
];

export default function AccountConsultationsPage() {
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
            <Link href="/account" className="hover:text-brand-green transition-colors">
              Patient Dashboard
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <span className="text-brand-brown font-medium">Doctor Consultations</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <AccountNav />

          <main className="flex-1 space-y-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-brown-border pb-4">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                  Doctor Consultations & Case Sheets
                </h1>
                <p className="text-xs text-brand-brown-muted pt-1">
                  Manage your upcoming sessions and review classical diagnostic notes from certified Vaidyas.
                </p>
              </div>

              <Button
                href="/consultation"
                variant="primary"
                size="sm"
                leftIcon={<Plus className="w-3.5 h-3.5" />}
              >
                Book New Consultation
              </Button>
            </div>

            {/* Upcoming Consultations */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-green" />
                Upcoming Appointments ({UPCOMING_CONSULTATIONS.length})
              </span>

              {UPCOMING_CONSULTATIONS.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border-2 border-brand-green/30 p-6 shadow-card space-y-5"
                >
                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-brand-brown-border">
                        <Image src={c.image} alt={c.doctorName} fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                          Ref: {c.id}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-brand-brown">
                          {c.doctorName}
                        </h3>
                        <p className="text-xs text-brand-brown-muted">{c.doctorTitle}</p>
                        <p className="text-xs text-brand-brown font-medium flex items-center gap-1.5 pt-0.5">
                          <Clock className="w-3.5 h-3.5 text-brand-gold" />
                          {c.date} • {c.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                      <Button
                        variant="primary"
                        size="md"
                        leftIcon={<Video className="w-4 h-4" />}
                        onClick={() => alert("Video consultation room will open 15 minutes before the scheduled time.")}
                      >
                        Join Video Call
                      </Button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-brown-border/60 text-xs text-brand-brown flex flex-col sm:flex-row justify-between gap-2">
                    <span>
                      Concern: <strong className="font-medium">{c.concern}</strong>
                    </span>
                    <span className="text-brand-brown-muted">
                      Mode: <strong className="text-brand-brown">{c.mode}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Past Consultations & Case Sheets */}
            <div className="space-y-4 pt-4 border-t border-brand-brown-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-brand-brown" />
                Past Consultation History ({PAST_CONSULTATIONS.length})
              </span>

              {PAST_CONSULTATIONS.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-brand-brown-border p-6 shadow-card space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-brown-border/60 pb-3">
                    <div>
                      <span className="text-[11px] font-mono text-brand-brown-muted">
                        Session Ref: {c.id} • {c.date}
                      </span>
                      <h3 className="font-serif text-base font-bold text-brand-brown">
                        Consultation with {c.doctorName}
                      </h3>
                    </div>

                    <button
                      onClick={() => alert(`Downloading Medical Case Sheet ${c.id}...`)}
                      className="px-3 py-1.5 rounded-lg border border-brand-brown-border bg-white text-brand-brown text-xs font-semibold hover:bg-brand-brown/5 transition-colors flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Case Sheet (.PDF)
                    </button>
                  </div>

                  <div className="space-y-2 text-xs text-brand-brown">
                    <p>
                      <strong>Clinical Assessment (Nadi Pariksha):</strong> {c.diagnosis}
                    </p>
                    <div className="pt-1">
                      <strong className="block mb-1">Prescribed Therapies:</strong>
                      <div className="flex flex-wrap gap-2">
                        {c.prescribedTherapies.map((t, i) => (
                          <span
                            key={i}
                            className="bg-brand-brown/5 border border-brand-brown-border/60 text-brand-brown text-[11px] px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
