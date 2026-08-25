import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import ContactForm from "@/components/ContactForm";
import { brand, branches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Book Now",
  description:
    "Get in touch with Neha Luxury Body Spa to book a session at your nearest Delhi NCR branch.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Let&apos;s find your session
          </h1>
        </div>
      </section>
      <RippleDivider tone="ink" />

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-ink">Reach us directly</h2>
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="mt-4 block text-lg text-brass hover:underline"
          >
            {brand.phone}
          </a>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            className="mt-2 block text-sm text-charcoal/70 hover:text-brass"
          >
            Message us on WhatsApp
          </a>

          <h3 className="mt-10 text-sm uppercase tracking-widest text-sage">
            Branches
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-charcoal/70">
            {branches.map((b) => (
              <li key={b.slug}>
                <span className="font-medium text-ink">{b.area}</span> —{" "}
                {b.address}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-ink">
            Or send us your details
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            We&apos;ll call you back to confirm your branch and time slot.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
