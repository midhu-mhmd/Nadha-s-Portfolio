import Link from "next/link";

const CONTACT = {
  email: "midhumidlaj776@gmail.com",
  phone: "+91 9037086721",
  linkedin: "https://www.linkedin.com/in/midhu-mhmd/",
  github: "https://github.com/midhu-mhmd",
};

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Contact
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            Want to hire me or collaborate? Send a message — I usually reply fast.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Left: CTA Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium text-white">Let’s talk</h3>
            <p className="mt-2 text-zinc-400">
              If you have an opportunity or a project idea, I’m open to a quick
              discussion.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500">Email</span>
                <a
                  className="text-white hover:underline"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-zinc-500">Phone</span>
                <a
                  className="text-white hover:underline"
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                >
                  {CONTACT.phone}
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-zinc-500">Profiles</span>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={CONTACT.linkedin}
                    target="_blank"
                    className="rounded-lg border border-white/15 px-4 py-2 text-white transition hover:border-white/30"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href={CONTACT.github}
                    target="_blank"
                    className="rounded-lg border border-white/15 px-4 py-2 text-white transition hover:border-white/30"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}?subject=Opportunity%20for%20Midlaj`}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
              >
                Email Me
              </a>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Right: Contact Form (UI only) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium text-white">Send a message</h3>
            <p className="mt-2 text-zinc-400">
              This is a simple form UI. If you want, I can connect it to a Next.js API
              route + email service.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">Message</label>
                <textarea
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/25"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90"
              >
                Send Message (UI)
              </button>

              <p className="text-xs text-zinc-500">
                Note: This button doesn’t send yet. I can wire it to an API route.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}