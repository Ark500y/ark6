import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ark6.vercel.app";

export const metadata: Metadata = {
  title: "About — Abdul Rehman | ARK",
  description:
    "Abdul Rehman is a graphic designer and web developer based in Sargodha, Punjab, Pakistan — building editorial digital experiences, brand identities, and high-performance web systems.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About — Abdul Rehman | ARK",
    description:
      "Graphic designer and web developer based in Sargodha, crafting intentional visual systems and modern digital experiences.",
    url: `${baseUrl}/about`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About ARK — Abdul Rehman" }],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

const toolGroups = [
  {
    label: "Design Tools",
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
  },
  {
    label: "Development",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Animation",
    tools: ["Framer Motion", "GSAP", "React Three Fiber"],
  },
  {
    label: "Build & Deploy",
    tools: ["Vercel", "Git", "VS Code"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    body: "Understand the brief, the audience, and the competitive landscape. Ask the right questions before touching any tools.",
  },
  {
    number: "02",
    title: "Design",
    body: "Develop wireframes, establish visual direction, and build out the design system that gives the work coherence.",
  },
  {
    number: "03",
    title: "Build",
    body: "Engineer the solution with performance, accessibility, and maintainability as first-class concerns — not afterthoughts.",
  },
  {
    number: "04",
    title: "Ship",
    body: "Test thoroughly, optimise delivery, launch with care, and iterate based on real feedback.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://ark.design/#person"
    }
  };

  return (
    <>
      <Navbar />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ── Hero ── */}
        <section
          aria-labelledby="about-heading"
          className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-[#050505] overflow-hidden"
        >
          {/* Subtle radial gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(212,175,55,0.06) 0%, transparent 70%)",
            }}
          />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left — text */}
              <div className="space-y-8">
                <Reveal delay={0} duration="normal">
                  <div className="flex items-center gap-3">
                    <span className="block w-8 h-px bg-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
                      About
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={80} duration="large">
                  <h1
                    id="about-heading"
                    className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-[1.0] tracking-tight"
                    style={{ fontSize: "clamp(3rem, 2rem + 4vw, 6rem)" }}
                  >
                    Behind
                    <br />
                    <span className="text-gradient-gold">ARK.</span>
                  </h1>
                </Reveal>

                <Reveal delay={160} duration="normal">
                  <p className="font-[family-name:var(--font-instrument)] text-[#A1A1AA] leading-relaxed max-w-lg"
                    style={{ fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.2rem)" }}>
                    Abdul Rehman is a graphic designer and web developer based in{" "}
                    <span className="text-white font-medium">Sargodha, Punjab, Pakistan</span>.
                    He works at the intersection of editorial design and modern engineering —
                    building visual identities, high-performance websites, and digital
                    experiences that hold their own against the best work anywhere.
                  </p>
                </Reveal>

                <Reveal delay={240} duration="normal">
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button href="mailto:ark203777@gmail.com" variant="gold" size="lg">
                      Get in Touch
                    </Button>
                    <Button href="/services" variant="outline" size="lg">
                      View Services
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* Right — portrait */}
              <Reveal delay={200} duration="large" className="flex justify-center lg:justify-end">
                <div className="group relative w-72 h-[420px] sm:w-80 sm:h-[460px] lg:w-96 lg:h-[540px] flex-shrink-0">
                  {/* Gold rim glow — appears on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.2), inset 0 0 30px rgba(212,175,55,0.04)",
                    }}
                  />
                  <Image
                    src="/images/abdul-rehman.png"
                    alt="Abdul Rehman — graphic designer and web developer"
                    fill
                    className="object-cover object-top rounded-2xl grayscale transition-all duration-700 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Design Philosophy ── */}
        <section
          aria-label="Design philosophy"
          className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/[0.06]"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
              <Reveal delay={0} duration="normal">
                <div className="space-y-3">
                  <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
                    Design Philosophy
                  </span>
                  <div className="w-8 h-px bg-[#D4AF37]" />
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={80} duration="large">
                  <h2
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.75rem, 1.2rem + 2vw, 3rem)" }}
                  >
                    Form follows function,
                    <br />
                    then feeling.
                  </h2>
                </Reveal>

                <Reveal delay={160} duration="normal">
                  <div className="font-[family-name:var(--font-instrument)] text-[#A1A1AA] leading-[1.8] space-y-4 max-w-2xl"
                    style={{ fontSize: "clamp(0.975rem, 0.9rem + 0.3vw, 1.125rem)" }}>
                    <p>
                      Good design is intentional from the first mark to the final detail.
                      Every element on a page should earn its place — hierarchy, spacing, colour,
                      and type all working together to direct attention without demanding it.
                    </p>
                    <p>
                      Whitespace is not empty space. It is structure. It is the pause that
                      gives weight to what matters. An editorial sensibility — drawn from print
                      tradition — shapes how each layout breathes and where the eye naturally rests.
                    </p>
                    <p>
                      Aesthetics without purpose is decoration. Purpose without aesthetics is
                      engineering. The goal is the point where both are indistinguishable.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Development Philosophy ── */}
        <section
          aria-label="Development philosophy"
          className="py-24 md:py-32 bg-[#050505] border-t border-white/[0.06]"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
              <Reveal delay={0} duration="normal">
                <div className="space-y-3">
                  <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
                    Development Philosophy
                  </span>
                  <div className="w-8 h-px bg-[#D4AF37]" />
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={80} duration="large">
                  <h2
                    className="font-[family-name:var(--font-syne)] font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.75rem, 1.2rem + 2vw, 3rem)" }}
                  >
                    Code as a craft,
                    <br />
                    not a factory.
                  </h2>
                </Reveal>

                <Reveal delay={160} duration="normal">
                  <div className="font-[family-name:var(--font-instrument)] text-[#A1A1AA] leading-[1.8] space-y-4 max-w-2xl"
                    style={{ fontSize: "clamp(0.975rem, 0.9rem + 0.3vw, 1.125rem)" }}>
                    <p>
                      A codebase is a long-term commitment. It should be readable six months
                      from now by someone who was not there when it was written — which often
                      means by you. Clean, typed, component-driven systems built with Next.js
                      and TypeScript are the foundation.
                    </p>
                    <p>
                      Performance is not a feature to add at the end. Semantic HTML, accessible
                      markup, sensible loading strategies, and minimal client JavaScript are
                      decisions baked in from the start. The web should work for everyone.
                    </p>
                    <p>
                      Component systems — whether in code or in Figma — enforce consistency
                      and speed up iteration. They are the infrastructure that lets creative
                      decisions happen faster without accumulating debt.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Tools & Stack ── */}
        <section
          aria-label="Tools and stack"
          className="py-24 md:py-32 bg-[#0A0A0A] border-t border-white/[0.06]"
        >
          <Container>
            <Reveal delay={0} duration="normal" className="mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
                  Stack
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3.5rem)" }}
              >
                Tools of the trade.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {toolGroups.map((group, gi) => (
                <Reveal key={group.label} delay={gi * 80} duration="normal">
                  <article className="space-y-5">
                    <h3 className="font-[family-name:var(--font-syne)] text-white font-semibold text-sm tracking-wide uppercase">
                      {group.label}
                    </h3>
                    <ul className="flex flex-wrap gap-2" role="list">
                      {group.tools.map((tool) => (
                        <li key={tool}>
                          <span className="inline-block px-3 py-1.5 text-xs font-medium text-[#A1A1AA] border border-white/10 rounded-full hover:border-[#D4AF37]/40 hover:text-white transition-colors duration-300">
                            {tool}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Working Process ── */}
        <section
          aria-label="Working process"
          className="py-24 md:py-32 bg-[#050505] border-t border-white/[0.06]"
        >
          <Container>
            <Reveal delay={0} duration="normal" className="mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
                  Process
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3.5rem)" }}
              >
                How the work happens.
              </h2>
            </Reveal>

            <ol className="space-y-0" role="list">
              {processSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 80} duration="normal">
                  <li className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4 md:gap-10 py-10 border-t border-white/[0.06] group">
                    {/* Step number */}
                    <span
                      aria-hidden="true"
                      className="font-[family-name:var(--font-syne)] font-extrabold text-[#D4AF37]/30 leading-none select-none group-hover:text-[#D4AF37]/60 transition-colors duration-500"
                      style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}
                    >
                      {step.number}
                    </span>
                    <div className="space-y-3">
                      <h3
                        className="font-[family-name:var(--font-syne)] font-bold text-white"
                        style={{ fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.75rem)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="font-[family-name:var(--font-instrument)] text-[#A1A1AA] leading-relaxed max-w-xl">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
              {/* Closing border */}
              <li aria-hidden="true" className="border-t border-white/[0.06]" />
            </ol>
          </Container>
        </section>

        {/* ── Contact CTA ── */}
        <section
          aria-label="Contact call to action"
          className="relative py-24 md:py-32 bg-[#D4AF37] overflow-hidden"
        >
          {/* Subtle texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <Reveal delay={0} duration="normal">
                <h2
                  className="font-[family-name:var(--font-syne)] font-extrabold text-[#050505] leading-tight"
                  style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 4rem)" }}
                >
                  Let&rsquo;s work
                  <br />
                  together.
                </h2>
              </Reveal>

              <Reveal delay={120} duration="normal">
                <Button
                  href="mailto:ark203777@gmail.com"
                  variant="default"
                  size="lg"
                  className="bg-[#050505] text-white border-none hover:bg-[#111111] whitespace-nowrap"
                >
                  ark203777@gmail.com
                </Button>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
