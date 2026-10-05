"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function WorkSection() {
  const featuredProject = projects[0]; // Mian Saqib
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="work"
      ref={containerRef}
      aria-labelledby="work-heading"
      className="relative py-28 md:py-40 bg-[#050505]"
    >
      <div className="absolute top-0 left-5 right-5 md:left-8 md:right-8 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading 
          title="Selected Work." 
          subtitle="Featured" 
          className="mb-16 md:mb-24"
        />

        {/* Featured Project */}
        <Reveal delay={100} duration="large" className="w-full">
          <article 
            className="group relative flex flex-col gap-8 w-full"
            data-cursor="view"
          >
            {/* Image Container with Reveal & Parallax */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#111111] border border-white/5 group-hover:border-[#D4AF37]/25 transition-colors duration-700 isolate shadow-[0_0_0_0_rgba(212,175,55,0)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] ">
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              
              <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  fill
                  className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority
                />
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Meta Info */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] font-[family-name:var(--font-syne)] text-xl font-bold">
                    {featuredProject.number}
                  </span>
                  <span className="w-12 h-px bg-white/20" />
                  <span className="text-white/60 text-sm uppercase tracking-widest">
                    {featuredProject.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold text-white">
                  {featuredProject.title}
                </h3>
              </div>

              {/* Description & Services */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="text-[#A1A1AA] leading-relaxed text-base md:text-lg">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.servicesProvided?.map((service) => (
                    <span 
                      key={service} 
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-end lg:items-end gap-4">
                {featuredProject.liveUrl && (
                  <Button 
                    href={featuredProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="gold"
                    className="w-full sm:w-auto lg:w-full justify-between group/btn"
                  >
                    View Live Site
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                )}
                {featuredProject.caseStudyUrl && (
                  <Button 
                    href={featuredProject.caseStudyUrl}
                    variant="outline"
                    className="w-full sm:w-auto lg:w-full justify-between group/btn border-white/20 hover:border-white/40"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                )}
              </div>

            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
