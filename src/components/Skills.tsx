"use client";
import Headings from "./Headings";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSection";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * idx },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[50rem] scroll-mt-28 mb-40 text-center"
    >
      <Headings>My Skills</Headings>
      <ul className="flex items-center flex-wrap justify-center text-slate-600 sm:text-lg gap-2 md:gap-5">
        {skillsData.map((skill, idx) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            whileInView='animate'
            custom={idx}
            key={idx}
            className="border bg-white p-1 px-2 rounded-lg "
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
