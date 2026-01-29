import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer /> 
    </main>
  );
}