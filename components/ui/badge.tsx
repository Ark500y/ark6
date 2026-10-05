import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "outline" | "status";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  children,
  className,
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase transition-colors";

  const variants = {
    default:
      "bg-white/[0.04] text-neutral-300 border border-white/10",
    gold:
      "bg-[#D4AF37]/10 text-[#F4D06F] border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.12)]",
    outline:
      "bg-transparent text-neutral-400 border border-white/10",
    status:
      "bg-[#0A0A0A] text-emerald-400 border border-emerald-500/20 font-mono lowercase tracking-normal text-[11px]",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {variant === "status" && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {children}
    </span>
  );
}
