import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RippleDivider from "@/components/RippleDivider";
import { services, brand } from "@/lib/data";

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
  return {
    title: service.name,
    description: `${service.description} Book ${service.name} at ${brand.name}, Delhi NCR.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Our Services
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            {service.name}
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-6">
          <p className="text-sm uppercase tracking-widest text-sage">
            {service.duration}
          </p>
          <p className="font-display text-2xl text-brass">{service.price}</p>
        </div>
        <p className="mt-6 leading-relaxed text-charcoal/80">
          {service.description}
        </p>
        <a
          href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
          className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft"
        >
          Call to Book This Service
        </a>
      </section>
    </main>
  );
}
