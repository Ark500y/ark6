"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader once the page is fully ready
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 500);
    } else {
      const handleLoad = () => setTimeout(() => setLoading(false), 500);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-16 h-12 flex flex-col items-center gap-4"
          >
            <div className="relative w-12 h-8 animate-pulse">
              <Image src="/logo/ark.svg" alt="ARK" fill className="object-contain" />
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
