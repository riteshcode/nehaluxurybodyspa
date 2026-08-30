import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse into the calm, private spaces at Neha Luxury Body Spa branches across Delhi NCR.",
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
};

// TODO: Replace each entry's `src` with a real photo path once available,
// e.g. src: "/images/gallery/reception.jpg"
const galleryItems: {
  label: string;
  ratio: "square" | "portrait" | "wide" | "video";
  image: string;
}[] = [
  { label: "Reception & waiting lounge", ratio: "portrait", image: "/images/gallery/reception.jpg" },
  { label: "Private treatment suite", ratio: "square", image: "/images/gallery/private-treatment.jpg" },
  { label: "Signature oil massage setup", ratio: "square", image: "/images/gallery/signature-massage.jpg" },
  { label: "Couple spa suite", ratio: "portrait", image: "/images/gallery/couple-spa.jpg" },
  { label: "Steam & shower facility", ratio: "wide", image: "/images/gallery/steam-shower.jpg" },
  { label: "Therapy room ambience", ratio: "square", image: "/images/gallery/therapy-room.jpg" },
  { label: "Hotel spa partner setting", ratio: "square", image: "/images/gallery/hotel-spa.jpg" },
  { label: "Relaxation corner", ratio: "portrait", image: "/images/gallery/relaxation-corner.jpg" },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Gallery
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Inside our spaces
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70">
            A calm, private setting is central to every ritual at{" "}
            {brand.name}. Here&apos;s a glimpse of what to expect when you
            walk in.
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Masonry-style gallery grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryItems.map((item) => (
            <div key={item.label} className="break-inside-avoid">
              <BrandImage
                alt={`${item.label} at ${brand.name}`}
                ratio={item.ratio}
                tone="light"
                className="w-full"
                src={item.image}
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-charcoal/50">
          Photos vary slightly by branch. Visit us to experience the space
          in person.
        </p>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-center text-cream">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brass/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            See It in Person
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-cream md:text-4xl">
            Book your first ritual today
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-ink transition hover:bg-brass-light"
            >
              Call {brand.phone}
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
      </section>
    </main>
  );
}