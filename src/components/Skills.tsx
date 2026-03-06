"use client";

import React, { useRef } from "react";
import { skillsData } from "@/lib/data";
import { motion, useAnimationFrame } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  const containerRef = useRef<HTMLDivElement>(null);

  // Exact 15-node coordinate matrix shaping an Apple silhouette
  // Center is roughly 50,50.
  // 0 is the leaf. The remaining 14 form the body and the bite on the right.
  const appleCoordinates = [
    { top: "5%", left: "60%" }, // 0: Leaf (offset right, slanted up)
    { top: "25%", left: "35%" }, // 1: Top left lobe
    { top: "25%", left: "65%" }, // 2: Top right lobe
    { top: "32%", left: "50%" }, // 3: Top center indent
    { top: "45%", left: "20%" }, // 4: Mid-upper left edge
    { top: "45%", left: "50%" }, // 5: Apple Core center
    { top: "40%", left: "85%" }, // 6: Mid-upper right edge (bite top)
    { top: "65%", left: "22%" }, // 7: Lower left edge
    { top: "65%", left: "45%" }, // 8: Lower center-left fill
    { top: "65%", left: "75%" }, // 9: Lower right edge (below bite)
    { top: "82%", left: "32%" }, // 10: Bottom left lobe
    { top: "82%", left: "68%" }, // 11: Bottom right lobe
    { top: "90%", left: "45%" }, // 12: Bottom center left dip
    { top: "90%", left: "55%" }, // 13: Bottom center right dip
    { top: "55%", left: "60%" }, // 14: Center right fill
  ];

  const getFloatingAnimation = (index: number) => {
    const duration = 3 + (index % 3);
    const yOffset = 5 + (index % 3);

    return {
      y: [0, -yOffset, 0, yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: index * 0.2, // Stagger
      },
    };
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-5xl scroll-mt-28 text-center sm:mb-40 px-4 mx-auto w-full relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">
          Technical Stack
        </h2>
        <p className="text-text-secondary">
          Technologies I use to bring ideas to life. (Grab and drag them!)
        </p>
      </motion.div>

      {/* Constraints container for dragged elements */}
      <div
        ref={containerRef}
        className="w-full h-125 sm:h-150 relative max-w-150 mx-auto"
      >
        {skillsData.map((skill, index) => {
          const coords = appleCoordinates[index % appleCoordinates.length];
          return (
            <motion.div
              key={index}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, zIndex: 50, cursor: "grabbing" }}
              whileDrag={{ scale: 1.2, zIndex: 50, cursor: "grabbing" }}
              animate={getFloatingAnimation(index)}
              className={`absolute bg-white/50 dark:bg-black/50 backdrop-blur-[0.5rem] border border-black/5 dark:border-white/10 rounded-full px-4 py-2 sm:px-6 sm:py-3 cursor-grab tracking-wide font-medium shadow-sm text-sm sm:text-base ${index === 0 ? "text-green-600 dark:text-green-400 border-green-500/30" : "text-gray-800 dark:text-gray-200"}`}
              style={{
                top: coords.top,
                left: coords.left,
                transform: `translate(-50%, -50%) ${index === 0 ? "rotate(45deg)" : ""}`,
                zIndex: (index % 10) + 10,
              }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
