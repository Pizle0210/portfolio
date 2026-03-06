"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/providers/active-section-context";
import clsx from "clsx";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-50 relative flex items-center justify-center">
      <motion.div
        className="fixed top-4 w-full flex justify-center z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="flex px-4 sm:px-8 py-2 sm:py-3 rounded-full glass-panel shadow-glow backdrop-blur-xl mt-2 sm:mt-0">
          <ul className="flex w-full flex-wrap sm:flex-nowrap items-center justify-center gap-y-1 gap-x-2 sm:gap-8 text-[0.75rem] sm:text-sm font-medium text-text-secondary sm:w-initial">
            {links.map((link) => (
              <li key={link.hash} className="relative flex items-center justify-center">
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center transition hover:text-text-primary px-2 sm:px-3 py-1.5 relative z-10",
                    {
                      "text-text-primary": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-accent/10 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
