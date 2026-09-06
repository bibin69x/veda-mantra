"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Truck,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface OrderReceipt {
  orderNumber: string;
  items: any[];
  subtotal: number;
  discountAmount: number;
  shippingCost: number;
  total: number;
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    addressLine1: string;
    landmark?: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
  orderDate: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumberParam = searchParams.get("orderNumber");
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("latest_order_receipt");
      if (stored) {
        try {
          setReceipt(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse order receipt:", e);
        }
      }
    }
  }, []);

  const orderNum = orderNumberParam || (receipt ? receipt.orderNumber : "ORD-AVM-749210");

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-brown-border shadow-luxury space-y-8 animate-fadeIn text-center">
      {/* Success Check Icon */}
      <div className="w-20 h-20 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-12 h-12 stroke-[2.2]" />
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <Badge variant="gold" size="md" className="mx-auto">
          Order Confirmed & Payment Received
        </Badge>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
          Dhanyavadah for Your Order
        </h1>
        <p className="text-sm text-brand-brown-muted max-w-md mx-auto">
          Your sacred Ayurvedic medicines are being carefully compounded and prepared for dispatch at our dispensary.
        </p>
        <p className="text-xs font-mono font-bold text-brand-gold-dark bg-brand-brown/5 border border-brand-brown-border/60 py-1.5 px-4 rounded-full inline-block mt-2">
          Order Reference: {orderNum}
        </p>
      </div>

      {/* Tracking Timeline */}
      <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-sm text-left space-y-4">
        <div className="flex items-center justify-between border-b border-brand-brown-border/60 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-2">
            <Truck className="w-4 h-4 text-brand-green" />
            Estimated Delivery: 3 to 5 Business Days
          </span>
          <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-2.5 py-1 rounded-full">
            Processing at Dispensary
          </span>
        </div>

        {/* Delivery Address & Details */}
        {receipt && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-brand-brown pt-1">
            <div>
              <span className="text-brand-brown-muted block mb-1">
                Shipping Destination:
              </span>
              <strong className="block text-sm font-serif">
                {receipt.shippingAddress.fullName}
              </strong>
              <p className="text-brand-brown-muted">
                {receipt.shippingAddress.addressLine1}
                {receipt.shippingAddress.landmark && `, ${receipt.shippingAddress.landmark}`}
              </p>
              <p className="text-brand-brown-muted">
                {receipt.shippingAddress.city}, {receipt.shippingAddress.state} —{" "}
                {receipt.shippingAddress.pincode}
              </p>
              <p className="text-brand-brown-muted mt-1">
                Phone: {receipt.shippingAddress.phone}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-brand-brown-muted block mb-1">Payment Method:</span>
              <strong className="block text-sm font-serif uppercase">
                {receipt.paymentMethod === "razorpay" ? "Razorpay Prepaid" : "Cash on Delivery"}
              </strong>
              <p className="text-brand-brown-muted">
                Order Date: {receipt.orderDate}
              </p>
              <p className="text-base font-bold text-brand-green font-sans mt-2">
                Total: ₹{receipt.total}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Button
          href="/products"
          variant="primary"
          size="md"
          leftIcon={<ShoppingBag className="w-4 h-4" />}
          className="w-full sm:w-auto shadow-md"
        >
          Continue Exploring Remedies
        </Button>

        <Button
          href="/consultation"
          variant="outline"
          size="md"
          className="w-full sm:w-auto"
        >
          Book Vaidya Consultation &rarr;
        </Button>
      </div>

      {/* Support Helpline */}
      <div className="pt-4 border-t border-brand-brown-border/60 text-xs text-brand-brown-muted">
        <p>
          Need assistance with your formulation? Contact our Ayurvedic Helpline:{" "}
          <strong className="text-brand-brown">+91 98765 43210</strong>
        </p>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-white py-16 sm:py-20">
      <Container size="md">
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-12 text-center border border-brand-brown-border shadow-luxury">
              <div className="animate-spin w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full mx-auto" />
              <p className="text-xs text-brand-brown-muted mt-4">Loading order receipt...</p>
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </Container>
    </div>
  );
}
