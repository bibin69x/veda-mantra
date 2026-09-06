import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-brown text-white/90 border-t-4 border-brand-green">
      {/* Main Footer Links */}
      <div className="py-14 sm:py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white/95 rounded-sm p-3 inline-block shadow-sm">
                <div className="relative h-12 w-52">
                  <Image
                    src="/logo.png"
                    alt="Ayur Veda Mantra"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-brand-sand/80 leading-relaxed max-w-sm">
                Ayur Veda Mantra is a dedicated Ayurveda Panchakarma Treatment & Research Centre committed to reviving classical Vedic healthcare therapies, authentic herbal preparations, and individualized holistic wellness.
              </p>
              <div className="text-xs text-brand-gold-light space-y-1">
                <p className="font-medium">Ayurveda Panchakarma Treatment & Research Centre</p>
                <p className="text-brand-sand/70">Registration No: AYU-IN-2024-9182</p>
              </div>
            </div>

            {/* Therapies & Services */}
            <div>
              <h4 className="font-serif text-base tracking-wider uppercase text-brand-gold-light mb-4 pb-1 border-b border-brand-brown-light/40">
                Treatments
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-brand-sand/80">
                <li>
                  <Link href="/treatments/abhyanga-swedam" className="hover:text-brand-gold transition-colors">
                    Abhyanga + Swedam
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/shirodhara-netra-dhara" className="hover:text-brand-gold transition-colors">
                    Shirodhara + Netra Dhara
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/sirovasti" className="hover:text-brand-gold transition-colors">
                    Sirovasti
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/tarpana-vision" className="hover:text-brand-gold transition-colors">
                    Tarpana (for Vision)
                  </Link>
                </li>
                <li>
                  <Link href="/treatments/back-pain-package" className="hover:text-brand-gold transition-colors">
                    Kati Basti (Back Pain)
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="text-brand-gold hover:underline pt-1 inline-block">
                    View All Treatments &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-base tracking-wider uppercase text-brand-gold-light mb-4 pb-1 border-b border-brand-brown-light/40">
                Explore & Help
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-brand-sand/80">
                <li>
                  <Link href="/about" className="hover:text-brand-gold transition-colors">
                    About Our Vaidyas
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-brand-gold transition-colors">
                    Ayurvedic Formulations
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="hover:text-brand-gold transition-colors">
                    Online & In-Clinic Booking
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="hover:text-brand-gold transition-colors">
                    Customer Account
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-brand-gold transition-colors">
                    Contact & Location
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Clinic Contact */}
            <div>
              <h4 className="font-serif text-base tracking-wider uppercase text-brand-gold-light mb-4 pb-1 border-b border-brand-brown-light/40">
                Clinic Centre
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-brand-sand/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    Ayur Veda Mantra Centre, 14 Vedic Greens Enclave, Holistic Healthcare District, India
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>care@ayurvedamantra.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Daily Consultations</p>
                    <p className="text-[11px] text-brand-sand/70">8:00 AM – 8:00 PM IST</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-brand-brown-dark py-6 border-t border-brand-brown-light/30 text-xs text-brand-sand/60">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Ayur Veda Mantra Treatment & Research Centre. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Cancellation & Refund Policy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
