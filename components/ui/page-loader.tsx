"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("ark_loaded")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(false);
        return;
      }
      sessionStorage.setItem("ark_loaded", "true");
    } catch {
      // Ignore storage restrictions (e.g. Safari Private Browsing)
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-16 h-12 flex flex-col items-center gap-4"
          >
            <div className="relative w-12 h-8 animate-pulse">
              <Image src="/logo/ark.svg" alt="ARK" fill className="object-contain" priority />
            </div>
            <div className="h-[2px] w-32 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="h-full w-1/2 bg-[#D4AF37]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
