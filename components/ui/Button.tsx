import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs tracking-wider uppercase px-4 py-2 gap-1.5",
    md: "text-sm tracking-wide px-6 py-3 gap-2",
    lg: "text-base tracking-wide px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-brand-green text-white hover:bg-brand-green-dark shadow-md hover:shadow-lg focus:ring-brand-green active:scale-[0.98]",
    secondary:
      "bg-brand-brown text-white hover:bg-brand-brown-dark shadow-md hover:shadow-lg focus:ring-brand-brown active:scale-[0.98]",
    outline:
      "border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white focus:ring-brand-brown active:scale-[0.98]",
    gold:
      "bg-brand-gold text-white hover:bg-brand-gold-dark shadow-md hover:shadow-lg focus:ring-brand-gold active:scale-[0.98]",
    ghost:
      "text-brand-brown hover:bg-brand-brown/5 hover:text-brand-brown-dark focus:ring-brand-brown",
    link:
      "text-brand-green hover:underline p-0 h-auto font-medium focus:ring-0",
  };

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
