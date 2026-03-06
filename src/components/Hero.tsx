"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import ShapesScene from "./Shapes";
import { useSectionInView } from "@/hooks/useSectionInView";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const containerRef = useRef<HTMLElement>(null);

  // Create parallax for the background geometric shapes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // The shapes will move down slower than the page scrolls
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // The content will fade out and scale down slightly as it scrolls away
  const opacityParallax = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={(node) => {
        // Assign to both refs
        ref(node);
        if (node) {
          (containerRef as React.MutableRefObject<HTMLElement>).current = node;
        }
      }}
      id="home"
      className="relative mb-28 max-w-200 text-center sm:mb-0 scroll-mt-400 min-h-screen flex flex-col justify-center items-center mx-auto px-4 w-full"
    >
      {/* Attach parallax to the background scene */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <ShapesScene />
      </motion.div>

      <motion.div
        style={{ opacity: opacityParallax, scale: scaleParallax }}
        className="flex flex-col items-center justify-center relative z-10"
      >
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30 shadow-glow"
          >
            <span className="text-4xl font-bold text-accent">DF</span>
          </motion.div>
        </div>

        <motion.h1
          className="mb-8 mt-4 md:text-7xl text-5xl font-extrabold leading-[1.1]! tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-text-primary">Dolapo Fajobi</span>
          <span className="block text-gradient mt-2 py-2">
            Software Engineer
          </span>
        </motion.h1>

        <motion.p
          className="mb-10 text-lg md:text-xl text-text-secondary max-w-2xl font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building scalable, high-performance web applications with React,
          Next.js, and Python. Passionate about beautiful interfaces and robust
          system architecture.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-sm md:text-base font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <MagneticButton>
          <Link
            href="#contact"
            className="group bg-text-primary text-bg-main px-7 py-3 flex items-center gap-2 rounded-full outline-none transition-transform hover:scale-105 active:scale-95 font-semibold"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </MagneticButton>

        <MagneticButton>
          <a
            className="group glass-panel sm:bg-transparent px-7 py-3 flex items-center gap-2 rounded-full outline-none transition hover:bg-text-primary/10 hover:text-text-primary"
            href="/dolapo_fajobi.se.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </MagneticButton>

        <div className="flex gap-4">
          <MagneticButton>
            <a
              className="glass-panel p-4 text-text-secondary flex items-center gap-2 rounded-full outline-none transition hover:text-text-primary hover:bg-text-primary/10 hover:scale-110 active:scale-95"
              href="https://linkedin.com/in/dolapo-faj0210"
              target="_blank"
            >
              <BsLinkedin size={20} />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              className="glass-panel p-4 text-text-secondary flex items-center gap-2 rounded-full outline-none transition hover:text-text-primary hover:bg-text-primary/10 hover:scale-110 active:scale-95"
              href="https://github.com/pizle0210"
              target="_blank"
            >
              <FaGithubSquare size={22} />
            </a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
