import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "green" | "gold" | "brown" | "outline" | "sanskrit";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "green",
  size = "md",
  ...props
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 tracking-widest uppercase font-semibold",
    md: "text-xs px-3 py-1 tracking-wider uppercase font-medium",
  };

  const variantStyles = {
    green: "bg-brand-green/10 text-brand-green border border-brand-green/20",
    gold: "bg-brand-gold/15 text-brand-gold-dark border border-brand-gold/30",
    brown: "bg-brand-brown text-white",
    outline: "border border-brand-brown/30 text-brand-brown",
    sanskrit: "bg-brand-sand text-brand-brown-muted italic font-serif tracking-normal lowercase",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
