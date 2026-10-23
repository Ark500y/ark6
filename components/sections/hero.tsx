"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import dynamic from "next/dynamic";

const GoldGeometry = dynamic(
  () => import("@/components/3d/gold-geometry").then((m) => m.GoldGeometry),
  { ssr: false }
);

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

// ─── Staggered word reveal ────────────────────────────────────────────────────


// ─── Hero line component (Hardware-accelerated CSS animation) ────────────────
function HeroLine({
  text,
  delay = 0,
  className,
  style,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <span
        className={`block hero-slide-up ${className ?? ""}`}
        style={{
          ...style,
          animationDelay: `${delay}s`,
        }}
      >
        {text}
      </span>
    </div>
  );
}

// ─── Main Hero Section ────────────────────────────────────────────────────────
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDesktop(true);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#050505] pt-24 pb-12"
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* ── Ambient glow ── */}
      <div
        className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-80"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

          {/* ── Left — Typography ── */}
          <div className="lg:col-span-7 flex flex-col space-y-10 order-2 lg:order-1 lg:pr-12">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 hero-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="block w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em]">
                Abdul Rehman — Based in Pakistan
              </span>
            </div>

            {/* Headline — staggered line entrances */}
            <h1
              className="font-[family-name:var(--font-syne)] font-extrabold leading-[0.88] tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 8.5vw, 8.5rem)" }}
              aria-label="Design Digital Experiences"
            >
              <HeroLine
                text="DESIGN"
                delay={0.2}
                className="text-white"
              />
              <HeroLine
                text="DIGITAL"
                delay={0.32}
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(212,175,55,0.7)",
                }}
              />
              <HeroLine
                text="EXPERIENCES"
                delay={0.44}
                className="text-gradient-gold"
              />
            </h1>

            {/* Supporting copy */}
            <p
              className="text-[#A1A1AA] max-w-md leading-relaxed hero-fade-in"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.125rem)", animationDelay: "0.45s" }}
            >
              I craft premium brand identities and high-performance web experiences.
              Strategic design meets modern engineering — built to convert, built to last.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-wrap items-center gap-4 hero-fade-in"
              style={{ animationDelay: "0.55s" }}
            >
              <Button href="#work" variant="gold" size="lg" className="group/cta">
                <span className="relative inline-block overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover/cta:-translate-y-[110%]">
                    View My Work
                  </span>
                  <span className="absolute inset-0 block translate-y-[110%] transition-transform duration-300 group-hover/cta:translate-y-0">
                    View My Work
                  </span>
                </span>
              </Button>

              <MagneticButton
                href="mailto:ark203777@gmail.com"
                className="group/talk relative px-6 py-3 rounded-full text-white font-medium border border-white/15 hover:border-[#D4AF37]/60 transition-colors duration-400"
              >
                <span className="relative z-10">Let&rsquo;s Talk</span>
                {/* Background fill on hover */}
                <span className="absolute inset-0 rounded-full bg-[#D4AF37]/0 group-hover/talk:bg-[#D4AF37]/8 transition-colors duration-400" />
                {/* Animated underline */}
                <span className="absolute bottom-2 left-6 right-6 h-px bg-[#D4AF37] scale-x-0 group-hover/talk:scale-x-100 transition-transform duration-400 origin-left" />
              </MagneticButton>
            </div>

            {/* Stats row — capability statements only, no fake numbers */}
            <div
              className="flex flex-wrap gap-6 pt-2 border-t border-white/8 hero-fade-in"
              style={{ animationDelay: "0.65s" }}
            >
              {["Graphic Design", "UI/UX", "Next.js", "Brand Identity"].map((tag) => (
                <span key={tag} className="text-xs text-white/40 uppercase tracking-widest font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right — Portrait + 3D ── */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* 3D Geometry — floats above portrait (desktop only) */}
              {isDesktop && (
                <div className="absolute -top-20 -right-10 w-56 h-56 z-30 hidden md:block">
                  <GoldGeometry className="w-full h-full" />
                </div>
              )}

              {/* Portrait container */}
              <div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/8 bg-[#0A0A0A] group/portrait"
              >
                {/* Portrait image with zoom on hover */}
                <Image
                  src="/images/abdul-rehman.png"
                  alt="Abdul Rehman — Graphic Designer & Web Developer"
                  fill
                  priority
                  fetchPriority="high"
                  decoding="async"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover/portrait:scale-105"
                  sizes="(max-width: 640px) 350px, (max-width: 1024px) 384px, 448px"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/10 to-transparent z-10 pointer-events-none" />

                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 z-20 pointer-events-none shadow-[inset_0_0_0_1px_rgba(212,175,55,0.4),0_0_40px_rgba(212,175,55,0.12)]" />

                {/* Status badge */}
                <div className="absolute bottom-5 left-5 z-20">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0A0A0A]/95 rounded-full border border-white/10 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </span>
                    <span className="text-[10px] text-white/80 font-medium tracking-[0.15em] uppercase">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Corner geometric accent */}
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M32 0L32 32L0 32" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Name card below portrait */}
              <div
                className="mt-4 flex items-center justify-between hero-fade-in"
                style={{ animationDelay: "0.45s" }}
              >
                <div>
                  <p className="text-white font-[family-name:var(--font-syne)] font-bold text-base">
                    Abdul Rehman
                  </p>
                  <p className="text-[#A1A1AA] text-xs tracking-wide">
                    Graphic Designer &amp; Web Developer
                  </p>
                </div>
                <span className="text-[#D4AF37] font-[family-name:var(--font-syne)] font-extrabold text-2xl tracking-tight">
                  ARK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hero-fade-in"
        style={{ animationDelay: "0.75s" }}
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="group flex flex-col items-center gap-2 text-white/30 hover:text-[#D4AF37] transition-colors duration-300"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
