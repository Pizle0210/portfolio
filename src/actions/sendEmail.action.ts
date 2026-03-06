"use server";

import { Resend } from "resend";
import React from "react";
import Contact_Email from "@/email/Contact_Email";

// Use a fallback dummy key during development if .env.local hasn't loaded yet
const resend = new Resend(
  process.env.RESEND_API_KEY || "re_dummy_fallback_key",
);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // Simple server-side validation
  if (
    !senderEmail ||
    typeof senderEmail !== "string" ||
    senderEmail.length > 500
  ) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!message || typeof message !== "string" || message.length > 5000) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fajobiadedoyin@hotmail.com",
      subject: "Message from Portfolio Contact Form",
      replyTo: senderEmail,
      react: React.createElement(Contact_Email, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong sending the email",
    };
  }
};
