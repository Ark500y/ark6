import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { brandData } from "@/data/brand";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://env-three-kohl.vercel.app");

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ARK by Abdul Rehman. Details on how we collect, use, and protect your information in compliance with Meta, Google Ads, and global privacy standards.",
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | ARK — Abdul Rehman",
    description:
      "Transparency on data collection, advertising cookies, and security practices across ARK digital experiences.",
    url: `${baseUrl}/privacy`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ARK Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | ARK — Abdul Rehman",
    description:
      "Transparency on data collection, advertising cookies, and security practices across ARK digital experiences.",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 26, 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | ARK — Abdul Rehman",
    url: `${baseUrl}/privacy`,
    description:
      "Privacy Policy explaining information collection, purpose, cookies, third-party analytics, and user rights.",
    publisher: {
      "@type": "Person",
      name: "Abdul Rehman",
      jobTitle: "Graphic Designer & Web Developer",
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="bg-[#050505] min-h-screen pt-32 pb-24 text-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {/* Top navigation link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300 group"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                &larr;
              </span>
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <header className="border-b border-white/10 pb-10 mb-12">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] block mb-3 font-mono">
              Legal &amp; Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-syne)] font-extrabold text-white leading-tight tracking-tight mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-sm text-[#A1A1AA] font-mono">
              Last Updated: <span className="text-white">{lastUpdated}</span> &middot; Effective Date: October 2026
            </p>
          </header>

          {/* Policy Body */}
          <div className="space-y-12 text-[#D4D4D8] leading-relaxed font-light text-base md:text-lg">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                1. Overview &amp; Business Identity
              </h2>
              <p>
                This Privacy Policy outlines how <strong className="text-white font-medium">ARK</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), founded and operated by <strong className="text-white font-medium">Abdul Rehman</strong>, collects, processes, and protects personal information obtained through our website located at <span className="text-[#D4AF37] font-mono text-sm break-all">{baseUrl}</span>.
              </p>
              <p>
                Operating from Sargodha, Punjab, Pakistan, ARK specializes in premium brand identity design, UI/UX architecture, digital art direction, and full-stack web application development. We are committed to transparency and maintaining strict compliance with the data protection standards required by international frameworks, <strong className="text-white font-medium">Meta Advertising Policies</strong> (Facebook &amp; Instagram), and <strong className="text-white font-medium">Google Ads Policies</strong>.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                2. Information We Collect
              </h2>
              <p>
                We only gather information necessary to provide our design and engineering services, evaluate project briefs, and maintain secure technical operations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[#A1A1AA]">
                <li>
                  <strong className="text-white">Direct Inquiries &amp; Communications:</strong> When you submit our contact form, email us, or send a WhatsApp message, we collect your name, email address, phone/WhatsApp number, company name, project brief, budget parameters, and any supplementary files or assets you provide.
                </li>
                <li>
                  <strong className="text-white">Technical &amp; Server Logs:</strong> As is standard across web infrastructure, our hosting environment automatically records basic technical data upon access. This may include your Internet Protocol (IP) address, browser family, device operating system, referring URL, pages visited, timestamps, and HTTP request headers.
                </li>
                <li>
                  <strong className="text-white">Analytics &amp; Campaign Attribution:</strong> Information about your interactions with our site (such as button clicks, page depth, and session duration) captured through privacy-conscious tags and cookies.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                3. Purpose of Processing &amp; Strict Non-Sale Guarantee
              </h2>
              <p>We process the personal information we collect exclusively for the following lawful business purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[#A1A1AA]">
                <li>Responding to prospective client inquiries, project scoping, and issuing formal proposals and contracts.</li>
                <li>Fulfilling contracted visual design, software engineering, and consulting deliverables.</li>
                <li>Measuring advertising conversion rates and campaign performance on Google and Meta platforms.</li>
                <li>Maintaining website infrastructure stability, debugging technical errors, and thwarting malicious or unauthorized activity.</li>
              </ul>
              <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white">
                <p className="font-semibold text-sm uppercase tracking-wider text-[#D4AF37] mb-1">
                  Our Zero-Monetization Commitment:
                </p>
                <p className="text-sm text-[#D4D4D8]">
                  ARK does <strong>not</strong> sell, rent, lease, trade, or monetize your personal information or contact details to third-party data brokers, marketers, or list aggregators under any circumstances.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                4. Third-Party Services &amp; Advertising Technologies
              </h2>
              <p>
                To deliver a high-performance web experience and measure marketing efficacy, we integrate select trusted third-party service providers:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[#A1A1AA]">
                <li>
                  <strong className="text-white">Hosting &amp; Edge Infrastructure (Vercel Inc.):</strong> Our site is deployed globally on Vercel&apos;s serverless edge infrastructure. Vercel processes technical traffic to securely deliver assets and optimize caching.
                </li>
                <li>
                  <strong className="text-white">Meta Advertising &amp; Meta Pixel (Meta Platforms, Inc.):</strong> We may utilize the Meta Pixel to evaluate conversion actions resulting from Facebook and Instagram advertisements and ensure ads are served to relevant creative audiences. Meta may link browsing activity with user profiles in accordance with Meta&apos;s Data Policy.
                </li>
                <li>
                  <strong className="text-white">Google Analytics &amp; Google Ads (Google LLC):</strong> Used to analyze aggregated traffic trends, monitor Core Web Vitals, and track advertising conversions.
                </li>
                <li>
                  <strong className="text-white">Form Processing (Web3Forms):</strong> Contact inquiries submitted through our web forms are securely processed and dispatched to our primary inbox via encrypted channels.
                </li>
                <li>
                  <strong className="text-white">WhatsApp (Meta Platforms, Inc.):</strong> When you click our direct WhatsApp communication links, your phone number and conversation are handled within WhatsApp&apos;s end-to-end encrypted protocol.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                5. Cookies &amp; How to Opt Out
              </h2>
              <p>
                Cookies are small text files placed on your device to enhance site navigation and measure ad interactions. You have full control over cookie storage:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[#A1A1AA]">
                <li>You can adjust your browser settings to decline, block, or delete cookies at any time.</li>
                <li>
                  To opt out of interest-based ad tracking across major networks, visit the{" "}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] underline underline-offset-4 hover:text-white"
                  >
                    Digital Advertising Alliance
                  </a>{" "}
                  or the{" "}
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] underline underline-offset-4 hover:text-white"
                  >
                    Network Advertising Initiative
                  </a>.
                </li>
                <li>
                  Meta users can adjust ad preferences directly within their{" "}
                  <a
                    href="https://www.facebook.com/adpreferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] underline underline-offset-4 hover:text-white"
                  >
                    Facebook Ad Preferences Center
                  </a>.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                6. Data Retention &amp; Security Measures
              </h2>
              <p>
                We retain client communications and project records only for as long as necessary to complete design contracts, provide follow-up technical support, or fulfill statutory accounting requirements.
              </p>
              <p>
                All data transmitted to and from our website is encrypted using Transport Layer Security (TLS/HTTPS). We employ robust operational safeguards to ensure only authorized personnel have access to project communications.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                7. Your Data Rights
              </h2>
              <p>
                Regardless of your geographic location, you retain full rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-[#A1A1AA]">
                <li>The right to request a copy of the personal information we hold about you.</li>
                <li>The right to request corrections to any inaccurate or incomplete details.</li>
                <li>The right to request the permanent deletion of your inquiry data (&ldquo;Right to be Forgotten&rdquo;).</li>
                <li>The right to restrict or object to the processing of your information.</li>
              </ul>
              <p className="text-sm text-[#A1A1AA]">
                To exercise any of these rights, please contact us directly at{" "}
                <a
                  href="mailto:ark2037777@gmail.com"
                  className="text-[#D4AF37] font-mono underline underline-offset-4 hover:text-white"
                >
                  ark2037777@gmail.com
                </a>. We address all valid requests promptly and without unreasonable delay.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white">
                8. Contact Information
              </h2>
              <p>
                For any questions, compliance reviews, or inquiries regarding this Privacy Policy, please contact:
              </p>
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0D0D0D] space-y-3 font-mono text-sm">
                <div>
                  <span className="text-[#A1A1AA]">Entity:</span>{" "}
                  <strong className="text-white font-sans">{brandData.brand} — {brandData.name}</strong>
                </div>
                <div>
                  <span className="text-[#A1A1AA]">Location:</span>{" "}
                  <span className="text-white">{brandData.location.full}</span>
                </div>
                <div>
                  <span className="text-[#A1A1AA]">Email:</span>{" "}
                  <a
                    href="mailto:ark2037777@gmail.com"
                    className="text-[#D4AF37] hover:underline"
                  >
                    ark2037777@gmail.com
                  </a>{" "}
                  /{" "}
                  <a
                    href={`mailto:${brandData.contact.email}`}
                    className="text-[#D4AF37] hover:underline"
                  >
                    {brandData.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#A1A1AA]">WhatsApp:</span>{" "}
                  <a
                    href={brandData.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline"
                  >
                    +92 314 1495630
                  </a>
                </div>
                <div>
                  <span className="text-[#A1A1AA]">Live Site:</span>{" "}
                  <a
                    href={baseUrl}
                    className="text-[#D4AF37] hover:underline"
                  >
                    {baseUrl}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
