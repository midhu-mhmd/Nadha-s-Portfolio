"use client";

import { motion, HTMLMotionProps } from "framer-motion";

// 1. Define the type for the animation object to satisfy the spread operator {...fadeUp}
const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#F9F6F3] py-24 sm:py-32">
      {/* 1. STRUCTURAL GRID LINES */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 sm:px-12 pointer-events-none opacity-10">
        <div className="w-px h-full bg-[#C0847B]" />
        <div className="w-px h-full bg-[#C0847B] hidden md:block" />
        <div className="w-px h-full bg-[#C0847B] hidden md:block" />
        <div className="w-px h-full bg-[#C0847B]" />
      </div>

      {/* 2. Fixed max-w-350 to max-w-[1400px] */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-12">
        {/* HEADER AREA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20">
          <motion.div {...fadeUp} className="md:col-span-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C0847B]/60 block mb-4">
              (01) Perspective
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl italic text-[#C0847B] leading-[0.9] tracking-tighter">
              Engineering <br />
              <span className="not-italic font-sans font-light uppercase tracking-tighter">Digital Resilience.</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-4 text-right hidden md:block">
             <div className="h-[1px] w-full bg-[#C0847B]/20 mb-4" />
             <p className="text-[10px] font-bold uppercase tracking-widest text-[#C0847B]/60">
               Based in Kerala, India <br /> Working Globally
             </p>
          </motion.div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Narrative Text */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            <p className="text-xl sm:text-2xl leading-relaxed text-[#C0847B]/90 font-medium">
              I’m a <span className="italic font-serif">MERN Stack Developer</span> who
              enjoys building scalable, secure, and user-focused web
              applications. I work across the full stack — from designing clean
              frontend interfaces to developing robust backend APIs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#C0847B]/10 pt-10">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0847B]/50">Focus Areas</span>
                <p className="text-sm leading-relaxed text-[#C0847B]/80">
                  Authentication, Role-Based Access Control (RBAC), multi-tenant
                  architectures, and high-performance RESTful APIs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0847B]/50">Philosophy</span>
                <p className="text-sm leading-relaxed text-[#C0847B]/80">
                  Writing maintainable code and following clean architecture principles 
                  to ensure long-term product scalability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Highlights */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#C0847B]/20 bg-white/40 p-8 sm:p-10 backdrop-blur-sm shadow-sm">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C0847B]/60 mb-8">
                Technical Highlights
              </h3>
              
              <ul className="space-y-6">
                {[
                  "Full Stack Development (MERN & Next.js)",
                  "Secure Auth & Authorization",
                  "Clean UI with Tailwind CSS",
                  "REST API Design & Integration",
                  "Scalable Codebases"
                ].map((item, i) => (
                  <li key={i} className="group flex items-center gap-4 border-b border-[#C0847B]/5 pb-4 last:border-0">
                    <span className="font-serif italic text-lg text-[#C0847B]/30 group-hover:text-[#C0847B] transition-colors">0{i+1}</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-[#C0847B]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#C0847B] bg-[#C0847B] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#F9F6F3] transition-all hover:bg-transparent hover:text-[#C0847B]"
                >
                  <span className="relative z-10">Download CV</span>
                  <svg className="h-4 w-4 relative z-10 transition-transform group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}