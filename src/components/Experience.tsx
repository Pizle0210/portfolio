"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  return (
    <section ref={ref} id="experience" className="mb-28 max-w-200 sm:mb-40 scroll-mt-28 mx-auto w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">Professional Experience</h2>
        <p className="text-text-secondary">A timeline of my career journey so far.</p>
      </motion.div>

      <div className="relative border-l border-text-primary/10 ml-3 md:ml-6 space-y-12">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-12"
          >
            <span className="absolute -left-1.25 top-1 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg-main" />
            
            <div className="glass-panel p-6 rounded-2xl hover:bg-text-primary/5 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm font-medium">{item.company} • {item.location}</p>
                </div>
                <span className="px-3 py-1 bg-text-primary/10 text-text-primary text-xs font-semibold rounded-full whitespace-nowrap self-start">
                  {item.date}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed font-light text-[0.95rem]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
