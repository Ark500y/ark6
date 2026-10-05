import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/* ─────────────────────────────────────────────
   SEO metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mian Saqib Hussain — Case Study | ARK",
  description:
    "How ARK designed and developed a bilingual (EN/AR) corporate website for Mian Saqib Hussain, a professional boom truck operator based in Dammam, Saudi Arabia.",
  keywords: [
    "ARK",
    "Case Study",
    "Mian Saqib Hussain",
    "Boom Truck",
    "Saudi Arabia",
    "Web Development",
    "Bilingual Website",
    "RTL Arabic",
  ],
  openGraph: {
    type: "article",
    title: "Mian Saqib Hussain — Case Study | ARK",
    description:
      "Bilingual corporate website for a professional boom truck operator in Dammam, Saudi Arabia.",
    images: [{ url: "/work/mian-saqib-hero.png", width: 1200, height: 630, alt: "Mian Saqib Hussain website hero" }],
  },
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const meta = [
  { label: "Client", value: "Mian Saqib Hussain" },
  { label: "Role", value: "UI/UX Design, Web Development" },
  { label: "Deliverables", value: "Bilingual Website, SEO Schema, Responsive Design" },
  { label: "Location", value: "Dallah Industrial, Dammam, Saudi Arabia" },
  { label: "Status", value: "Live at miansaqib.com" },
  { label: "Year", value: "2024" },
];

const features = [
  {
    title: "Bilingual EN/AR",
    desc: "RTL Arabic text rendered with lang + dir attributes, dual locale OG tags (en_SA + ar_SA), and Cairo font for Arabic alongside Plus Jakarta Sans for English.",
  },
  {
    title: "Service Showcase",
    desc: "Three clearly scoped service cards: Construction Lifting (رفع لمواقع البناء), Logistics & Transport (النقل والخدمات اللوجستية), and Site Support (دعم المواقع).",
  },
  {
    title: "Conversion CTAs",
    desc: "Prominent phone and WhatsApp call-to-action buttons placed throughout the page so field clients can reach the operator instantly.",
  },
  {
    title: "Mobile-First Responsive",
    desc: "Optimised for smartphone usage by field workers and logistics teams on-site across Saudi Arabia.",
  },
  {
    title: "LocalBusiness Schema",
    desc: "JSON-LD structured data conforming to Schema.org LocalBusiness spec for enhanced local SEO visibility in the Eastern Province.",
  },
  {
    title: "AOS Animations",
    desc: "Scroll-triggered entrance animations via the Animate On Scroll (AOS) library for a polished, engaging user experience.",
  },
];

/* ─────────────────────────────────────────────
   Icons (inline SVG, zero deps)
───────────────────────────────────────────── */
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
   Page
