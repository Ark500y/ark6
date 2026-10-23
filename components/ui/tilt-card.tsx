"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className = "", tiltAmount = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -yPct * tiltAmount,
      y: xPct * tiltAmount,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}
