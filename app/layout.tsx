import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand, branches } from "@/lib/data";
import { SITE_URL } from "@/lib/config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Neha Luxury Body Spa | Spa & Massage in Delhi NCR",
    template: "%s | Neha Luxury Body Spa",
  },
  description:
    "Neha Luxury Body Spa brings premium body massage, couple spa and wellness rituals to Delhi NCR. Book your session at our nearest branch today.",
  keywords: [
    "spa in Delhi",
    "luxury spa Delhi NCR",
    "body spa near me",       // NEW
    "luxury body spa Delhi",  // NEW
    "body massage near me",
    "couple spa Delhi",
    "best spa Delhi NCR",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neha Luxury Body Spa",
    description:
      "Premium body massage and wellness rituals across Delhi NCR.",
    url: SITE_URL,
    siteName: "Neha Luxury Body Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neha Luxury Body Spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Luxury Body Spa",
    description: "Premium body massage and wellness rituals across Delhi NCR.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`, // TODO: update once logo is finalized
    telephone: brand.phone,
    email: brand.email,
    sameAs: [
      brand.social.whatsapp,
    ],
    department: branches.map((b) => ({
      "@type": "DaySpa",
      name: `${brand.name} - ${b.area}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: b.city,
        addressCountry: "IN",
      },
      telephone: b.phone,
    })),
  };

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}