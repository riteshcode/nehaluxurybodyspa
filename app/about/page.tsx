import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { brand, branches, services } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Neha Luxury Body Spa, Delhi NCR's trusted name in premium body massage and wellness rituals across multiple branches.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const values = [
  {
    title: "Skilled Therapists",
    description:
      "Trained across deep tissue, Thai massage and gentler aromatherapy rituals, matched to what your body needs.",
  },
  {
    title: "Consistent Standards",
    description:
      "The same hygiene, service and comfort at every branch — familiar and unhurried, wherever you visit.",
  },
  {
    title: "Accessible Wellness",
    description:
      "Branches kept close to where people live and work, so care doesn't have to be occasional.",
  },
];

export default function AboutPage() {
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
            About Us
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            The story behind {brand.name}
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Stats strip */}
      <section className="mx-auto max-w-4xl px-6 pt-14">
        <div className="grid grid-cols-3 divide-x divide-charcoal/10 text-center">
          <div>
            <p className="font-display text-3xl text-brass md:text-4xl">
              {branches.length}+
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">
              Branches
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-brass md:text-4xl">
              {services.length}+
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">
              Signature rituals
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-brass md:text-4xl">
              7 Days
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">
              Open every week
            </p>
          </div>
        </div>
      </section>

      {/* Story + image */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <BrandImage
            alt={`${brand.name} therapist preparing a treatment room`}
            ratio="portrait"
            tone="light"
            className="h-full"
            src={brand.image}
          />
        </div>
        <div className="md:col-span-3 leading-relaxed text-charcoal/80">
          <p>
            {brand.name} was founded with a simple idea: everyone deserves a
            space to slow down, breathe and be cared for. What began as a
            single branch has grown into a trusted name across{" "}
            {branches.length} locations in Delhi NCR, each one built around
            the same promise — skilled therapists, a calm private setting,
            and rituals drawn from traditional wellness practices.
          </p>
          <p className="mt-6">
            {/* TODO: Replace with your real brand story */}
            Every branch follows the same standards for hygiene, service and
            comfort, so wherever you visit us, the experience feels familiar
            and unhurried. Our therapists are trained in a range of
            techniques, from deep tissue and Thai massage to gentler
            aromatherapy rituals, so we can match the right treatment to
            what your body needs that day.
          </p>
          <p className="mt-6">
            We believe wellness should be accessible, not occasional — which
            is why we keep our branches close to where people live and work
            across the city.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dim py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-brass">
            What Sets Us Apart
          </p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink md:text-4xl">
            Built on three simple promises
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto h-px w-8 bg-brass" />
                <p className="mt-4 font-display text-lg text-ink">
                  {v.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
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
            Come Experience It
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-cream md:text-4xl">
            Visit your nearest branch today
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