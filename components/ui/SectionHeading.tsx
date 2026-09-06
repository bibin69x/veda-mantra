import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  sanskritSubtitle?: string;
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  sanskritSubtitle,
  tagline,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={cn("max-w-3xl flex flex-col mb-12 sm:mb-16", alignClasses[align], className)}>
      {sanskritSubtitle && (
        <span
          className={cn(
            "text-xs sm:text-sm font-serif italic mb-2 tracking-widest uppercase",
            isDark ? "text-brand-gold-light" : "text-brand-green"
          )}
        >
          {sanskritSubtitle}
        </span>
      )}
      {tagline && (
        <span
          className={cn(
            "text-[11px] font-semibold tracking-widest-luxury uppercase mb-3 px-3 py-1 rounded-full",
            isDark
              ? "bg-white/10 text-brand-gold-light"
              : "bg-brand-brown/5 border border-brand-brown-border/60 text-brand-brown-muted"
          )}
        >
          {tagline}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight leading-tight",
          isDark ? "text-white" : "text-brand-brown"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-12 h-0.5 my-4",
          isDark ? "bg-brand-gold" : "bg-brand-green"
        )}
      />
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed font-light mt-1",
            isDark ? "text-white/80" : "text-brand-brown-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
