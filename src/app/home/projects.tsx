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
  year?: string;
};

const PROJECTS: Project[] = [
  {
    title: "CRM SaaS (Flutter)",
    description:
      "Currently developing a CRM SaaS application using Flutter with Clean Architecture and Provider, featuring automatic call recording and complete student/inquiry data management. Backend uses Node.js for generating automated content and assets.",
    tech: ["Flutter", "Dart", "Provider", "Clean Architecture", "Node.js"],
    status: "In Progress",
    year: "2025",
    githubUrl: "#",
  },
  {
    title: "Movie Discovery App",
    description:
      "Movie exploration app that fetches real-time data from public REST APIs. Includes dynamic search, categorized movie sections, favorites list, and robust error handling for smooth performance on slow networks.",
    tech: ["Flutter", "REST APIs", "JSON Parsing", "Provider", "Error Handling"],
    status: "Case Study",
    year: "2025",
    githubUrl: "https://github.com/Nadayunus/api_movie_project",
  },
  {
    title: "TravelMate",
    description:
      "Social travel-sharing platform where users post experiences, upload photos, and interact via likes/comments. Built with Firebase Authentication and Supabase, using Cloud Firestore & Cloud Storage for efficient multimedia handling and real-time sync.",
    tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Cloud Storage", "Supabase"],
    status: "Case Study",
    year: "2025",
    githubUrl: "https://github.com/Nadayunus/Travel-Mate",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#07010E] py-24 sm:py-32 text-white"
    >
      {/* Background: noise + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
        <div className="absolute -bottom-44 -right-40 h-[560px] w-[560px] rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/40" />
      </div>

      {/* Vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 opacity-[0.08] sm:px-12">
        <div className="h-full w-px bg-white" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="h-full w-px bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-12">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              (02) Selected Works
            </p>

            <h2 className="mt-5 font-serif text-5xl italic leading-[0.95] tracking-tight sm:text-7xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-fuchsia-200 via-white to-purple-200 bg-clip-text text-transparent">
                Projects
              </span>
              .
              <br />
              <span className="not-italic font-sans font-light uppercase tracking-tight text-white/90">
                Flutter apps built for real users.
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="mb-4 ml-auto h-px w-48 bg-white/10" />
            <p className="max-w-sm text-sm leading-relaxed text-white/65 md:ml-auto">
              Clean Architecture, Provider state management, reliable backend
              integrations (Firebase/Supabase), and smooth UI/UX polish.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="group relative"
            >
              <div className="relative overflow-hidden border-t border-white/10 py-10 sm:py-12">
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-[60px]" />
                  <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px]" />
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
                  {/* 01 index */}
                  <div className="md:col-span-1">
                    <span className="font-serif text-2xl italic text-white/35 transition-colors group-hover:text-white/70">
                      0{i + 1}
                    </span>
                  </div>

                  {/* 02 title + meta */}
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-3xl italic tracking-tight text-white sm:text-4xl">
                      {p.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/55">
                      {p.status && <span>{p.status}</span>}
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{p.year ?? "2025"}</span>
                    </div>
                  </div>

                  {/* 03 desc + tech */}
                  <div className="md:col-span-4">
                    <p className="max-w-md text-sm leading-relaxed text-white/70">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/65 backdrop-blur-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 04 actions */}
                  <div className="md:col-span-2 md:flex md:justify-end">
                    <div className="flex items-center gap-3">
                      {p.liveUrl && (
                        <Link
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-md transition-all hover:bg-white/10"
                          aria-label="Open live project"
                        >
                          <svg
                            className="h-5 w-5 -rotate-45 transition-transform group-hover/btn:rotate-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      )}

                      {p.githubUrl && (
                        <Link
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[11px] font-bold tracking-widest text-white/80 backdrop-blur-md transition-all hover:bg-white/10"
                          aria-label="Open GitHub repository"
                        >
                          GIT
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="border-t border-white/10" />
        </div>

        {/* Footer action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 group-hover:text-white/80 transition">
              More on GitHub
            </span>
            <div className="h-12 w-px bg-white/15 transition-all group-hover:h-20" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
