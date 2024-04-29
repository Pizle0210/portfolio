"use client";
import { motion } from "framer-motion";
export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22, type: "spring", stiffness: "200" }}
      className="bg-neutral-400/50 my-16 h-20 w-[0.20rem] rounded-full hidden sm:flex "
    ></motion.div>
  );
}
