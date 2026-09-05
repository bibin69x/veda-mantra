import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
  bg?: "white" | "cream" | "dark";
}

export function Card({
  children,
  className,
  hoverEffect = true,
  bordered = true,
  bg = "white",
  ...props
}: CardProps) {
  const bgStyles = {
    white: "bg-white text-brand-brown",
    cream: "bg-brand-cream text-brand-brown",
    dark: "bg-brand-brown text-brand-cream border-brand-brown-light",
  };

  return (
    <div
      className={cn(
        "rounded-sm overflow-hidden transition-all duration-300",
        bgStyles[bg],
        bordered && bg !== "dark" && "border border-brand-brown-border",
        bordered && bg === "dark" && "border border-brand-brown-light/40",
        hoverEffect && "hover:shadow-luxury hover:-translate-y-1 hover:border-brand-gold/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
