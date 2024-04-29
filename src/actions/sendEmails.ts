"use server";
import Contact_Email from "@/email/Contact_Email";
import { getErrorMessage } from "@/utils/errorHandler";
import { validateString } from "@/utils/helper";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("sender");
  const message = formData.get("message");
  // validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: `Invalid email`,
    };
  }
  if (!validateString(message, 3000)) {
    return {
      error: `Invalid message`,
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Pizle<onboarding@resend.dev>",
      to: "fajobiadedoyin@hotmail.com",
      subject: "hello Fajobi",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(Contact_Email, {
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error: unknown) {
    error: getErrorMessage(error);
  }
  return {
    data
  };
};
