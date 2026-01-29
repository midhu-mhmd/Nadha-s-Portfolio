"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

// 1. Explicitly type your variants to satisfy the TS compiler
const containerVars: Variants = {
  initial: { 
    transition: { staggerChildren: 0.1 } 
  },
  animate: { 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  },
};

const itemVars: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F9F6F3] text-[#C0847B] selection:bg-[#C0847B] selection:text-[#F9F6F3]">
      
      {/* 1. STRUCTURAL GRID LINES */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 sm:px-12 pointer-events-none">
        <div className="w-px h-full bg-[#C0847B]/10" />
        <div className="w-px h-full bg-[#C0847B]/10 hidden md:block" />
        <div className="w-px h-full bg-[#C0847B]/10 hidden md:block" />
        <div className="w-px h-full bg-[#C0847B]/10" />
      </div>

      {/* 2. TEXTURE & LIGHT */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#D48D7B]/20 blur-[120px]" />
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 py-12 sm:px-12">
        
        {/* TOP SECTION: Identity & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Developer / 01</span>
            <h2 className="mt-2 text-sm font-medium">Muhammed Midlaj</h2>
          </motion.div>
          
          <div className="hidden lg:block" /> 
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Availability</span>
            <div className="mt-2 flex items-center gap-2 text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C0847B] animate-pulse" />
              Open for collaboration
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Loc. 11.25°N</span>
            <h2 className="mt-2 text-sm font-medium">Kerala, India</h2>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: Bold Typography */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start gap-4 md:gap-0"
        >
          <div className="overflow-hidden">
            <motion.h1 
              variants={itemVars}
              className="font-serif text-[clamp(3rem,12vw,12rem)] italic leading-[0.85] tracking-tighter"
            >
              Building
            </motion.h1>
          </div>
          
          <div className="overflow-hidden md:ml-40 lg:ml-64">
            <motion.h1 
              variants={itemVars}
              className="font-sans text-[clamp(3rem,12vw,12rem)] font-light leading-[0.85] tracking-tighter uppercase"
            >
              Modern Flow
            </motion.h1>
          </div>
        </motion.div>

        {/* BOTTOM SECTION: Bio & Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-4"
          >
            <p className="max-w-xs text-sm leading-relaxed font-medium">
              (Index 2025) Specializing in scalable architecture and high-fidelity user experiences using the MERN stack.
            </p>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6 md:items-center">
             <Link 
                href="#projects" 
                className="group relative flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em]"
             >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C0847B]/30 transition-all group-hover:bg-[#C0847B] group-hover:text-[#F9F6F3]">
                  <svg className="h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                See Projects
             </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="md:col-span-4 flex justify-end gap-8 text-[10px] font-bold uppercase tracking-widest"
          >
            <Link href="#" className="hover:opacity-50 transition-opacity">GitHub</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">LinkedIn</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">CV</Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}