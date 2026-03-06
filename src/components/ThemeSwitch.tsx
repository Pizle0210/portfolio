"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed bottom-5 right-5 w-12 h-12" />;

  return (
    <button
      className="fixed bottom-5 right-5 bg-bg-surface w-12 h-12 bg-opacity-80 backdrop-blur-sm border border-white/10 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all text-text-primary z-50 hover:bg-bg-surface-hover"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
