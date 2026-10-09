// components/3d/ark-geometry.tsx — loaded ONLY via dynamic import, never SSR'd
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck — R3F JSX elements are not in standard JSX namespace; type-checking disabled for this file only.
"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Mesh ─────────────────────────────────────────────────────────────────────
function ARKMesh({
  mouseX,
  mouseY,
  scrollY,
}: {
  mouseX: number;
  mouseY: number;
  scrollY: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const solidMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#C8A020"),
        emissive: new THREE.Color("#3a2500"),
        emissiveIntensity: 0.6,
        metalness: 0.92,
        roughness: 0.12,
      }),
    []
  );

  const wireMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#F4D06F"),
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.x = t * 0.08 + mouseY * 0.25;
    groupRef.current.rotation.y = t * 0.13 + mouseX * 0.35;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.07 - scrollY * 0.002;
    groupRef.current.scale.setScalar(1 + Math.sin(t * 0.7) * 0.018);
  });

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);

  return (
    <group ref={groupRef}>
      <mesh geometry={geo} material={solidMat} />
      <mesh geometry={geo} material={wireMat} scale={1.14} />
    </group>
  );
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function Scene(props: { mouseX: number; mouseY: number; scrollY: number }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 3]} intensity={2.5} color="#F4D06F" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, -4, -5]} intensity={1.2} color="#D4AF37" />
      <ARKMesh {...props} />
    </>
  );
}

// ─── Exported component ────────────────────────────────────────────────────────
export function ARKGeometry3D({ className }: { className?: string }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none select-none ${className ?? ""}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
          preserveDrawingBuffer: false,
        }}
        style={{ background: "transparent" }}
      >
        <Scene mouseX={mouse.x} mouseY={mouse.y} scrollY={scroll} />
      </Canvas>
    </div>
  );
}
