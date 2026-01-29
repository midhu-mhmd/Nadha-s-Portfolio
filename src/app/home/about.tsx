export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-zinc-400">
              I’m a <span className="text-white">MERN Stack Developer</span> who
              enjoys building scalable, secure, and user-focused web
              applications. I work across the full stack — from designing clean
              frontend interfaces to developing robust backend APIs.
            </p>

            <p className="text-lg leading-relaxed text-zinc-400">
              I have hands-on experience with{" "}
              <span className="text-white">
                authentication, role-based access control (RBAC), multi-tenant
                architectures, and RESTful APIs
              </span>
              . My focus is always on writing maintainable code and following
              clean architecture principles.
            </p>

            <p className="text-lg leading-relaxed text-zinc-400">
              Currently, I’m looking for opportunities where I can contribute
              to real-world products, collaborate with strong engineering teams,
              and continue growing as a full-stack engineer.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium text-white">
              Quick Highlights
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>• Full Stack Development (MERN & Next.js)</li>
              <li>• Secure Authentication & Authorization</li>
              <li>• Clean UI with Tailwind CSS</li>
              <li>• REST API Design & Integration</li>
              <li>• Scalable & Maintainable Codebases</li>
            </ul>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}