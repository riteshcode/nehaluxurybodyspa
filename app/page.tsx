import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
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
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brass/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-5 md:py-32">
          <div className="reveal md:col-span-3">
            <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
              Delhi NCR&apos;s Trusted Spa Brand
            </p>
            <h1 className="mt-5 font-display text-4xl italic leading-tight text-cream md:text-5xl">
              Restore Your Body.
              <br />
              <span className="not-italic text-brass-light">
                Renew Your Senses.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-cream/70">
              {brand.name} brings premium body massage and wellness rituals
              to {branches.length}+ locations across Delhi NCR. Every
              session is guided by expert therapists in a calm, private
              setting — from sandwich and couple massage to bespoke B2B
              therapy.
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

            {/* trust strip */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/10 pt-8">
              <div>
                <p className="font-display text-3xl text-brass-light">
                  {branches.length}+
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/50">
                  Branches in Delhi NCR
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-brass-light">
                  {services.length}+
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/50">
                  Signature rituals
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-brass-light">10 AM–9 PM</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/50">
                  Open all days
                </p>
              </div>
            </div>
          </div>

          <div
            className="reveal md:col-span-2"
            style={{ animationDelay: "0.15s" }}
          >
            <BrandImage
              alt="Relaxing massage therapy room at Neha Luxury Body Spa"
              ratio="portrait"
              tone="dark"
              priority
              className="h-full min-h-[420px]"
            />
          </div>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Philosophy strip — signature element */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brass">
          Our Philosophy
        </p>
        <p className="mx-auto mt-5 max-w-2xl font-display text-2xl italic leading-relaxed text-ink md:text-3xl">
          &ldquo;{brand.tagline}&rdquo;
        </p>
        <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-charcoal/50">
          <span>Restore</span>
          <span className="h-1 w-1 rounded-full bg-brass" />
          <span>Renew</span>
          <span className="h-1 w-1 rounded-full bg-brass" />
          <span>Reconnect</span>
        </div>
      </section>

      {/* Luxury Treatments intro */}
      <section className="mx-auto max-w-4xl px-6 pb-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brass">
          Luxury Treatments
        </p>
        <Link href="/branches" className="group inline-block">
          <h2 className="mt-3 font-display text-3xl italic text-ink transition group-hover:text-brass md:text-4xl">
            5-Star <span className="not-italic text-brass">Hotel Spa</span> in
            Delhi
          </h2>
        </Link>
      </section>

      {/* Specialties strip */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-cream-dim transition hover:border-brass/40"
            >
              <BrandImage
                alt={`${s.title} treatment at Neha Luxury Body Spa`}
                ratio="square"
                tone="light"
                className="rounded-none rounded-t-2xl"
              />
              <p className="p-3 text-center text-sm font-medium text-ink">
                {s.title}
              </p>
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
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition hover:border-brass/40 hover:shadow-sm"
            >
              <BrandImage
                alt={`${s.name} — ${s.duration} massage therapy at Neha Luxury Body Spa`}
                ratio="video"
                tone="light"
                className="rounded-none"
              />
              <div className="p-7">
                <p className="font-display text-xl text-ink">{s.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                  {s.duration}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                  {s.description}
                </p>
                <p className="mt-5 font-display text-lg text-brass">
                  {s.price}
                </p>
              </div>
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
            Experience premium massages by expert therapists with a
            luxurious touch.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pricingPackages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-8 ${p.popular
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
                  <span className="ml-2 text-sm text-cream/50">
                    {p.period}
                  </span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-cream/70">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {f}
                    </li>
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
            <div
              key={h.name}
              className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60"
            >
              <BrandImage
                alt={`${h.name} hotel spa interior`}
                ratio="wide"
                tone="light"
                className="rounded-none"
              />
              <div className="p-7">
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
            </div>
          ))}
        </div>
      </section>

      {/* Top Locations */}
      <section className="bg-cream-dim py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass">
            Serving All of Delhi NCR
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Our Luxury Spas Top Locations
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
                className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition hover:border-brass/50"
              >
                <BrandImage
                  alt={`${brand.name} — ${b.area} branch interior, ${b.city}`}
                  ratio="video"
                  tone="light"
                  className="rounded-none"
                />
                <div className="p-7">
                  <p className="font-display text-xl text-ink">{b.area}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{b.city}</p>
                  <p className="mt-4 text-sm text-charcoal/70">{b.hours}</p>
                  <span className="mt-5 inline-block text-sm text-brass group-hover:underline">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-24 text-center text-cream">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brass/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Book Your Session
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-cream md:text-4xl">
            Ready for your first ritual?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            Call us or send a message on WhatsApp — our team will help you
            pick the right branch and service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-ink transition hover:bg-brass-light"
            >
              Call {brand.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-cream/30 px-7 py-3 text-sm text-cream transition hover:border-brass-light hover:text-brass-light"
            >
              Enquire Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}