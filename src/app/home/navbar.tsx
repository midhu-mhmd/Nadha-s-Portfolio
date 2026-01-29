"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-white"
        >
          Midlaj
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}