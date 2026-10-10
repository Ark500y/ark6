import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, eyebrow, className }: SectionHeadingProps) {
  const badgeText = subtitle || eyebrow;
  return (
    <div className={cn("mb-16 md:mb-20 space-y-4", className)}>
      {badgeText && (
        <Reveal delay={0} duration="normal">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
              {badgeText}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal delay={100} duration="large">
        <h2
          className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 2rem + 2.5vw, 4.5rem)" }}
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-[0.3em] last:mr-0">
              {word}
            </span>
          ))}
        </h2>
      </Reveal>
    </div>
  );
}
