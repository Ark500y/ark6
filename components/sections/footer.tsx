import React from "react";
import Image from "next/image";
import { brandData } from "@/data/brand";
import { LiveSargodhaTime } from "@/components/ui/live-time";
import { CopyEmailButton } from "@/components/ui/copy-toast";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative bg-[#0A0A0A] border-t border-white/[0.07]"
    >
      {/* Top CTA strip */}
      <div className="border-b border-white/[0.06] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <LiveSargodhaTime />
            <h2
              className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-tight mt-2"
              style={{ fontSize: "clamp(2rem, 1.5rem + 2.5vw, 4rem)" }}
            >
              Start something
              <br />
              <span className="text-gradient-gold">remarkable.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <CopyEmailButton email={brandData.contact.email}>
              <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:from-[#F4D06F] hover:to-[#D4AF37] transition-all duration-300">
                Copy Email
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </span>
            </CopyEmailButton>

            <a
              href={brandData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/15 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 md:gap-16 items-start">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-7">
                <Image
                  src="/logo/ark.svg"
                  alt="ARK monogram"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-[family-name:var(--font-syne)] font-bold text-white text-sm tracking-[0.25em] uppercase">
                ARK
              </span>
            </div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              {brandData.name} — graphic designer and web developer. Based in{" "}
              {brandData.location.city}, {brandData.location.country}.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="md:flex md:justify-center">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:underline focus-visible:decoration-[#D4AF37]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact quick links */}
          <div className="space-y-3" aria-label="Quick contact links">
            <CopyEmailButton email={brandData.contact.email} className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300" />
            <a
              href={brandData.contact.phoneHref}
              className="block text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300 font-mono"
            >
              {brandData.contact.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <p>
            &copy; {year} Abdul Rehman · ARK. All rights reserved.
          </p>
          <p className="opacity-50">
            Built with Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
