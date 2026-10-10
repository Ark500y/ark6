"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, Home, Briefcase, User, Wrench, Mail, Copy, Check, ArrowRight } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  // Listen for Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ark203777@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const items: CommandItem[] = [
    { id: "home", label: "Go to Home", category: "Navigation", icon: <Home className="w-4 h-4 text-[#D4AF37]" />, action: () => navigateTo("/") },
    { id: "work", label: "View Portfolio Projects", category: "Navigation", icon: <Briefcase className="w-4 h-4 text-[#D4AF37]" />, action: () => navigateTo("/work") },
    { id: "miansaqib", label: "Mian Saqib Case Study", category: "Featured Case Study", icon: <ArrowRight className="w-4 h-4 text-[#D4AF37]" />, action: () => navigateTo("/work/miansaqib") },
    { id: "about", label: "About Abdul Rehman", category: "Navigation", icon: <User className="w-4 h-4 text-[#D4AF37]" />, action: () => navigateTo("/about") },
    { id: "services", label: "Services & Capabilities", category: "Navigation", icon: <Wrench className="w-4 h-4 text-[#D4AF37]" />, action: () => navigateTo("/services") },
    { id: "contact", label: "Contact & Hire Me", category: "Navigation", icon: <Mail className="w-4 h-4 text-[#D4AF37]" />, action: () => navigateTo("/contact") },
    { id: "copy-email", label: copied ? "Copied Email!" : "Copy Email (ark203777@gmail.com)", category: "Actions", icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />, action: copyEmail },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Cmd+K Pill Indicator at screen bottom */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#D4AF37]/50 text-white/60 hover:text-white text-xs backdrop-blur-md transition-all shadow-lg"
      >
        <Search className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded border border-white/20 text-white">⌘K</kbd>
        <span>to search</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[300] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Search input header */}
              <div className="flex items-center px-4 border-b border-white/10 bg-white/[0.02]">
                <Search className="w-5 h-5 text-[#D4AF37] mr-3" />
                <input
                  type="text"
                  placeholder="Type a command or search page..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full py-4 bg-transparent text-white placeholder-white/40 focus:outline-none text-base font-sans"
                />
                <kbd className="px-2 py-1 text-xs font-mono bg-white/10 rounded text-white/50">ESC</kbd>
              </div>

              {/* Command List */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                {filteredItems.length === 0 ? (
                  <div className="py-8 text-center text-white/40 text-sm">
                    No matching commands found.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/[0.06] text-left transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/[0.04] group-hover:bg-[#D4AF37]/10 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                            {item.label}
                          </p>
                          <span className="text-[10px] text-white/40 uppercase tracking-wider font-mono">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] text-white/40">
                <span>ARK Navigation Palette</span>
                <span className="font-mono text-[10px]">Use ↑↓ to navigate • ↵ to select</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
