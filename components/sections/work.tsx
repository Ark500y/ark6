"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

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
  const featuredProjects = projects.filter((p) => p.featured);
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isReducedMotion = Boolean(shouldReduceMotion);

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

        {/* Featured Projects List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {featuredProjects.map((project) => {
            const destinationUrl = project.caseStudyUrl || project.liveUrl;
            const isExternal = !project.caseStudyUrl && Boolean(project.liveUrl);

            return (
              <Reveal key={project.id} delay={100} duration="large" className="w-full">
                <article 
                  className="group relative flex flex-col gap-8 w-full"
                  data-cursor="view"
                >
                  {/* Image Container with Reveal & Parallax */}
                  <a
                    href={destinationUrl}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#111111] border border-white/5 group-hover:border-[#D4AF37]/25 transition-colors duration-700 isolate shadow-[0_0_0_0_rgba(212,175,55,0)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] block cursor-pointer"
                    aria-label={`Open ${project.title}`}
                  >
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                    
                    <motion.div style={{ y: isReducedMotion ? 0 : y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 1280px"
                      />
                    </motion.div>
                  </a>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Meta Info */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[#D4AF37] font-[family-name:var(--font-syne)] text-xl font-bold">
                          {project.number}
                        </span>
                        <span className="w-12 h-px bg-white/20" />
                        <span className="text-white/60 text-sm uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description & Services */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      <p className="text-[#A1A1AA] leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.servicesProvided?.map((service) => (
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
                      {project.liveUrl && (
                        <Button 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          variant="gold"
                          className="w-full sm:w-auto lg:w-full justify-between group/btn"
                        >
                          View Live Site
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </Button>
                      )}
                      {project.caseStudyUrl && (
                        <Button 
                          href={project.caseStudyUrl}
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
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <Button 
            href="/work" 
            variant="outline" 
            size="lg" 
            className="border-white/20 hover:border-[#D4AF37]/50 text-white hover:text-[#D4AF37] group/cta"
          >
            Explore All Projects
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/cta:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
