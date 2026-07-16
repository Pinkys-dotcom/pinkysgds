"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import TrackedLink from "@/components/TrackedLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-v4.png"
              alt="Pinky's Garage Doors"
              width={110}
              height={70}
              className="h-20 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-cream/90 hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <TrackedLink
              href={site.phoneHref}
              external
              event="call_click"
              location="header"
              className="text-sm font-semibold text-cream/90 hover:text-rose transition-colors"
            >
              {site.phone}
            </TrackedLink>
            <TrackedLink
              href="/contact"
              event="estimate_click"
              location="header"
              className="rounded-md bg-rose px-4 py-2.5 text-sm font-semibold text-ink hover:bg-rose-dark transition-colors"
            >
              Get a Free Estimate
            </TrackedLink>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-cream"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-cream/10 bg-ink">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold uppercase tracking-wide text-cream/90 hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <TrackedLink
              href={site.phoneHref}
              external
              event="call_click"
              location="header_mobile_menu"
              className="text-base font-semibold text-cream/90"
            >
              {site.phone}
            </TrackedLink>
            <TrackedLink
              href="/contact"
              event="estimate_click"
              location="header_mobile_menu"
              onClickExtra={() => setOpen(false)}
              className="rounded-md bg-rose px-4 py-2.5 text-center text-sm font-semibold text-ink"
            >
              Get a Free Estimate
            </TrackedLink>
          </nav>
        </div>
      )}
    </header>
  );
}
