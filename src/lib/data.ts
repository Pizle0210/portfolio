import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import kampalaStore from "../../public/one.png";
import weatherDataImage from "../../public/weather.png";
import fashion from "../../public/kam2.png";

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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer Intern",
    company: "Tranarc Solutions",
    location: "Ibadan",
    description: "I worked as an intern for a year",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Junior Fronend Developer",
    company: "Tranarc Solutions",
    location: "Ibadan",
    description: "I work as a frontend developer for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - ",
  },
] as const;


// project
export const projectsData = [
  {
    title: "K-Fashion Store",
    description: "A Mini e-commerce web fashion store.",
    tags: ["Sanity", "React", "Next.js", "Tailwind"],
    imageUrl: fashion,
  },
  {
    title: "Weather App",
    description:
      "A responsive web app built with React and Next.js that provides real-time weather updates.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: weatherDataImage,
  },
  {
    title: "Kampala Store",
    description: "A Mini e-commerce web to shop gadgets.",
    tags: ["Mongodb", "express", "React", "Nodejs", "Tailwind", "redux"],
    imageUrl: kampalaStore,
  },
] as const;


// skills
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Linux",
  "Framer Motion",
] as const;
