"use client";

import React, { useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useSectionInView } from "@/hooks/useSectionInView";

type Project = typeof projectsData[number];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 text-center mx-auto px-4 max-w-6xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">Featured Work</h2>
        <p className="text-text-secondary">Recent projects I have built from the ground up.</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            layoutId={`card-${project.title}`}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col rounded-3xl glass-panel overflow-hidden border border-text-primary/5 cursor-pointer"
          >
            <motion.div layoutId={`image-${project.title}`} className="relative h-64 w-full overflow-hidden bg-text-primary/5 border-b border-text-primary/10">
              <Image
                src={project.imageUrl}
                alt={project.title}
                quality={95}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-main to-transparent opacity-60 pointer-events-none" />
            </motion.div>

            <div className="p-6 flex flex-col grow">
              <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-bold text-text-primary group-hover:text-accent transition mb-2">
                {project.title}
              </motion.h3>
              <p className="text-text-secondary leading-relaxed mb-6 font-light text-[0.95rem] line-clamp-2">
                {project.description}
              </p>
              
              <motion.div layoutId={`tags-${project.title}`} className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    className="bg-accent/10 border border-accent/20 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-accent rounded-full font-semibold"
                    key={tagIndex}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-text-primary/5 border border-text-primary/10 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-text-secondary rounded-full font-semibold">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-bg-main/80 backdrop-blur-sm z-9990"
              />
              <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8 z-9991 pointer-events-none">
                <motion.div
                  layoutId={`card-${selectedProject.title}`}
                  className="w-full max-w-4xl bg-bg-main rounded-3xl overflow-hidden glass-panel shadow-2xl border border-text-primary/10 pointer-events-auto max-h-[90vh] flex flex-col text-left"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors z-9992"
                  >
                  <IoCloseOutline size={24} />
                </button>

                {/* Hero Image inside Modal */}
                <motion.div layoutId={`image-${selectedProject.title}`} className="relative h-64 sm:h-96 w-full shrink-0 border-b border-text-primary/10 bg-text-primary/5">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    quality={100}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-main to-transparent opacity-90" />
                </motion.div>

                {/* Content Details */}
                <div className="p-6 sm:p-10 overflow-y-auto">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                    <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-3xl sm:text-4xl font-bold text-text-primary">
                      {selectedProject.title}
                    </motion.h3>
                    <div className="flex gap-4 shrink-0">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-text-primary/5 hover:bg-text-primary/10 border border-text-primary/10 rounded-full text-text-primary transition font-medium text-sm"
                      >
                        <BsGithub size={18} />
                        GitHub
                      </a>
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-full transition font-semibold shadow-glow text-sm"
                      >
                        Live Site
                        <BsArrowUpRightSquare size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                      <h4 className="text-xl font-bold text-text-primary">Overview</h4>
                      <p className="text-text-secondary leading-relaxed text-base">
                        {selectedProject.description}
                      </p>
                      <p className="text-text-secondary leading-relaxed text-base">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-4">Technologies</h4>
                      <motion.div layoutId={`tags-${selectedProject.title}`} className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, tagIndex) => (
                          <span
                            className="bg-accent/10 border border-accent/20 px-3 py-1.5 text-[0.75rem] uppercase tracking-wider text-accent rounded-full font-semibold"
                            key={tagIndex}
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
