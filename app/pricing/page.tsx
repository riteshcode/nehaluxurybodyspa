import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import { services, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Pricing",
  description:
    "Transparent pricing for all body massage and wellness services at Neha Luxury Body Spa, Delhi NCR.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Pricing
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Our Pricing Plans
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="overflow-hidden rounded-2xl border border-charcoal/10">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`flex items-center justify-between gap-6 px-6 py-5 ${
                i % 2 === 0 ? "bg-white/60" : "bg-cream-dim"
              }`}
            >
              <div>
                <p className="font-display text-lg text-ink">{s.name}</p>
                <p className="text-xs uppercase tracking-widest text-sage">
                  {s.duration}
                </p>
              </div>
              <p className="whitespace-nowrap font-display text-lg text-brass">
                {s.price}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-charcoal/50">
          Prices may vary slightly by branch and season. Call to confirm current offers.
        </p>
        <div className="mt-8 text-center">
          <a
            href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
            className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft"
          >
            Call to Book
          </a>
        </div>
      </section>
    </main>
  );
}
