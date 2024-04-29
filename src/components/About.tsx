"use client";
import React, { useEffect } from "react";
import Headings from "./Headings";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/providers/active-section-context";
import { useSectionInView } from "@/hooks/useSection";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="space-y-4 max-w-[50rem] mt-4 text-center sm:mb-32 scroll-mt-28"
      id="about"
      ref={ref}
    >
      <Headings>About me</Headings>
      <div className="space-y-8">
        <p className="text-[clamp(1rem,2vw,1.3rem)] !leading-[1.9rem] dark:text-white">
          With a background in{" "}
          <span className="italic font-semibold">Agricultural Science</span> and
          a passion for technology, I've embarked on a journey to become a
          skilled{" "}
          <span className="font-semibold italic">front-end developer</span>.
          Over the past two years, I've dedicated myself to mastering the art of
          web development, honing my skills and crafting immersive digital
          experiences along the way. Driven by a curiosity for how things work
          and a desire to create meaningful solutions, I've immersed myself in
          the world of coding. From designing elegant user interfaces to
          implementing complex functionality, I've embraced the challenges and
          opportunities that come with building modern web applications.
        </p>
        <p className="text-[clamp(1rem,2vw,1.3rem)] !leading-[1.9rem] dark:text-white">
          {" "}
          My toolkit includes a range of technologies, including{" "}
          <span className="font-bold">
            HTML, CSS, JavaScript, React, Next.js, Node.js, and MongoDB
          </span>{" "}
          . With these tools at my disposal, I've had the pleasure of bringing
          various projects to life, each one presenting its own unique set of
          challenges and rewards. Outside of coding, you can often find me
          exploring the latest tech trends. I believe in the power of technology
          to transform lives and am excited to be a part of an industry that is
          constantly evolving and innovating. Thank you for taking the time to
          learn more about me. I'm always eager to connect with fellow tech
          enthusiasts and explore new opportunities for growth and
          collaboration. Feel free to reach out to me [provide contact
          information] if you'd like to chat further or collaborate on a project
          together. Let's build something amazing!
        </p>
      </div>
    </motion.section>
  );
}
