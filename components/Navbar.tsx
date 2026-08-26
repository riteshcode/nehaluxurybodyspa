"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";
import Image from "next/image";

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

const simpleLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Our Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"services" | "outlets" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<"services" | "outlets" | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    `relative text-sm tracking-wide transition ${isActive(href) ? "text-brass" : "text-charcoal/80 hover:text-brass"
    } after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brass after:transition-all after:duration-300 ${isActive(href) ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-brass/20 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          {/* Monogram mark */}
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-brass/40 bg-ink transition group-hover:border-brass">
            <Image
              src="/logo-icon.png"
              alt={`${brand.name} logo`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>

          {/* Wordmark */}
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg italic tracking-wide text-ink">
              Neha <span className="not-italic text-brass">Luxury</span>
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-charcoal/50">
              Body Spa
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-7 lg:flex">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/services" className={navLinkClass("/services")}>
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

          <Link href="/pricing" className={navLinkClass("/pricing")}>
            Our Pricing
          </Link>
          <Link href="/gallery" className={navLinkClass("/gallery")}>
            Gallery
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("outlets")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/branches" className={navLinkClass("/branches")}>
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

          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link href="/blog" className={navLinkClass("/blog")}>
            Blogs
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
            className="hidden rounded-full bg-ink px-5 py-2 text-sm text-cream transition hover:bg-ink-soft sm:inline-block"
          >
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-ink lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-brass/20 bg-cream transition-[max-height] duration-300 ease-in-out lg:hidden ${mobileOpen ? "max-h-[calc(100vh-64px)] overflow-y-auto" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {simpleLinks.slice(0, 1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-charcoal/10 py-3 text-sm ${isActive(l.href) ? "text-brass" : "text-charcoal/80"
                }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Services accordion */}
          <div className="border-b border-charcoal/10">
            <button
              type="button"
              onClick={() =>
                setMobileAccordion((v) => (v === "services" ? null : "services"))
              }
              className="flex w-full items-center justify-between py-3 text-left text-sm text-charcoal/80"
            >
              <Link href="/services" className={isActive("/services") ? "text-brass" : ""}>
                Our Services
              </Link>
              <span
                className={`ml-2 text-brass transition-transform ${mobileAccordion === "services" ? "rotate-180" : ""
                  }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${mobileAccordion === "services" ? "max-h-96" : "max-h-0"
                }`}
            >
              <div className="flex flex-col pb-2 pl-4">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="py-2 text-sm text-charcoal/60 hover:text-brass"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {simpleLinks.slice(1, 3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-charcoal/10 py-3 text-sm ${isActive(l.href) ? "text-brass" : "text-charcoal/80"
                }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Outlets accordion */}
          <div className="border-b border-charcoal/10">
            <button
              type="button"
              onClick={() =>
                setMobileAccordion((v) => (v === "outlets" ? null : "outlets"))
              }
              className="flex w-full items-center justify-between py-3 text-left text-sm text-charcoal/80"
            >
              <Link href="/branches" className={isActive("/branches") ? "text-brass" : ""}>
                Outlets
              </Link>
              <span
                className={`ml-2 text-brass transition-transform ${mobileAccordion === "outlets" ? "rotate-180" : ""
                  }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${mobileAccordion === "outlets" ? "max-h-96" : "max-h-0"
                }`}
            >
              <div className="flex flex-col pb-2 pl-4">
                {outletLinks.map((o) => (
                  <Link
                    key={o.href}
                    href={o.href}
                    className="py-2 text-sm text-charcoal/60 hover:text-brass"
                  >
                    {o.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {simpleLinks.slice(3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-charcoal/10 py-3 text-sm ${isActive(l.href) ? "text-brass" : "text-charcoal/80"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
            className="mt-5 block rounded-full bg-ink px-6 py-3 text-center text-sm text-cream transition hover:bg-ink-soft"
          >
            Call {brand.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}