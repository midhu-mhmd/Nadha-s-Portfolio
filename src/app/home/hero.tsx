"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVars: Variants = {
  initial: { transition: { staggerChildren: 0.08 } },
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const itemVars: Variants = {
  initial: { y: 18, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07010E] text-white">
      {/* Background: grain + purple glow (similar vibe) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -bottom-44 -right-40 h-[560px] w-[560px] rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen  items-center px-6 py-14 sm:px-12">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[80px]" />
            <div className="absolute right-10 top-0 h-72 w-72 rounded-full bg-purple-400/10 blur-[90px]" />
          </div>

          {/* Content */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="relative z-10 grid grid-cols-1 gap-10 px-6 pb-10 pt-10 sm:px-10 md:grid-cols-2 md:items-center md:gap-8"
          >
            {/* Left */}
            <div className="flex flex-col gap-6">
              <motion.p
                variants={itemVars}
                className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60"
              >
                Welcome to my world ✦
              </motion.p>

              <motion.div variants={itemVars} className="space-y-2">
                <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  Hi, I’m{" "}
                  <span className="bg-linear-to-r from-fuchsia-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Nada A
                  </span>
                </h1>
                <h2 className="text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
                  Flutter{" "}
                  <span className="bg-linear-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={itemVars}
                className="max-w-xl text-sm leading-relaxed text-white/70"
              >
                I build clean, responsive Android apps with <span className="text-white/85 font-semibold">Flutter & Dart</span> —
                focusing on maintainable architecture, smooth UI/UX, and reliable integrations using{" "}
                <span className="text-white/85 font-semibold">Firebase, Supabase</span> and{" "}
                <span className="text-white/85 font-semibold">REST APIs</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVars} className="flex flex-wrap items-center gap-3">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-black hover:bg-white/90 transition"
                >
                  My Projects
                </Link>

                <a
                  href="/Nada-Flutter-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition"
                >
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Right: 3D avatar frame */}
            <motion.div variants={itemVars} className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px]">
                {/* outer frame */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-fuchsia-500/25 via-purple-500/15 to-transparent p-[2px]">
                  <div className="h-full w-full rounded-[26px] bg-black/25 backdrop-blur-md" />
                </div>

                {/* floating elements */}
                <div className="pointer-events-none absolute -left-3 top-10 h-14 w-14 rounded-2xl bg-white/10 blur-[0px]" />
                <div className="pointer-events-none absolute -right-4 bottom-10 h-16 w-16 rounded-full bg-fuchsia-400/20 blur-[12px]" />

                {/* avatar area */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-fuchsia-500/25 to-purple-500/25 blur-[30px]" />
                    <div className="grid h-48 w-48 place-items-center rounded-full border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                      <div className="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-white/15 to-white/5">
                        <span className="text-5xl font-semibold tracking-tight">N</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom mini “About me” strip (like the reference) */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    About me
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Flutter developer based in Kozhikode, building elegant mobile experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
