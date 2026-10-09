// components/3d/gold-geometry.tsx
// Smart wrapper: detects WebGL/mobile/reduced-motion, dynamically imports R3F only when safe.
// Protected by a React ErrorBoundary so WebGL crashes never blank the page.
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

// ─── React Error Boundary — catches 3D / R3F / React 19 runtime crashes ─────
class GeometryErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D Geometry render failed, using fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

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

  if (webglState === "detecting") return null;

  const fallback = <GoldGeometryFallback className={className} />;

  if (webglState === "unsupported") {
    return fallback;
  }

  return (
    <GeometryErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <ARKGeometry3D className={className} />
      </Suspense>
    </GeometryErrorBoundary>
  );
}
