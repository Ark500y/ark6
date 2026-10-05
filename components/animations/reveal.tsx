"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: "fast" | "normal" | "large";
  /** y-axis slide distance (px). Default 24. */
  distance?: number;
  className?: string;
}

const durationMap = {
  fast: 0.25,
  normal: 0.6,
  large: 0.9,
};

export function Reveal({
  children,
  delay = 0,
  duration = "normal",
  distance = 24,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        delay: delay / 1000,
        duration: durationMap[duration],
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
