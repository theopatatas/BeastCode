"use client";

import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  theme?: "dark" | "light";
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Facebook", href: "https://www.facebook.com/jetheo.ocampo" },
  { label: "GitHub", href: "https://github.com/theopatatas" },
  { label: "Contacts", href: "/contacts" },
];

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const isLight = theme === "light";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8 ${
        isLight
          ? "border-slate-200/80 bg-white/90"
          : "border-sky-500/10 bg-[linear-gradient(180deg,rgba(7,20,43,0.96)_0%,rgba(11,29,69,0.92)_100%)]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-1 sm:flex-nowrap sm:px-2">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <span
            className={`text-base font-extrabold tracking-[0.22em] sm:text-lg sm:tracking-[0.28em] ${
              isLight ? "text-slate-950" : "text-white"
            }`}
          >
            <span className="mr-2 bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              {"</>"}
            </span>
            <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Beast
            </span>
            Code
          </span>
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={`order-2 inline-flex h-11 w-11 items-center justify-center rounded-xl border transition duration-300 sm:hidden ${
            isLight
              ? "border-slate-300 bg-transparent text-slate-900"
              : "border-white/10 bg-transparent text-white"
          }`}
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span
              className={`absolute block h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </span>
        </button>

        <nav
          className={`order-4 w-full overflow-hidden text-xs sm:order-2 sm:flex sm:w-auto sm:items-center sm:justify-center sm:gap-5 sm:overflow-visible sm:text-sm lg:gap-6 ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <div
            className={`mt-2 flex flex-col gap-2 rounded-2xl border p-3 sm:mt-0 sm:flex-row sm:items-center sm:gap-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 ${
              isLight
                ? "border-slate-200 bg-white/90"
                : "border-white/10 bg-slate-950/88"
            }`}
          >
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-2 py-2 transition duration-300 hover:text-sky-300 ${
                    isLight ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-2 py-2 transition duration-300 hover:text-sky-300 ${
                    isLight ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/12 px-3 py-2 text-xs font-medium text-sky-100 shadow-[0_0_12px_rgba(56,189,248,0.14)] transition duration-300 hover:scale-[1.02] hover:border-sky-300 hover:bg-sky-400/18 hover:text-white sm:hidden"
            >
              View Resume
            </a>
          </div>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="order-3 hidden items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/12 px-3 py-2 text-xs font-medium text-sky-100 shadow-[0_0_12px_rgba(56,189,248,0.14)] transition duration-300 hover:scale-[1.02] hover:border-sky-300 hover:bg-sky-400/18 hover:text-white sm:inline-flex sm:px-4 sm:text-sm"
        >
          View Resume
        </a>
      </div>
    </header>
  );
}
