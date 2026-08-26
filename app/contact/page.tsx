import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import ContactForm from "@/components/ContactForm";
import { brand, branches } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact & Book Now",
  description:
    "Get in touch with Neha Luxury Body Spa to book a session at your nearest Delhi NCR branch.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Let&apos;s find your session
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70">
            Call us, message on WhatsApp, or leave your details below — our
            team will help you pick the right branch and time slot.
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Quick contact cards */}
      <section className="mx-auto max-w-5xl px-6 pt-14">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white/60 p-6 transition hover:border-brass/40 hover:shadow-sm"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-sage">
                Call Us
              </p>
              <p className="mt-1 font-display text-lg text-ink transition group-hover:text-brass">
                {brand.phone}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/30 text-brass transition group-hover:bg-brass group-hover:text-ink">
              →
            </span>
          </a>

          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white/60 p-6 transition hover:border-brass/40 hover:shadow-sm"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-sage">
                WhatsApp
              </p>
              <p className="mt-1 font-display text-lg text-ink transition group-hover:text-brass">
                Message us directly
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/30 text-brass transition group-hover:bg-brass group-hover:text-ink">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Branches + form */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brass">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink">
            Our branches
          </h2>

          <div className="mt-6 max-h-[420px] space-y-3 overflow-y-auto pr-2">
            {branches.map((b) => (
              <div
                key={b.slug}
                className="rounded-xl border border-charcoal/10 bg-white/60 p-5"
              >
                <p className="font-display text-base text-ink">{b.area}</p>
                <p className="mt-1 text-sm text-charcoal/60">{b.address}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-sage">
                  {b.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brass">
            Book Online
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink">
            Send us your details
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            We&apos;ll call you back to confirm your branch and time slot.
          </p>

          <div className="mt-6 rounded-2xl border border-brass/25 bg-cream-dim p-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}