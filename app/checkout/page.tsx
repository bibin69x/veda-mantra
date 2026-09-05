"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  Truck,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShoppingBag,
  MapPin,
  Mail,
  Phone,
  User,
  Tag,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    cartCount,
    subtotal,
    shippingFee,
    discountAmount,
    discountCode,
    total,
    clearCart,
  } = useCart();

  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "cod">("razorpay");

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    landmark: "",
    city: "",
    state: "Kerala",
    pincode: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedShippingCost =
    shippingMethod === "express" ? 149 : shippingFee;

  const finalOrderTotal = subtotal - discountAmount + selectedShippingCost;

  const validateAddress = () => {
    const errors: Record<string, string> = {};
    if (!shippingAddress.fullName.trim()) errors.fullName = "Full name is required.";
    if (!shippingAddress.email.trim() || !shippingAddress.email.includes("@")) {
      errors.email = "Valid email is required.";
    }
    if (!shippingAddress.phone.trim() || shippingAddress.phone.replace(/\D/g, "").length < 10) {
      errors.phone = "Valid 10-digit phone number is required.";
    }
    if (!shippingAddress.addressLine1.trim()) errors.addressLine1 = "Street address is required.";
    if (!shippingAddress.city.trim()) errors.city = "City is required.";
    if (!shippingAddress.pincode.trim() || shippingAddress.pincode.length !== 6) {
      errors.pincode = "Valid 6-digit Indian PIN code is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAddress()) {
      window.scrollTo({ top: 120, behavior: "smooth" });
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      const orderNumber = `ORD-AVM-${Date.now().toString().slice(-6)}`;
      
      // Store temporary order receipt for the success page
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "latest_order_receipt",
          JSON.stringify({
            orderNumber,
            items,
            subtotal,
            discountAmount,
            shippingCost: selectedShippingCost,
            total: finalOrderTotal,
            shippingAddress,
            paymentMethod,
            orderDate: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          })
        );
      }

      clearCart();
      setIsProcessing(false);
      router.push(`/checkout/success?orderNumber=${orderNumber}`);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-cream py-20">
        <Container size="md">
          <div className="bg-white rounded-2xl p-10 text-center border border-brand-brown-border shadow-card space-y-5">
            <div className="w-16 h-16 rounded-full bg-brand-sand/80 flex items-center justify-center mx-auto text-brand-gold">
              <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h1 className="font-serif text-2xl font-bold text-brand-brown">
                Your Basket is Empty
              </h1>
              <p className="text-xs text-brand-brown-muted">
                Add your prescribed classical remedies to proceed with checkout.
              </p>
            </div>
            <Button href="/products" variant="primary" size="md">
              Browse Formulations Catalog
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream pb-24">
      {/* Breadcrumb Bar */}
      <div className="bg-brand-sand/40 border-b border-brand-brown-border/60 py-3">
        <Container size="xl">
          <nav className="flex items-center space-x-2 text-xs text-brand-brown-muted">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <Link href="/cart" className="hover:text-brand-green transition-colors">
              Basket
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <span className="text-brand-brown font-medium">Secure Checkout</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        <div className="mb-8 space-y-1 border-b border-brand-brown-border pb-4">
          <Badge variant="green" size="sm">
            Encrypted Checkout
          </Badge>
          <h1 className="font-serif text-3xl font-bold text-brand-brown tracking-tight">
            Shipping & Order Verification
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Multi-Step Address & Payment Form */}
          <div className="lg:col-span-8 space-y-8">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Step 1: Customer Contact & Delivery Address */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-6">
                <div className="flex items-center gap-3 border-b border-brand-brown-border/60 pb-3">
                  <div className="w-7 h-7 rounded-full bg-brand-brown text-white flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <h2 className="font-serif text-xl font-bold text-brand-brown">
                    Contact & Delivery Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Recipient Full Name *
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.fullName}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, fullName: e.target.value })
                      }
                      placeholder="e.g. Rajesh Pillai"
                      className={`w-full p-3 bg-brand-sand/30 border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.fullName ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Email Address (For Invoice) *
                    </label>
                    <input
                      type="email"
                      value={shippingAddress.email}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, email: e.target.value })
                      }
                      placeholder="e.g. rajesh@example.com"
                      className={`w-full p-3 bg-brand-sand/30 border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.email ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Mobile Phone (+91) *
                    </label>
                    <input
                      type="tel"
                      value={shippingAddress.phone}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, phone: e.target.value })
                      }
                      placeholder="e.g. 9876543210"
                      className={`w-full p-3 bg-brand-sand/30 border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.phone ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Address Line 1 */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Flat / House No. / Street Address *
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.addressLine1}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, addressLine1: e.target.value })
                      }
                      placeholder="e.g. 42, Temple Road, Near Sree Krishna Temple"
                      className={`w-full p-3 bg-brand-sand/30 border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.addressLine1 ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.addressLine1 && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.addressLine1}</p>
                    )}
                  </div>

                  {/* Landmark */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Landmark / Area (Optional)
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.landmark}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, landmark: e.target.value })
                      }
                      placeholder="e.g. Opposite Post Office"
                      className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      City / District *
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.city}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, city: e.target.value })
                      }
                      placeholder="e.g. Kochi"
                      className={`w-full p-3 bg-brand-sand/30 border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.city ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.city && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.city}</p>
                    )}
                  </div>

                  {/* State */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      State *
                    </label>
                    <select
                      value={shippingAddress.state}
                      onChange={(e) =>
                        setShippingAddress({ ...shippingAddress, state: e.target.value })
                      }
                      className="w-full p-3 bg-brand-sand/30 border border-brand-brown-border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    >
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* PIN Code */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      PIN Code (6 Digits) *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={shippingAddress.pincode}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          pincode: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="e.g. 682001"
                      className={`w-full p-3 bg-brand-sand/30 border rounded-lg text-sm font-mono text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.pincode ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.pincode && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.pincode}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Method */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-4">
                <div className="flex items-center gap-3 border-b border-brand-brown-border/60 pb-3">
                  <div className="w-7 h-7 rounded-full bg-brand-brown text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <h2 className="font-serif text-xl font-bold text-brand-brown">
                    Select Shipping Speed
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setShippingMethod("standard")}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                      shippingMethod === "standard"
                        ? "border-brand-green bg-brand-green/5 shadow-sm"
                        : "border-brand-brown-border hover:border-brand-brown bg-white"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-brand-green" />
                        <h3 className="font-bold text-sm text-brand-brown">
                          Standard Ayurvedic Delivery
                        </h3>
                      </div>
                      <p className="text-xs text-brand-brown-muted">
                        3 to 5 business days across India
                      </p>
                    </div>
                    <span className="text-xs font-bold text-brand-green font-mono">
                      {shippingFee === 0 ? "FREE" : `₹${shippingFee}`}
                    </span>
                  </div>

                  <div
                    onClick={() => setShippingMethod("express")}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                      shippingMethod === "express"
                        ? "border-brand-green bg-brand-green/5 shadow-sm"
                        : "border-brand-brown-border hover:border-brand-brown bg-white"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">⚡</span>
                        <h3 className="font-bold text-sm text-brand-brown">
                          Express Herbal Air Dispatch
                        </h3>
                      </div>
                      <p className="text-xs text-brand-brown-muted">
                        1 to 2 business days priority air
                      </p>
                    </div>
                    <span className="text-xs font-bold text-brand-brown font-mono">
                      ₹149
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Options */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-brown-border shadow-card space-y-4">
                <div className="flex items-center gap-3 border-b border-brand-brown-border/60 pb-3">
                  <div className="w-7 h-7 rounded-full bg-brand-brown text-white flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <h2 className="font-serif text-xl font-bold text-brand-brown">
                    Payment Channel
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* Razorpay Standard */}
                  <div
                    onClick={() => setPaymentMethod("razorpay")}
                    className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      paymentMethod === "razorpay"
                        ? "border-brand-brown bg-brand-sand/30 shadow-sm"
                        : "border-brand-brown-border hover:border-brand-brown bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-brown text-white flex items-center justify-center">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-brand-brown">
                          Razorpay Standard Secure Gateway
                        </h3>
                        <p className="text-xs text-brand-brown-muted">
                          UPI (GPay, PhonePe, Paytm), All Credit & Debit Cards, Net Banking
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        paymentMethod === "razorpay"
                          ? "bg-brand-brown text-white"
                          : "bg-brand-sand text-brand-brown-muted"
                      }`}
                    >
                      {paymentMethod === "razorpay" ? "Selected" : "Select"}
                    </span>
                  </div>

                  {/* Cash on Delivery */}
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      paymentMethod === "cod"
                        ? "border-brand-brown bg-brand-sand/30 shadow-sm"
                        : "border-brand-brown-border hover:border-brand-brown bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center">
                        <span className="font-serif text-lg font-bold">₹</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-brand-brown">
                          Cash on Delivery / Clinic Collection
                        </h3>
                        <p className="text-xs text-brand-brown-muted">
                          Pay in cash upon physical doorstep delivery
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        paymentMethod === "cod"
                          ? "bg-brand-brown text-white"
                          : "bg-brand-sand text-brand-brown-muted"
                      }`}
                    >
                      {paymentMethod === "cod" ? "Selected" : "Select"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  isLoading={isProcessing}
                  className="w-full justify-center shadow-lg font-bold text-base py-4"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Confirm Order & Pay ₹{finalOrderTotal}
                </Button>
                <p className="text-[11px] text-brand-brown-muted text-center pt-2">
                  By confirming, you agree to Ayur Veda Mantra&apos;s Terms of Service & Privacy Policy.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Sticky Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-card space-y-6 sticky top-28">
              <h2 className="font-serif text-xl font-bold text-brand-brown border-b border-brand-brown-border/60 pb-3 flex items-center justify-between">
                <span>Order Summary</span>
                <span className="text-xs text-brand-brown-muted font-normal font-sans">
                  ({cartCount} items)
                </span>
              </h2>

              {/* Item List */}
              <div className="space-y-3.5 max-h-64 overflow-y-auto pr-1 divide-y divide-brand-brown-border/40">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-brand-sand/30 border border-brand-brown-border shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-brand-brown line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-brand-brown-muted">
                        Qty: {item.quantity} • {item.volumeOrWeight}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-brand-brown font-mono">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="space-y-2.5 pt-3 border-t border-brand-brown-border/60 text-xs text-brand-brown">
                <div className="flex justify-between">
                  <span className="text-brand-brown-muted">Subtotal</span>
                  <span className="font-medium font-mono">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-brand-green font-medium">
                    <span>Discount ({discountCode})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-brand-brown-muted">Shipping</span>
                  <span>
                    {selectedShippingCost === 0 ? (
                      <span className="text-brand-green font-bold text-[10px] uppercase">
                        Free
                      </span>
                    ) : (
                      `₹${selectedShippingCost}`
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-brand-brown-border/60 flex justify-between items-baseline font-serif">
                  <span className="text-base font-bold text-brand-brown">Total</span>
                  <span className="text-2xl font-bold text-brand-green font-sans">
                    ₹{finalOrderTotal}
                  </span>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-3 border-t border-brand-brown-border/60 space-y-2 text-[11px] text-brand-brown-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                  <span>100% Authentic Classical Sourced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>256-Bit SSL Encrypted Razorpay Gateway</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
