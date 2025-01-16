"use client";
import { projectsData } from "@/lib/data";
import Headings from "./Headings";
import React from "react";
import Project from "./Project";
import { useSectionInView } from "@/hooks/useSection";

export default function Projects() {
  const { ref } = useSectionInView("Projects",0.5);
  return (
    <section className="px-10 scroll-mt-28 mt-16 mb-[13rem]" id="projects" ref={ref}>
      <Headings>Projects</Headings>
      {projectsData.map((project, idx) => (
        <React.Fragment key={idx}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
