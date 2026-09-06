"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect_to") || "/account";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please enter both your email address and password.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      // Set local demo session token
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "ayur_veda_user_session",
          JSON.stringify({
            id: "usr-829104",
            name: "Radhika Sharma",
            email: email,
            dosha: "Vata-Pitta",
            memberSince: "October 2024",
          })
        );
      }
      setIsLoading(false);
      router.push(redirectTo);
    }, 800);
  };

  const handleDemoLogin = () => {
    setEmail("radhika.sharma@example.com");
    setPassword("AyurVeda2026!");
    setIsLoading(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "ayur_veda_user_session",
          JSON.stringify({
            id: "usr-829104",
            name: "Radhika Sharma",
            email: "radhika.sharma@example.com",
            dosha: "Vata-Pitta",
            memberSince: "October 2024",
          })
        );
      }
      setIsLoading(false);
      router.push(redirectTo);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white py-16 sm:py-24 flex items-center">
      <Container size="md">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-brand-brown-border shadow-luxury space-y-6">
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
              Member Sanctum
            </Badge>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
              Welcome Back
            </h1>
            <p className="text-xs text-brand-brown-muted font-light">
              Sign in to access your prescriptions, consultation appointments, and order tracking.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-brown-muted" />
                Email Address
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
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-brand-brown-muted" />
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] text-brand-green hover:underline font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 bg-white border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
            </div>

            <Button
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full justify-center shadow-md font-bold text-sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Sign In to Your Account
            </Button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-brown/5 hover:bg-brand-brown/10 text-brand-brown text-xs font-semibold border border-brand-brown-border/60 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Preview as Demo Patient (Radhika Sharma)</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-brand-brown-border/60" />
            <span className="flex-shrink mx-3 text-[11px] uppercase tracking-wider text-brand-brown-muted font-medium">
              Or
            </span>
            <div className="flex-grow border-t border-brand-brown-border/60" />
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full p-3 rounded-xl border border-brand-brown-border hover:border-brand-brown bg-white text-brand-brown text-xs font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Footer Register Link */}
          <div className="pt-2 text-center text-xs text-brand-brown-muted">
            <span>Don&apos;t have an account yet? </span>
            <Link
              href="/register"
              className="text-brand-green font-semibold hover:underline"
            >
              Create Account &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
