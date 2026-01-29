import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-white">
              Muhammed Midlaj
            </span>
            <p className="max-w-xs text-sm text-zinc-400">
              Full Stack Developer specializing in MERN and Next.js.
              Building scalable, production-ready web applications.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-zinc-300">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Muhammed Midlaj. All rights reserved.
          </span>

          <div className="flex gap-4">
            <Link
              href="https://github.com/midhu-mhmd"
              target="_blank"
              className="transition hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/midhu-mhmd/"
              target="_blank"
              className="transition hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="transition hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}