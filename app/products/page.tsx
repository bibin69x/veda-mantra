"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  Star,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Check,
  Leaf,
  Filter,
  X,
  Flame,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, PRODUCT_CATEGORIES, DOSHA_TYPES, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All Remedies");
  const [selectedDosha, setSelectedDosha] = useState<string>("All Doshas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [addedItemSlug, setAddedItemSlug] = useState<string | null>(null);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All Remedies" || product.category === selectedCategory;

      // Dosha match
      const matchesDosha =
        selectedDosha === "All Doshas" ||
        product.doshaSuitability === selectedDosha ||
        (selectedDosha === "Tridoshic" && product.doshaSuitability === "Tridoshic") ||
        (selectedDosha !== "Tridoshic" &&
          (product.doshaSuitability === "Tridoshic" ||
            product.doshaSuitability.includes(selectedDosha)));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        (product.sanskritName && product.sanskritName.includes(query)) ||
        product.tagline.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.keyIngredients.some((ing) => ing.toLowerCase().includes(query)) ||
        product.benefits.some((b) => b.toLowerCase().includes(query));

      return matchesCategory && matchesDosha && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
      return 0; // default / featured
    });
  }, [selectedCategory, selectedDosha, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setAddedItemSlug(product.slug);
    setTimeout(() => {
      setAddedItemSlug(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Editorial Apothecary Hero */}
      <section className="relative bg-brand-brown text-white py-16 lg:py-20 overflow-hidden border-b border-brand-brown-light/30">
        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="gold" size="md" className="mx-auto bg-brand-gold/20 text-brand-gold-light border-brand-gold/40">
            Aushadha Seva • Classical Herbal Pharmacy
          </Badge>

          <div className="space-y-3">
            <p className="font-serif italic text-brand-gold text-sm sm:text-base tracking-widest uppercase">
              Ayurveda Pharmacy • Classical Formulations
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Sacred Formulations & Classical Elixirs
            </h1>
          </div>

          <p className="text-sm sm:text-base text-brand-sand/90 leading-relaxed max-w-2xl mx-auto font-light">
            Authentic, slow-decocted herbal oils, medicated ghees, and immunity rasayanas hand-compounded strictly according to the Charaka Samhita and Ashtanga Hridaya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-brand-gold-light">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              100% Wildcrafted Botanicals
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              Doctor Prescribed & GMP Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-brand-gold" />
              Zero Synthetic Fragrances or Preservatives
            </span>
          </div>
        </Container>
      </section>

      {/* Main Catalog Section */}
      <Container size="xl" className="pt-10">
        {/* Search, Filter & Controls Toolbar */}
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-card border border-brand-brown-border mb-10 space-y-6">
          {/* Search Bar & Sort Dropdown */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-brown-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by herb (e.g. Saffron, Bhringraj, Ashwagandha)..."
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-brand-brown-border rounded-lg text-sm text-brand-brown placeholder:text-brand-brown-muted focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-brown-muted hover:text-brand-brown"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <label htmlFor="sort-by" className="text-xs font-semibold text-brand-brown-muted uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-brown" />
                Sort By:
              </label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-brand-brown-border rounded-lg px-3 py-2 text-xs font-medium text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green cursor-pointer"
              >
                <option value="featured">Featured Remedies</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="space-y-3 pt-2 border-t border-brand-brown-border/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-brand-green" />
                Category
              </span>
              {(selectedCategory !== "All Remedies" || selectedDosha !== "All Doshas" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("All Remedies");
                    setSelectedDosha("All Doshas");
                    setSearchQuery("");
                  }}
                  className="text-xs text-brand-green hover:underline font-medium"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-green text-white shadow-sm font-semibold"
                        : "bg-white text-brand-brown border border-brand-brown-border hover:border-brand-green/60"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dosha Suitability Filter */}
          <div className="space-y-2 pt-2 border-t border-brand-brown-border/60">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-brand-gold" />
              Dosha Affinity
            </span>
            <div className="flex flex-wrap gap-2">
              {DOSHA_TYPES.map((dosha) => {
                const isSelected = selectedDosha === dosha;
                return (
                  <button
                    key={dosha}
                    onClick={() => setSelectedDosha(dosha)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-brown text-white shadow-sm font-semibold"
                        : "bg-white text-brand-brown border border-brand-brown-border hover:border-brand-brown"
                    }`}
                  >
                    {dosha}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filter Pills */}
        <div className="flex items-center justify-between mb-6 text-xs text-brand-brown-muted">
          <span>
            Showing <strong className="text-brand-brown">{filteredProducts.length}</strong> classical formulations
          </span>
          {selectedCategory !== "All Remedies" && (
            <span className="bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-md font-medium">
              Category: {selectedCategory}
            </span>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-brand-brown-border max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-brown/5 border border-brand-brown-border flex items-center justify-center mx-auto text-brand-gold">
              <Search className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-medium text-brand-brown">
                No Formulations Found
              </h3>
              <p className="text-xs text-brand-brown-muted">
                We couldn&apos;t find any remedies matching your selected filters or keywords.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("All Remedies");
                setSelectedDosha("All Doshas");
                setSearchQuery("");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discountPercent = product.compareAtPrice
                ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
                : 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden border border-brand-brown-border shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative aspect-square w-full bg-white border-b border-brand-brown-border overflow-hidden block"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="bg-brand-brown/85 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {product.doshaSuitability}
                      </span>
                      {discountPercent > 0 && (
                        <span className="bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Weight / Volume pill */}
                    <div className="absolute bottom-3 left-3 pointer-events-none">
                      <span className="bg-white/90 backdrop-blur-md text-brand-brown text-[10px] font-semibold px-2 py-0.5 rounded border border-brand-brown-border/40 shadow-sm">
                        {product.volumeOrWeight}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      {/* Sanskrit Name & Category */}
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-brand-gold-dark font-serif italic font-medium">
                          {product.sanskritName}
                        </span>
                        <span className="text-brand-brown-muted text-[10px] uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>

                      {/* Product Title */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="font-serif text-base font-semibold text-brand-brown group-hover:text-brand-green transition-colors line-clamp-2 block leading-snug"
                      >
                        {product.title}
                      </Link>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-1.5 pt-1">
                        <div className="flex text-brand-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? "fill-brand-gold text-brand-gold"
                                  : "text-neutral-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-brand-brown">
                          {product.rating}
                        </span>
                        <span className="text-[10px] text-brand-brown-muted">
                          ({product.reviewCount})
                        </span>
                      </div>

                      {/* Short Tagline / Key herbs */}
                      <p className="text-xs text-brand-brown-muted line-clamp-2 leading-relaxed pt-1">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Price & Action Button */}
                    <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base font-bold text-brand-brown">
                            ₹{product.price}
                          </span>
                          {product.compareAtPrice && (
                            <span className="text-xs text-brand-brown-muted line-through">
                              ₹{product.compareAtPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-brand-green font-medium">
                          In Stock
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`p-2.5 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none ${
                          addedItemSlug === product.slug
                            ? "bg-brand-green text-white"
                            : "bg-brand-brown/5 text-brand-brown hover:bg-brand-green hover:text-white"
                        }`}
                        title="Add to Cart"
                        aria-label={`Add ${product.title} to cart`}
                      >
                        {addedItemSlug === product.slug ? (
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <ShoppingBag className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Sacred Apothecary Standards Pillar */}
        <div className="mt-20 bg-brand-brown text-white rounded-2xl p-8 sm:p-12 border border-brand-brown-light/40 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <Leaf className="w-96 h-96 -mr-20 -mb-20 text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <Badge variant="gold" size="sm" className="bg-brand-gold/20 text-brand-gold-light border-brand-gold/40">
                Taila Paka Vidhi • Classical Pharmacology
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                How Our Sacred Medicines Are Compounded
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Unlike commercial mass-produced cosmetics that use mineral oils and chemical extracts, Ayur Veda Mantra preparations follow strict classical heating cycles (*Paka Vidhi*). Each formulation is slow-boiled for up to 72 hours in copper and bronze vessels to ensure deep cellular bioavailability.
              </p>
              <div className="pt-2">
                <Button
                  href="/consultation"
                  variant="gold"
                  size="md"
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                >
                  Consult an Ayurvedic Physician
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <h3 className="font-serif font-semibold text-sm text-white">
                  Wildcrafted Herbs
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Roots, barks, and blossoms sustainably harvested during their peak astrological potencies.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <h3 className="font-serif font-semibold text-sm text-white">
                  A2 Gir Cow Ghee
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Cultured Bilona ghee churned from organic grass-fed indigenous Gir cows as a lipid carrier.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <h3 className="font-serif font-semibold text-sm text-white">
                  No Artificial Additives
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Zero parabens, artificial fragrances, synthetic emulsifiers, or animal testing.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <h3 className="font-serif font-semibold text-sm text-white">
                  Physician Tested
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Verified in our Panchakarma treatment center with thousands of clinical patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
