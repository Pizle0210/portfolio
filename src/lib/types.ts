import { projectsData } from "./data";

export type SectionName = "Experience" | "Projects" | "Skills";
export type ProjectProps = (typeof projectsData)[number];
