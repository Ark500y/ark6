"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CommandPalette = dynamic(
  () => import("@/components/ui/command-palette").then((m) => m.CommandPalette),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/ui/custom-cursor").then((m) => m.CustomCursor),
  { ssr: false }
);

export function ClientWidgets() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px) and (pointer: fine)").matches) {
      setIsDesktop(true);
    }
  }, []);

  if (!mounted || !isDesktop) return null;

  return (
    <>
      <CustomCursor />
      <CommandPalette />
    </>
  );
}

