import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { branches, services, brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);
  if (!branch) return {};

  const title = `Spa in ${branch.area}, ${branch.city}`;
  const description = `${brand.name} in ${branch.area} offers body massage, couple spa and wellness rituals. ${branch.address}. Call ${branch.phone} to book.`;
  const url = `${SITE_URL}/branches/${branch.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${brand.name} — ${branch.area}`,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/og-image.jpg", // TODO: ideally a branch-specific photo
          width: 1200,
          height: 630,
          alt: `${brand.name} - ${branch.area}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${brand.name} — ${branch.area}`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);
  if (!branch) notFound();

  const otherBranches = branches.filter((b) => b.slug !== branch.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: `${brand.name} - ${branch.area}`,
    image: `${SITE_URL}/og-image.jpg`, // TODO: branch-specific photo
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressCountry: "IN",
    },
    geo: branch.latitude && branch.longitude ? {
      "@type": "GeoCoordinates",
      latitude: branch.latitude,
      longitude: branch.longitude,
    } : undefined,
    telephone: branch.phone,
    openingHours: branch.hours,
    areaServed: branch.city,
    url: `${SITE_URL}/branches/${branch.slug}`,
    priceRange: "₹₹",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            {branch.city}
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            {brand.name} — {branch.area}
          </h1>
          <p className="mt-4 text-sm text-cream/60">{branch.hours}</p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Main content */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <BrandImage
            alt={`${brand.name} — ${branch.area} branch interior, ${branch.city}`}
            ratio="wide"
            tone="light"
            src={branch.image}
          />

          <h2 className="mt-10 font-display text-2xl text-ink">
            About this branch
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            {branch.intro}
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">
            Popular services at our {branch.area} branch
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-charcoal/10 bg-white/60 p-5 transition hover:border-brass/40"
              >
                <p className="font-display text-lg text-ink transition group-hover:text-brass">
                  {s.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                  {s.duration}
                </p>
                <p className="mt-2 font-display text-brass">{s.price}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sticky booking card */}
        <aside className="h-fit md:sticky md:top-24">
          <div className="rounded-2xl border border-brass/25 bg-cream-dim p-7">
            <p className="text-xs uppercase tracking-widest text-sage">
              Address
            </p>
            <p className="mt-1 text-sm leading-relaxed text-charcoal/80">
              {branch.address}
            </p>

            <div className="my-5 h-px bg-charcoal/10" />

            <p className="text-xs uppercase tracking-widest text-sage">
              Hours
            </p>
            <p className="mt-1 text-sm text-charcoal/80">{branch.hours}</p>

            <div className="my-5 h-px bg-charcoal/10" />

            <p className="text-xs uppercase tracking-widest text-sage">
              Phone
            </p>
            <a
              href={`tel:${branch.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-brass hover:underline"
            >
              {branch.phone}
            </a>

            <a
              href={`tel:${branch.phone.replace(/\s/g, "")}`}
              className="mt-6 block rounded-full bg-ink px-5 py-3 text-center text-sm text-cream transition hover:bg-ink-soft"
            >
              Call to Book
            </a>
            <a
              href={brand.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full border border-brass/40 px-5 py-3 text-center text-sm text-ink transition hover:bg-ink hover:text-cream"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                branch.mapQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-sm text-brass hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </aside>
      </section>

      {/* Other branches */}
      {otherBranches.length > 0 && (
        <section className="bg-cream-dim py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brass">
              Explore More
            </p>
            <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">
              Other branches near you
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {otherBranches.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className="group rounded-2xl border border-charcoal/10 bg-white/60 p-6 transition hover:border-brass/40 hover:shadow-sm"
                >
                  <p className="font-display text-lg text-ink transition group-hover:text-brass">
                    {b.area}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/60">{b.city}</p>
                  <span className="mt-3 inline-block text-sm text-brass group-hover:underline">
                    View branch →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}