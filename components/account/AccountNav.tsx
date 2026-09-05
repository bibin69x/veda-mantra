"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Calendar,
  MapPin,
  User,
  LogOut,
  ChevronRight,
  Flame,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const NAV_ITEMS = [
  {
    name: "Dashboard Overview",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    name: "Orders & Prescriptions",
    href: "/account/orders",
    icon: Package,
  },
  {
    name: "Doctor Consultations",
    href: "/account/consultations",
    icon: Calendar,
  },
  {
    name: "Saved Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    name: "Profile & Dosha",
    href: "/account/profile",
    icon: User,
  },
];

export function AccountNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ayur_veda_user_session");
    }
    router.push("/login");
  };

  return (
    <aside className="w-full lg:w-72 bg-white rounded-2xl border border-brand-brown-border shadow-card p-5 space-y-6 shrink-0">
      {/* User Mini Profile Header */}
      <div className="flex items-center gap-3.5 border-b border-brand-brown-border/60 pb-5">
        <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold-dark flex items-center justify-center font-serif text-xl font-bold border border-brand-gold/30 shrink-0">
          RS
        </div>
        <div className="min-w-0">
          <h2 className="font-serif font-bold text-base text-brand-brown truncate">
            Radhika Sharma
          </h2>
          <span className="text-[11px] font-semibold text-brand-green flex items-center gap-1">
            <Flame className="w-3 h-3 text-brand-gold" />
            Vata-Pitta Prakriti
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="space-y-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-brand-brown text-white shadow-sm"
                  : "text-brand-brown hover:bg-brand-sand/60 text-brand-brown"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-gold" : "text-brand-brown-muted"}`} />
                <span>{item.name}</span>
              </div>
              <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-brand-brown-border"}`} />
            </Link>
          );
        })}
      </nav>

      {/* Logout Action */}
      <div className="pt-3 border-t border-brand-brown-border/60">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-700 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out of Sanctum</span>
        </button>
      </div>
    </aside>
  );
}
