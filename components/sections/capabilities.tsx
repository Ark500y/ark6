"use client";

import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { Palette, Code2, Layout, Sparkles, Smartphone, ShieldCheck } from "lucide-react";

const bentoItems = [
  {
    icon: <Palette className="w-8 h-8 text-[#D4AF37]" />,
    title: "Brand Identity Design",
    desc: "Bespoke visual identity systems, vector logos, typography rules, and luxury brand guidelines.",
    colSpan: "lg:col-span-8",
    bgAccent: "bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent",
  },
  {
    icon: <Code2 className="w-8 h-8 text-[#D4AF37]" />,
    title: "Full-Stack Web Dev",
    desc: "Next.js 16, React 19, TypeScript, and Tailwind CSS v4 engineered for sub-second page loads.",
    colSpan: "lg:col-span-4",
    bgAccent: "bg-white/[0.02]",
  },
  {
    icon: <Layout className="w-8 h-8 text-[#D4AF37]" />,
    title: "UI/UX & Prototyping",
    desc: "Figma design systems, micro-interactions, responsive grid architecture, and high-conversion UX flows.",
    colSpan: "lg:col-span-4",
    bgAccent: "bg-white/[0.02]",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#D4AF37]" />,
    title: "Bilingual LTR/RTL Layouts",
    desc: "Native English & Arabic web applications crafted for Saudi Arabia, UAE, and international markets.",
    colSpan: "lg:col-span-8",
    bgAccent: "bg-gradient-to-bl from-[#D4AF37]/10 via-transparent to-transparent",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#D4AF37]" />,
    title: "AI Website Development",
    desc: "Smart AI integrations, custom generative UI widgets, automated contact routes, and Web3Forms.",
    colSpan: "lg:col-span-6",
    bgAccent: "bg-white/[0.02]",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
    title: "SEO & Web Performance",
    desc: "Schema.org structured JSON-LD data, canonical mapping, and 100% Lighthouse scores.",
    colSpan: "lg:col-span-6",
    bgAccent: "bg-white/[0.02]",
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative py-28 md:py-36 bg-[#050505]"
    >
      <div className="absolute top-0 left-5 right-5 md:left-8 md:right-8 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-16">
          <SectionHeading
            eyebrow="SPECIALIZATIONS"
            title="THE BENTO MATRIX."
            subtitle="Explore the core capabilities of ARK — bridging luxury design with modern web engineering."
          />
        </div>

        {/* Bento 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item, index) => (
            <div key={item.title} className={`${item.colSpan}`}>
              <Reveal delay={index * 80} duration="normal">
                <TiltCard className="h-full">
                  <div
                    className={`h-full relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-[#D4AF37]/60 transition-colors duration-500 overflow-hidden group shadow-2xl ${item.bgAccent}`}
                  >
                    {/* Hover Glow Accent */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/25 transition-all pointer-events-none" />

                    <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
                          0{index + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#A1A1AA] font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
