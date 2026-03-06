import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    company: "Freelance",
    location: "Remote",
    description:
      "Engineered high-performance web applications tailored to specific business requirements, delivering bespoke digital solutions for a diverse portfolio of clients. Championed scalable frontend architecture utilizing React and TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
  },
  {
    title: "Frontend Developer",
    company: "Tranarc Solutions",
    location: "On-site",
    description:
      "Led the comprehensive overhaul of legacy systems into a modern React-based stack, orchestrating a complete digital transformation that modernized the entire user interface and core application layer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Aug 2024",
  },
  {
    title: "Student",
    company: "Tranarc Academy",
    location: "On-site",
    description:
      "Graduated after 6 months of intensive study. I immediately transitioned into a front-end developer role.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
] as const;

// project
export const projectsData = [
  {
    title: "AI Job Application Assistant",
    description:
      "An AI Job Application Assistant that helps you apply for jobs with ease.",
    fullDescription:
      "A comprehensive platform that streamlines the job application process. Users can generate highly tailored cover letters leveraging OpenAI's Models, manage auto-populated job applications, and receive dynamic market insights to adjust their strategy.",
    tags: [
      "Next.js",
      "React",
      "AI",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "Tailwind",
    ],
    imageUrl: "/ai-job.png",
    url: "https://ai-job-application-assistant-v1.vercel.app/",
    github: "https://github.com",
  },
  {
    title: "Syntax Studio",
    description:
      "An Interactive Code Editor for Practicing Coding Skills built for developers.",
    fullDescription:
      "Syntax Studio is an interactive, browser-based code editing environment. It features real-time syntax highlighting, live execution feedback, and customizable themes, allowing developers of all levels to practice and refine their algorithms directly in the browser.",
    tags: [
      "Next.js",
      "React",
      "Convex",
      "Zustand",
      "Framer Motion",
      "Tailwind",
    ],
    imageUrl: "/syntax.png",
    url: "https://syntax-studio-rho.vercel.app/",
    github: "https://github.com",
  },
  {
    title: "Spotix",
    description:
      "Spotix is an event ticketing application for discovering, purchasing, and managing event tickets.",
    fullDescription:
      "Built with Next.js and powered by Convex DB, the app ensures real-time updates. It features a robust queuing system to manage high-demand ticket sales effectively and integrates Stripe for seamless payment processing.",
    tags: ["Next.js", "Tailwind", "Convex", "Stripe"],
    imageUrl: "/spotix.png",
    url: "https://spotix-chi.vercel.app/",
    github: "https://github.com",
  },
] as const;

// skills
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "TypeScript",
  "Astro",
  "Node.js",
  "Python",
  "Redux",
  "Zustand",
  "Linux",
  "Framer Motion",
] as const;
