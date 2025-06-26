import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    company: "Tranarc Academy",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer",
    company: "Tranarc Solutions",
    location: "Ibadan",
    description: "I have been working as a frontend developer for over 3 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - ",
  },
] as const;

// project
export const projectsData = [
  {
    title: "Syntax Studio",
    description:
      "An Interactive Code Editor for Practicing Coding Skills built for developers.",
    tags: [
      "Next.js",
      "React",
      "Convex",
      "Zustand",
      "Framer Motion",
      "Tailwind"
    ],
    imageUrl: "/syntax.png",
    url: "https://syntax-studio-rho.vercel.app/"
  },
  {
    title: "Spotix",
    description:
      "Spotix is an event ticketing application for discovering, purchasing, and managing event tickets. Built with Next.js and powered by Convex DB, the app ensures real-time updates. It features a robust queuing system to manage high-demand ticket sales effectively.",
    tags: ["Next.js", "Tailwind", "Convex", "Stripe"],
    imageUrl: "/spotix.png",
    url: "https://spotix-chi.vercel.app/"
  },
  {
    title: "chatApp",
    description:
      "An interactive chat application designed for seamless communication between users in real time. Built with React and Tailwind CSS for modern design and responsiveness, it integrates advanced features such as file sharing, and customizable themes.",
    tags: ["Mongodb", "express", "React", "Tailwind", "Zustand", "Socket.IO"],
    imageUrl: "/chatApp.png",
    url: "https://chat-app-oc0r.onrender.com/"
  },
  {
    title: "K-Fashion Store",
    description: "A Mini e-commerce web fashion store.",
    tags: ["Sanity", "React", "Next.js", "Tailwind"],
    imageUrl: "/fashion.png",
    url: "https://kampala-e-commerce.vercel.app/"
  },
  {
    title: "Kampala Store",
    description: "A Mini e-commerce web to shop gadgets.",
    tags: ["Mongodb", "express", "React", "Nodejs", "Tailwind", "redux"],
    imageUrl: "/kampala.png",
    url: "https://kampala.onrender.com"
  }
] as const;

// skills
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Astro",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Linux",
  "Framer Motion",
] as const;
