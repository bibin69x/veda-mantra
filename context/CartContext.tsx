"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant } from "@/data/products";

export interface CartItem {
  id: string; // unique item id: e.g. `${product.id}-${volumeOrWeight}`
  productId: string;
  slug: string;
  title: string;
  sanskritName?: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  volumeOrWeight: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  shippingFee: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  freeShippingProgress: number;
  discountCode: string | null;
  discountAmount: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number, selectedVariant?: ProductVariant) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  applyDiscount: (code: string) => { success: boolean; message: string };
  removeDiscount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 99;
const STORAGE_KEY = "ayur_veda_mantra_cart_v1";
const DISCOUNT_STORAGE_KEY = "ayur_veda_mantra_cart_discount_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedDiscount = localStorage.getItem(DISCOUNT_STORAGE_KEY);
      if (savedDiscount) {
        const parsed = JSON.parse(savedDiscount);
        setDiscountCode(parsed.code);
        setDiscountPercent(parsed.percent);
      }
    } catch (e) {
      console.error("Failed to hydrate cart from localStorage:", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      if (discountCode) {
        localStorage.setItem(
          DISCOUNT_STORAGE_KEY,
          JSON.stringify({ code: discountCode, percent: discountPercent })
        );
      } else {
        localStorage.removeItem(DISCOUNT_STORAGE_KEY);
      }
    } catch (e) {
      console.error("Failed to save cart to localStorage:", e);
    }
  }, [items, discountCode, discountPercent, isHydrated]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addItem = (
    product: Product,
    quantity: number = 1,
    selectedVariant?: ProductVariant
  ) => {
    const volumeOrWeight = selectedVariant ? selectedVariant.volumeOrWeight : product.volumeOrWeight;
    const price = selectedVariant ? selectedVariant.price : product.price;
    const compareAtPrice = selectedVariant ? selectedVariant.compareAtPrice : product.compareAtPrice;
    const cartItemId = `${product.id}-${volumeOrWeight.replace(/\s+/g, "")}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: cartItemId,
          productId: product.id,
          slug: product.slug,
          title: product.title,
          sanskritName: product.sanskritName,
          category: product.category,
          price: price,
          compareAtPrice: compareAtPrice,
          volumeOrWeight: volumeOrWeight,
          image: product.image,
          quantity: quantity,
        };
        return [...prevItems, newItem];
      }
    });

    // Automatically open drawer to confirm item was added
    setIsCartOpen(true);
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode(null);
    setDiscountPercent(0);
  };

  const applyDiscount = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === "VEDA10" || trimmed === "AYUR10") {
      setDiscountCode(trimmed);
      setDiscountPercent(10);
      return { success: true, message: "10% Vedic Blessing discount applied!" };
    }
    if (trimmed === "VEDA15" || trimmed === "NAMASTE15") {
      setDiscountCode(trimmed);
      setDiscountPercent(15);
      return { success: true, message: "15% Special Practitioner discount applied!" };
    }
    return { success: false, message: "Invalid promo code. Try 'VEDA10' for 10% off." };
  };

  const removeDiscount = () => {
    setDiscountCode(null);
    setDiscountPercent(0);
  };

  // Computations
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        subtotal,
        shippingFee,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingRemaining,
        freeShippingProgress,
        discountCode,
        discountAmount,
        total,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        applyDiscount,
        removeDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
