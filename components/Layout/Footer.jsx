import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About us" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact us" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M13.5 21v-7.2H16l.4-2.8h-2.9V9.2c0-.8.2-1.3 1.4-1.3H16.5V5.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.3v2.8h2.3V21h3.9z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M19.9 7.4c.01.18.01.36.01.54 0 5.5-4.2 11.9-11.9 11.9-2.37 0-4.57-.69-6.42-1.88.33.04.65.05.99.05 1.95 0 3.74-.66 5.16-1.78-1.82-.03-3.35-1.23-3.88-2.88.26.04.52.07.79.07.37 0 .74-.05 1.08-.14-1.9-.38-3.33-2.06-3.33-4.07v-.05c.55.31 1.19.5 1.86.52-1.1-.74-1.83-2-1.83-3.42 0-.76.2-1.46.56-2.07 2.02 2.48 5.05 4.11 8.46 4.28-.07-.3-.11-.62-.11-.93 0-2.26 1.83-4.09 4.09-4.09 1.18 0 2.25.5 3 1.3.93-.18 1.8-.52 2.59-.99-.3.95-.95 1.75-1.79 2.26.83-.1 1.63-.32 2.37-.64-.56.82-1.26 1.55-2.06 2.13z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M6.9 6.8c0 1-0.8 1.8-1.8 1.8S3.3 7.8 3.3 6.8 4.1 5 5.1 5s1.8.8 1.8 1.8zM3.7 20.5h2.9V9.2H3.7v11.3zM9.2 9.2h2.8v1.5h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2 3.7 4.7v6.6h-2.9v-5.9c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6h-2.9V9.2z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="min-w-0 bg-navy text-white">
      <div className="mx-auto max-w-7xl min-w-0 px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: brand + contact */}
          <div className="lg:col-span-4">
            <p className="heading-font text-xl font-bold">Nur and Najat Foundation</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Building community-led solutions across education, healthcare, and
              livelihoods.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="text-xs uppercase tracking-widest text-white/45">
                © Copyright {new Date().getFullYear()}
              </li>
              <li>4091-850-3010</li>
              <li>517 Washington Ave.</li>
              <li>
                <a
                  href="mailto:hello@nurnajatfoundation.org"
                  className="transition-colors hover:text-white"
                >
                  hello@nurnajatfoundation.org
                </a>
              </li>
            </ul>
          </div>

          {/* Middle: quicklinks + connect */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/65">
              Quicklinks
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/65">
                Connect
              </p>
              <div className="mt-3 flex items-center gap-3">
                {socials.map((s) => (
                    <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 ring-1 ring-white/10 transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {s.svg}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: subscribe */}
          <div className="min-w-0 lg:col-span-5">
            <p className="text-xl font-semibold uppercase tracking-tight sm:text-2xl">
              Subscribe to get latest
              <br />
              updates and news
            </p>
            <form
              className="mt-6 flex w-full max-w-xl min-w-0 flex-col gap-2 rounded-lg bg-white/8 p-2 ring-1 ring-white/10 sm:flex-row sm:items-stretch"
              action="#"
              method="post"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Yourmail@gmail.com"
                autoComplete="email"
                className="min-h-11 min-w-0 w-full flex-1 rounded-md bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/45 outline-none"
              />
              <button
                type="submit"
                className="min-h-11 w-full shrink-0 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:px-6"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row">
          <p>All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
