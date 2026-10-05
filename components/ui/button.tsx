"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "default";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  /** Optional SVG / icon node rendered after the label */
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-semibold overflow-hidden transition-all duration-300 select-none rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-50 disabled:pointer-events-none group active:scale-[0.97]";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-white text-black hover:bg-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    default:
      "bg-[#050505] text-white border border-white/10 hover:border-white/30 hover:bg-[#0A0A0A]",
    gold:
      "bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#050505] shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_45px_rgba(212,175,55,0.5)] hover:brightness-110",
    secondary:
      "bg-[#111111] text-white border border-white/10 hover:border-white/20 hover:bg-[#181818]",
    outline:
      "bg-transparent text-white border border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/[0.06]",
    ghost:
      "bg-transparent text-[#A1A1AA] hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-[0.9375rem] px-7 py-3.5 gap-2.5",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {/* Arrow micro-interaction on hover */}
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {inner}
    </button>
  );
}
