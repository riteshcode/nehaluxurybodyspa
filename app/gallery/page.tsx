import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse into the calm, private spaces at Neha Luxury Body Spa branches across Delhi NCR.",
};

// TODO: Replace these placeholders with your actual spa photos
const placeholders = Array.from({ length: 8 }, (_, i) => i + 1);

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Gallery
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Inside our spaces
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {placeholders.map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-xl bg-cream-dim text-sm text-sage"
            >
              Photo {n}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-charcoal/50">
          Replace these placeholders with real branch photos before launch.
        </p>
      </section>
    </main>
  );
}
