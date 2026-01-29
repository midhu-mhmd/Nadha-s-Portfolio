type SkillGroup = {
  title: string;
  skills: string[];
};

const SKILLS: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "RBAC",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "Postman",
      "Agile / Scrum",
      "Clean Architecture",
      "Performance Optimization",
      "API Security",
    ],
  },
];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-zinc-200">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Skills
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            Technologies and practices I use to build scalable, maintainable,
            and production-ready applications.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SKILLS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-4 text-lg font-medium text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm text-zinc-500">
          Always learning and refining — tools evolve, fundamentals stay strong.
        </p>
      </div>
    </section>
  );
}