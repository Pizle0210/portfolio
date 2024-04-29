"use client";
import React, { useEffect, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="transition-all fixed bottom-16 right-6 rounded-full w-7 h-7 dark:bg-white bg-purple-100 items-center flex p-6 justify-center backdrop-blur-[0.5rem] border border-white hover:scale-[1.10] active:scale-125 cursor-pointer"
    >
      {theme === "light" ? (
        <LightModeOutlinedIcon className="text-black" />
      ) : (
        <DarkModeOutlinedIcon className="text-black" />
      )}
    </button>
  );
}
