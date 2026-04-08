import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "Who we are" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="heading-font text-xl font-bold">Heath Foundation</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              A non-profit dedicated to education, health, and community-led
              development. Tax-exempt status where applicable.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Quick links
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>123 Mission Street</li>
              <li>City, ST 00000</li>
              <li>
                <a href="tel:+15551234567" className="hover:text-white">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@heathfoundation.org" className="hover:text-white">
                  hello@heathfoundation.org
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Newsletter
            </p>
            <p className="mt-4 text-sm text-white/75">
              Occasional updates — no spam. Unsubscribe anytime.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" action="#" method="post">
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
                className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Heath Foundation. All rights reserved.</p>
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
