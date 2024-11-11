"use client";
import React, { useRef } from "react";
import Headings from "./Headings";
import { useSectionInView } from "@/hooks/useSection";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/sendEmails";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const messageRef = useRef<any>("");
  const emailRef = useRef<any>("");

  const sectionProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.3, duration: 1 },
    viewport: { once: true },
    ref: ref,
    id: "contact",
    className: "scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,36rem)]",
  };

  const handleFormReset = () => {
    messageRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <motion.section {...sectionProps}>
      <Headings>Contact</Headings>
      <p className="text-slate-600 text-center sm:text-start -mt-5 mb-7 dark:text-white">
        Contact me directly at{" "}
        <a
          href="mailto:ade_fs@outlook.com"
          className="cursor-pointer hover:underline text-gray-800 dark:text-slate-50 dark:hover:text-slate-200 hover:text-gray-800/70"
        >
          fajobiadedoyin@hotmail.com
        </a>{" "}
        or through this form below.
      </p>
      <form
        className="flex flex-col space-y-5 group"
        action={async (formData) => {
          try {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success(`Email sent successfully`);
            handleFormReset();
          } catch (error) {
            toast.error("An error occurred. Please try again later.");
          }
        }}
      >
        <input
          type="email"
          name="sender"
          ref={emailRef}
          maxLength={500}
          placeholder="email"
          required
          className="rounded-md outline-none dark:text-black  focus:outline-none focus:border-0 focus:ring-1 focus:ring-gray-500"
        />
        <textarea
          ref={messageRef}
          name="message"
          required
          maxLength={3000}
          id="message"
          placeholder="Leave message"
          className="text-stone-700 rounded-md outline-none h-[10rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-gray-500"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
