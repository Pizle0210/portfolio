"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { useSectionInView } from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail.action";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
    formRef.current?.reset();
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">Get in Touch</h2>
      <p className="text-text-secondary mb-12">
        I am currently available for freelance work and new opportunities. 
        Whether you have a question or just want to say hi, I will try my best to get back to you!
      </p>

      <form 
        ref={formRef}
        action={handleSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email address"
          className="h-14 px-6 rounded-2xl glass-panel border border-text-primary/10 bg-bg-main/50 focus:bg-bg-main transition outline-none focus:ring-2 focus:ring-accent/50 text-text-primary placeholder:text-text-secondary"
        />
        
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="h-52 px-6 py-4 rounded-2xl glass-panel border border-text-primary/10 bg-bg-main/50 focus:bg-bg-main transition outline-none focus:ring-2 focus:ring-accent/50 text-text-primary placeholder:text-text-secondary resize-none"
        />

        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-14 w-56 bg-text-primary text-bg-main rounded-full outline-none transition-all hover:scale-105 active:scale-95 mx-auto mt-4 font-semibold shadow-glow hover:bg-text-primary/90"
        >
          Send Message
          <FiSend className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </button>
      </form>
    </motion.section>
  );
}
