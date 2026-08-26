import type { Metadata } from "next";
import { services, pricingPackages, brand } from "@/lib/data";
import RippleDivider from "@/components/RippleDivider";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Pricing",
  description:
    "Transparent pricing for all body massage and wellness services at Neha Luxury Body Spa, Delhi NCR.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
};

const pricingNotes = [
  {
    title: "Branch Variation",
    description:
      "Prices may shift slightly by location — hotel outlets carry a different rate than standalone branches.",
  },
  {
    title: "Seasonal Offers",
    description:
      "First-visit discounts and seasonal packages run periodically. Call ahead to check current offers.",
  },
  {
    title: "No Hidden Charges",
    description:
      "The price you see includes consultation, products and shower facility — nothing extra at checkout.",
  },
];

export default function PricingPage() {
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
            Pricing
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70">
            No hidden charges, no surprises — just clear pricing for every
            ritual at {brand.name}.
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Packages */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-brass">
          Packages
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Choose your experience
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pricingPackages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 ${p.popular
                  ? "border-brass bg-ink text-cream"
                  : "border-charcoal/10 bg-white/60"
                }`}
            >
              {p.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-brass px-3 py-1 text-xs font-medium text-ink">
                  Most Popular
                </span>
              )}
              <p
                className={`font-display text-xl ${p.popular ? "text-cream" : "text-ink"
                  }`}
              >
                {p.name}
              </p>
              <p
                className={`mt-3 font-display text-3xl ${p.popular ? "text-brass-light" : "text-brass"
                  }`}
              >
                {p.price}
                <span
                  className={`ml-2 text-sm ${p.popular ? "text-cream/50" : "text-charcoal/50"
                    }`}
                >
                  {p.period}
                </span>
              </p>
              <ul
                className={`mt-6 space-y-2 text-sm ${p.popular ? "text-cream/70" : "text-charcoal/70"
                  }`}
              >
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${p.popular ? "bg-brass-light" : "bg-brass"
                        }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={brand.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 block rounded-full px-6 py-3 text-center text-sm font-medium transition ${p.popular
                    ? "bg-brass text-ink hover:bg-brass-light"
                    : "bg-ink text-cream hover:bg-ink-soft"
                  }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Itemized service pricing */}
      <section className="bg-cream-dim py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass">
            Per Service
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Individual service pricing
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60">
            {services.map((s, i) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`flex items-center justify-between gap-6 px-6 py-5 transition hover:bg-brass/5 ${i !== services.length - 1 ? "border-b border-charcoal/10" : ""
                  }`}
              >
                <div>
                  <p className="font-display text-lg text-ink">{s.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                    {s.duration}
                  </p>
                </div>
                <p className="whitespace-nowrap font-display text-lg text-brass">
                  {s.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing notes */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingNotes.map((n) => (
            <div key={n.title} className="text-center sm:text-left">
              <div className="mx-auto h-px w-8 bg-brass sm:mx-0" />
              <p className="mt-4 font-display text-lg text-ink">{n.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-charcoal/60">
                {n.description}
              </p>
            </div>
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
            Ready to Book?
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-cream md:text-4xl">
            Call us to confirm current offers
          </h2>
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