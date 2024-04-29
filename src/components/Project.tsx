"use client";
import { projectsData } from "@/lib/data";
import { ProjectProps } from "@/lib/types";
// import { useActiveSectionContext } from "@/providers/active-section-context";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const animateRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: animateRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);


  return (
    <motion.section
      ref={animateRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="space-y-2 rounded-lg bg-gray-200 max-w-[45rem] relative border border-black/8 overflow-hidden sm:pr-10 sm:h-[20rem] mb-4 sm:mb-6 last:mb-0 group hover:bg-gray-300"
    >
      <div className="p-5 sm:p-7  pb-7 sm:pr-3 sm:pt-8 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-[1.4rem] font-medium dark:text-black">{title}</h3>
        <p className="leading-5 text-gray-600 dark:text-black/70">{description}</p>
        <ul className="flex mt-2 flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-black/[0.6] text-white font-normal uppercase text-[clamp(0.4rem,2vw,0.7rem)] rounded-full px-3 p-1 tracking-wider dark:bg-black/70 dark:font-bold"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={100}
        priority
        className="hidden sm:block absolute top-10 -right-44 w-[33.25rem] rounded-t-lg shadow-2xl  group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.08] transition"
      />
    </motion.section>
  );
}
