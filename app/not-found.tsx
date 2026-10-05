"use client";

import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#050505] flex flex-col items-center justify-center px-5 text-center relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.05] blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6">
        <Reveal delay={0} duration="large">
          <h1
            className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(6rem, 5rem + 10vw, 12rem)" }}
          >
            404
          </h1>
        </Reveal>

        <Reveal delay={100} duration="normal">
          <p className="text-[#A1A1AA] max-w-md mx-auto text-lg">
            The page you are looking for doesn&rsquo;t exist, has been moved, or is currently unavailable.
          </p>
        </Reveal>

        <Reveal delay={200} duration="normal">
          <div className="pt-4">
            <Button href="/" variant="gold" size="lg">
              Return Home
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
