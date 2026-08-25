import type { Metadata } from "next";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import { branches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Branches in Delhi NCR",
  description:
    "Find the Neha Luxury Body Spa branch nearest to you across Delhi NCR, with address, hours and contact details.",
};

export default function BranchesPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Branches
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Find a branch near you
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <Link
              key={b.slug}
              href={`/branches/${b.slug}`}
              className="group rounded-2xl border border-charcoal/10 bg-white/60 p-7 transition hover:border-brass/50"
            >
              <p className="font-display text-xl text-ink">{b.area}</p>
              <p className="mt-1 text-sm text-charcoal/60">{b.city}</p>
              <p className="mt-4 text-sm text-charcoal/70">{b.address}</p>
              <p className="mt-2 text-sm text-charcoal/70">{b.hours}</p>
              <span className="mt-5 inline-block text-sm text-brass group-hover:underline">
                View branch →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
