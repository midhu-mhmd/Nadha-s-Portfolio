import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex max-w-3xl flex-col gap-6">
          {/* Badge */}
          <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
            Full Stack Developer • MERN • Next.js
          </span>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Hi, I’m{" "}
            <span className="text-white">Muhammed Midlaj</span>.
            <br />
            I build scalable, production-ready web apps.
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            MERN Stack Developer focused on clean architecture, secure APIs,
            and modern UI. Experienced in authentication, RBAC,
            multi-tenant systems, and performance-driven frontend design.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
            >
              View Projects
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              Download Resume
            </Link>

            <Link
              href="https://github.com/midhu-mhmd"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}