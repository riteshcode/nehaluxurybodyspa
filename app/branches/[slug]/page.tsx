import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RippleDivider from "@/components/RippleDivider";
import { branches, services, brand } from "@/lib/data";

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
  return {
    title: `Spa in ${branch.area}, ${branch.city}`,
    description: `${brand.name} in ${branch.area} offers body massage, couple spa and wellness rituals. ${branch.address}. Call ${branch.phone} to book.`,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: `${brand.name} - ${branch.area}`,
    address: branch.address,
    telephone: branch.phone,
    openingHours: branch.hours,
    areaServed: branch.city,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            {branch.city}
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            {brand.name} — {branch.area}
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="leading-relaxed text-charcoal/80">{branch.intro}</p>
          <h2 className="mt-8 font-display text-2xl text-ink">
            Popular services at this branch
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-charcoal/10 bg-white/60 p-5"
              >
                <p className="font-display text-lg text-ink">{s.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-sage">
                  {s.duration}
                </p>
                <p className="mt-2 font-display text-brass">{s.price}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-charcoal/10 bg-cream-dim p-7">
          <p className="text-xs uppercase tracking-widest text-sage">
            Address
          </p>
          <p className="mt-1 text-sm text-charcoal/80">{branch.address}</p>
          <p className="mt-4 text-xs uppercase tracking-widest text-sage">
            Hours
          </p>
          <p className="mt-1 text-sm text-charcoal/80">{branch.hours}</p>
          <p className="mt-4 text-xs uppercase tracking-widest text-sage">
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
        </aside>
      </section>
    </main>
  );
}
