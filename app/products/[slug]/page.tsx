import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found — Ayur Veda Mantra",
    };
  }

  return {
    title: `${product.title} (${product.sanskritName}) — Classical Ayurvedic Pharmacy | Ayur Veda Mantra`,
    description: product.tagline || product.description,
    keywords: [
      product.title,
      product.sanskritName,
      product.category,
      product.doshaSuitability,
      ...product.keyIngredients,
      "Ayurvedic Medicine",
      "Panchakarma Pharmacy",
    ],
    openGraph: {
      title: `${product.title} — Ayur Veda Mantra`,
      description: product.tagline,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
