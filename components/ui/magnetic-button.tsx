/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  href?: string;
  asLink?: boolean;
}

export function MagneticButton({
  children,
  className,
  strength = 40,
  href,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
    setIsHovered(true);
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const transformStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered
      ? "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)"
      : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: isHovered ? "transform" : "auto",
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={transformStyle}
        className={cn("relative z-10 inline-block", className)}
        href={href}
        onClick={onClick as any}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={transformStyle}
      className={cn("relative z-10 inline-block", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
