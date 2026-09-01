import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book Hotel Spa Therapy | Neha Luxury Body Spa",

  description:
    "Book premium hotel spa therapy with certified therapists in Aerocity, Mahipalpur, Chanakyapuri, NFC and Connaught Place. Easy WhatsApp booking.",

  alternates: {
    canonical: `${SITE_URL}/book-now`,
  },

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Book Hotel Spa Therapy | Neha Luxury Body Spa",
    description:
      "Premium spa therapy at your hotel in Aerocity, Mahipalpur, Chanakyapuri, NFC and Connaught Place. Book on WhatsApp.",
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
    title: "Book Hotel Spa Therapy | Neha Luxury Body Spa",
    description:
      "Premium hotel spa therapy with certified therapists. Book easily on WhatsApp.",
    images: ["/og-image-book-now.jpg"],
  },
};

export default function BookNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}