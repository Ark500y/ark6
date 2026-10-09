// components/3d/gold-geometry.tsx
// Smart wrapper: detects WebGL/mobile/reduced-motion, dynamically imports R3F only when safe.
// Three.js is NEVER bundled on pages that don't import this file.
"use client";

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GoldGeometryFallback } from "./gold-geometry-fallback";

// ─── Dynamic import — ssr:false means Three.js is never touched server-side ──
const ARKGeometry3D = dynamic(
  () =>
    import("./ark-geometry").then((mod) => ({
      default: mod.ARKGeometry3D,
    })),
  { ssr: false }
);

// ─── Detection hook ──────────────────────────────────────────────────────────
type WebGLState = "detecting" | "supported" | "unsupported";

function useWebGLState(): WebGLState {
  const [state, setState] = useState<WebGLState>("detecting");

  useEffect(() => {
    // 1. Touch / mobile — skip WebGL for battery + performance
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isTouch) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState("unsupported");
      return;
    }

    // 2. Reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState("unsupported");
      return;
    }

    // 3. Low-end heuristic: concurrency ≤ 2 likely means low-power device
    if (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 2) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState("unsupported");
      return;
    }

    // 4. Actual WebGL context probe
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ??
        canvas.getContext("webgl") ??
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(gl ? "supported" : "unsupported");
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState("unsupported");
    }
  }, []);

  return state;
}

// ─── Public API ──────────────────────────────────────────────────────────────
interface GoldGeometryProps {
  className?: string;
}

export function GoldGeometry({ className }: GoldGeometryProps) {
  const webglState = useWebGLState();

  // While detecting show nothing — avoids layout shift
  if (webglState === "detecting") return null;

  if (webglState === "unsupported") {
    return <GoldGeometryFallback className={className} />;
  }

  return (
    <Suspense fallback={<GoldGeometryFallback className={className} />}>
      <ARKGeometry3D className={className} />
    </Suspense>
  );
}
