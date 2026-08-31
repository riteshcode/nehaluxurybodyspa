import type { Metadata } from "next";
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

export default function BookNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}