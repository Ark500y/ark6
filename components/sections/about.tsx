import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandData } from "@/data/brand";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-28 md:py-40 bg-[#050505]">
      {/* Subtle separator */}
      <div className="absolute top-0 left-5 right-5 md:left-8 md:right-8 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading 
          title="I design. I build." 
          subtitle="About" 
          className="mb-16 md:mb-24" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
            <Reveal delay={100} duration="large" className="w-full h-full relative">
              <div className="absolute inset-0 bg-[#0A0A0A]/20 z-10 mix-blend-overlay" />
              <Image
                src="/images/abdul-rehman.png"
                alt="Abdul Rehman portrait"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 border border-white/5 rounded-2xl z-20 pointer-events-none" />
            </Reveal>
          </div>

          {/* Right Column: Copy & Capabilities */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            <Reveal delay={200} duration="normal">
              <div className="space-y-6 text-[#A1A1AA] text-lg md:text-xl font-light leading-relaxed font-[family-name:var(--font-instrument)]">
                <p>
                  I am a digital artisan bridging the gap between aesthetics and engineering. Based in Sargodha, Pakistan, I specialize in crafting digital experiences that feel intuitive, perform flawlessly, and look uncompromisingly premium.
                </p>
                <p>
                  With a deep focus on <strong className="text-white font-medium">brand identity, user interface design, and front-end development</strong>, I don't just create websites—I build digital products designed to scale and communicate your core value seamlessly.
                </p>
              </div>
            </Reveal>

            {/* Capability Statements */}
            <Reveal delay={300} duration="normal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <h3 className="text-white font-[family-name:var(--font-syne)] font-bold text-lg">Visual Identity</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Crafting memorable brand identities that resonate with your target audience through meticulous typography, color theory, and bespoke assets.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-[family-name:var(--font-syne)] font-bold text-lg">UI/UX Design</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Designing intuitive, user-centric interfaces. Every layout is purpose-driven, ensuring accessible and engaging journeys.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-[family-name:var(--font-syne)] font-bold text-lg">Web Engineering</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Translating high-fidelity designs into robust, performant code using Next.js, React, and modern CSS architectures.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-[family-name:var(--font-syne)] font-bold text-lg">Digital Motion</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    Elevating static interfaces with purposeful animations using Framer Motion and GSAP, bringing interactions to life.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
