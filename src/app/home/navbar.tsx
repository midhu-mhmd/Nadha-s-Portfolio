"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about", number: "01" },
  { label: "Projects", href: "#projects", number: "02" },
  { label: "Skills", href: "#skills", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
];

// 1. Explicitly type your variants to remove IDE errors
const menuVars: Variants = {
  initial: { clipPath: "circle(0% at 95% 5%)" },
  animate: {
    clipPath: "circle(150% at 95% 5%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "circle(0% at 95% 5%)",
    transition: { duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const linkVars: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" },
  }),
  exit: (i: number) => ({
    y: 80,
    opacity: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeIn" },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        // 2. Changed z-100 to z-[100] (Tailwind needs brackets for arbitrary z-index)
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled ? "bg-[#F9F6F3]/80 backdrop-blur-md border-b border-[#C0847B]/10" : "bg-transparent"
        }`}
      >
        {/* 3. Changed max-w-350 to max-w-[1400px] */}
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 sm:px-12">
          
          {/* LOGO */}
          {/* Changed z-110 to z-[110] */}
          <Link href="/" className="group relative z-[110] flex items-center gap-2">
            <span className={`font-serif text-2xl italic tracking-tighter transition-colors duration-500 ${
              isOpen ? "text-[#F9F6F3]" : "text-[#C0847B]"
            }`}>
              Midlaj.
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-12 md:flex">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative overflow-hidden text-[10px] font-bold uppercase tracking-[0.3em] text-[#C0847B]"
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item.label}</span>
                <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full italic font-serif lowercase tracking-normal text-base">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* MENU TRIGGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative z-[110] flex items-center gap-3 pointer-events-auto outline-none"
          >
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
              isOpen ? "text-[#F9F6F3]/60" : "text-[#C0847B]/60"
            }`}>
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-1">
              <motion.div 
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`h-px w-6 transition-colors duration-500 ${isOpen ? "bg-[#F9F6F3]" : "bg-[#C0847B]"}`} 
              />
              <motion.div 
                animate={isOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }}
                className={`h-px w-6 transition-colors duration-500 ${isOpen ? "bg-[#F9F6F3]" : "bg-[#C0847B]"}`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            // Changed z-105 to z-[105]
            className="fixed inset-0 z-[105] flex flex-col bg-[#C0847B] p-6 sm:p-12 lg:p-20"
          >
            <div className="absolute inset-0 flex justify-between px-6 sm:px-12 pointer-events-none opacity-20">
                <div className="w-px h-full bg-[#F9F6F3]" />
                <div className="w-px h-full bg-[#F9F6F3] hidden md:block" />
                <div className="w-px h-full bg-[#F9F6F3]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center">
              <div className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <div key={item.label} className="overflow-hidden">
                    <motion.div
                      custom={i}
                      variants={linkVars}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-6"
                      >
                        <span className="font-mono text-sm text-[#F9F6F3]/40">({item.number})</span>
                        <span className="font-serif text-6xl italic text-[#F9F6F3] transition-transform duration-500 group-hover:translate-x-4 sm:text-8xl lg:text-9xl">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-20 flex flex-wrap gap-x-12 gap-y-4 border-t border-[#F9F6F3]/20 pt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[#F9F6F3]"
              >
                <Link href="#" className="hover:opacity-60 transition-opacity">Instagram</Link>
                <Link href="#" className="hover:opacity-60 transition-opacity">LinkedIn</Link>
                <Link href="#" className="hover:opacity-60 transition-opacity">GitHub</Link>
                <div className="ml-auto hidden sm:block text-[#F9F6F3]/40">© {new Date().getFullYear()} Midlaj Studio</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}