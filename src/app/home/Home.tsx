import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="relative bg-[#F9F6F3]">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
