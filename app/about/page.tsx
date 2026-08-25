import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import { brand, branches } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Neha Luxury Body Spa, Delhi NCR's trusted name in premium body massage and wellness rituals across multiple branches.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            About Us
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            The story behind {brand.name}
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto max-w-3xl px-6 py-16 leading-relaxed text-charcoal/80">
        <p>
          {brand.name} was founded with a simple idea: everyone deserves a
          space to slow down, breathe and be cared for. What began as a single
          branch has grown into a trusted name across {branches.length}{" "}
          locations in Delhi NCR, each one built around the same promise —
          skilled therapists, a calm private setting, and rituals drawn from
          traditional wellness practices.
        </p>
        <p className="mt-6">
          {/* TODO: Replace with your real brand story */}
          Every branch follows the same standards for hygiene, service and
          comfort, so wherever you visit us, the experience feels familiar and
          unhurried. Our therapists are trained in a range of techniques, from
          deep tissue and Thai massage to gentler aromatherapy rituals, so we
          can match the right treatment to what your body needs that day.
        </p>
        <p className="mt-6">
          We believe wellness should be accessible, not occasional — which is
          why we keep our branches close to where people live and work across
          the city.
        </p>
      </section>
    </main>
  );
}
