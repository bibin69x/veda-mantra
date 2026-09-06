"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Flame,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

function RegisterContent() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dosha, setDosha] = useState("Vata-Pitta");
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "ayur_veda_user_session",
          JSON.stringify({
            id: `usr-${Date.now().toString().slice(-6)}`,
            name: fullName,
            email: email,
            phone: phone,
            dosha: dosha,
            memberSince: "November 2024",
          })
        );
      }
      setIsLoading(false);
      router.push("/account");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white py-16 sm:py-24 flex items-center">
      <Container size="md">
        <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-brand-brown-border shadow-luxury space-y-6">
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="relative h-12 w-48 mx-auto mb-3">
              <Image
                src="/logo.png"
                alt="Ayur Veda Mantra"
                fill
                priority
                className="object-contain"
              />
            </div>
            <Badge variant="gold" size="sm" className="mx-auto">
              New Patient Registration
            </Badge>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
              Begin Your Healing Journey
            </h1>
            <p className="text-xs text-brand-brown-muted font-light">
              Create an account to book consultations, track custom formulations, and save medical case sheets.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-brown-muted" />
                Full Name *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Radhika Sharma"
                className="w-full p-3 bg-white border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-brown-muted" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-3 bg-white border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-brown-muted" />
                  Mobile Number (+91)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full p-3 bg-white border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-brown-muted" />
                Create Password *
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full p-3 bg-white border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>

            {/* Known Dosha Profile */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-brand-gold" />
                Dominant Dosha Prakriti (If Known)
              </label>
              <select
                value={dosha}
                onChange={(e) => setDosha(e.target.value)}
                className="w-full p-3 bg-white border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
              >
                <option value="Not Sure / To Be Assessed">Not Sure / To Be Assessed</option>
                <option value="Tridoshic (Vata-Pitta-Kapha)">Tridoshic (Balanced)</option>
                <option value="Vata-Pitta">Vata-Pitta</option>
                <option value="Pitta-Kapha">Pitta-Kapha</option>
                <option value="Vata-Kapha">Vata-Kapha</option>
                <option value="Vata Dominant">Vata Dominant</option>
                <option value="Pitta Dominant">Pitta Dominant</option>
                <option value="Kapha Dominant">Kapha Dominant</option>
              </select>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-brand-green rounded border-brand-brown-border focus:ring-brand-green"
              />
              <label htmlFor="terms" className="text-xs text-brand-brown-muted">
                I agree to the{" "}
                <Link href="/terms-and-conditions" className="text-brand-green underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-brand-green underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <Button
              variant="primary"
              size="lg"
              isLoading={isLoading}
              disabled={!agreedToTerms}
              className="w-full justify-center shadow-md font-bold text-sm mt-2"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Create Account & Enter Sanctum
            </Button>
          </form>

          {/* Footer Login Link */}
          <div className="pt-2 text-center text-xs text-brand-brown-muted border-t border-brand-brown-border/60">
            <span>Already have an account? </span>
            <Link href="/login" className="text-brand-green font-semibold hover:underline">
              Sign In &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full" />
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}
