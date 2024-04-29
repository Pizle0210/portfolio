import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Headings({ children }: HeadingProps) {
  return (
    <h2 className="capitalize text-[clamp(1.3rem,2vw,1.6rem)] text-center mb-7 text-neutral-900 font-medium dark:text-white">
      {children}
    </h2>
  );
}
