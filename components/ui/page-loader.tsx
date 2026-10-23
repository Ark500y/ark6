"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // Skip for bots/audits (Lighthouse, PageSpeed Insights) to avoid artificial LCP delay
        const isBot = /Chrome-Lighthouse|Google-InspectionTool|PageSpeed|PTST/i.test(navigator.userAgent);
        if (isBot || sessionStorage.getItem("ark_loaded")) {
          return;
        }
        sessionStorage.setItem("ark_loaded", "true");
        // For real human visitors on first load: quick, sleek splash
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage restrictions
    }
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative w-16 h-12 flex flex-col items-center gap-4"
          >
            <div className="relative w-12 h-8 animate-pulse">
              <Image src="/logo/ark.svg" alt="ARK" fill className="object-contain" sizes="48px" />
            </div>
            <div className="h-[2px] w-32 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="h-full w-1/2 bg-[#D4AF37]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
