"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedOutsideMenu = mobileMenuRef.current && !mobileMenuRef.current.contains(target);
      const clickedOutsideBtn = hamburgerRef.current && !hamburgerRef.current.contains(target);
      if (clickedOutsideMenu && clickedOutsideBtn) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[rgba(5,5,5,0.92)] backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="ARK — Go to homepage"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-7 flex-shrink-0">
            <Image
              src="/logo/ark.svg"
              alt="ARK monogram"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <span className="font-[family-name:var(--font-syne)] font-bold text-white text-sm tracking-[0.25em] uppercase hidden sm:block opacity-70 group-hover:opacity-100 transition-opacity">
            ARK
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative py-1 group",
                    isActive ? "text-white" : "text-[#A1A1AA] hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-[#D4AF37] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton
            href="mailto:ark203777@gmail.com"
            className="text-sm px-5 py-2 rounded-full text-black font-semibold bg-[#D4AF37] hover:bg-[#F4D06F] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Let&rsquo;s Talk
          </MagneticButton>
        </div>

        {/* Hamburger button */}
        <button
          ref={hamburgerRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
        >
          <span
            className={cn(
              "block w-6 h-px bg-white transition-all duration-300 origin-center",
              menuOpen && "rotate-45 translate-y-[5px]"
            )}
          />
          <span
            className={cn(
              "block w-4 h-px bg-white transition-all duration-300 self-end",
              menuOpen && "opacity-0 -translate-x-2"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-white transition-all duration-300 origin-center",
              menuOpen && "-rotate-45 -translate-y-[5px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <ul
          className="flex flex-col border-t border-white/[0.06] px-5 py-4 gap-1 bg-[rgba(5,5,5,0.98)] backdrop-blur-xl"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-[#A1A1AA] hover:text-white border-b border-white/[0.04] last:border-0 transition-colors focus-visible:outline-none focus-visible:text-[#D4AF37]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="mailto:ark203777@gmail.com"
              className="block text-center text-sm font-semibold text-black bg-[#D4AF37] px-5 py-3 rounded-full hover:bg-[#F4D06F] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Let&rsquo;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
