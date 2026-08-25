"use client";

import Link from "next/link";
import { useState } from "react";
import { brand } from "@/lib/data";

const serviceLinks = [
  { href: "/services/sandwich-massage", label: "Sandwich Massage" },
  { href: "/services/hotel-home-spa", label: "Hotel & Home Spa" },
  { href: "/services/full-body-massage", label: "Full Body Massage" },
  { href: "/services/b2b-therapy", label: "B2B Therapy" },
  { href: "/services/couple-massage", label: "Couple Massage in Delhi" },
];

const outletLinks = [
  { href: "/branches/noida", label: "Spa in Noida" },
  { href: "/branches/connaught-place", label: "Spa in CP" },
  { href: "/branches/aerocity", label: "Spa in Aerocity" },
  { href: "/branches/dwarka", label: "Spa in Dwarka" },
  { href: "/branches/gurgaon", label: "Spa in Gurgaon" },
  { href: "/branches/karol-bagh", label: "Spa in Karol Bagh" },
  { href: "/branches/green-park", label: "Spa in Green Park" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"services" | "outlets" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-brass/20 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-wide text-ink">
          {brand.name}
        </Link>
        <nav className="hidden gap-7 md:flex">
          <Link href="/" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/services" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
              Our Services
            </Link>
            {openMenu === "services" && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-charcoal/10 bg-white py-2 shadow-lg">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-charcoal/80 hover:bg-cream-dim hover:text-brass"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
            Our Pricing
          </Link>
          <Link href="/gallery" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
            Gallery
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("outlets")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/branches" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
              Outlets
            </Link>
            {openMenu === "outlets" && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-charcoal/10 bg-white py-2 shadow-lg">
                {outletLinks.map((o) => (
                  <Link
                    key={o.href}
                    href={o.href}
                    className="block px-4 py-2 text-sm text-charcoal/80 hover:bg-cream-dim hover:text-brass"
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
            About
          </Link>
          <Link href="/blog" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
            Blogs
          </Link>
          <Link href="/contact" className="text-sm tracking-wide text-charcoal/80 hover:text-brass">
            Contact
          </Link>
        </nav>
        <a
          href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
          className="rounded-full bg-ink px-5 py-2 text-sm text-cream transition hover:bg-ink-soft"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
