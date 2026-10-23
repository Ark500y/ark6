"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Flame, Volume2, VolumeX } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  shape: "triangle" | "shard" | "diamond" | "circle";
  duration: number;
}

// Procedural boom sound via Web Audio API (zero external assets)
function playExplosionAudio() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const t = ctx.currentTime;

    // 1. Deep Sub-Bass Thump (Oscillator)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(28, t + 0.65);

    oscGain.gain.setValueAtTime(0.7, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.85);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    // 2. High-energy filtered blast crackle (White Noise)
    const bufferSize = Math.floor(ctx.sampleRate * 0.55);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(60, t + 0.45);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    osc.start(t);
    noise.start(t);

    osc.stop(t + 0.9);
    noise.stop(t + 0.55);
  } catch {
    // Silently continue if audio context is blocked
  }
}

function generateShards(count = 42): Particle[] {
  const colors = [
    "#F4D06F", // Bright gold
    "#D4AF37", // Signature gold
    "#AA7C11", // Dark gold
    "#FFFFFF", // Flash white
    "#E2E8F0", // Silver
    "rgba(212,175,55,0.7)",
  ];

  const shapes: Particle["shape"][] = ["triangle", "shard", "diamond", "circle"];

  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.4;
    const distance = 220 + Math.random() * 520;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance * (0.65 + Math.random() * 0.35),
      size: 6 + Math.random() * 20,
      rotation: (Math.random() - 0.5) * 980,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      duration: 0.65 + Math.random() * 0.45,
    };
  });
}

export function ExplosionTransition({
  children,
  sectionName = "Next Section",
  id,
  className = "",
}: {
  children: React.ReactNode;
  sectionName?: string;
  id?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-12%" });

  const [hasDetonated, setHasDetonated] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const triggerExplosion = useCallback(
    (playSound = true) => {
      setParticles(generateShards(46));
      setIsExploding(true);
      setHasDetonated(true);

      if (playSound && soundEnabled) {
        playExplosionAudio();
      }

      // Finish the active blast animation phase after 1.1s
      setTimeout(() => {
        setIsExploding(false);
      }, 1100);
    },
    [soundEnabled]
  );

  // Auto-detonate when user scrolls down to this section
  useEffect(() => {
    if (isInView && !hasDetonated) {
      triggerExplosion(false); // Don't auto-blast sound on silent scroll, but do full visual blast
    }
  }, [isInView, hasDetonated, triggerExplosion]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* ── Interactive Detonator Control Banner ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full rounded-full ${
                hasDetonated ? "bg-[#D4AF37]/60" : "bg-red-500 animate-ping"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                hasDetonated ? "bg-[#D4AF37]" : "bg-red-500"
              }`}
            />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-syne)] text-[#A1A1AA]">
            Explosion Transition:{" "}
            <strong className="text-white font-semibold">
              {hasDetonated ? "Detonated" : "Armed on Scroll"}
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled((prev) => !prev)}
            aria-label={soundEnabled ? "Mute blast audio" : "Enable blast audio"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#D4AF37]/40 bg-white/[0.02] text-xs text-white/60 hover:text-white transition-all cursor-pointer"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden sm:inline">Sound ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/40" />
                <span className="hidden sm:inline">Muted</span>
              </>
            )}
          </button>

          {/* Manual Detonation / Replay Button */}
          <button
            onClick={() => triggerExplosion(true)}
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F4D06F]/30 to-[#D4AF37]/20 border border-[#D4AF37]/50 text-white font-medium text-xs tracking-wider uppercase hover:border-[#F4D06F] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 text-[#F4D06F] group-hover:scale-125 transition-transform" />
            <span>{hasDetonated ? "💥 Re-Detonate Boom" : "💥 Detonate Now"}</span>
            <Sparkles className="w-3 h-3 text-[#D4AF37] opacity-60 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* ── Explosion FX Overlay (Positioned at Center of View) ── */}
      <AnimatePresence>
        {isExploding && (
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            {/* 1. Flash of intense light */}
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: [0, 1, 0.9, 0], scale: [0.2, 1.8, 2.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="absolute w-[200vw] h-[200vh] rounded-full bg-radial from-white via-[#F4D06F]/50 to-transparent blur-xl"
            />

            {/* 2. Concentric Shockwave Rings */}
            {[0, 0.08, 0.16].map((delay, index) => (
              <motion.div
                key={`shockwave-${index}`}
                initial={{ scale: 0, opacity: 0.9, borderWidth: 10 }}
                animate={{
                  scale: [0, 2.2, 3.8],
                  opacity: [0.9, 0.4, 0],
                  borderWidth: [10, 3, 0],
                }}
                transition={{
                  duration: 0.75,
                  delay,
                  ease: [0.12, 0.8, 0.32, 1],
                }}
                className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#F4D06F] shadow-[0_0_50px_rgba(212,175,55,0.8),inset_0_0_30px_rgba(212,175,55,0.6)]"
              />
            ))}

            {/* 3. Flying Gold & Obsidian Shards / Shrapnel */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  x: p.x,
                  y: p.y,
                  scale: [0, 1.3, 0.8, 0],
                  rotate: p.rotation,
                  opacity: [1, 1, 0.8, 0],
                }}
                transition={{
                  duration: p.duration,
                  ease: [0.15, 0.85, 0.35, 1],
                }}
                className="absolute"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
              >
                {p.shape === "triangle" ? (
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: `${p.size / 2}px solid transparent`,
                      borderRight: `${p.size / 2}px solid transparent`,
                      borderBottom: `${p.size}px solid ${p.color}`,
                      filter: "drop-shadow(0 0 8px rgba(212,175,55,0.8))",
                    }}
                  />
                ) : p.shape === "diamond" ? (
                  <div
                    className="rotate-45"
                    style={{
                      width: `${p.size * 0.8}px`,
                      height: `${p.size * 0.8}px`,
                      backgroundColor: p.color,
                      boxShadow: "0 0 12px rgba(244,208,111,0.9)",
                    }}
                  />
                ) : p.shape === "shard" ? (
                  <div
                    style={{
                      width: `${p.size * 0.3}px`,
                      height: `${p.size * 1.6}px`,
                      backgroundColor: p.color,
                      transform: "skewX(30deg)",
                      boxShadow: "0 0 10px rgba(212,175,55,0.7)",
                    }}
                  />
                ) : (
                  <div
                    className="rounded-full"
                    style={{
                      width: `${p.size * 0.6}px`,
                      height: `${p.size * 0.6}px`,
                      backgroundColor: p.color,
                      boxShadow: "0 0 14px rgba(255,255,255,0.9)",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* ── The Section Erupts From The Blast! ── */}
      <motion.div
        animate={
          isExploding
            ? {
                // Screen shake & explosive impact
                x: [-10, 12, -9, 7, -3, 0],
                y: [7, -11, 8, -5, 2, 0],
                scale: [0.86, 1.04, 0.99, 1.0],
                filter: [
                  "brightness(3) blur(14px)",
                  "brightness(1.8) blur(4px)",
                  "brightness(1) blur(0px)",
                ],
              }
            : hasDetonated
            ? {
                x: 0,
                y: 0,
                scale: 1,
                filter: "brightness(1) blur(0px)",
                opacity: 1,
              }
            : {
                // Before detonation: waiting in anticipation
                opacity: 0.15,
                scale: 0.94,
                filter: "blur(8px) brightness(0.6)",
              }
        }
        transition={{
          duration: isExploding ? 0.75 : 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}
