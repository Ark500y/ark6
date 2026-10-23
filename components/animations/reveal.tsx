"use client";

import React, { useRef, useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: "fast" | "normal" | "large";
  /** y-axis slide distance (px). Default 24. */
  distance?: number;
  className?: string;
}

const durationMap = {
  fast: "300ms",
  normal: "600ms",
  large: "900ms",
};

export function Reveal({
  children,
  delay = 0,
  duration = "normal",
  distance = 24,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : `translateY(${distance}px)`,
        transitionDuration: durationMap[duration],
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
