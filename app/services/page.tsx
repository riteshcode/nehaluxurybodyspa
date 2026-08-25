import type { Metadata } from "next";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import { services, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore body massage, couple spa, B2B therapy and other wellness rituals at Neha Luxury Body Spa, with transparent pricing.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Our Services
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Rituals for every kind of tired
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-start justify-between gap-6 rounded-2xl border border-charcoal/10 bg-white/60 p-7 transition hover:border-brass/40 hover:shadow-sm"
            >
              <div>
                <p className="font-display text-xl text-ink group-hover:text-brass">
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
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-charcoal/50">
          Prices may vary slightly by branch. Call ahead to confirm
          availability and current offers.
        </p>
        <div className="mt-10 text-center">
          <a
            href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
            className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft"
          >
            Call to Book a Service
          </a>
          <Link
            href="/branches"
            className="ml-4 text-sm text-brass hover:underline"
          >
            or find your nearest branch →
          </Link>
        </div>
      </section>
    </main>
  );
}
