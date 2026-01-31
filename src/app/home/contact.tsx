"use client";

import { useEffect, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

const CONTACT = {
  name: "Nada",
  email: "nadayunuseng@gmail.com",
  linkedin: "https://www.linkedin.com/in/nada-yunus-eng-/",
  github: "https://github.com/Nadayunus",
};

const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
};

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#07010E] py-24 sm:py-32 text-white"
    >
      {/* Background: noise + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-fuchsia-600/15 blur-[120px]" />
        <div className="absolute -bottom-44 -right-40 h-140 w-140 rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute inset-0 bg-linear-to-b from-white/6 via-transparent to-black/40" />
      </div>

      {/* Vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 opacity-[0.08] sm:px-12">
        <div className="h-full w-px bg-white" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="h-full w-px bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              (04) Contact
            </p>

            <h2 className="mt-5 font-serif text-5xl italic leading-[0.95] tracking-tight sm:text-7xl">
              Let’s Build{" "}
              <span className="bg-linear-to-r from-fuchsia-200 via-white to-purple-200 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="mb-4 ml-auto h-px w-48 bg-white/10" />
            <p className="max-w-sm text-sm leading-relaxed text-white/65 md:ml-auto">
              Open to Flutter opportunities, freelance builds, and product collaborations.
            </p>
          </div>
        </motion.div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left HUD */}
          <motion.div {...fadeUp} className="lg:col-span-4">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                Contact HUD
              </p>

              <div className="mt-7 space-y-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 inline-block font-serif text-2xl italic text-white/90 hover:text-white transition"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    Profiles
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {[
                      { label: "LinkedIn", href: CONTACT.linkedin },
                      { label: "GitHub", href: CONTACT.github },
                    ].map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold text-white/70 backdrop-blur-md hover:bg-white/10 hover:text-white transition"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                  Availability
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
                  Open for opportunities
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Typical response: <span className="text-white/80">within 24 hours</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right form (UI-only) */}
          <motion.div {...fadeUp} className="lg:col-span-8">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                Message
              </p>

              <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name */}
                <div className="md:col-span-1">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-black/30"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-1">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-black/30"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    Project Inquiry
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me what you’re building…"
                    className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-black/30"
                  />
                </div>

                {/* Actions */}
                <div className="md:col-span-2 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                    Average response time: <span className="text-white/75">24 hours</span>
                  </p>

                  <button
                    type="button"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-white/90"
                  >
                    Send Message
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
                  </button>
                </div>
              </form>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/55">
                Prefer email?{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white/75 underline underline-offset-4 hover:text-white transition"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
            <span>Local Time: {mounted ? `${time} IST` : "Loading…"}</span>
            <span className="hidden sm:inline">© {new Date().getFullYear()} Edition</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 hover:text-white transition"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
}
