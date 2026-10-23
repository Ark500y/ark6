"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
    const el = containerRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasDetonated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasDetonated) {
          triggerExplosion(false);
          observer.disconnect();
        }
      },
      { rootMargin: "-12%" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasDetonated, triggerExplosion]);

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
            {sectionName} — Blast:{" "}
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
      {isExploding && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* 1. Flash of intense light */}
          <div className="absolute w-[200vw] h-[200vh] rounded-full bg-radial from-white via-[#F4D06F]/50 to-transparent blur-xl animate-blast-flash" />

          {/* 2. Concentric Shockwave Rings */}
          {[0, 80, 160].map((delay, index) => (
            <div
              key={`shockwave-${index}`}
              style={{ animationDelay: `${delay}ms` }}
              className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#F4D06F] shadow-[0_0_50px_rgba(212,175,55,0.8),inset_0_0_30px_rgba(212,175,55,0.6)] animate-blast-shockwave"
            />
          ))}

          {/* 3. Flying Gold & Obsidian Shards / Shrapnel */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute transition-all ease-out"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                transform: `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg)`,
                opacity: 0,
                transitionDuration: `${p.duration}s`,
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
            </div>
          ))}
        </div>
      )}

      {/* ── The Section Erupts From The Blast! ── */}
      <div
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExploding
            ? "animate-blast-shake"
            : hasDetonated
            ? "opacity-100 scale-100 blur-none brightness-100"
            : "opacity-100 md:opacity-20 md:scale-[0.96] md:blur-[6px] md:brightness-75"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
