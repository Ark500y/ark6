"use client";

import React, { useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/animations/reveal";
import { brandData } from "@/data/brand";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot stays empty for real users
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot check (client-side redundancy)
    if (form.website) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || "Portfolio Enquiry",
          message: form.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent. I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please email me directly at ark203777@gmail.com");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputBase =
    "w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-[#A1A1AA]/50 outline-none transition-all duration-300 focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/15 focus:bg-[#111111] hover:border-white/20";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 md:py-40 bg-[#050505]"
    >
      <div className="absolute top-0 left-5 right-5 md:left-8 md:right-8 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <Reveal delay={0} duration="normal">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-medium uppercase tracking-[0.3em]">
                Contact
              </span>
            </div>
          </Reveal>
          <Reveal delay={100} duration="large">
            <h2
              id="contact-heading"
              className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 2rem + 2.5vw, 4.5rem)" }}
            >
              Have a project?
              <br />
              <span className="text-gradient-gold">Let&rsquo;s talk.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
          {/* Form */}
          <Reveal delay={200} duration="large">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="space-y-5"
            >
              {/* Honeypot — hidden from real users */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
              >
                <label htmlFor="website">Website (leave blank)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#A1A1AA]">
                    Name <span aria-hidden="true" className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputBase}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-red-400 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#A1A1AA]">
                    Email <span aria-hidden="true" className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputBase}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-400 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-[#A1A1AA]">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputBase} cursor-pointer`}
                >
                  <option value="" className="bg-[#111111]">Select a service (optional)</option>
                  <option value="Web Design & Development" className="bg-[#111111]">Web Design & Development</option>
                  <option value="Brand Identity" className="bg-[#111111]">Brand Identity</option>
                  <option value="UI/UX Design" className="bg-[#111111]">UI/UX Design</option>
                  <option value="AI Website Development" className="bg-[#111111]">AI Website Development</option>
                  <option value="Other Enquiry" className="bg-[#111111]">Other Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#A1A1AA]">
                  Message <span aria-hidden="true" className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project — scope, goals, timeline..."
                  className={`${inputBase} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-red-400 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                aria-label="Send message"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] hover:from-[#F4D06F] hover:to-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status message */}
              {(status === "success" || status === "error") && (
                <div
                  ref={statusRef}
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                  className={`mt-4 p-4 rounded-xl border text-sm font-medium focus:outline-none ${
                    status === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </Reveal>

          {/* Contact info sidebar */}
          <Reveal delay={300} duration="large">
            <aside aria-label="Contact information" className="space-y-8">
              <div className="bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-8 space-y-7">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-white text-lg">
                  Other ways to reach me
                </h3>

                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                    label: "Email",
                    value: brandData.contact.email,
                    href: `mailto:${brandData.contact.email}`,
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: `wa.me/${brandData.contact.phoneHref.replace("tel:+", "")}`,
                    href: brandData.contact.whatsapp,
                    external: true,
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.27a16 16 0 006.29 6.29l.35-.35a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                    label: "Phone",
                    value: brandData.contact.phoneFormatted,
                    href: brandData.contact.phoneHref,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-[#A1A1AA] group-hover:border-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-all duration-300 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[#A1A1AA] text-xs uppercase tracking-[0.15em] font-medium mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-medium break-all group-hover:text-[#D4AF37] transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location card */}
              <div className="bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#A1A1AA] text-xs uppercase tracking-[0.2em] font-medium">Location</span>
                </div>
                <p className="text-white font-medium">{brandData.location.city}</p>
                <p className="text-[#A1A1AA] text-sm">{brandData.location.province}, {brandData.location.country}</p>
                <p className="text-[#A1A1AA] text-xs mt-3 opacity-60">Available for remote & local engagements</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
