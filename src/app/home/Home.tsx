import ScrollReveal from "@/components/ScrollReveal"; // Use @ alias for cleaner paths
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="relative bg-[#F9F6F3]">
      {/* 1. Hero: Animates on load, not on scroll */}
      <Hero /> 
      
      {/* 2. Scroll-Revealed Sections */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* Adding a slight delay to the middle section for visual pacing */}
      <ScrollReveal delay={0.1}>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}