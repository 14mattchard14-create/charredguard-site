"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900 text-white">
      <div className="wrap flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-white no-underline"
          onClick={() => setOpen(false)}
        >
          <img src="/logo-white.png" alt="Charred Guard shield logo" className="h-[54px] w-auto" />
          <span className="font-display text-lg font-extrabold leading-tight tracking-wide">
            Charred Guard
            <span className="mt-0.5 block text-[0.62rem] font-medium tracking-[0.22em] text-white/55">
              Wildfire Home Hardening
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/services" className="text-sm font-medium text-white/85 no-underline hover:text-white">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-white/85 no-underline hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/85 no-underline hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-5">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/get-started">Get Started</Link>
          </Button>
          <button
            type="button"
            className="inline-flex cursor-pointer border-0 bg-transparent p-2 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0e1821] md:hidden">
          <div className="wrap flex flex-col px-6 pb-5 pt-2.5">
            <Link
              href="/services"
              className="border-b border-white/10 py-3.5 font-medium text-white/90 no-underline"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="border-b border-white/10 py-3.5 font-medium text-white/90 no-underline"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-3.5 font-medium text-white/90 no-underline"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
