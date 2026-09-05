import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { MedicalBusinessJsonLd } from "@/components/seo/JsonLd";
import { Analytics, GTMNoscript } from "@/components/seo/Analytics";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2B241E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayurvedamantra.com"),
  title: {
    default: "Ayur Veda Mantra — Ayurveda Panchakarma Treatment & Research Centre",
    template: "%s | Ayur Veda Mantra",
  },
  description:
    "Experience authentic, classical Ayurvedic therapies, Panchakarma detoxification, Nadi Pariksha pulse diagnosis, and pure herbal remedies at Ayur Veda Mantra.",
  keywords: [
    "Ayurveda",
    "Panchakarma",
    "Abhyanga",
    "Shirodhara",
    "Kizhi",
    "Ayurvedic Doctor Consultation",
    "Nadi Pariksha",
    "Herbal Medicines",
    "Dr. Anupama Ramachandran",
    "Ayur Veda Mantra",
  ],
  authors: [{ name: "Ayur Veda Mantra" }],
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  openGraph: {
    title: "Ayur Veda Mantra — Luxury Ayurvedic Healing & Research Centre",
    description:
      "Classical Ayurvedic therapies, Panchakarma detox, and authentic herbal formulations prescribed by certified Vaidyas.",
    url: "https://ayurvedamantra.com",
    siteName: "Ayur Veda Mantra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ayur Veda Mantra Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <MedicalBusinessJsonLd />
        <Analytics />
      </head>
      <body className="flex min-h-screen flex-col bg-brand-cream text-brand-brown font-sans antialiased selection:bg-brand-green selection:text-white">
        <GTMNoscript />
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

