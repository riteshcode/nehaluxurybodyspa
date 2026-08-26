import type { Metadata } from "next";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { branches, brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Branches in Delhi NCR",
  description:
    "Find the Neha Luxury Body Spa branch nearest to you across Delhi NCR, with address, hours and contact details.",
  alternates: {
    canonical: `${SITE_URL}/branches`,
  },
};

export default function BranchesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Branches
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Find a branch near you
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70">
            {branches.length}+ locations across Delhi NCR, each offering the
            same calm setting and expert care {brand.name} is known for.
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Branches grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <Link
              key={b.slug}
              href={`/branches/${b.slug}`}
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition hover:border-brass/50 hover:shadow-sm"
            >
              <BrandImage
                alt={`${brand.name} — ${b.area} branch interior, ${b.city}`}
                ratio="video"
                tone="light"
                className="rounded-none"
              />
              <div className="p-7">
                <p className="font-display text-xl text-ink transition group-hover:text-brass">
                  {b.area}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">{b.city}</p>

                <div className="mt-4 h-px bg-charcoal/10" />

                <div className="mt-4 space-y-2">
                  <p className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {b.address}
                  </p>
                  <p className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {b.hours}
                  </p>
                  <p className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {b.phone}
                  </p>
                </div>

                <span className="mt-5 inline-block text-sm text-brass group-hover:underline">
                  View branch →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-center text-cream">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brass/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Can&apos;t Decide?
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-cream md:text-4xl">
            We&apos;ll help you pick the right branch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            Call us or message on WhatsApp — our team will guide you to the
            nearest and best-suited location.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-ink transition hover:bg-brass-light"
            >
              Call {brand.phone}
            </a>
            <a
              href={brand.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-7 py-3 text-sm text-cream transition hover:border-brass-light hover:text-brass-light"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}