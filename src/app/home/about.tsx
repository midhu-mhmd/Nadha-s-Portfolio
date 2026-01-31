"use client";

import { motion, HTMLMotionProps } from "framer-motion";

const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#07010E] py-24 sm:py-32 text-white">
      {/* Background: noise + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-fuchsia-600/15 blur-[120px]" />
        <div className="absolute -bottom-44 -right-40 h-140 w-140 rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute inset-0 bg-linear-to-b from-white/6 via-transparent to-black/40" />
      </div>

      {/* Subtle vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 opacity-[0.08] sm:px-12">
        <div className="h-full w-px bg-white" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="h-full w-px bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12">
        {/* Top row: label + headline */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <motion.div {...fadeUp} className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              (01) About
            </p>

            <h2 className="mt-5 font-serif text-5xl italic leading-[0.95] tracking-tight sm:text-7xl">
              Crafting{" "}
              <span className="bg-linear-to-r from-fuchsia-200 via-white to-purple-200 bg-clip-text text-transparent">
                Mobile Experiences
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              I’m a <span className="text-white/85 font-semibold">Flutter Developer</span> focused on building
              responsive Android apps with strong UI/UX polish, stable architecture,
              and real-world backend integrations.
            </p>

            {/* chips */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["Flutter", "Dart", "Provider", "Firebase", "Supabase", "REST APIs"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70 backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right small meta */}
          <motion.div {...fadeUp} className="hidden md:col-span-4 md:block text-right">
            <div className="ml-auto mb-4 h-px w-48 bg-white/10" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              Kozhikode, Kerala <br /> Working Globally
            </p>
          </motion.div>
        </div>

        {/* Main content: left glass narrative + right stack cards */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: glass narrative card */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 sm:p-10 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                Perspective
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">
                I love turning designs into smooth, high-performance experiences —
                focusing on readable code, predictable state management, and scalable patterns.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    Focus Areas
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Provider state management, local storage (Hive / SharedPreferences),
                    API integration, authentication, and clean UI systems.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    Philosophy
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Clean Architecture mindset — modular code, solid error handling,
                    and patterns (MVC/MVVM) that scale with the product.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              {/* Stats / quick highlights */}
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                  Technical Highlights
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Flutter & Dart (Responsive Android UI)",
                    "Provider State Management",
                    "Firebase Auth, Firestore & Storage",
                    "Supabase Integration & Sync",
                    "REST APIs, JSON Parsing & Error Handling",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-serif italic text-white/35">0{i + 1}</span>
                      <span className="text-sm font-semibold tracking-wide text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-[28px] border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-7 backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                  Resume
                </p>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Want the full details of my work, tools, and projects?
                </p>

                <a
                  href="/Nada-Flutter-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-black hover:bg-white/90 transition"
                >
                  Download CV
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
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
