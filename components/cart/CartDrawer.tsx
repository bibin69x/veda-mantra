"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    cartCount,
    subtotal,
    shippingFee,
    freeShippingRemaining,
    freeShippingProgress,
    discountAmount,
    total,
    updateQuantity,
    removeItem,
  } = useCart();

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Darkened Backdrop */}
      <div
        className="fixed inset-0 bg-brand-brown-dark/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-white border-l border-brand-brown-border shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-out animate-slideInRight">
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-brand-brown text-white flex items-center justify-between border-b border-brand-brown-light/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold tracking-wide">
                Your Ayurvedic Remedies
              </h2>
              <p className="text-xs text-white/80">
                {cartCount} {cartCount === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-white px-6 py-3 border-b border-brand-brown-border">
          {freeShippingRemaining > 0 ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-brand-brown">
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-3.5 h-3.5 text-brand-green" />
                  Add <span className="font-bold text-brand-green">₹{freeShippingRemaining}</span> for Free Delivery
                </span>
                <span className="text-[11px] font-semibold text-brand-brown-muted">
                  {freeShippingProgress}%
                </span>
              </div>
              <div className="w-full h-2 bg-brand-brown/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-green transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-brand-green font-semibold">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
              <span>Congratulations! You have unlocked Free Ayurvedic Delivery.</span>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-brand-brown-border/40">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-5">
              <div className="w-20 h-20 rounded-full bg-brand-brown/5 border border-brand-brown-border flex items-center justify-center text-brand-gold">
                <ShoppingBag className="w-10 h-10 stroke-[1.2]" />
              </div>
              <div className="space-y-2 max-w-xs">
                <h3 className="font-serif text-xl font-medium text-brand-brown">
                  Your Basket is Empty
                </h3>
                <p className="text-xs text-brand-brown-muted leading-relaxed">
                  Discover our classical herbal oils, immunity rasayanas, and authentic Ayurvedic remedies.
                </p>
              </div>
              <div className="pt-2 w-full max-w-xs space-y-2">
                <Button
                  href="/products"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={closeCart}
                >
                  Explore All Remedies
                </Button>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href="/products?category=Facial+Care+%26+Oils"
                    onClick={closeCart}
                    className="text-[11px] text-center p-2 rounded bg-white border border-brand-brown-border/60 text-brand-brown hover:border-brand-green hover:text-brand-green transition-colors"
                  >
                    Facial Oils
                  </Link>
                  <Link
                    href="/products?category=Body+%26+Pain+Relief"
                    onClick={closeCart}
                    className="text-[11px] text-center p-2 rounded bg-white border border-brand-brown-border/60 text-brand-brown hover:border-brand-green hover:text-brand-green transition-colors"
                  >
                    Pain Relief
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                {/* Product Thumbnail */}
                <Link
                  href={`/products/${item.slug}`}
                  onClick={closeCart}
                  className="relative w-20 h-20 rounded-md overflow-hidden bg-white border border-brand-brown-border/60 shrink-0 group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Product Info & Controls */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-0.5">
                    {item.sanskritName && (
                      <p className="text-[11px] font-serif italic text-brand-gold-dark truncate">
                        {item.sanskritName}
                      </p>
                    )}
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="text-sm font-serif font-medium text-brand-brown hover:text-brand-green transition-colors line-clamp-1 block"
                    >
                      {item.title}
                    </Link>
                    <span className="inline-block text-[10px] uppercase font-semibold text-brand-brown-muted bg-brand-brown/5 border border-brand-brown-border/60 px-2 py-0.5 rounded">
                      {item.volumeOrWeight}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-brand-brown-border rounded bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-brand-brown/5 text-brand-brown transition-colors focus:outline-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold text-brand-brown min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-brand-brown/5 text-brand-brown transition-colors focus:outline-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price & Delete */}
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-sm font-semibold text-brand-brown">
                          ₹{item.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <p className="text-[10px] text-brand-brown-muted">
                            ₹{item.price} each
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-brand-brown-muted hover:text-red-700 transition-colors focus:outline-none"
                        title="Remove item"
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Summary */}
        {items.length > 0 && (
          <div className="px-6 py-5 bg-white border-t border-brand-brown-border space-y-4 shadow-lg">
            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-brand-brown">
              <div className="flex justify-between">
                <span className="text-brand-brown-muted">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-brand-green font-medium">
                  <span>Vedic Blessing Discount</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-brand-brown-muted">Shipping</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-brand-green font-semibold uppercase text-[11px]">
                      Free
                    </span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-brand-brown-border/60 flex justify-between text-sm font-serif font-bold text-brand-brown">
                <span>Estimated Total</span>
                <span className="text-base text-brand-green font-sans font-bold">
                  ₹{total}
                </span>
              </div>
              <p className="text-[10px] text-brand-brown-muted text-center italic">
                Taxes included. Authentic classical formulations freshly prepared.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <Button
                href="/cart"
                variant="primary"
                size="md"
                className="w-full justify-center shadow-md font-semibold text-sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={closeCart}
              >
                Proceed to Checkout (₹{total})
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-brand-brown-muted hover:text-brand-green font-medium py-1 transition-colors"
              >
                Continue Exploring Remedies &rarr;
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 border-t border-brand-brown-border/40 flex items-center justify-center gap-4 text-[10px] text-brand-brown-muted">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                100% Authentic
              </span>
              <span>•</span>
              <span>Doctor Prescribed</span>
              <span>•</span>
              <span>Razorpay Secured</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
