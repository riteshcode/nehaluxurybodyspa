import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { services, brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";


export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const description = `${service.description} Book ${service.name} at ${brand.name}, Delhi NCR.`;
  const url = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.name,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.name} | ${brand.name}`,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/og-image.jpg", // TODO: ideally a service-specific photo
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${brand.name}`,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

const includedDefaults = [
  "Consultation to understand your needs",
  "Premium oils and therapy products",
  "Shower facility after your session",
  "Calm, private treatment room",
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Parse "₹1,999" -> "1999" for schema price
  const numericPrice = service.price.replace(/[^0-9]/g, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "DaySpa",
      name: brand.name,
      telephone: brand.phone,
    },
    areaServed: "Delhi NCR",
    offers: {
      "@type": "Offer",
      price: numericPrice,
      priceCurrency: "INR",
    },
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
            Our Services
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            {service.name}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-cream/60">
            <span className="uppercase tracking-widest text-brass-light">
              {service.duration}
            </span>
            <span className="h-1 w-1 rounded-full bg-cream/30" />
            <span className="font-display text-lg text-brass-light">
              {service.price}
            </span>
          </div>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Main content */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <BrandImage
            alt={`${service.name} — ${service.duration} massage therapy at ${brand.name}`}
            ratio="wide"
            tone="light"
            src={service.image}
          />

          <h2 className="mt-10 font-display text-2xl text-ink">
            About the {service.name}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            {service.description}
          </p>

          <h2 className="mt-10 font-display text-2xl text-ink">
            What&apos;s included
          </h2>
          <ul className="mt-4 space-y-3">
            {includedDefaults.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sticky booking card */}
        <aside className="h-fit md:sticky md:top-24">
          <div className="rounded-2xl border border-brass/25 bg-cream-dim p-7">
            <p className="text-xs uppercase tracking-widest text-sage">
              Duration
            </p>
            <p className="mt-1 font-display text-lg text-ink">
              {service.duration}
            </p>

            <div className="my-5 h-px bg-charcoal/10" />

            <p className="text-xs uppercase tracking-widest text-sage">
              Price
            </p>
            <p className="mt-1 font-display text-3xl text-brass">
              {service.price}
            </p>
            <p className="mt-1 text-xs text-charcoal/50">
              May vary slightly by branch
            </p>

            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="mt-6 block rounded-full bg-ink px-6 py-3 text-center text-sm text-cream transition hover:bg-ink-soft"
            >
              Call to Book This Service
            </a>
            <a
               href={getWhatsAppUrl(whatsappMessages.service(service.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full border border-brass/40 px-6 py-3 text-center text-sm text-ink transition hover:bg-ink hover:text-cream"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/branches"
              className="mt-4 block text-center text-sm text-brass hover:underline"
            >
              Find your nearest branch →
            </Link>
          </div>
        </aside>
      </section>

      {/* Related services */}
      <section className="bg-cream-dim py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass">
            You Might Also Like
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">
            Other rituals to explore
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-charcoal/10 bg-white/60 p-6 transition hover:border-brass/40 hover:shadow-sm"
              >
                <p className="font-display text-lg text-ink transition group-hover:text-brass">
                  {s.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                  {s.duration}
                </p>
                <p className="mt-3 font-display text-brass">{s.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}