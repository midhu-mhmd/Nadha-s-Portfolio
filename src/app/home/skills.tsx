"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type SkillGroup = {
  title: string;
  subtitle: string;
  skills: string[];
};

const SKILLS: SkillGroup[] = [
  {
    title: "Flutter Core",
    subtitle: "UI systems & state",
    skills: [
      "Flutter",
      "Dart",
      "Provider",
      "Responsive UI",
      "Animations",
      "Reusable Widgets",
      "Theming",
      "Navigation",
    ],
  },
  {
    title: "Backend & Data",
    subtitle: "Auth, DB & integrations",
    skills: [
      "Firebase Auth",
      "Cloud Firestore",
      "Cloud Storage",
      "Supabase",
      "REST APIs",
      "JSON Parsing",
      "Error Handling",
      "Realtime Sync",
    ],
  },
  {
    title: "Architecture & Tools",
    subtitle: "Maintainable, scalable work",
    skills: [
      "Clean Architecture",
      "MVC / MVVM",
      "Hive",
      "SharedPreferences",
      "Git & GitHub",
      "Postman",
      "Debugging",
      "Performance Optimization",
    ],
  },
];

// Typed animation object (safe for {...fadeUp} on motion.div)
const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
          <motion.div {...fadeUp} className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              (03) Capabilities
            </p>

            <h2 className="mt-5 font-serif text-5xl italic leading-[0.95] tracking-tight sm:text-7xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-fuchsia-200 via-white to-purple-200 bg-clip-text text-transparent">
                Mastery
              </span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-4 md:text-right">
            <div className="mb-4 ml-auto h-px w-48 bg-white/10" />
            <p className="max-w-sm text-sm leading-relaxed text-white/65 md:ml-auto">
              Flutter-first skillset with clean architecture, reliable integrations,
              and smooth UI/UX execution.
            </p>
          </motion.div>
        </div>

        {/* Skills rows (glass panels like Behance) */}
        <div className="flex flex-col">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.75 }}
              className="group relative"
            >
              <div className="relative overflow-hidden border-t border-white/10 py-10 sm:py-12">
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-[60px]" />
                  <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px]" />
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
                  {/* Index + title */}
                  <div className="md:col-span-4">
                    <div className="flex items-baseline gap-5">
                      <span className="font-serif text-2xl italic text-white/35 transition-colors group-hover:text-white/70">
                        0{i + 1}
                      </span>

                      <div>
                        <h3 className="font-serif text-3xl italic tracking-tight text-white sm:text-4xl">
                          {group.title}
                        </h3>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills chips */}
                  <div className="md:col-span-8">
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Tiny line under chips for structure */}
                    <div className="mt-6 h-px w-full bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Footer note (Behance vibe) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
            Tools evolve — fundamentals stay strong.
          </p>

          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>Learning Mode: Always Active</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
