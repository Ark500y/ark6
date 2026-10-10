"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/* ─── Icons ─────────────────────────────────────────────── */
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

/* ─── Categories ────────────────────────────────────────── */
const categories = ["All", "Web Development", "Graphic Design", "Brand Identity", "UI/UX Design"] as const;

/* ─── Image placeholder ─────────────────────────────────── */
function ImagePlaceholder({ number }: { number: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]">
      <span
        className="font-[family-name:var(--font-syne)] font-extrabold text-white/5 select-none leading-none"
        style={{ fontSize: "clamp(5rem, 12vw, 10rem)" }}
        aria-hidden="true"
      >
        {number}
      </span>
    </div>
  );
}

/* ─── Project card ──────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isPlaceholder = project.id.startsWith("placeholder");
  const hasCaseStudy = project.caseStudyUrl && project.caseStudyUrl !== "#";

  const cardContent = (
    <article
      data-cursor="view"
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden h-full",
        "bg-[#111111] border border-white/[0.08]",
        "hover:border-[#D4AF37]/25 transition-all duration-500",
        "cursor-pointer select-none"
      )}
    >
      {/* Image area */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} project preview`}
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 640px"
            priority={index === 0}
          />
        ) : (
          <ImagePlaceholder number={project.number} />
        )}

        {/* Hover overlay with CTA */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-black/0 group-hover:bg-black/55",
            "transition-all duration-500 z-10"
          )}
          aria-hidden="true"
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "bg-[#D4AF37] text-[#050505] text-sm font-semibold",
              "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100",
              "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            )}
          >
            {isPlaceholder ? "Coming Soon" : "View Case Study"}
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
          {project.featured && (
            <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 md:p-8 flex-1">
        {/* Number + category */}
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-syne)] font-bold text-[#D4AF37] text-sm">
            {project.number}
          </span>
          <span className="w-8 h-px bg-white/20" aria-hidden="true" />
          <span className="text-[#A1A1AA] text-xs uppercase tracking-widest">
            {project.category}
          </span>
          <span className="ml-auto text-[#A1A1AA] text-xs">{project.year}</span>
        </div>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-300 text-xl md:text-2xl">
          {project.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[#A1A1AA] text-sm leading-relaxed line-clamp-2">
          {project.excerpt}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (hasCaseStudy) {
    return (
      <Link
        href={project.caseStudyUrl}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-2xl h-full"
        aria-label={`View case study for ${project.title}`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

/* ─── Page ──────────────────────────────────────────────── */
export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505]">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          aria-labelledby="work-page-heading"
          className="relative pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden"
        >
          {/* Gradient radial accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#D4AF37]/[0.06] blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal>
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-5">
                Portfolio
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                id="work-page-heading"
                className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-[1.04] tracking-[-0.03em]"
                style={{ fontSize: "clamp(3rem, 2rem + 5vw, 7rem)" }}
              >
                Selected{" "}
                <span className="text-gradient-gold">Work.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-xl">
                Filter by discipline to explore tailored client projects in Web Development, Brand Identity, and UI/UX.
              </p>
            </Reveal>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-white/10">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                      isActive
                        ? "text-black bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        : "text-white/60 bg-white/[0.04] hover:text-white border border-white/10 hover:border-white/20"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Project grid ─────────────────────────────────── */}
        <section
          aria-label="Projects"
          className="pb-24 md:pb-36"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* CTA below grid */}
            <Reveal delay={100} className="mt-20 md:mt-28 text-center">
              <p className="text-[#A1A1AA] text-sm mb-6">
                Have a project in mind for Q4? Let&apos;s build something great.
              </p>
              <Button
                href="mailto:ark203777@gmail.com"
                variant="gold"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start a project
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
