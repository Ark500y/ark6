import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function CTABand() {
  return (
    <section className="relative py-24 bg-[#D4AF37] overflow-hidden">
      {/* Texture / Noise overlay to blend with the dark theme */}
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal delay={0} duration="normal" className="flex-1 text-center md:text-left">
            <h2 
              className="font-[family-name:var(--font-syne)] font-extrabold text-[#050505] leading-tight"
              style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 4rem)" }}
            >
              Have a project in mind?
              <br />
              Let&rsquo;s create something exceptional.
            </h2>
          </Reveal>
          
          <Reveal delay={100} duration="normal">
            <Button 
              href="mailto:ark203777@gmail.com" 
              variant="default"
              size="lg" 
              className="bg-[#050505] text-white hover:bg-[#111111] hover:shadow-xl border-none whitespace-nowrap"
            >
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
