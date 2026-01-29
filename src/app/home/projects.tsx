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
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind"],
    liveUrl: "https://new-portfolio-rosy-rho.vercel.app/",
    githubUrl: "https://github.com/midhu-mhmd",
    status: "Case Study",
  },
  {
    title: "Multi-Clinic Appointment SaaS",
    description:
      "Multi-tenant SaaS platform with tenant-level isolation, JWT auth, RBAC, appointment workflows, and scalable API design.",
    tech: ["MERN", "JWT", "RBAC", "Multi-Tenant", "MongoDB Indexing"],
    status: "In Progress",
    githubUrl: "https://github.com/midhu-mhmd",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Projects
            </h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              A few selected builds that show my full-stack skills — UI, APIs,
              auth, and scalable architecture.
            </p>
          </div>

          <Link
            href="https://github.com/midhu-mhmd"
            target="_blank"
            className="w-fit rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30"
          >
            View GitHub
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-white/20"
            >
              {/* Status */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                {p.status && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    {p.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>

              {/* Tech */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {p.liveUrl ? (
                  <Link
                    href={p.liveUrl}
                    target="_blank"
                    className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
                  >
                    Live Demo
                  </Link>
                ) : (
                  <span className="inline-flex items-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/70">
                    Demo Soon
                  </span>
                )}

                {p.githubUrl && (
                  <Link
                    href={p.githubUrl}
                    target="_blank"
                    className="inline-flex items-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30"
                  >
                    Source Code
                  </Link>
                )}
              </div>

              {/* Hover line */}
              <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-white/20" />
              <p className="mt-4 text-xs text-zinc-500">
                Tip: Add a case study page later (problem → solution → impact).
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}