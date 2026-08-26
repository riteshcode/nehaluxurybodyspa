import type { Metadata } from "next";
import RippleDivider from "@/components/RippleDivider";
import { brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${brand.name} — how we collect, use and protect your information.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

const lastUpdated = "26 August 2026";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you contact us through our website, phone, or WhatsApp, we may collect your name, phone number, email address, and any message or details you choose to share with us — for example, when booking a session or asking a question through our contact form.",
      "We do not collect payment information through our website. All payments are handled directly at our branches.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiries, confirm bookings, and improve our services. We may also use your phone number or WhatsApp number to follow up regarding an appointment you've requested.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Cookies and Website Analytics",
    body: [
      "Our website may use basic analytics tools to understand how visitors use our site — such as which pages are viewed most. This helps us improve our content and user experience. This data is aggregated and does not personally identify you.",
    ],
  },
  {
    title: "4. Third-Party Links",
    body: [
      "Our website may contain links to third-party platforms such as WhatsApp, Google Maps, or social media. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their respective privacy policies.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We take reasonable measures to protect the information you share with us. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You may contact us at any time to ask what information we hold about you, request corrections, or request that we delete your information from our records, subject to any legal or operational requirements.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      `If you have any questions about this Privacy Policy or how your information is handled, please reach out to us at ${brand.email} or call us at ${brand.phone}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-cream/50">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="leading-relaxed text-charcoal/80">
          This Privacy Policy explains how {brand.name} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and
          protects information when you visit our website or contact us to
          book a session.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl text-ink">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((para, i) => (
                  <p key={i} className="leading-relaxed text-charcoal/75">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}