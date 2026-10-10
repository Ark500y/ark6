"use client";

import React, { useEffect, useState } from "react";

export function LiveSargodhaTime() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Sargodha is PKT (Asia/Karachi, UTC+5)
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setTimeStr(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/80 font-mono">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
      </span>
      <span>Sargodha, PK</span>
      <span className="text-white/30">•</span>
      <span className="text-[#D4AF37] font-semibold">{timeStr || "12:00 PM"} PKT</span>
    </div>
  );
}
