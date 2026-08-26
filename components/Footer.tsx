import Link from "next/link";
import Image from "next/image";
import { brand, branches, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      {/* ambient glow, consistent with hero/CTA sections */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brass/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16">
        {/* Brand block */}
        <div className="flex flex-col items-start gap-4 border-b border-cream/10 pb-12 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-brass/40 bg-ink-soft transition group-hover:border-brass">
              <Image
                src="/logo-icon.png"
                alt={`${brand.name} logo`}
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl italic tracking-wide text-cream">
                Neha <span className="not-italic text-brass-light">Luxury</span>
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cream/45">
                Body Spa
              </span>
            </span>
          </Link>

          <p className="max-w-sm text-sm italic text-cream/50 md:text-right">
            &ldquo;{brand.tagline}&rdquo;
          </p>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-light">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-cream/70 transition hover:text-brass-light hover:pl-1"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-light">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Price Plans
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Our Outlets
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-cream/70 transition hover:text-brass-light hover:pl-1">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-light">
              Outlets
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {branches.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/branches/${b.slug}`}
                    className="text-cream/70 transition hover:text-brass-light hover:pl-1"
                  >
                    Spa in {b.area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-light">
              Get in Touch
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              {brand.address}
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-3 block text-sm text-cream/70 transition hover:text-brass-light"
            >
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="mt-2 block text-sm text-cream/70 transition hover:text-brass-light"
            >
              {brand.phone}
            </a>

            <div className="mt-6 flex gap-3">
              <a
                href={brand.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-xs text-cream/70 transition hover:border-brass-light hover:text-brass-light"
              >
                WA
              </a>
              <a
                href={brand.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-xs text-cream/70 transition hover:border-brass-light hover:text-brass-light"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}