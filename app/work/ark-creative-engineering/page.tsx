import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/* ─────────────────────────────────────────────
   SEO metadata
───────────────────────────────────────────── */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://env-three-kohl.vercel.app");

export const metadata: Metadata = {
  title: "ARK — Portfolio & Creative Engineering",
  description:
    "Case study on ARK's aerospace-grade creative engineering showcase featuring cinematic cosmic parallax, synthesized Web Audio soundscapes, real-time telemetry HUD, and sub-second edge performance.",
  alternates: {
    canonical: `${baseUrl}/work/ark-creative-engineering`,
  },
  openGraph: {
    type: "article",
    url: `${baseUrl}/work/ark-creative-engineering`,
    title: "ARK — Portfolio & Creative Engineering | Case Study",
    description:
      "A cinematic, aerospace-grade creative engineering portfolio showcasing multi-layer physics, procedural audio synthesis, and Next.js performance.",
    images: [
      {
        url: "/work/ark-creative-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "ARK Creative Engineering website showcase hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARK — Portfolio & Creative Engineering | Case Study",
    description:
      "A cinematic, aerospace-grade creative engineering portfolio showcasing multi-layer physics, procedural audio synthesis, and Next.js performance.",
    images: ["/work/ark-creative-engineering.jpg"],
  },
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const meta = [
  { label: "Client", value: "ARK Studio / Creative Engineering" },
  { label: "Role", value: "Creative Engineering, Frontend Architecture" },
  { label: "Deliverables", value: "Cinematic Parallax, Procedural Audio, Telemetry HUD" },
  { label: "Stack", value: "Next.js, Tailwind CSS, TypeScript, Web Audio API" },
  { label: "Status", value: "Live on Vercel" },
  { label: "Year", value: "2024" },
];

const features = [
  {
    title: "Cinematic Multi-Depth Parallax",
    desc: "Multi-layered celestial parallax with fluid velocity physics responding dynamically to cursor coordinates and inertial scroll physics.",
  },
  {
    title: "Procedural Web Audio Engine",
    desc: "Synthesized Web Audio API frequencies delivering reactive atmospheric sub-bass drones and tactile UI click feedback with zero audio file assets.",
  },
  {
    title: "Real-Time Telemetry HUD",
    desc: "Interactive aerospace diagnostic panels displaying live system telemetry, viewport frame rate metrics, and reactive operational coordinates.",
  },
  {
    title: "Aerospace Kinetic Typography",
    desc: "High-contrast luxury type combinations featuring Syne and precision monospace telemetry numerals scaled through responsive CSS fluid clamp functions.",
  },
  {
    title: "Sub-Second Edge Performance",
    desc: "Static edge prerendering with optimized image asset pipelines achieving sub-100ms first paint and constant 60+ FPS rendering loops.",
  },
  {
    title: "Adaptive Sensory Accessibility",
    desc: "Thoughtful accessibility features honoring prefers-reduced-motion preferences and providing granular user mute toggles for full sensory comfort.",
  },
];

/* ─────────────────────────────────────────────
   Icons (inline SVG, zero dependencies)
───────────────────────────────────────────── */
function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ExternalLink({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Page Component
───────────────────────────────────────────── */
export default function ArkCreativeEngineeringCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: "ARK — Portfolio & Creative Engineering",
        description:
          "Aerospace-grade creative engineering showcase featuring cinematic cosmic parallax, procedural Web Audio, and real-time telemetry systems.",
        author: {
          "@type": "Person",
          name: "Abdul Rehman",
          url: baseUrl,
        },
        url: "https://portfolio-alpha-one-ym3ipfauzw.vercel.app/",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${baseUrl}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ARK Creative Engineering",
            item: `${baseUrl}/work/ark-creative-engineering`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />

      <main id="main-content" className="bg-[#050505] text-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <section
          aria-label="Project hero"
          className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/work/ark-creative-engineering.jpg"
              alt="ARK Portfolio & Creative Engineering showcase hero screenshot"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient overlays for cinematic depth and readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-transparent" />
          </div>

          {/* Hero content */}
          <Container className="relative z-10 pb-20 md:pb-28 pt-40">
            {/* Project number + category */}
            <Reveal delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-syne)] text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold">
                  Project 02
                </span>
                <span className="w-8 h-px bg-white/30" aria-hidden="true" />
                <span className="text-[#A1A1AA] text-xs tracking-[0.25em] uppercase font-medium">
                  Creative Engineering &amp; Interactive Web
                </span>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={80}>
              <h1
                className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-[0.92] mb-4"
                style={{ fontSize: "clamp(2.5rem, 1.75rem + 4.5vw, 6.5rem)" }}
              >
                ARK &mdash; Creative
                <br />
                <span className="text-gradient-gold">Engineering</span>
              </h1>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={160}>
              <p className="text-[#A1A1AA] text-lg md:text-xl mb-8 font-light max-w-xl">
                Aerospace-grade precision meets cinematic digital artistry &mdash; built with multi-layered parallax physics and real-time Web Audio synthesis.
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-4 mb-16">
                <Button
                  href="https://portfolio-alpha-one-ym3ipfauzw.vercel.app/"
                  target="_blank"
                  variant="gold"
                  size="lg"
                  icon={<ExternalLink />}
                >
                  View Live Showcase
                </Button>
                <Button href="/work" variant="outline" size="lg" icon={<ArrowLeft />}>
                  Back to Work
                </Button>
              </div>
            </Reveal>

            {/* Scroll indicator */}
            <Reveal delay={360}>
              <div
                className="flex items-center gap-3 text-[#A1A1AA] text-xs tracking-[0.25em] uppercase"
                aria-label="Scroll to explore"
              >
                <span
                  className="block w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse"
                  aria-hidden="true"
                />
                Scroll to explore case study
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            2. OVERVIEW
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="overview-heading"
          className="border-t border-white/10 py-20 md:py-28"
        >
          <Container>
            <Reveal>
              <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-4 block">
                Overview
              </span>
            </Reveal>

            {/* Meta grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 mb-16">
              {meta.map(({ label, value }, i) => (
                <Reveal key={label} delay={i * 60}>
                  <div>
                    <p className="text-[#A1A1AA] text-xs uppercase tracking-[0.2em] mb-1.5 font-medium">
                      {label}
                    </p>
                    <p className="text-white text-sm font-medium leading-snug">{value}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Summary paragraph */}
            <div className="max-w-3xl">
              <Reveal>
                <h2
                  id="overview-heading"
                  className="font-[family-name:var(--font-syne)] font-bold text-white mb-6"
                  style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)" }}
                >
                  A demonstration of high-order creative engineering where code behaves like cinematic physics.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                  ARK &mdash; Portfolio &amp; Creative Engineering was architected as an unapologetic testament to what modern front-end engineering can accomplish when freed from cookie-cutter templates. Combining space-mission telemetry UI, multi-layered orbital parallax calculations, and synthesized sound frequencies generated live in browser memory, this showcase bridges visual brand mastery and high-performance technical execution.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            3. THE CHALLENGE
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="challenge-heading"
          className="border-t border-white/10 py-20 md:py-28 bg-[#0A0A0A]"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <Reveal>
                <div>
                  <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-4 block">
                    The Challenge
                  </span>
                  <h2
                    id="challenge-heading"
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)" }}
                  >
                    Immersion.
                    <br />
                    Framerates.
                    <br />
                    Accessibility.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    Most experimental creative portfolios collapse under their own weight: heavy 3D bundles, 40MB audio asset downloads, jerky scroll hijacking, and sluggish mobile responsiveness.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    The mission was to deliver an intensely tactile, sci-fi atmosphere with layered depth and sound, while keeping bundle sizes microscopic, avoiding external media bottlenecks, and maintaining a constant 60 FPS refresh rate across mobile and low-powered devices.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    Additionally, audio experiences in web browsers face strict autoplay policies and risk annoying users if uncalibrated. The challenge was crafting procedural synthesis that users actively welcome and can seamlessly control.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            4. THE APPROACH
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="approach-heading"
          className="border-t border-white/10 py-20 md:py-28"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <Reveal>
                <div>
                  <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-4 block">
                    The Approach
                  </span>
                  <h2
                    id="approach-heading"
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)" }}
                  >
                    Mathematical depth.
                    <br />
                    Procedural audio.
                    <br />
                    Zero asset bloat.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    Rather than relying on heavy pre-rendered video backgrounds or gigabytes of 3D assets, every interactive element was built using lean web standards: hardware-accelerated CSS transforms, mathematical parallax offsets tied to mouse vectors, and procedural sound synthesis.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    Soundscapes are powered directly by the native <code className="text-[#D4AF37] text-sm bg-white/5 px-1.5 py-0.5 rounded">AudioContext</code>. Sine-wave oscillators generate subtle 40Hz sub-bass ambient hums, while White Noise buffer generators filtered through low-pass nodes create crisp, tactile UI feedback with zero network latency.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    The telemetry HUD layers live runtime metrics over the viewport, immersing the user in an aerospace diagnostic console that communicates technical precision at every scroll increment.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            5. DESIGN DIRECTION
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="design-heading"
          className="border-t border-white/10 py-20 md:py-28 bg-[#0A0A0A]"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <Reveal>
                <div>
                  <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-4 block">
                    Design Direction
                  </span>
                  <h2
                    id="design-heading"
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)" }}
                  >
                    Cosmic.
                    <br />
                    Tactile.
                    <br />
                    Aerospace.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-8">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    The visual language draws inspiration from NASA control consoles, luxury horology, and minimalist brutalism. Deep space blacks form the infinite backdrop, punctuated by metallic gold coordinates and stark telemetry white.
                  </p>
                </Reveal>

                {/* Palette swatches */}
                <Reveal delay={120}>
                  <div className="flex flex-wrap gap-4" role="list" aria-label="Colour palette">
                    {[
                      { hex: "#050505", label: "Deep Obsidian" },
                      { hex: "#0A0A0A", label: "Cockpit Dark" },
                      { hex: "#161616", label: "Telemetry Panel" },
                      { hex: "#D4AF37", label: "Stellar Gold" },
                      { hex: "#FFFFFF", label: "Signal White" },
                    ].map(({ hex, label }) => (
                      <div key={hex} className="flex flex-col items-center gap-2" role="listitem">
                        <div
                          className="w-12 h-12 rounded-lg border border-white/10 shadow-sm"
                          style={{ backgroundColor: hex }}
                          aria-label={`${label} — ${hex}`}
                        />
                        <span className="text-[#A1A1AA] text-[10px] font-mono">{hex}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    Headings utilize high-impact display geometry with Syne, paired with precision monospace coordinate markers to reinforce the feeling of an operational aerospace flight instrument.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            6. DEVELOPMENT & ARCHITECTURE
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="development-heading"
          className="border-t border-white/10 py-20 md:py-28"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
              <Reveal>
                <div>
                  <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-4 block">
                    Engineering Stack
                  </span>
                  <h2
                    id="development-heading"
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)" }}
                  >
                    High-precision code.
                    <br />
                    Native APIs.
                    <br />
                    Edge optimized.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    Engineered with Next.js and TypeScript, utilizing modular component trees and hardware-composited layer boundaries to eliminate layout reflows during rapid parallax translation.
                  </p>
                </Reveal>

                {/* Tech stack pills */}
                <Reveal delay={120}>
                  <div className="flex flex-wrap gap-3" role="list" aria-label="Technology stack">
                    {[
                      "Next.js",
                      "React 19",
                      "TypeScript",
                      "Tailwind CSS",
                      "Web Audio API",
                      "Parallax Physics",
                      "Telemetry HUD",
                      "Edge Deployment",
                    ].map((tech) => (
                      <span
                        key={tech}
                        role="listitem"
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-[#A1A1AA] border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    Deployed to Vercel&apos;s global Edge Network, ensuring instant asset delivery and zero server maintenance. The static compilation renders the full DOM structure ahead of time, ensuring search bots and human visitors alike experience near-instantaneous load times.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            7. KEY FEATURES
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="features-heading"
          className="border-t border-white/10 py-20 md:py-28 bg-[#0A0A0A]"
        >
          <Container>
            <Reveal>
              <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-4 block">
                Key Features
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="features-heading"
                className="font-[family-name:var(--font-syne)] font-bold text-white mb-12 max-w-xl"
                style={{ fontSize: "clamp(1.75rem, 1rem + 2.5vw, 2.5rem)" }}
              >
                Engineered for sensory impact.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {features.map(({ title, desc }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <article className="bg-[#0A0A0A] p-8 hover:bg-[#111111] transition-colors duration-300 group h-full">
                    <div className="flex items-start gap-4 mb-3">
                      <span
                        className="w-6 h-6 rounded-full border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#D4AF37] text-[10px] font-bold group-hover:bg-[#D4AF37]/10 transition-colors"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-[family-name:var(--font-syne)] font-semibold text-white text-base group-hover:text-[#D4AF37] transition-colors duration-300">
                        {title}
                      </h3>
                    </div>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed pl-10">{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            8. LIVE SITE CTA BAND & NEXT PROJECT
        ══════════════════════════════════════ */}
        <section
          aria-labelledby="cta-heading"
          className="border-t border-white/10 py-20 md:py-28 relative overflow-hidden"
        >
          {/* Subtle gold glow */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-[#D4AF37]/[0.04] blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <Container className="relative z-10 text-center">
            <Reveal>
              <span className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold font-[family-name:var(--font-syne)] mb-6 block">
                Experience It Live
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="cta-heading"
                className="font-[family-name:var(--font-syne)] font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2rem, 1.25rem + 4vw, 4.5rem)" }}
              >
                Creative Engineering Showcase
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[#A1A1AA] text-base md:text-lg max-w-xl mx-auto mb-10">
                Explore the interactive parallax canvas, live telemetry HUD, and procedural soundscapes in your browser.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <Button
                  href="https://portfolio-alpha-one-ym3ipfauzw.vercel.app/"
                  target="_blank"
                  variant="gold"
                  size="lg"
                  icon={<ExternalLink />}
                >
                  Open Live Showcase
                </Button>
                <Button href="/work" variant="outline" size="lg" icon={<ArrowLeft />}>
                  Back to Work
                </Button>
              </div>
            </Reveal>

            {/* Next Project Link */}
            <Reveal delay={260}>
              <div className="pt-12 border-t border-white/10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                <span className="text-[#A1A1AA]">Next Case Study:</span>
                <Link
                  href="/work/miansaqib"
                  className="inline-flex items-center gap-2 text-white hover:text-[#D4AF37] font-semibold transition-colors duration-300 group"
                >
                  <span>Project 01 &mdash; Mian Saqib Hussain</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
