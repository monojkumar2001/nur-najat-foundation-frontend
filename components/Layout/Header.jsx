"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const whoWeAreLinks = [
  { href: "/who-we-are", label: "About us" },
  { href: "/who-we-are#mission", label: "Mission & vision" },
  { href: "/who-we-are#what", label: "What we do" },
  { href: "/who-we-are#how", label: "How we do it" },
  { href: "/who-we-are#work", label: "Work with us" },
  { href: "/who-we-are#our", label: "our People" },
];

const navItems = [
  { href: "/", label: "Home", end: true },
  {
    label: "Who We Are",
    children: whoWeAreLinks,
  },
  { href: "/press-centre", label: "Press Centre" },
  { href: "/emergencies", label: "Emergencies" },
  { href: "/photography", label: "Photography" },
  { href: "/blog", label: "Blog" },
];

function ChevronDown({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function isNavActive(pathname, href, end) {
  if (!href) return false;
  if (end) return pathname === href || pathname === `${href}/`;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
  const [desktopWhoOpen, setDesktopWhoOpen] = useState(false);
  const whoRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (whoRef.current && !whoRef.current.contains(e.target)) {
        setDesktopWhoOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileWhoOpen(false);
    setDesktopWhoOpen(false);
  }, [pathname]);

  const linkBase =
    "text-base font-medium transition-colors whitespace-nowrap";
  const linkIdle = "text-neutral-900 hover:text-primary";
  const linkActive = "text-primary";

  return (
    <header className="sticky top-0 z-50 w-full max-w-[100vw] border-b border-neutral-200 bg-white pt-[env(safe-area-inset-top,0px)] shadow-sm">
      <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 lg:gap-10 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Education"
            width={160}
            height={100}
            className="h-12 w-auto object-contain object-left sm:h-14"
            priority
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-6 md:flex lg:gap-10 xl:gap-12">
          <nav
            className="flex items-center justify-end gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
          {navItems.map((item) => {
            if (item.href) {
              const active = isNavActive(pathname, item.href, item.end);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${active ? linkActive : linkIdle}`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="relative" ref={whoRef}>
                <button
                  type="button"
                  className={`${linkBase} ${linkIdle} cursor-pointer inline-flex items-center gap-1`}
                  aria-expanded={desktopWhoOpen}
                  aria-haspopup="true"
                  onClick={() => setDesktopWhoOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${desktopWhoOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {desktopWhoOpen ? (
                  <div
                    className="absolute left-1/2 top-full z-50 mt-2 min-w-48 -translate-x-1/2 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg"
                    role="menu"
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        role="menuitem"
                        className="block px-4 py-2 text-base text-neutral-800 hover:bg-neutral-50 hover:text-primary"
                        onClick={() => setDesktopWhoOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          </nav>

          <div className="hidden shrink-0 md:block">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#f5a623] px-12 py-4 text-base font-medium uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#e09010] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Donate
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-900 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {mobileOpen ? (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-neutral-100 bg-white px-4 transition-[max-height,opacity,transform] duration-300 ease-out md:hidden ${
          mobileOpen
            ? "pointer-events-auto max-h-[calc(100dvh-5rem-env(safe-area-inset-top,0px))] translate-y-0 py-4 opacity-100 overflow-y-auto"
            : "pointer-events-none max-h-0 -translate-y-2 py-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              if (item.href) {
                const active = isNavActive(pathname, item.href, item.end);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2.5 text-base font-medium ${
                      active ? "text-primary" : "text-neutral-900 hover:bg-neutral-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="flex flex-col">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                    aria-expanded={mobileWhoOpen}
                    onClick={() => setMobileWhoOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${mobileWhoOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileWhoOpen ? (
                    <div className="ml-2 border-l-2 border-neutral-100 pl-2">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block rounded-md px-3 py-2 text-base text-neutral-700 hover:bg-neutral-50 hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link
              href="/donate"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f5a623] px-6 py-3 text-base font-bold uppercase tracking-wide text-white hover:bg-[#e09010]"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </nav>
      </div>
    </header>
  );
}
