"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type SkillGroup = {
  title: string;
  skills: string[];
};

const SKILLS: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "RBAC", "MongoDB", "Mongoose"],
  },
  {
    title: "Practices",
    skills: ["Clean Architecture", "Performance Opt.", "API Security", "Agile/Scrum", "Git & GitHub", "Postman"],
  },
];

// 1. Explicitly type the animation object to resolve spread operator errors
const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#F9F6F3] py-24 sm:py-32">
      {/* 1. STRUCTURAL GRID LINES */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 sm:px-12 pointer-events-none opacity-10">
        <div className="w-px h-full bg-[#C0847B]" />
        <div className="w-px h-full bg-[#C0847B] hidden md:block" />
        <div className="w-px h-full bg-[#C0847B] hidden md:block" />
        <div className="w-px h-full bg-[#C0847B]" />
      </div>

      {/* 2. Fixed max-w-350 to max-w-[1400px] (Tailwind arbitrary value fix) */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-12">
        {/* HEADER AREA */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-12 items-end gap-8">
          <motion.div {...fadeUp} className="md:col-span-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C0847B]/60 block mb-4">
              (03) Capabilities
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl italic text-[#C0847B] leading-[0.9] tracking-tighter">
              Technical <br />
              <span className="not-italic font-sans font-light uppercase">Mastery.</span>
            </h2>
          </motion.div>
          
          {/* Note: spread applied to p tag requires HTMLMotionProps<"p">, 
              but since fadeUp is generic "div", we apply motion.div or type it carefully */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C0847B]/60 leading-relaxed md:text-right"
          >
            A modern stack focused <br /> on speed, security, <br /> and scalability.
          </motion.p>
        </div>

        {/* SKILLS INDEX: Structural Rows */}
        <div className="border-t border-[#C0847B]/10">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 border-b border-[#C0847B]/10 py-10 sm:py-16 group hover:bg-[#C0847B]/[0.02] transition-colors"
            >
              {/* Category Label */}
              <div className="md:col-span-4 mb-6 md:mb-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif italic text-xl text-[#C0847B]/30 transition-colors group-hover:text-[#C0847B]">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-3xl italic text-[#C0847B] sm:text-4xl">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C0847B]/40">
                        Skill
                      </span>
                      <span className="text-sm font-medium text-[#C0847B]/80 hover:text-[#C0847B] transition-colors cursor-default">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C0847B]/40"
        >
          <span>Tools evolve, fundamentals stay strong.</span>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#C0847B]/40" />
            <span>Learning Mode: Always Active</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}