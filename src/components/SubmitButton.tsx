import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="gap-2 group text-sm flex justify-center items-center rounded-full bg-neutral-800 dark:bg-white dark:text-black !dark:font-bold text-white !group-hover:font-bolder  transition-all h-[3rem] w-[8rem] group-active:scale-105 disabled:opacity-50 disabled:scale-100"
      disabled={pending}
    >
      {pending ? (
        <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-0.5 text-white dark:text-black ease-in-out group-active:translate-x-1" />
        </>
      )}
    </button>
  );
}
