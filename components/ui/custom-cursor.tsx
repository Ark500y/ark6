"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const cursorX = useSpring(0, { stiffness: 400, damping: 28, mass: 0.2 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28, mass: 0.2 });

  useEffect(() => {
    // Detect touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up tree for interactive elements
      const link = target.closest("a, button, input, select, textarea");
      const projectCard = target.closest("[data-cursor='view']");
      
      if (projectCard) {
        setIsHovering(true);
        setHoverText("VIEW");
      } else if (link) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* The main ring */}
      <motion.div
        animate={{
          width: isHovering ? (hoverText ? 60 : 40) : 16,
          height: isHovering ? (hoverText ? 60 : 40) : 16,
          backgroundColor: isHovering ? "rgba(212, 175, 55, 0.2)" : "rgba(212, 175, 55, 1)",
          borderColor: isHovering ? "rgba(212, 175, 55, 0.8)" : "transparent",
          borderWidth: isHovering ? 2 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full flex items-center justify-center"
      >
        <AnimateTextPresence text={hoverText} />
      </motion.div>
    </motion.div>
  );
}

function AnimateTextPresence({ text }: { text: string }) {
  if (!text) return null;
  return (
    <span className="text-white text-[10px] font-bold tracking-widest pointer-events-none">
      {text}
    </span>
  );
}
