"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  once?: boolean;
  style?: React.CSSProperties;
}

type ValidTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

export function AnimatedText({
  text,
  className,
  el: Tag = "p",
  once = true,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const Comp = Tag as ValidTag;

  return (
    <div ref={ref} className={className} style={style} aria-label={text}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.03 }}
        aria-hidden
        className="inline-block"
      >
        {text.split(" ").map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.25em] overflow-hidden">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
}
