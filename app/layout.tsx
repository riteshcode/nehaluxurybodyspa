import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
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
    "body spa near me",
    "luxury body spa Delhi",
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
    logo: `${SITE_URL}/logo.png`,
    telephone: brand.phone,
    email: brand.email,
    sameAs: [brand.social.whatsapp],
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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: SITE_URL,
  };

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        
        {/* Google Ads conversion tracking tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18418684466"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18418684466');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '2530682367418334');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <SiteChrome>{children}</SiteChrome>

        <WhatsAppButton />
      </body>
    </html>
  );
}