───────────────────────────────────────────── */
export default function MianSaqibCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "name": "Mian Saqib Hussain Corporate Website",
        "description": "Bilingual corporate website for a professional boom truck operator in Dammam, Saudi Arabia.",
        "author": {
          "@type": "Person",
          "@id": "https://ark.design/#person"
        },
        "url": "https://miansaqib.com/"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ark.design"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://ark.design/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mian Saqib",
            "item": "https://ark.design/work/miansaqib"
          }
        ]
      }
    ]
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
              src="/work/mian-saqib-hero.png"
              alt="Mian Saqib Hussain website hero screenshot"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent" />
          </div>

          {/* Hero content */}
          <Container className="relative z-10 pb-20 md:pb-28 pt-40">
            {/* Project number + category */}
            <Reveal delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-syne)] text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-semibold">
                  Project 01
                </span>
                <span className="w-8 h-px bg-white/30" aria-hidden="true" />
                <span className="text-[#A1A1AA] text-xs tracking-[0.25em] uppercase font-medium">
                  Corporate Website
                </span>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={80}>
              <h1
                className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-[0.92] mb-4"
                style={{ fontSize: "clamp(2.75rem, 2rem + 5vw, 7rem)" }}
              >
                Mian Saqib
                <br />
                <span className="text-gradient-gold">Hussain</span>
              </h1>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={160}>
              <p className="text-[#A1A1AA] text-lg md:text-xl mb-2 font-light max-w-lg">
                &ldquo;Heavy Lifting Done Right.&rdquo;
              </p>
              <p
                className="text-[#D4AF37]/70 text-base mb-8 font-light max-w-lg"
                dir="rtl"
                lang="ar"
              >
                رفع الأثقال بكل احترافية
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-4 mb-16">
                <Button
                  href="https://miansaqib.com/"
                  target="_blank"
                  variant="gold"
                  size="lg"
                  icon={<ExternalLink />}
                >
                  View Live Site
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
                Scroll to explore
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
                  A credible digital home for a specialist operator in the heart of Saudi Arabia&rsquo;s industrial corridor.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                  Mian Saqib Hussain is an independent owner-operator running professional boom truck
                  services out of Dallah Industrial Area, Dammam — serving construction sites,
                  logistics operations, and specialist lifting jobs across the Eastern Province of
                  Saudi Arabia. The brief was clear: build a fast, trustworthy, bilingual web
                  presence that converts mobile visitors into direct enquiries. No middlemen,
                  no agency layer — just the operator and the client.
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
                    No digital presence.
                    <br />
                    Two languages.
                    <br />
                    One operator.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    A solo boom truck operator in Saudi Arabia was relying entirely on word-of-mouth
                    referrals. Without a professional web presence, potential clients in construction
                    and logistics had no reliable way to verify credentials, understand services, or
                    make contact — especially after hours or during site emergencies.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    The market spans both Arabic-speaking Saudi clients and English-speaking
                    expatriate project managers, so any solution needed to serve both audiences
                    fluently — including proper right-to-left text rendering for Arabic. And because
                    the primary users are field workers and site supervisors, the site had to perform
                    flawlessly on mobile, often under poor network conditions.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    The challenge: build a site that feels as authoritative and trustworthy as a
                    large fleet company — for a single dedicated operator.
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
                    Design-first.
                    <br />
                    Content-led.
                    <br />
                    Conversion-focused.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    The approach started with editorial hierarchy — treating the page like a
                    well-produced magazine spread for a specialist trade. Strong typographic scale,
                    a dark industrial palette, and a full-bleed hero image establish authority
                    before a word is read.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    Bilingual architecture was baked in from the start. Each Arabic text block uses
                    the correct <code className="text-[#D4AF37] text-sm bg-white/5 px-1.5 py-0.5 rounded">lang=&ldquo;ar&rdquo;</code> and{" "}
                    <code className="text-[#D4AF37] text-sm bg-white/5 px-1.5 py-0.5 rounded">dir=&ldquo;rtl&rdquo;</code> attributes and
                    is served in the Cairo typeface — chosen for its legibility at display sizes.
                    Plus Jakarta Sans handles the English throughout.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[#A1A1AA] text-base leading-relaxed">
                    AOS scroll animations add just enough kinetic energy to guide attention without
                    overwhelming. The result is a single-page site that reads as premium, loads fast,
                    and funnels every visitor toward one of two actions: phone call or WhatsApp.
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
                    Dark.
                    <br />
                    Industrial.
                    <br />
                    Authoritative.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-8">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    Heavy industry demands a palette that feels like it belongs on a job site — not
                    in a pastel startup deck. Deep blacks, near-dark backgrounds, and a single gold
                    accent channel reliability and premium craftsmanship simultaneously.
                  </p>
                </Reveal>

                {/* Palette swatches */}
                <Reveal delay={120}>
                  <div className="flex flex-wrap gap-4" role="list" aria-label="Colour palette">
                    {[
                      { hex: "#050505", label: "Site Black" },
                      { hex: "#0A0A0A", label: "Surface" },
                      { hex: "#1A1A1A", label: "Card" },
                      { hex: "#D4AF37", label: "Gold Accent" },
                      { hex: "#FFFFFF", label: "Headline" },
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
                    Typography is bold and editorial: display-weight headings at fluid sizes via
                    CSS <code className="text-[#D4AF37] text-sm bg-white/5 px-1.5 py-0.5 rounded">clamp()</code>, tight leading, and generous letter-spacing on
                    labels. Service cards use clear, concise headings backed by bilingual descriptive
                    copy. Every CTA is large, high-contrast, and thumb-friendly.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════
            6. DEVELOPMENT
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
                    Development
                  </span>
                  <h2
                    id="development-heading"
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)" }}
                  >
                    Lean stack.
                    <br />
                    Zero bloat.
                    <br />
                    Fast deploy.
                  </h2>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={60}>
                  <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed">
                    Built with vanilla HTML, CSS, and JavaScript — no framework overhead. This keeps
                    the bundle microscopic and ensures the site loads in under a second on a 4G
                    connection from a construction site in the Eastern Province.
                  </p>
                </Reveal>

                {/* Tech stack pills */}
                <Reveal delay={120}>
                  <div className="flex flex-wrap gap-3" role="list" aria-label="Technology stack">
                    {[
                      "HTML5",
                      "CSS3",
                      "Vanilla JS",
                      "AOS Library",
                      "Font Awesome",
                      "Google Fonts",
                      "JSON-LD Schema",
                      "Vercel",
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
                    JSON-LD LocalBusiness structured data is embedded directly in the{" "}
                    <code className="text-[#D4AF37] text-sm bg-white/5 px-1.5 py-0.5 rounded">&lt;head&gt;</code> for search engine crawlers,
                    covering business name, address (Dallah Industrial Area, Dammam), phone number,
                    and service area. The site is deployed on Vercel with automatic HTTPS and global
                    CDN edge distribution for fast delivery across Saudi Arabia.
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
                Everything that makes it work.
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
            8. LIVE SITE CTA BAND
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
                See It Live
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="cta-heading"
                className="font-[family-name:var(--font-syne)] font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(2rem, 1.25rem + 4vw, 5rem)" }}
              >
                miansaqib.com
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[#A1A1AA] text-base md:text-lg max-w-xl mx-auto mb-10">
                Professional boom truck services in Dammam, Saudi Arabia. Bilingual. Fast. Direct.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="https://miansaqib.com/"
                  target="_blank"
                  variant="gold"
                  size="lg"
                  icon={<ExternalLink />}
                >
                  Open miansaqib.com
                </Button>
                <Button href="/work" variant="outline" size="lg" icon={<ArrowLeft />}>
                  Back to Work
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
