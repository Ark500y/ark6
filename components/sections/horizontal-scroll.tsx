"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const cards = [
  {
    number: "01",
    title: "Editorial Design & Typography",
    category: "Graphic Design",
    description:
      "Crafting bold, typographic compositions with strict spatial grid discipline and luxury contrast.",
    tags: ["Typography", "Layout Rules", "Brand Assets"],
  },
  {
    number: "02",
    title: "High-Performance Web Apps",
    category: "Full-Stack Development",
    description:
      "Engineered with Next.js App Router, SSR, Turbopack, and Tailwind v4 for sub-second load times.",
    tags: ["Next.js", "React 19", "Tailwind v4"],
  },
  {
    number: "03",
    title: "Bilingual UI/UX Architecture",
    category: "Interface Engineering",
    description:
      "Seamless English/Arabic (LTR/RTL) responsive layouts tailored for international KSA & MENA clients.",
    tags: ["UI/UX", "Bilingual", "RTL Layout"],
  },
  {
    number: "04",
    title: "SEO & Digital Strategy",
    category: "Search Performance",
    description:
      "Structured JSON-LD schema markup, canonical mapping, and optimized web vitals for search rankings.",
    tags: ["Schema.org", "SEO", "Open Graph"],
  },
];

export function HorizontalScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-12 pb-12">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
          
          <div className="mb-8">
            <SectionHeading
              eyebrow="ENGINEERING STANDARDS"
              title="CRAFTED WITHOUT COMPROMISE."
              subtitle="Scroll down to explore the core pillars behind every project built by ARK."
            />
          </div>

          <motion.div style={{ x }} className="flex gap-8">
            {cards.map((card) => (
              <div
                key={card.number}
                className="group relative h-[380px] w-[340px] md:w-[420px] shrink-0 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-xl overflow-hidden"
              >
                {/* Glow gradient background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/25 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-[family-name:var(--font-syne)] font-extrabold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                      {card.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                      {card.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-white/60 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
