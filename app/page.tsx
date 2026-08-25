import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import {
  branches,
  services,
  brand,
  specialties,
  pricingPackages,
  hotelPartners,
  topLocations,
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-5 md:py-32">
          <div className="reveal md:col-span-3">
            <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
              Delhi NCR&apos;s Trusted Spa Brand
            </p>
            <h1 className="mt-5 font-display text-4xl italic leading-tight text-cream md:text-5xl">
              Book Luxury Spa in Delhi NCR With {branches.length}+ Outlets And
              Expert Therapists
            </h1>
            <p className="mt-6 max-w-md text-cream/70">
              {brand.name} brings premium body massage and wellness rituals
              across Delhi NCR. Our expert therapists offer a wide range of
              massage therapies, including sandwich, couple, and B2B massage.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
                className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-ink transition hover:bg-brass-light"
              >
                Call to Book
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
          <div className="reveal md:col-span-2" style={{ animationDelay: "0.15s" }}>
            <div className="flex h-full items-center justify-center rounded-3xl border border-cream/10 bg-ink-soft/60 p-8 text-center">
              <div>
                <p className="font-display text-4xl text-brass-light">
                  {branches.length}+
                </p>
                <p className="mt-1 text-sm text-cream/60">
                  Branches across Delhi NCR
                </p>
                <div className="my-4 h-px bg-cream/10" />
                <p className="font-display text-4xl text-brass-light">
                  {services.length}+
                </p>
                <p className="mt-1 text-sm text-cream/60">
                  Signature wellness rituals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Luxury Treatments intro */}
      <section className="mx-auto max-w-4xl px-6 pt-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brass">
          Luxury Treatments
        </p>
        <Link href="/branches">
          <h2 className="mt-3 font-display text-3xl italic text-ink md:text-4xl">
            5-Star <span className="not-italic text-brass">Hotel Spa</span> in Delhi
          </h2>
        </Link>
      </section>

      {/* Specialties strip */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="flex aspect-[2/3] flex-col justify-end rounded-2xl bg-cream-dim p-4 text-center"
            >
              <p className="text-sm font-medium text-ink">{s.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={brand.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brass">
              Our Rituals
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Services designed to restore balance
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-sm text-brass hover:underline md:block"
          >
            View all services →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl border border-charcoal/10 bg-white/60 p-7 transition hover:border-brass/40 hover:shadow-sm"
            >
              <p className="font-display text-xl text-ink">{s.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                {s.duration}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                {s.description}
              </p>
              <p className="mt-5 font-display text-lg text-brass">{s.price}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-8 block text-sm text-brass hover:underline md:hidden"
        >
          View all services →
        </Link>
      </section>

      {/* Pricing Packages */}
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Pricing Packages
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
            Our Pricing Packages
          </h2>
          <p className="mt-4 max-w-xl text-cream/70">
            Book a luxury massage in Delhi and enjoy our first visit offer.
            Experience premium massages by expert therapists with a luxurious
            touch.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pricingPackages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-8 ${
                  p.popular
                    ? "border-brass bg-ink-soft"
                    : "border-cream/15 bg-ink-soft/50"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-brass px-3 py-1 text-xs font-medium text-ink">
                    Popular
                  </span>
                )}
                <p className="font-display text-xl text-cream">{p.name}</p>
                <p className="mt-3 font-display text-3xl text-brass-light">
                  {p.price}
                  <span className="ml-2 text-sm text-cream/50">{p.period}</span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-cream/70">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <a
                  href={brand.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block rounded-full bg-brass px-6 py-3 text-center text-sm font-medium text-ink transition hover:bg-brass-light"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Spa Partners */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-brass">
          Premium Partners
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Hotel Spa Locations
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {hotelPartners.map((h) => (
            <div key={h.name} className="rounded-2xl border border-charcoal/10 bg-white/60 p-7">
              <p className="font-display text-xl text-ink">{h.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {h.description}
              </p>
              <a
                href={brand.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm text-brass hover:underline"
              >
                View Daily Updates →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Top Locations */}
      <section className="bg-cream-dim py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Our Luxury Spas Top Location
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {topLocations.map((loc) => (
              <a
                key={loc}
                href={brand.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brass/40 px-5 py-2 text-sm text-ink transition hover:bg-ink hover:text-cream"
              >
                Spa in {loc}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Branches preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Our branches across Delhi NCR
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {branches.map((b) => (
              <Link
                key={b.slug}
                href={`/branches/${b.slug}`}
                className="group rounded-2xl border border-charcoal/10 bg-white/60 p-7 transition hover:border-brass/50"
              >
                <p className="font-display text-xl text-ink">{b.area}</p>
                <p className="mt-1 text-sm text-charcoal/60">{b.city}</p>
                <p className="mt-4 text-sm text-charcoal/70">{b.hours}</p>
                <span className="mt-5 inline-block text-sm text-brass group-hover:underline">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Ready for your first ritual?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-charcoal/70">
          Call us or send a message on WhatsApp — our team will help you pick
          the right branch and service.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
            className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft"
          >
            Call {brand.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-ink/20 px-7 py-3 text-sm text-ink transition hover:border-brass hover:text-brass"
          >
            Enquire Online
          </Link>
        </div>
      </section>
    </main>
  );
}