import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import kampalaStore from "../../public/one.png";
import weatherDataImage from "../../public/weather.png";
import fashion from "../../public/kam2.png";
import chat from "../../public/chatApp.png";
import spotixImg from "../../public/spot1.png";

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
// project
export const projectsData = [
  {
    title: "Spotix",
    description:
      "Spotix is an event ticketing application for discovering, purchasing, and managing event tickets. Built with Next.js and powered by Convex DB, the app ensures real-time updates. It features a robust queuing system to manage high-demand ticket sales effectively.",
    tags: ["Next.js", "Tailwind", "Convex", "Stripe"],
    imageUrl: spotixImg,
    url: "https://spotix-chi.vercel.app/"
  },
  {
    title: "chatApp",
    description:
      "An interactive chat application designed for seamless communication between users in real time. Built with React and Tailwind CSS for modern design and responsiveness, it integrates advanced features such as file sharing, and customizable themes.",
    tags: ["Mongodb", "express", "React", "Tailwind", "Zustand", "Socket.IO"],
    imageUrl: chat,
    url: "https://chat-app-oc0r.onrender.com/"
  },
  {
    title: "K-Fashion Store",
    description: "A Mini e-commerce web fashion store.",
    tags: ["Sanity", "React", "Next.js", "Tailwind"],
    imageUrl: fashion,
    url: "https://kampala-e-commerce.vercel.app/"
  },
  {
    title: "Kampala Store",
    description: "A Mini e-commerce web to shop gadgets.",
    tags: ["Mongodb", "express", "React", "Nodejs", "Tailwind", "redux"],
    imageUrl: kampalaStore,
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
