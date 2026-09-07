"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Tag,
  Check,
  RotateCcw,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    cartCount,
    subtotal,
    shippingFee,
    freeShippingRemaining,
    freeShippingProgress,
    discountCode,
    discountAmount,
    total,
    updateQuantity,
    removeItem,
    clearCart,
    applyDiscount,
    removeDiscount,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoFeedback, setPromoFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyDiscount(promoInput);
    setPromoFeedback(res);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Breadcrumbs */}
      <div className="bg-white border-b border-brand-brown-border py-3">
        <Container size="xl">
          <nav className="flex items-center space-x-2 text-xs text-brand-brown-muted">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <Link href="/products" className="hover:text-brand-green transition-colors">
              Apothecary Products
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <span className="text-brand-brown font-medium">Shopping Basket</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        {/* Page Title & Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-brown-border pb-6 mb-8">
          <div>
            <Badge variant="gold" size="sm" className="mb-2">
              Aushadha Seva
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
              Your Remedy Basket
            </h1>
            <p className="text-xs sm:text-sm text-brand-brown-muted pt-1">
              Review your prescribed classical remedies and formulations before secure checkout.
            </p>
          </div>

          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-brand-brown-muted hover:text-red-700 flex items-center gap-1.5 self-start sm:self-auto py-1 px-2.5 rounded hover:bg-brand-brown/5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Empty Basket
            </button>
          )}
        </div>

        {items.length === 0 ? (
          /* Empty Basket State */
          <div className="bg-white rounded-2xl p-12 sm:p-16 text-center border border-brand-brown-border shadow-card max-w-xl mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-brand-brown/5 border border-brand-brown-border flex items-center justify-center mx-auto text-brand-gold">
              <ShoppingBag className="w-12 h-12 stroke-[1.2]" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-brand-brown">
                Your Basket is Currently Empty
              </h2>
              <p className="text-sm text-brand-brown-muted leading-relaxed max-w-md mx-auto">
                Explore our collection of authentic 72-hour slow-decocted herbal oils, immunity rasayanas, and Doctor-certified Panchakarma remedies.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/products"
                variant="primary"
                size="md"
                className="w-full sm:w-auto shadow-md"
              >
                Browse All Formulations
              </Button>
              <Button
                href="/consultation"
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                Book Doctor Consultation
              </Button>
            </div>
          </div>
        ) : (
          /* Populated Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free Shipping Notification Banner */}
              <div className="bg-white rounded-xl p-4 border border-brand-brown-border shadow-sm">
                {freeShippingRemaining > 0 ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-brand-brown font-medium">
                      <span className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-brand-green" />
                        Add <strong className="text-brand-green">₹{freeShippingRemaining}</strong> more to qualify for Free Ayurvedic Delivery!
                      </span>
                      <span className="font-bold">{freeShippingProgress}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-brand-brown/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-green transition-all duration-500 rounded-full"
                        style={{ width: `${freeShippingProgress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-green">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>You have unlocked Free Express Ayurvedic Shipping across India!</span>
                  </div>
                )}
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-2xl border border-brand-brown-border shadow-card divide-y divide-brand-brown-border/60 overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
                  >
                    {/* Item Thumbnail & Description */}
                    <div className="flex gap-4 items-center">
                      <Link
                        href={`/products/${item.slug}`}
                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white border border-brand-brown-border shrink-0 group"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      <div className="space-y-1">
                        {item.sanskritName && (
                          <span className="text-[11px] font-serif italic text-brand-gold-dark block">
                            {item.sanskritName}
                          </span>
                        )}
                        <Link
                          href={`/products/${item.slug}`}
                          className="font-serif text-base sm:text-lg font-semibold text-brand-brown hover:text-brand-green transition-colors block line-clamp-1"
                        >
                          {item.title}
                        </Link>
                        <div className="flex items-center gap-2">
                          <span className="text-xs uppercase font-semibold text-brand-brown-muted bg-brand-brown/5 border border-brand-brown-border/60 px-2 py-0.5 rounded">
                            {item.volumeOrWeight}
                          </span>
                          <span className="text-xs text-brand-brown-muted font-mono">
                            ₹{item.price} each
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Stepper & Subtotal */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-brand-brown-border/40">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-brand-brown-border rounded-lg bg-white p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-brand-brown/5 text-brand-brown rounded transition-colors focus:outline-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-brand-brown min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-brand-brown/5 text-brand-brown rounded transition-colors focus:outline-none"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right min-w-[80px]">
                        <span className="text-base font-bold text-brand-brown block font-serif">
                          ₹{item.price * item.quantity}
                        </span>
                        {item.compareAtPrice && (
                          <span className="text-xs text-brand-brown-muted line-through">
                            ₹{item.compareAtPrice * item.quantity}
                          </span>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-brand-brown-muted hover:text-red-700 hover:bg-brand-brown/5 rounded-lg transition-colors focus:outline-none"
                        title="Remove from basket"
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Link */}
              <div className="flex justify-between items-center pt-2">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-brand-green hover:underline flex items-center gap-1.5"
                >
                  &larr; Continue Exploring Herbal Formulations
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-card space-y-6 sticky top-28">
                <h2 className="font-serif text-xl font-bold text-brand-brown border-b border-brand-brown-border/60 pb-3">
                  Order Summary
                </h2>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label htmlFor="promo" className="text-xs font-semibold text-brand-brown-muted uppercase tracking-wider block">
                    Promo / Blessing Code:
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-brown-muted" />
                      <input
                        id="promo"
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="e.g. VEDA10"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-brand-brown-border rounded-lg text-xs uppercase font-mono text-brand-brown placeholder:text-brand-brown-muted focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-brand-brown text-white text-xs font-semibold rounded-lg hover:bg-brand-brown-dark transition-colors"
                    >
                      Apply
                    </button>
                  </div>

                  {promoFeedback && (
                    <p
                      className={`text-xs font-medium ${
                        promoFeedback.success ? "text-brand-green" : "text-red-600"
                      }`}
                    >
                      {promoFeedback.message}
                    </p>
                  )}

                  {discountCode && (
                    <div className="flex items-center justify-between p-2 rounded bg-brand-green/10 border border-brand-green/20 text-xs text-brand-green font-medium">
                      <span>Code <strong>{discountCode}</strong> applied</span>
                      <button
                        type="button"
                        onClick={removeDiscount}
                        className="text-[11px] underline hover:text-brand-green-dark"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </form>

                {/* Calculation Breakdown */}
                <div className="space-y-3 pt-3 border-t border-brand-brown-border/60 text-xs text-brand-brown">
                  <div className="flex justify-between">
                    <span className="text-brand-brown-muted">Items Subtotal ({cartCount})</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-brand-green font-medium">
                      <span>Vedic Blessing Discount</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-brand-brown-muted">Delivery & Logistics</span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-brand-green font-bold uppercase text-[11px]">
                          Free
                        </span>
                      ) : (
                        `₹${shippingFee}`
                      )}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-brand-brown-border/60 flex justify-between items-baseline">
                    <span className="font-serif text-base font-bold text-brand-brown">
                      Grand Total
                    </span>
                    <span className="font-sans text-2xl font-bold text-brand-green">
                      ₹{total}
                    </span>
                  </div>
                  <p className="text-[10px] text-brand-brown-muted text-center italic">
                    Includes all GST and Ayurvedic dispensary packaging fees.
                  </p>
                </div>

                {/* Proceed to Checkout CTA */}
                <Button
                  href="/checkout"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-lg font-semibold text-sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Proceed to Checkout (₹{total})
                </Button>

                {/* Trust Guarantees */}
                <div className="pt-4 border-t border-brand-brown-border/60 space-y-2.5 text-xs text-brand-brown-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                    <span>100% Authentic Classical Sourced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>256-Bit SSL Encrypted Razorpay Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-brand-brown shrink-0" />
                    <span>7-Day Quality Replacement Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
