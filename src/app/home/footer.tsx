"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/midhu-mhmd" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/midhu-mhmd/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#F9F6F3] pb-12 pt-24">
      {/* 1. STRUCTURAL GRID LINES (Matching Global UI) */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 sm:px-12 pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-[#C0847B]" />
        <div className="w-[1px] h-full bg-[#C0847B] hidden md:block" />
        <div className="w-[1px] h-full bg-[#C0847B] hidden md:block" />
        <div className="w-[1px] h-full bg-[#C0847B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-12">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#C0847B]/10 pt-16">
          
          {/* BRAND IDENTITY */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="group">
              <span className="font-serif text-3xl italic tracking-tighter text-[#C0847B]">
                Midlaj.
              </span>
            </Link>
            <p className="max-w-[280px] text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed text-[#C0847B]/60">
              Full Stack Engineer specializing in secure, <br />
              multi-tenant MERN architectures and <br />
              high-fidelity Next.js interfaces.
            </p>
          </div>

          {/* SITE NAVIGATION */}
          <div className="md:col-span-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#C0847B]/40 block mb-8">
              Index
            </span>
            <nav className="flex flex-col gap-4">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#C0847B] transition-all hover:translate-x-2"
                >
                  <span className="h-[1px] w-4 bg-[#C0847B]/20 transition-all group-hover:w-8 group-hover:bg-[#C0847B]" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIALS & AVAILABILITY */}
          <div className="md:col-span-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#C0847B]/40 block mb-8">
              Network
            </span>
            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center justify-between border-b border-[#C0847B]/10 pb-2 text-xs font-bold uppercase tracking-widest text-[#C0847B] hover:border-[#C0847B] transition-colors"
                >
                  {link.label}
                  <svg className="h-3 w-3 -rotate-45 transition-transform group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-24 flex flex-col gap-8 border-t border-[#C0847B]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Copyright HUD */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C0847B]/40">
              © {currentYear} Muhammed Midlaj
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C0847B]/20">
              Personal Edition V1.0.4
            </span>
          </div>

          {/* Stack HUD */}
          <div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-[0.3em] text-[#C0847B]/40">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#C0847B]/40" />
              <span>Next.js 15</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#C0847B]/40" />
              <span>Framer Motion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#C0847B]/40" />
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Location HUD */}
          <div className="text-right">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C0847B]/40">
              Designed in Kerala, India
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}