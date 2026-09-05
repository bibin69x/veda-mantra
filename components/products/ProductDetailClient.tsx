"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  Leaf,
  Sparkles,
  Plus,
  Minus,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Clock,
  Flame,
  ChevronRight,
  Share2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Product, ProductVariant, PRODUCTS } from "@/data/products";
import { TREATMENTS } from "@/data/treatments";
import { useCart } from "@/context/CartContext";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const { addItem, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<
    "overview" | "botanicals" | "benefits" | "usage" | "precautions" | "reviews"
  >("overview");
  const [isCopied, setIsCopied] = useState(false);

  // Dynamic pricing based on selected variant
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentCompareAtPrice = selectedVariant
    ? selectedVariant.compareAtPrice
    : product.compareAtPrice;
  const currentVolume = selectedVariant
    ? selectedVariant.volumeOrWeight
    : product.volumeOrWeight;

  const discountPercent = currentCompareAtPrice
    ? Math.round(((currentCompareAtPrice - currentPrice) / currentCompareAtPrice) * 100)
    : 0;

  // Handle Add to Cart
  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
  };

  // Handle Buy Now (Add to cart and go straight to /cart)
  const handleBuyNow = () => {
    addItem(product, quantity, selectedVariant);
    router.push("/cart");
  };

  // Handle Share Link
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Related products from same category or dosha
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.doshaSuitability === product.doshaSuitability)
  ).slice(0, 3);

  // Complementary treatments
  const complementaryTreatments = TREATMENTS.filter((t) =>
    product.complementaryTreatmentSlugs?.includes(t.slug)
  );

  return (
    <div className="min-h-screen bg-brand-cream pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-brand-sand/40 border-b border-brand-brown-border/60 py-3">
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
            <span className="text-brand-brown-muted truncate max-w-[140px] sm:max-w-none">
              {product.category}
            </span>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <span className="text-brand-brown font-medium truncate max-w-[160px] sm:max-w-none">
              {product.title}
            </span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-sand/30 border border-brand-brown-border">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                priority
                className="object-cover object-center"
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-brand-brown/90 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {product.doshaSuitability} Affinity
                </span>
                {discountPercent > 0 && (
                  <span className="bg-brand-green text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-brand-brown shadow-sm transition-colors focus:outline-none"
                title="Share this remedy"
                aria-label="Share remedy URL"
              >
                {isCopied ? <Check className="w-4 h-4 text-brand-green" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Thumbnail switcher if gallery available */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img
                        ? "border-brand-green ring-2 ring-brand-green/20"
                        : "border-brand-brown-border hover:border-brand-brown"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Guarantee Box */}
            <div className="bg-brand-sand/40 border border-brand-brown-border/60 rounded-xl p-4 grid grid-cols-2 gap-3 text-xs text-brand-brown">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Ashtanga Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Wildcrafted Herbs</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-brown shrink-0" />
                <span>Dispatched in 24 Hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-brand-green shrink-0" />
                <span>100% Preservative-Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Purchase Options */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Sanskrit Title */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold text-brand-green">
                    {product.category}
                  </span>
                  <span className="text-xs font-serif italic text-brand-gold-dark">
                    {product.classicalReference}
                  </span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-brown tracking-tight">
                  {product.title}
                </h1>
                <p className="font-serif text-lg text-brand-gold-dark font-medium italic">
                  {product.sanskritName}
                </p>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-neutral-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-brown">
                  {product.rating} / 5.0
                </span>
                <span className="text-xs text-brand-brown-muted">
                  ({product.reviewCount} verified Vaidya & patient reviews)
                </span>
              </div>

              {/* Price Display */}
              <div className="pt-2 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-brand-brown font-serif">
                  ₹{currentPrice}
                </span>
                {currentCompareAtPrice && (
                  <span className="text-lg text-brand-brown-muted line-through">
                    ₹{currentCompareAtPrice}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                    Save ₹{currentCompareAtPrice! - currentPrice} ({discountPercent}%)
                  </span>
                )}
              </div>
              <p className="text-[11px] text-brand-brown-muted">
                Inclusive of all taxes. Free express shipping on orders over ₹999.
              </p>

              {/* Tagline */}
              <p className="text-sm text-brand-brown leading-relaxed bg-brand-sand/30 p-3.5 rounded-lg border border-brand-brown-border/40">
                {product.tagline}
              </p>

              {/* Variant Selector (if available) */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                    Select Volume / Pack Size:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariant?.id === v.id;
                      return (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariant(v)}
                          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 border text-left ${
                            isSelected
                              ? "bg-brand-brown text-white border-brand-brown shadow-sm"
                              : "bg-white text-brand-brown border-brand-brown-border hover:border-brand-brown"
                          }`}
                        >
                          <span className="block font-bold">{v.volumeOrWeight}</span>
                          <span className={`text-[10px] ${isSelected ? "text-brand-gold-light" : "text-brand-brown-muted"}`}>
                            ₹{v.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Selector & CTA Buttons */}
              <div className="space-y-3 pt-3">
                <div className="flex items-center gap-4">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-brand-brown-border rounded-lg bg-brand-sand/40 p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2 hover:bg-white text-brand-brown rounded transition-colors focus:outline-none"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-sm font-bold text-brand-brown min-w-[32px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 hover:bg-white text-brand-brown rounded transition-colors focus:outline-none"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center shadow-md font-semibold text-sm"
                    leftIcon={<ShoppingBag className="w-4 h-4" />}
                    onClick={handleAddToCart}
                  >
                    Add to Sacred Basket
                  </Button>
                </div>

                {/* Direct Buy Now Button */}
                <Button
                  variant="gold"
                  size="md"
                  className="w-full justify-center shadow-sm font-semibold text-sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  onClick={handleBuyNow}
                >
                  Buy Now — Express Checkout
                </Button>
              </div>

              {/* Doctor Consultation Upsell */}
              <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between text-xs text-brand-brown-muted">
                <span>Need tailored dosage advice?</span>
                <Link
                  href="/consultation"
                  className="text-brand-green font-semibold hover:underline flex items-center gap-1"
                >
                  Book Vaidya Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs & Classical Information Section */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card space-y-8">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto gap-2 sm:gap-4 border-b border-brand-brown-border/60 pb-3">
            {[
              { id: "overview", label: "Classical Lineage" },
              { id: "botanicals", label: "Botanical Actives" },
              { id: "benefits", label: "Clinical Benefits" },
              { id: "usage", label: "How to Use & Rituals" },
              { id: "precautions", label: "Safety & Storage" },
              { id: "reviews", label: `Reviews (${product.reviewCount})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-brand-brown text-white font-semibold"
                    : "text-brand-brown-muted hover:text-brand-brown hover:bg-brand-sand/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview & Classical Lineage */}
          {activeTab === "overview" && (
            <div className="space-y-6 max-w-4xl text-sm text-brand-brown leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-brand-brown">
                  Classical Formulation Heritage
                </h3>
                <p className="text-brand-brown-muted">
                  Referenced in: <strong className="text-brand-brown font-serif">{product.classicalReference}</strong>
                </p>
                <p className="pt-2">{product.description}</p>
              </div>

              <div className="bg-brand-sand/40 border border-brand-brown-border/60 rounded-xl p-5 space-y-2">
                <h4 className="font-serif font-semibold text-base text-brand-brown flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-gold" />
                  Classical Paka Vidhi (Decoction Methodology)
                </h4>
                <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed">
                  {product.classicalPreparation}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Botanical Actives */}
          {activeTab === "botanicals" && (
            <div className="space-y-6 max-w-4xl">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-brand-brown">
                  Active Botanical Ingredients & Pharmacological Actions
                </h3>
                <p className="text-xs sm:text-sm text-brand-brown-muted">
                  Every botanical is wildcrafted or organically cultivated without toxic agricultural runoff.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.botanicalActives.map((herb, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-sand/30 border border-brand-brown-border/60 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-brand-brown">
                        {herb.sanskritName}
                      </h4>
                      <span className="text-[11px] font-mono italic text-brand-green">
                        {herb.botanicalName}
                      </span>
                    </div>
                    <p className="text-xs text-brand-brown-muted leading-relaxed">
                      {herb.action}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-brown-border/40">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted block mb-2">
                  Complete Classical Formulation:
                </span>
                <p className="text-xs text-brand-brown leading-relaxed">
                  {product.keyIngredients.join(" • ")}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Clinical Benefits */}
          {activeTab === "benefits" && (
            <div className="space-y-6 max-w-4xl">
              <h3 className="font-serif text-xl font-bold text-brand-brown">
                Therapeutic Efficacy & Clinical Benefits
              </h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-brand-sand/20 border border-brand-brown-border/40"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm text-brand-brown font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Usage & Rituals */}
          {activeTab === "usage" && (
            <div className="space-y-6 max-w-4xl text-sm text-brand-brown leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-brand-brown flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-green" />
                  Application Method & Dosage
                </h3>
                <p className="bg-brand-sand/30 p-4 rounded-xl border border-brand-brown-border/40">
                  {product.howToUse}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-serif font-semibold text-base text-brand-brown flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Sacred Daily Ritual (Dinacharya Integration)
                </h4>
                <p className="text-brand-brown-muted leading-relaxed">
                  {product.dailyRitual}
                </p>
              </div>
            </div>
          )}

          {/* Tab 5: Precautions */}
          {activeTab === "precautions" && (
            <div className="space-y-6 max-w-4xl text-sm text-brand-brown leading-relaxed">
              <h3 className="font-serif text-xl font-bold text-brand-brown">
                Safety, Contraindications & Storage
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-amber-950 space-y-1">
                  <h4 className="font-bold text-xs uppercase tracking-wider">
                    Physician Precautions:
                  </h4>
                  <p className="text-xs sm:text-sm">{product.precautions}</p>
                </div>

                <div className="space-y-1 text-xs sm:text-sm text-brand-brown-muted">
                  <p>
                    <strong>Shelf Life:</strong> {product.shelfLife}
                  </p>
                  <p>
                    <strong>Storage:</strong> Store in a cool, dry place away from direct sunlight. Keep cap tightly fastened after each use.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 6: Customer Reviews */}
          {activeTab === "reviews" && (
            <div className="space-y-6 max-w-4xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-brown-border/60 pb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Customer & Patient Reviews
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-neutral-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-brand-brown">
                      {product.rating} out of 5
                    </span>
                    <span className="text-xs text-brand-brown-muted">
                      ({product.reviewCount} total reviews)
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert("Review submission is enabled for verified purchasers.")}
                >
                  Write a Review
                </Button>
              </div>

              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-5 rounded-xl bg-brand-sand/20 border border-brand-brown-border/60 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-sm text-brand-brown">
                            {rev.userName}
                          </span>
                          {rev.location && (
                            <span className="text-xs text-brand-brown-muted">
                              • {rev.location}
                            </span>
                          )}
                          {rev.verifiedPurchase && (
                            <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-2 py-0.5 rounded">
                              Verified Patient
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-brand-brown-muted">{rev.date}</span>
                      </div>

                      <div className="flex text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-brand-brown leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-brand-sand/20 rounded-xl space-y-2">
                  <p className="font-serif text-base text-brand-brown font-medium">
                    Be the first to review this classical formulation!
                  </p>
                  <p className="text-xs text-brand-brown-muted">
                    Our remedies have been prescribed for centuries in Ayurvedic hospital wards.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Complementary Panchakarma Treatments Section */}
        {complementaryTreatments.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="gold" size="sm" className="mb-2">
                  Clinical Synergy
                </Badge>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                  Complementary Panchakarma Therapies
                </h2>
              </div>
              <Link
                href="/treatments"
                className="text-xs font-semibold text-brand-green hover:underline flex items-center gap-1"
              >
                View All Therapies &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complementaryTreatments.map((t) => (
                <Link
                  key={t.id}
                  href={`/treatments/${t.slug}`}
                  className="bg-white rounded-xl p-5 border border-brand-brown-border shadow-card hover:shadow-luxury transition-all duration-300 group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-serif italic text-brand-gold-dark">
                      {t.sanskritName}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-brand-brown group-hover:text-brand-green transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-brand-brown-muted line-clamp-2 leading-relaxed">
                      {t.tagline}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between text-xs font-medium text-brand-green">
                    <span>{t.duration}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Learn Procedure &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Formulations Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="green" size="sm" className="mb-2">
                  Sacred Apothecary
                </Badge>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                  Related Herbal Remedies
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-semibold text-brand-green hover:underline flex items-center gap-1"
              >
                Browse All Products &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl overflow-hidden border border-brand-brown-border shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col group"
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="relative aspect-square w-full bg-brand-sand/30 overflow-hidden block"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-brown/85 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        {p.doshaSuitability}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[11px] font-serif italic text-brand-gold-dark">
                        {p.sanskritName}
                      </span>
                      <Link
                        href={`/products/${p.slug}`}
                        className="font-serif text-base font-semibold text-brand-brown group-hover:text-brand-green transition-colors line-clamp-1 block"
                      >
                        {p.title}
                      </Link>
                      <p className="text-xs text-brand-brown-muted line-clamp-2 pt-1">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between">
                      <span className="text-base font-bold text-brand-brown">
                        ₹{p.price}
                      </span>
                      <Button
                        href={`/products/${p.slug}`}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        View Remedy
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
