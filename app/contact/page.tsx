"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please check your connection.");
    }
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#050505] min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Heading & Direct Links */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <Reveal delay={0}>
                <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-extrabold text-white leading-[1.1] tracking-tight">
                  LET&apos;S CREATE
                  <br />
                  <span className="text-gradient-gold">SOMETHING GREAT.</span>
                </h1>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-md">
                  Whether you have a clear vision or just an idea, I&apos;m ready to help you bring it to life. Reach out directly or fill out the form.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                  <Button 
                    href="https://wa.me/923141495630" 
                    variant="outline" 
                    target="_blank"
                    className="justify-start w-full md:w-fit"
                  >
                    WhatsApp (+92 314 1495630)
                  </Button>
                  <Button 
                    href="tel:+923141495630" 
                    variant="outline" 
                    className="justify-start w-full md:w-fit"
                  >
                    Call (+92 314 1495630)
                  </Button>
                  <Button 
                    href="mailto:ark203777@gmail.com" 
                    variant="gold" 
                    className="justify-start w-full md:w-fit"
                  >
                    Email (ark203777@gmail.com)
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={300} className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-syne)] font-bold text-white">Inquiry Sent!</h3>
                    <p className="text-[#A1A1AA]">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                    <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8">Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/60">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/60">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-widest text-white/60">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none"
                      >
                        <option value="" disabled selected>Select a project type...</option>
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="E-Commerce">E-Commerce Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-white/60">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, and timeline..."
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    )}

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#050505] font-semibold py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "submitting" ? "Sending..." : "Send Inquiry"}
                      </button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
