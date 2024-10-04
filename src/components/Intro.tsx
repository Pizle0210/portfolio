"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSectionInView } from "@/hooks/useSection";
import { useActiveSectionContext } from "@/providers/active-section-context";
import pic from "../../public/pizle.jpg";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActive, setTimeOfLastClick } = useActiveSectionContext();
  const linkedinUrl = process.env.LINKEDIN;
  const GithubUrl = process.env.GITHUB;
  return (
    <section
      className=" space-y-10 sm:space-y-12 max-w-[50rem] mb-4 scroll-mt-[150rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.23 }}
          >
            <Image
              // src={`https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_640.jpg`}
              src={pic}
              alt="image"
              height={150}
              width={150}
              priority={true}
              quality={100}
              className="rounded-full object-cover h-32 w-32 border-white border-[0.1rem] shadow-md shadow-white dark:shadow-none dark:border-gray-200 dark:border-2"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.43,
              stiffness: "300",
              delay: 0.1,
            }}
            className="text-3xl absolute bottom-0 right-0"
          >
            👏🏼
          </motion.span>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-[clamp(1.3rem,2vw,1.9rem)] !leading-[2.5rem]"
        >
          Hello there, I'm Dolapo and welcome to my corner of the web!. With two
          years of dedicated learning and experience in{" "}
          <span className="font-bold italic">front-end development</span>. My
          main expertise lies in{" "}
          <span className="italic underline font-semibold">
            React and Next.js
          </span>{" "}
          , where I thrive in turning ideas into interactive web applications.
          Passionate about creating engaging and user-friendly experiences, I
          specialize in crafting dynamic websites and interactive
          interfaces.Explore my portfolio to see examples of my work and
          discover how I can contribute to your projects.Let's collaborate and
          build something amazing together!
        </motion.h1>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-col flex sm:flex-row justify-center sm:justify-center items-center space-y-3 sm:space-y-0 space-x-0 sm:space-x-4"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActive("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="gap-2 group bg-purple-800/70 font-medium text-white/90 rounded-full p-2 px-2 sm:px-4 outline-none focus:scale-105 hover:scale-105 active:scale-110 hover:bg-purple-800/80 hover:text-white transition ease-in-out"
          >
            Contact me here
            <ArrowForwardIcon className="opacity-60 group-hover:translate-x-1 group-hover:opacity-100 transition"/>
          </Link>
          <a
            href="/cv_dolapo.pdf"
            download={true}
            className="gap-2 group bg-white font-normal text-black rounded-full p-2 px-2 sm:px-4 outline-none focus:scale-105 hover:scale-105 active:scale-110 transition ease-in-out "
          >
            Download CV
            <FileDownloadIcon className="h-6 w-6 font-extralight text-gray-700 group-hover:translate-y-[0.2rem]" />
          </a>
          <a
            href="https://github.com/Pizle0210"
            target="_blank"
            className="bg-white p-1 border border-black/10 rounded-full transition outline-none focus:scale-105 hover:scale-105 active:scale-110 ease-in-out"
          >
            <GitHubIcon className="h-6 w-6 sm:h-8 sm:w-8 rounded-full text-slate-600 " />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            className="bg-white p-1 border border-black/10 rounded-full transition outline-none focus:scale-105 hover:scale-105 active:scale-110 ease-in-out"
          >
            <LinkedInIcon className="h-6 w-6 sm:h-8 sm:w-8 rounded-full text-blue-600 outline-none focus:scale-105 hover:scale-105 active:scale-110 transition ease-in-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
