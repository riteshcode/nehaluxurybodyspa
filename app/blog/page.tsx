import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";

export const metadata: Metadata = {
  title: "Blog",
  description: "Wellness tips and updates from Neha Luxury Body Spa.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Blog
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Wellness Journal
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />
      <section className="mx-auto max-w-3xl px-6 py-20 text-center text-charcoal/60">
        <p>Articles coming soon. Check back for wellness tips and spa guides.</p>
      </section>
    </main>
  );
}
