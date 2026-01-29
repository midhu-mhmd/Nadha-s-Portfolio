"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: "Live" | "In Progress" | "Case Study";
};

const PROJECTS: Project[] = [
  {
    title: "Dripnest E-commerce",
    description:
      "Full-stack MERN e-commerce app with Razorpay payments, authentication, admin dashboard, and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://new-portfolio-rosy-rho.vercel.app/",
    githubUrl: "https://github.com/midhu-mhmd",
    status: "Case Study",
  },
  {
    title: "Multi-Clinic SaaS",
    description:
      "Multi-tenant SaaS platform with tenant-level isolation, JWT auth, RBAC, and scalable API design.",
    tech: ["MERN", "JWT", "RBAC", "Multi-Tenant"],
    status: "In Progress",
    githubUrl: "https://github.com/midhu-mhmd",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#F9F6F3] py-24 sm:py-32">
      {/* 1. STRUCTURAL GRID LINES (Matching Global UI) */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 sm:px-12 pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-[#C0847B]" />
        <div className="w-[1px] h-full bg-[#C0847B] hidden md:block" />
        <div className="w-[1px] h-full bg-[#C0847B] hidden md:block" />
        <div className="w-[1px] h-full bg-[#C0847B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-12">
        {/* HEADER: Editorial Style */}
        <div className="mb-20 flex flex-col gap-4 border-b border-[#C0847B]/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C0847B]/60 block mb-4">
              (02) Portfolio
            </span>
            <h2 className="font-serif text-5xl italic text-[#C0847B] tracking-tighter sm:text-7xl">
              Selected <span className="not-italic font-sans font-light uppercase">Works</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs font-bold uppercase tracking-[0.2em] text-[#C0847B]/60 leading-relaxed">
            Focused on scalability, security, and high-fidelity user interaction.
          </p>
        </div>

        {/* PROJECT LIST: Vertical Index Style */}
        <div className="flex flex-col">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative border-b border-[#C0847B]/10 py-12 transition-colors hover:bg-[#C0847B]/[0.02] sm:py-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-8">
                
                {/* 01. INDEX NUMBER */}
                <div className="md:col-span-1">
                  <span className="font-serif italic text-2xl text-[#C0847B]/30 transition-colors group-hover:text-[#C0847B]">
                    0{i + 1}
                  </span>
                </div>

                {/* 02. TITLE & STATUS */}
                <div className="md:col-span-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-3xl italic text-[#C0847B] sm:text-4xl">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C0847B]/60">
                        {p.status}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-[#C0847B]/30" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C0847B]/60">
                        2025
                      </span>
                    </div>
                  </div>
                </div>

                {/* 03. DESCRIPTION & TECH */}
                <div className="md:col-span-4">
                  <p className="text-sm font-medium leading-relaxed text-[#C0847B]/80 max-w-sm">
                    {p.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-[9px] uppercase tracking-widest text-[#C0847B]/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 04. ACTIONS */}
                <div className="md:col-span-3 flex md:justify-end gap-4">
                  {p.liveUrl && (
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C0847B]/20 transition-all hover:bg-[#C0847B] hover:text-[#F9F6F3]"
                    >
                      <svg className="h-5 w-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C0847B]/20 transition-all hover:bg-[#C0847B] hover:text-[#F9F6F3]"
                    >
                      <span className="font-mono text-[10px] font-bold">GIT</span>
                    </Link>
                  )}
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="https://github.com/midhu-mhmd"
            target="_blank"
            className="group flex flex-col items-center gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C0847B]/60">More on GitHub</span>
            <div className="h-12 w-[1px] bg-[#C0847B]/20 transition-all group-hover:h-20" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}