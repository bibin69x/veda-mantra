"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  Truck,
  Download,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccountNav } from "@/components/account/AccountNav";

const SAMPLE_ORDERS = [
  {
    id: "ORD-AVM-849201",
    date: "Oct 28, 2024",
    status: "In Transit",
    statusVariant: "blue",
    carrier: "BlueDart Express",
    trackingNumber: "BLU-89210948",
    total: 2600,
    items: [
      {
        title: "Kumkumadi Miraculous Beauty Fluid",
        volumeOrWeight: "30 ml",
        quantity: 1,
        price: 1850,
        image: "https://images.unsplash.com/photo-1608248597359-57e05697669a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Mahanarayana Restorative Joint Oil",
        volumeOrWeight: "200 ml",
        quantity: 1,
        price: 750,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "ORD-AVM-719384",
    date: "Sep 14, 2024",
    status: "Delivered",
    statusVariant: "green",
    carrier: "Delhivery Surface",
    trackingNumber: "DLV-49102831",
    total: 1450,
    items: [
      {
        title: "Swarna Chyawanprash Supreme Rasayana",
        volumeOrWeight: "500 g",
        quantity: 1,
        price: 1450,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "ORD-AVM-629104",
    date: "Jul 02, 2024",
    status: "Delivered",
    statusVariant: "green",
    carrier: "India Post Speed Post",
    trackingNumber: "IND-10293819",
    total: 890,
    items: [
      {
        title: "Neelibringadi Intensive Root Therapy",
        volumeOrWeight: "200 ml",
        quantity: 1,
        price: 890,
        image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export default function AccountOrdersPage() {
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
            <span className="text-brand-brown font-medium">Orders & Prescriptions</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <AccountNav />

          <main className="flex-1 space-y-6 w-full">
            <div className="border-b border-brand-brown-border pb-4">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                Orders & Dispensary Dispatches
              </h1>
              <p className="text-xs text-brand-brown-muted pt-1">
                Track delivery statuses, download official dispensary invoices, and re-order classical formulations.
              </p>
            </div>

            <div className="space-y-5">
              {SAMPLE_ORDERS.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl border border-brand-brown-border shadow-card overflow-hidden"
                >
                  {/* Order Card Header */}
                  <div className="bg-white p-4 sm:p-5 border-b border-brand-brown-border flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <span className="text-brand-brown-muted block text-[11px]">Order Reference</span>
                      <strong className="font-mono text-sm font-bold text-brand-brown">{order.id}</strong>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-brand-brown-muted block text-[11px]">Order Date</span>
                      <strong className="text-brand-brown font-serif">{order.date}</strong>
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-brand-brown-muted block text-[11px]">Total Paid</span>
                      <strong className="text-brand-green font-bold text-sm font-mono">₹{order.total}</strong>
                    </div>

                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === "Delivered"
                            ? "bg-brand-green/10 text-brand-green"
                            : "bg-brand-green/10 text-brand-green border border-brand-green/20"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-5 space-y-4 divide-y divide-brand-brown-border/40">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="pt-3 first:pt-0 flex gap-4 items-center">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-brand-brown-border shrink-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-semibold text-sm text-brand-brown line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-brand-brown-muted">
                            Size: {item.volumeOrWeight} • Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="text-xs font-bold font-mono text-brand-brown">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Card Footer Actions */}
                  <div className="p-4 bg-white border-t border-brand-brown-border flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-brand-brown-muted">
                      <Truck className="w-3.5 h-3.5 text-brand-green" />
                      <span>
                        Carrier: <strong>{order.carrier}</strong> ({order.trackingNumber})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Downloading Invoice for ${order.id}...`)}
                        className="px-3 py-1.5 rounded-lg border border-brand-brown-border bg-white text-brand-brown font-semibold hover:bg-brand-brown/5 transition-colors flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Invoice
                      </button>
                      <Button
                        href="/products"
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        Re-Order Formulation
                      </Button>
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
