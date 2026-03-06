import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TerminalSection from "@/components/TerminalSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <TerminalSection />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
