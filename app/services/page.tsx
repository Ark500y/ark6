"use client";

import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "Brand Identity Design",
    description:
      "Building visual identities that give brands distinctive character — logo suites, color systems, typography, and brand guidelines.",
    deliverables: ["Logo & Monogram Design", "Color System", "Typography System", "Brand Guidelines PDF", "Icon Sets"],
    process: ["Research", "Concept", "Refine", "Deliver"],
    align: "left",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Designing user interfaces that convert and retain — information architecture, wireframes, high-fidelity prototypes, and design systems.",
    deliverables: ["User Research", "Wireframes", "High-Fidelity Mockups", "Design System", "Prototype"],
    process: ["Audit", "Architecture", "Design", "Test"],
    align: "right",
  },
  {
    id: "03",
    title: "Web Development",
    description:
      "Engineering performant, accessible, and maintainable websites with Next.js, TypeScript, and Tailwind CSS.",
    deliverables: ["Custom Next.js Site", "Responsive Design", "Performance Optimization", "Accessibility Audit", "CMS Integration"],
    process: ["Plan", "Build", "Test", "Deploy"],
    align: "left",
  },
  {
    id: "04",
    title: "E-Commerce Solutions",
    description:
      "Building conversion-optimized online stores — product pages, cart flows, checkout optimization, and bilingual support.",
    deliverables: ["Product Catalog", "Cart & Checkout", "Payment Integration", "Mobile Optimization", "Analytics Setup"],
    process: ["Map", "Design", "Build", "Launch"],
    align: "right",
  },
  {
    id: "05",
    title: "Framer & Webflow",
    description:
      "No-code premium site builds using Framer or Webflow — fast, editable, and production-ready.",
    deliverables: ["Custom Framer/Webflow Site", "CMS Setup", "Animations", "Client Training", "Ongoing Support"],
    process: ["Brief", "Design", "Build", "Hand Off"],
    align: "left",
  },
  {
    id: "06",
    title: "AI Website Development",
    description:
      "Leveraging AI-accelerated workflows to build modern, adaptive digital platforms at pace without sacrificing quality.",
    deliverables: ["AI-Assisted Design System", "Rapid Prototype", "Custom Integrations", "Dynamic Content", "Scalable Architecture"],
    process: ["Define", "Accelerate", "Refine", "Ship"],
    align: "right",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#050505] min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            title="What I do best."
            subtitle="Services"
            className="mb-20"
          />

          <div className="space-y-32">
            {services.map((service, idx) => (
              <section
                key={service.id}
                className="group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 border-b border-white/10 pb-32 transition-colors duration-500 hover:border-[#D4AF37]/30"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Content */}
                <div
                  className={`flex-1 w-full flex flex-col space-y-8 ${
                    service.align === "right" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal delay={0}>
                    <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold text-white group-hover:text-gradient-gold transition-colors duration-500">
                      {service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="text-[#A1A1AA] text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </Reveal>

                  <Reveal delay={200}>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                        Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((item) => (
                          <span
                            key={item}
                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={300}>
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                        Process
                      </h4>
                      <div className="flex items-center gap-4 text-xs md:text-sm font-medium text-white/60">
                        {service.process.map((step, i) => (
                          <React.Fragment key={step}>
                            <span>{step}</span>
                            {i < service.process.length - 1 && (
                              <span className="text-[#D4AF37]">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Visual */}
                <div
                  className={`flex-1 w-full flex justify-center items-center ${
                    service.align === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={400} className="relative">
                    <div className="text-[12rem] md:text-[18rem] leading-none font-[family-name:var(--font-syne)] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37]/20 to-transparent group-hover:from-[#D4AF37]/40 transition-all duration-700">
                      {service.id}
                    </div>
                    {/* Accent geometric shape */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                      <svg width="200" height="200" viewBox="0 0 100 100">
                        {idx % 2 === 0 ? (
                          <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="2" fill="none" />
                        ) : (
                          <rect x="20" y="20" width="60" height="60" stroke="#D4AF37" strokeWidth="2" fill="none" transform="rotate(45 50 50)" />
                        )}
                      </svg>
                    </div>
                  </Reveal>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Reveal delay={0}>
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold mb-8">
                Ready to start your project?
              </h2>
              <Button href="/#contact" variant="gold" size="lg">
                Let&apos;s Work Together
              </Button>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
