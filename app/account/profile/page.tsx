"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Lock,
  Flame,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Save,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccountNav } from "@/components/account/AccountNav";

export default function AccountProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "Radhika Sharma",
    email: "radhika.sharma@example.com",
    phone: "9876543210",
    age: "36",
    gender: "female",
    dosha: "Vata-Pitta",
    emergencyContact: "+91 98765 00000",
  });

  const [passwordState, setPasswordState] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("ayur_veda_user_session");
      if (session) {
        try {
          const parsed = JSON.parse(session);
          setProfile((prev) => ({
            ...prev,
            fullName: parsed.name || prev.fullName,
            email: parsed.email || prev.email,
            dosha: parsed.dosha || prev.dosha,
          }));
        } catch (e) {
          console.error("Failed to parse user session", e);
        }
      }
    }
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "ayur_veda_user_session",
          JSON.stringify({
            id: "usr-829104",
            name: profile.fullName,
            email: profile.email,
            phone: profile.phone,
            dosha: profile.dosha,
            memberSince: "October 2024",
          })
        );
      }
      setIsSaving(false);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    }, 600);
  };

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
            <span className="text-brand-brown font-medium">Profile & Dosha Settings</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <AccountNav />

          <main className="flex-1 space-y-8 w-full">
            <div className="border-b border-brand-brown-border pb-4">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                Personal Profile & Prakriti Dosha
              </h1>
              <p className="text-xs text-brand-brown-muted pt-1">
                Keep your Ayurvedic medical file and contact preferences up to date.
              </p>
            </div>

            {savedSuccess && (
              <div className="p-4 rounded-xl bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>Your profile changes have been successfully saved to your medical case sheet.</span>
              </div>
            )}

            {/* Profile Form */}
            <form onSubmit={handleSaveProfile} className="space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-6">
                <h2 className="font-serif text-lg font-bold text-brand-brown border-b border-brand-brown-border/60 pb-3">
                  General Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Mobile WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Age & Gender
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        value={profile.age}
                        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                        className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm"
                      />
                      <select
                        value={profile.gender}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                        className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm"
                      >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Dosha Configuration */}
                  <div className="space-y-1 sm:col-span-2 pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-brand-gold" />
                      Primary Prakriti Dosha Profile
                    </label>
                    <select
                      value={profile.dosha}
                      onChange={(e) => setProfile({ ...profile, dosha: e.target.value })}
                      className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm font-semibold"
                    >
                      <option value="Vata-Pitta">Vata-Pitta (Mobility & Transformation)</option>
                      <option value="Pitta-Kapha">Pitta-Kapha (Transformation & Stability)</option>
                      <option value="Vata-Kapha">Vata-Kapha (Mobility & Structure)</option>
                      <option value="Tridoshic">Tridoshic (Balanced Sama Dosha)</option>
                      <option value="Vata Dominant">Vata Dominant</option>
                      <option value="Pitta Dominant">Pitta Dominant</option>
                      <option value="Kapha Dominant">Kapha Dominant</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Password & Security Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-6">
                <h2 className="font-serif text-lg font-bold text-brand-brown border-b border-brand-brown-border/60 pb-3">
                  Account Security
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={passwordState.currentPassword}
                      onChange={(e) =>
                        setPasswordState({ ...passwordState, currentPassword: e.target.value })
                      }
                      placeholder="••••••••"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordState.newPassword}
                      onChange={(e) =>
                        setPasswordState({ ...passwordState, newPassword: e.target.value })
                      }
                      placeholder="••••••••"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordState.confirmPassword}
                      onChange={(e) =>
                        setPasswordState({ ...passwordState, confirmPassword: e.target.value })
                      }
                      placeholder="••••••••"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSaving}
                  leftIcon={<Save className="w-4 h-4" />}
                  className="shadow-md"
                >
                  Save Profile Changes
                </Button>
              </div>
            </form>
          </main>
        </div>
      </Container>
    </div>
  );
}
