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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition hover:border-brass-light hover:text-brass-light"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.7.44 3.36 1.28 4.82L2 22l5.4-1.41a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.09h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.32c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.53-3.68 8.18-8.16 8.18zm4.48-6.12c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.35.99 2.51.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
              <a
                href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
                aria-label="Call Now"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition hover:border-brass-light hover:text-brass-light"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z" />
                </svg>
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