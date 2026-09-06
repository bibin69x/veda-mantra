"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, Product } from "@/data/products";
import { ShoppingBag, Star, Check, ArrowRight } from "lucide-react";
import { formatINR } from "@/lib/utils";

export function FeaturedProductsSection() {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddToCart = (id: string) => {
    setAddedIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-brown-border">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            sanskritSubtitle="शुद्ध आयुर्वेदिक औषध एवं रसायन"
            tagline="Medicinal Formulations"
            title="Handcrafted Ayurvedic Remedies"
            description="Proprietary herbal formulations, classical oils, and rejuvenating rasayanas cooked slowly over wood fires in sacred copper and clay cauldrons."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Link
            href="/products"
            className="mt-6 md:mt-0 text-sm font-medium text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1.5 underline-offset-4 hover:underline shrink-0"
          >
            <span>Explore All Formulations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.map((product: Product) => {
            const isAdded = addedIds[product.id];
            return (
              <div
                key={product.id}
                className="group bg-white rounded-sm border border-brand-brown-border shadow-card-soft overflow-hidden transition-all duration-300 hover:shadow-luxury hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-white border-b border-brand-brown-border p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dosha & Category Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <Badge variant="gold" size="sm">
                        {product.doshaSuitability} Dosha
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/95 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-brand-brown shadow-sm backdrop-blur-sm">
                      {product.volumeOrWeight}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs">
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-current"
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-brand-brown">{product.rating}</span>
                      <span className="text-brand-brown-muted">({product.reviewCount})</span>
                    </div>

                    <div>
                      {product.sanskritName && (
                        <p className="text-[11px] font-serif italic text-brand-green">
                          {product.sanskritName}
                        </p>
                      )}
                      <h3 className="font-serif text-base text-brand-brown font-medium group-hover:text-brand-green transition-colors line-clamp-1">
                        <Link href={`/products/${product.slug}`}>
                          {product.title}
                        </Link>
                      </h3>
                    </div>

                    <p className="text-xs text-brand-brown-muted leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 pt-2 border-t border-brand-brown-border/60">
                      <span className="text-lg font-serif font-bold text-brand-brown">
                        {formatINR(product.price)}
                      </span>
                      {product.compareAtPrice && (
                        <span className="text-xs text-brand-brown-muted line-through">
                          {formatINR(product.compareAtPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0">
                  <Button
                    onClick={() => handleAddToCart(product.id)}
                    variant={isAdded ? "gold" : "primary"}
                    size="sm"
                    className="w-full justify-center transition-all"
                    leftIcon={
                      isAdded ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <ShoppingBag className="w-3.5 h-3.5" />
                      )
                    }
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
