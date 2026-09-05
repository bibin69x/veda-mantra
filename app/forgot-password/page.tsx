"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, CheckCircle2, ChevronLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-brand-cream py-16 sm:py-24 flex items-center">
      <Container size="md">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-brand-brown-border shadow-luxury space-y-6">
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
              Password Recovery
            </Badge>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
              Reset Your Password
            </h1>
            <p className="text-xs text-brand-brown-muted">
              Enter your registered email address and we will send you a secure link to reset your credentials.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-brown-muted" />
                  Registered Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-xl text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                isLoading={isLoading}
                className="w-full justify-center shadow-md font-bold text-sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Send Recovery Instructions
              </Button>
            </form>
          ) : (
            <div className="p-6 bg-brand-sand/40 rounded-2xl border border-brand-brown-border text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h2 className="font-serif font-bold text-lg text-brand-brown">
                Recovery Link Dispatched
              </h2>
              <p className="text-xs text-brand-brown-muted leading-relaxed">
                We have dispatched a password reset link to <strong className="text-brand-brown">{email}</strong>. Please check your inbox and spam folders.
              </p>
            </div>
          )}

          <div className="pt-2 text-center text-xs text-brand-brown-muted border-t border-brand-brown-border/60">
            <Link
              href="/login"
              className="text-brand-green font-semibold hover:underline flex items-center justify-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Return to Sign In
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
