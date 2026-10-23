"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CopyEmailButton({
  email = "ark203777@gmail.com",
  className = "",
  children,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 cursor-pointer group ${className}`}
        title="Click to copy email address"
      >
        {children ? (
          children
        ) : (
          <>
            <span className="font-mono text-sm">{email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
            )}
          </>
        )}
      </button>

      {/* Floating Toast Notification */}
      <div
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-4 py-3 bg-[#0A0A0A] border border-[#D4AF37]/50 rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.2)] text-white transition-all duration-300 ease-out ${
          copied
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
          <Check className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Email Copied to Clipboard!</p>
          <p className="text-[11px] text-[#A1A1AA] font-mono">{email}</p>
        </div>
      </div>
    </>
  );
}

