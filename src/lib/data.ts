import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import tmdb from "../../public/tmdb.png";
import kampalaStore from "../../public/one.png";
import weatherDataImage from "../../public/weather.png";

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
    title: "Tranarc bootcamp",
    location: "Ibadan,Oyo State",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer Intern",
    location: "Ibadan,Oyo State",
    description: "I work as a front-end developer intern for 1 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - ",
  },
] as const;

export const projectsData = [
  {
    title: "TMDB Clone",
    description: "A TMDB clone",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: tmdb,
  },
  {
    title: "Weather App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
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
  "Framer Motion",
] as const;
