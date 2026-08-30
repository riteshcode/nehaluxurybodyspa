import type { Metadata } from "next";
import { brand, hotelPartners } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book Hotel Spa Therapy",
  description:
    "Book a certified spa therapist at your hotel in Delhi NCR. Available at Aerocity, Mahipalpur, NFC, Connaught Place and Chanakyapuri. Call now.",
  alternates: {
    canonical: `${SITE_URL}/book-now`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Book Hotel Spa Therapy — ₹11,999",
    description:
      "Certified therapist at your hotel — Aerocity, CP, Dwarka, NFC, Chanakyapuri.",
    url: `${SITE_URL}/book-now`,
    type: "website",
    images: [
      {
        url: "/og-image-book-now.jpg",
        width: 1200,
        height: 630,
        alt: "Book Hotel Spa Therapy at Neha Luxury Body Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Hotel Spa Therapy — ₹11,999",
    description:
      "Certified therapist at your hotel — Aerocity, CP, Dwarka, NFC, Chanakyapuri.",
    images: ["/og-image-book-now.jpg"],
  },
};

const bookingMessage =
  "Hi, I want to book a therapy session at my hotel. Please share availability.";

export default function BookNowPage() {
  const whatsappUrl = getWhatsAppUrl(bookingMessage);
  const telUrl = `tel:${brand.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <main className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-14 text-cream md:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brass/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brass-light">
            Hotel Spa Therapy
          </p>
          <h1 className="mt-3 font-display text-3xl italic leading-tight md:text-4xl">
            Book a Therapy Expert
          </h1>

          <div className="mx-auto mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-brass/30 bg-ink-soft/60 px-6 py-3">
            <span className="font-display text-4xl text-brass-light md:text-5xl">
              ₹11,999
            </span>
            <span className="text-xs uppercase tracking-widest text-cream/50">
              / session
            </span>
          </div>
          <p className="mt-3 text-sm text-cream/60">
            Facility available at select 5-star hotels
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={telUrl}
              className="rounded-full bg-brass px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-brass-light"
            >
              Call {brand.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition hover:border-brass-light hover:text-brass-light"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-charcoal/10 bg-cream-dim py-6">
        <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 text-center">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass" />
            <p className="text-xs uppercase tracking-widest text-charcoal/60">
              Certified Therapists
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass" />
            <p className="text-xs uppercase tracking-widest text-charcoal/60">
              At Your Hotel
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass" />
            <p className="text-xs uppercase tracking-widest text-charcoal/60">
              Easy Booking
            </p>
          </div>
        </div>
      </section>

      {/* Hotel list */}
      <section className="mx-auto max-w-xl px-6 py-12">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-brass">
          Facility Available At
        </p>
        <h2 className="mt-2 text-center font-display text-xl text-ink md:text-2xl">
          5-Star Hotel Locations
        </h2>

        <div className="mt-8 space-y-3">
          {hotelPartners.map((h) => (
            <div
              key={h.area}
              className="rounded-xl border border-charcoal/10 bg-white/60 px-5 py-4"
            >
              <p className="font-display text-base text-ink">{h.area}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {h.hotels.map((hotel) => (
                  <span
                    key={hotel}
                    className="flex items-center gap-1.5 text-sm text-charcoal/65"
                  >
                    <span className="h-1 w-1 rounded-full bg-brass/60" />
                    {hotel}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-charcoal/10 bg-white/95 p-3 backdrop-blur">
        <div className="mx-auto flex max-w-xl gap-3">
          <a
            href={telUrl}
            className="flex-1 rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-cream transition hover:bg-ink-soft"
          >
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-brass px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-brass-light"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}