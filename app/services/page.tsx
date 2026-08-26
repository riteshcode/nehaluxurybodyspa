import type { Metadata } from "next";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { services, brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore body massage, couple spa, B2B therapy and other wellness rituals at Neha Luxury Body Spa, with transparent pricing.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

const trustPoints = [
  {
    title: "Certified Therapists",
    description: "Every session led by trained, experienced professionals.",
  },
  {
    title: "Private Suites",
    description: "Calm, hygienic spaces designed for uninterrupted rest.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges — the price you see is what you pay.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Our Services
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Rituals for every kind of tired
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70">
            From a quick reset to a full couple&apos;s retreat, each ritual
            at {brand.name} is designed around one goal — leaving you
            lighter than you arrived.
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Trust strip */}
      <section className="mx-auto max-w-5xl px-6 pt-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {trustPoints.map((t) => (
            <div key={t.title} className="text-center sm:text-left">
              <div className="mx-auto h-px w-8 bg-brass sm:mx-0" />
              <p className="mt-4 font-display text-lg text-ink">{t.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-charcoal/60">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition hover:border-brass/40 hover:shadow-sm"
            >
              <BrandImage
                alt={`${s.name} — ${s.duration} massage therapy at ${brand.name}`}
                ratio="video"
                tone="light"
                className="rounded-none"
              />
              <div className="flex items-start justify-between gap-6 p-7">
                <div>
                  <p className="font-display text-xl text-ink transition group-hover:text-brass">
                    {s.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                    {s.duration}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {s.description}
                  </p>
                </div>
                <p className="whitespace-nowrap font-display text-lg text-brass">
                  {s.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-charcoal/50">
          Prices may vary slightly by branch. Call ahead to confirm
          availability and current offers.
        </p>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-center text-cream">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brass/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Book a Service
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-cream md:text-4xl">
            Not sure which ritual is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            Call us and our team will help you choose — or find the branch
            closest to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-ink transition hover:bg-brass-light"
            >
              Call {brand.phone}
            </a>
            <Link
              href="/branches"
              className="rounded-full border border-cream/30 px-7 py-3 text-sm text-cream transition hover:border-brass-light hover:text-brass-light"
            >
              Find Your Nearest Branch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}