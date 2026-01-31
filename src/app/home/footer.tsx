"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  // Replace "#" with your actual URLs if you want
  { label: "GitHub", href: "https://github.com/Nadayunus" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nada-yunus-eng-/" },
  { label: "Resume", href: "/Nada-Flutter-Resume.pdf" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleHashClick = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#07010E] pb-12 pt-20 text-white sm:pt-24">
      {/* Background: noise + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-fuchsia-600/12 blur-[120px]" />
        <div className="absolute -bottom-44 -right-40 h-140 w-140 rounded-full bg-purple-500/12 blur-[140px]" />
        <div className="absolute inset-0 bg-linear-to-b from-white/6 via-transparent to-black/45" />
      </div>

      {/* Vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 opacity-[0.08] sm:px-12">
        <div className="h-full w-px bg-white" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="hidden h-full w-px bg-white md:block" />
        <div className="h-full w-px bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12">
        {/* Top footer grid */}
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-14 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs font-semibold tracking-wide text-white">
                  NA
                </span>
              </div>
              <span className="font-serif text-3xl italic tracking-tight text-white/90">
                Nada A.
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              Flutter Developer focused on building dynamic, responsive Android
              applications with clean, maintainable code, smooth navigation, and
              optimized performance.
            </p>

            {/* CV quick facts */}
            <div className="mt-6 grid grid-cols-1 gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>Kozhikode</span>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>Kerala, India</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>Bridgeon Solutions</span>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>Intern</span>
                <span className="h-1 w-1 rounded-full bg-white/25" />
                <span>03/2025 – Present</span>
              </div>
            </div>

            {/* Tech chips from CV */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Flutter",
                "Dart",
                "Provider",
                "Firebase Auth",
                "Cloud Firestore",
                "Cloud Storage",
                "Supabase",
                "REST APIs",
                "Hive",
                "SharedPreferences",
                "MVC/MVVM",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/65 backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Index */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
              Index
            </p>

            <nav className="mt-6 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleHashClick(link.href)}
                  className="group flex items-center gap-3 text-left text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:translate-x-1 hover:text-white"
                >
                  <span className="h-px w-6 bg-white/15 transition-all group-hover:w-10 group-hover:bg-white/50" />
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Contact from CV */}
            <div className="mt-10 rounded-[18px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
                Direct
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="mailto:nadayunuseng@gmail.com"
                  className="block text-white/70 hover:text-white transition"
                >
                  nadayunuseng@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Network */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
              Network
            </p>

            <div className="mt-6 rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:border-white/25 hover:text-white"
                  >
                    {link.label}
                    <svg
                      className="h-4 w-4 -rotate-45 transition-transform group-hover:rotate-0"
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
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
                Open for opportunities
              </div>

            </div>
          </div>
        </div>

        {/* Bottom metadata bar */}
        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
              © {currentYear} Nada A
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/30">
              Personal Edition V1.0
            </span>
          </div>

          {/* Stack HUD (CV aligned) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>Flutter</span>
            </div>
          </div>

          {/* Location + Back to top */}
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
              Kozhikode, Kerala
            </span>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
