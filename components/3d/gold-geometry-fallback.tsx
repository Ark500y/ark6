// components/3d/gold-geometry-fallback.tsx
// Static SVG fallback — shown on mobile, low-power, no-WebGL, or SSR
"use client";

import React from "react";
import { motion } from "framer-motion";

export function GoldGeometryFallback({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer triangle */}
        <polygon
          points="100,12 188,156 12,156"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Inner triangle (inverted) */}
        <polygon
          points="100,188 12,44 188,44"
          stroke="#F4D06F"
          strokeWidth="1"
          fill="none"
          opacity="0.35"
        />
        {/* Diamond */}
        <polygon
          points="100,30 170,100 100,170 30,100"
          stroke="#D4AF37"
          strokeWidth="1"
          fill="rgba(212,175,55,0.04)"
          opacity="0.5"
        />
        {/* Center dot */}
        <circle cx="100" cy="100" r="3" fill="#F4D06F" opacity="0.8" />

        {/* Corner dots */}
        <circle cx="100" cy="12" r="2" fill="#D4AF37" opacity="0.6" />
        <circle cx="188" cy="156" r="2" fill="#D4AF37" opacity="0.6" />
        <circle cx="12" cy="156" r="2" fill="#D4AF37" opacity="0.6" />
      </motion.svg>
    </div>
  );
}
