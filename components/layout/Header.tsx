"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Calendar, Menu, X, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Products", href: "/products" },
  { name: "Consultation", href: "/consultation" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Announcement & Clinic Bar */}
      <div className="bg-brand-brown text-white/80 text-xs py-2 px-4 border-b border-brand-brown-light/30">
        <Container size="xl" className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-brand-gold-light">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Ayurveda Panchakarma Treatment & Research Centre</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>Helpline: +91 98765 43210</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden sm:inline-block text-white/70">
              Authentic Vedic Healing & Doctor Consultations
            </span>
            <Link
              href="/consultation"
              className="text-brand-gold hover:text-white font-medium underline-offset-4 hover:underline transition-colors"
            >
              Book Doctor Appointment &rarr;
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 shadow-luxury border-b border-brand-brown-border py-2.5 backdrop-blur-md"
            : "bg-white border-b border-brand-brown-border/60 py-4"
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Ayur Veda Mantra"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-xs uppercase tracking-widest transition-colors font-medium py-1 relative",
                      isActive
                        ? "text-brand-green font-semibold"
                        : "text-brand-brown hover:text-brand-green"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green animate-fadeIn" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Booking CTA */}
            <div className="hidden sm:flex items-center space-x-5">
              <Link
                href="/login"
                className="p-2 text-brand-brown hover:text-brand-green transition-colors focus:outline-none"
                aria-label="Patient Account Login"
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                onClick={openCart}
                className="p-2 text-brand-brown hover:text-brand-green transition-colors relative focus:outline-none"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-green text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scaleUp">
                    {cartCount}
                  </span>
                )}
              </button>

              <Button
                href="/consultation"
                variant="primary"
                size="sm"
                leftIcon={<Calendar className="w-3.5 h-3.5" />}
                className="shadow-sm"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Hamburger & Cart */}
            <div className="flex sm:hidden items-center space-x-3">
              <button
                onClick={openCart}
                className="p-2 text-brand-brown relative focus:outline-none"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-brand-green text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-brown focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[102px] bg-white border-b border-brand-brown-border shadow-2xl transition-all duration-300 animate-fadeIn z-40 max-h-[calc(100vh-110px)] overflow-y-auto">
            <div className="px-6 py-8 space-y-6">
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "text-lg font-serif tracking-wide py-2 border-b border-brand-brown-border/40 transition-colors flex items-center justify-between",
                        isActive
                          ? "text-brand-green font-bold pl-2 border-brand-green"
                          : "text-brand-brown hover:text-brand-green"
                      )}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-brand-brown-muted">&rarr;</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  href="/consultation"
                  variant="primary"
                  size="md"
                  leftIcon={<Calendar className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Book Doctor Consultation
                </Button>

                <Button
                  href="/login"
                  variant="outline"
                  size="md"
                  leftIcon={<User className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  My Account / Sign In
                </Button>
              </div>

              <div className="pt-4 border-t border-brand-brown-border/60 text-xs text-brand-brown-muted text-center space-y-1">
                <p className="font-semibold text-brand-brown">Ayur Veda Mantra Centre</p>
                <p>Helpline: +91 98765 43210</p>
                <p>Mon - Sun: 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
