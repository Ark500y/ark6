"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandData } from "@/data/brand";
import { cn } from "@/lib/utils";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function CapabilitiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fallback to these 6 services if brandData doesn't have exactly 6
  const servicesList = brandData.focus.length >= 6 
    ? brandData.focus.slice(0, 6)
    : [
        "Brand Identity Design",
        "UI/UX Design",
        "Web Development",
        "E-Commerce Solutions",
        "Framer & Webflow",
        "AI Website Development"
      ];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative py-28 md:py-40 bg-[#0A0A0A]"
    >
      <div className="absolute top-0 left-5 right-5 md:left-8 md:right-8 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Header Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionHeading 
                title="Capabilities." 
                subtitle="Expertise" 
                className="mb-8" 
              />
              <Reveal delay={200} duration="normal">
                <p className="text-[#A1A1AA] leading-relaxed max-w-md">
                  Delivering end-to-end digital solutions. From the initial brand concept to a fully engineered, high-performance web experience.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Numbered List Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col border-t border-white/10">
              {servicesList.map((service, index) => (
                <Reveal key={service} delay={index * 50} duration="normal">
                  <div
                    className="group relative flex items-center justify-between py-8 md:py-10 border-b border-white/10 cursor-pointer overflow-hidden transition-colors duration-500 hover:border-white/30"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Hover Background Sweep */}
                    <div 
                      className={cn(
                        "absolute inset-0 bg-white/5 translate-y-[100%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        hoveredIndex === index && "translate-y-0"
                      )} 
                    />
                    
                    <div className="relative z-10 flex items-center gap-6 md:gap-12">
                      <span className="text-[#D4AF37] font-[family-name:var(--font-syne)] text-sm md:text-base font-bold tracking-widest">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-[family-name:var(--font-syne)] font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                        {service}
                      </h3>
                    </div>

                    <div className="relative z-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#050505] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
