"use client";

import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/providers/active-section-context";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className="z-[99] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full -translate-x-1/2 "
      >
        <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2  py-2 sm:top-auto sm:h-[initial] sm:py-0">
          <ul className="flex items-center w-[22rem] flex-wrap justify-center gap-y-2 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, bounce: '400', type: "spring" }}
                key={link.hash}
                className={clsx(
                  `h-1/3 relative flex items-center px-3 py-3 hover:text-slate-700 transition ease-in-out`,
                  { "text-gray-800": active === link.name }
                )}
                onClick={() => {
                  setActive(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <Link href={link.hash}>{link.name}</Link>

                {link.name === active && (
                  <motion.span
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    layoutId="active"
                    className="rounded-full absolute inset-0 -z-[999] bg-neutral-200 dark:bg-neutral-400"
                  ></motion.span>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
