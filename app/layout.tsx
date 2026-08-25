import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  metadataBase: new URL("https://nehaluxurybodyspa.in"),
  title: {
    default: "Neha Luxury Body Spa | Premium Spa & Massage in Delhi NCR",
    template: "%s | Neha Luxury Body Spa",
  },
  description:
    "Neha Luxury Body Spa brings premium body massage, couple spa and wellness rituals to Delhi NCR. Book your session at our nearest branch today.",
  keywords: [
    "spa in Delhi",
    "luxury spa Delhi NCR",
    "body massage near me",
    "couple spa Delhi",
    "best spa Delhi NCR",
  ],
  openGraph: {
    title: "Neha Luxury Body Spa",
    description:
      "Premium body massage and wellness rituals across Delhi NCR.",
    url: "https://nehaluxurybodyspa.in",
    siteName: "Neha Luxury Body Spa",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
