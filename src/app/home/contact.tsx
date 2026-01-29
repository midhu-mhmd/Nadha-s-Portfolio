"use client";

import { useState, useEffect } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

const CONTACT = {
  email: "midhumidlaj776@gmail.com",
  phone: "+91 9037086721",
  linkedin: "https://www.linkedin.com/in/midhu-mhmd/",
  github: "https://github.com/midhu-mhmd",
};

// 1. Explicitly type the animation object for TypeScript
const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact() {
  // 2. Hydration Fix: State for local time
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const timer = setInterval(updateTime, 10000); // Update every 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="relative w-full bg-[#F9F6F3] py-24 sm:py-32">
      {/* STRUCTURAL GRID LINES */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 sm:px-12 pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-[#C0847B]" />
        <div className="w-[1px] h-full bg-[#C0847B] hidden md:block" />
        <div className="w-[1px] h-full bg-[#C0847B] hidden md:block" />
        <div className="w-[1px] h-full bg-[#C0847B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-12">
        {/* SECTION HEADER */}
        <motion.div {...fadeUp} className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C0847B]/60 block mb-6">
            (03) Interaction
          </span>
          <h2 className="font-serif text-6xl italic text-[#C0847B] leading-[0.85] tracking-tighter sm:text-8xl lg:text-9xl">
            Let’s Build <br />
            <span className="not-italic font-sans font-light uppercase">Something Great.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT: INFORMATION HUD */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-4 flex flex-col justify-between gap-12"
          >
            <div className="space-y-12">
              <div className="group">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/50 block mb-2">Electronic Mail</span>
                <a href={`mailto:${CONTACT.email}`} className="font-serif text-2xl italic text-[#C0847B] hover:opacity-60 transition-opacity">
                  {CONTACT.email}
                </a>
              </div>

              <div className="group">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/50 block mb-2">Digital Profiles</span>
                <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4">
                  {["LinkedIn", "GitHub"].map((link) => (
                    <Link 
                      key={link} 
                      href={link === "LinkedIn" ? CONTACT.linkedin : CONTACT.github}
                      target="_blank"
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C0847B] relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-[#C0847B]/20 hover:after:bg-[#C0847B] transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-[#C0847B]/10">
              <p className="text-xs font-medium leading-relaxed text-[#C0847B]/60 uppercase tracking-widest">
                Currently open to <br /> full-stack opportunities <br /> for Q1—Q2 2026.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: MINIMAL FORM */}
          <motion.div 
            {...fadeUp}
            className="lg:col-span-8"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="relative border-b border-[#C0847B]/20 py-4 focus-within:border-[#C0847B] transition-colors">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/50">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent pt-2 text-[#C0847B] placeholder:text-[#C0847B]/20 outline-none font-medium"
                />
              </div>

              <div className="relative border-b border-[#C0847B]/20 py-4 focus-within:border-[#C0847B] transition-colors">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/50">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent pt-2 text-[#C0847B] placeholder:text-[#C0847B]/20 outline-none font-medium"
                />
              </div>

              <div className="relative border-b border-[#C0847B]/20 py-4 focus-within:border-[#C0847B] transition-colors md:col-span-2">
                <label className="font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/50">Project Inquiry</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your vision..."
                  className="w-full bg-transparent pt-2 text-[#C0847B] placeholder:text-[#C0847B]/20 outline-none font-medium resize-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-between items-center mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#C0847B]/40 max-w-[200px]">
                    Average response time: <br /> 24 hours
                  </p>
                  <button
                    type="button"
                    className="group relative flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-[#C0847B]"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C0847B]/30 transition-all group-hover:bg-[#C0847B] group-hover:text-[#F9F6F3]">
                      <svg className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* FOOTER STRIP */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#C0847B]/10 pt-12">
            <span className="font-serif italic text-xl text-[#C0847B]">Midlaj.</span>
            <div className="flex gap-12 font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/40">
                {/* 3. Render time only after mount to prevent mismatch */}
                <span>Local Time: {mounted ? `${time} IST` : "Loading..."}</span>
                <span className="hidden sm:block">© {new Date().getFullYear()} Edition</span>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[9px] font-bold uppercase tracking-widest text-[#C0847B] hover:opacity-50 transition-opacity"
            >
                Back to Top ↑
            </button>
        </div>
      </div>
    </section>
  );
}