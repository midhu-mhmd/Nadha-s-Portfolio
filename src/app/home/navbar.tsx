"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "About", href: "#about", number: "01" },
  { label: "Projects", href: "#projects", number: "02" },
  { label: "Skills", href: "#skills", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
];

// Behance-like circular reveal
const menuVars: Variants = {
  initial: { clipPath: "circle(0% at 92% 14%)" },
  animate: {
    clipPath: "circle(160% at 92% 14%)",
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "circle(0% at 92% 14%)",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const linkVars: Variants = {
  initial: { y: 70, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.35 + i * 0.09, duration: 0.7, ease: "easeOut" },
  }),
  exit: (i: number) => ({
    y: 70,
    opacity: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeIn" },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const socials = useMemo(
    () => [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nada-yunus-eng-/" },
      { label: "GitHub", href: "https://github.com/Nadayunus" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll + escape close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener("keydown", onKeyDown);
      };
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Smooth scroll
  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Behance-like: floating glass pill */}
      <nav className="fixed inset-x-0 top-0 z-[200] px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="mx-auto max-w-[1400px]">
          <div
            className={`flex h-14 items-center justify-between rounded-full border border-white/10 px-4 sm:px-6 backdrop-blur-xl transition-all duration-500 ${
              scrolled
                ? "bg-[#0A0212]/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                : "bg-[#0A0212]/45"
            }`}
          >
            {/* Left: Brand */}
            <Link href="/" className="relative z-[210] flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5">
                <span className="text-xs font-semibold tracking-wide text-white">NA</span>
              </div>
              <span className="hidden text-[11px] font-semibold tracking-[0.25em] text-white/70 sm:block">
                NADA
              </span>
            </Link>

            {/* Center: Desktop links */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="group relative text-[11px] font-semibold tracking-wide text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Right: CTA + Menu */}
            <div className="relative z-[210] flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-wide text-white hover:bg-white/15 transition md:inline-flex"
              >
                Let’s Talk
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold tracking-wide text-white/80 hover:bg-white/10 transition"
              >
                <span className="hidden sm:inline">{isOpen ? "Close" : "Menu"}</span>

                {/* Icon */}
                <div className="relative h-4 w-5">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="absolute left-0 top-0 h-px w-full bg-white"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: 6 } : { rotate: 0, y: 8 }}
                    className="absolute left-0 top-0 h-px w-full bg-white"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu (Behance dark gradient + noise + glow) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[190] overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-[#07010E]" />
            <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
            <div className="absolute -bottom-44 -right-40 h-[560px] w-[560px] rounded-full bg-purple-500/20 blur-[140px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 sm:px-12">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
                {/* Big links */}
                <div className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <div key={item.label} className="overflow-hidden">
                      <motion.button
                        custom={i}
                        variants={linkVars}
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className="group flex items-baseline gap-5 text-left"
                      >
                        <span className="font-mono text-sm text-white/40">
                          ({item.number})
                        </span>
                        <span className="font-serif text-6xl italic text-white transition-transform duration-500 group-hover:translate-x-3 sm:text-7xl lg:text-8xl">
                          {item.label}
                        </span>
                      </motion.button>
                    </div>
                  ))}
                </div>

                {/* Right panel */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    Quick Info
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    Flutter Developer based in Kozhikode, building responsive Android apps with
                    clean architecture and smooth UI/UX.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/Nada-Flutter-Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[11px] font-semibold tracking-wide text-black hover:bg-white/90 transition"
                    >
                      Download CV
                    </a>

                    <button
                      type="button"
                      onClick={() => handleNavClick("#projects")}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold tracking-wide text-white/80 hover:bg-white/10 transition"
                    >
                      View Projects
                    </button>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-semibold tracking-wide text-white/70">
                      {socials.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="hover:text-white transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>

                    <p className="mt-5 text-xs text-white/40">
                      © {new Date().getFullYear()} Nada Studio
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
