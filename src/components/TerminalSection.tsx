"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

const COMMANDS = {
  help: "Available commands: help, whoami, skills, experience, clear, sudo",
  whoami: "Dolapo Fajobi - Software Engineer. Passionate about building scalable, high-performance web applications using React, Next.js, and Python.",
  skills: "JavaScript, TypeScript, Python, React, Next.js, Angular, Django, Flask, Node.js, Docker, PostgreSQL.",
  experience: "Freelance SE (2025-Present) | John Wiley & Sons (2021-2024) | Mejuri (2020-2021) | Tranarc (2018-2019).",
  sudo: "Nice try! This incident will be reported. 🚨",
};

export default function TerminalSection() {
  const { ref } = useSectionInView("About", 0.5);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <span>
          Welcome to DolapoOS (v1.0.0). Type <span className="text-accent">'help'</span> to see available commands.
        </span>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll if history has more than the initial welcome message
    if (bottomRef.current && history.length > 1) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: React.ReactNode = "";
    if (COMMANDS[cmd as keyof typeof COMMANDS]) {
      output = <span className="text-text-secondary">{COMMANDS[cmd as keyof typeof COMMANDS]}</span>;
    } else {
      output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <section ref={ref} id="about" className="mb-28 max-w-3xl sm:mb-40 scroll-mt-28 mx-auto w-full px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-text-primary text-center sm:text-4xl mb-8">About Me</h2>

        <div className="w-full rounded-xl overflow-hidden glass-panel border border-text-primary/10 bg-bg-main/80 shadow-2xl font-mono text-sm sm:text-base relative z-20">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-text-primary/5 border-b border-text-primary/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-xs text-text-secondary/70 font-semibold select-none">
              dolapo_fajobi@portfolio:~
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-4 sm:p-6 h-100 overflow-y-auto cursor-text text-text-primary"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-4">
                {entry.command && (
                  <div className="flex gap-2 text-accent mb-1">
                    <span className="text-green-400">ade@portfolio</span>
                    <span className="text-text-secondary">~ $</span>
                    <span className="text-text-primary">{entry.command}</span>
                  </div>
                )}
                <div className="leading-relaxed">
                  {entry.output}
                </div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex gap-2 items-center mt-2">
              <span className="text-green-400 font-semibold shrink-0">ade@portfolio</span>
              <span className="text-text-secondary shrink-0">~ $</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 ring-0 text-text-primary placeholder:text-text-secondary/50"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} className="text-2xl tracking-widest" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
