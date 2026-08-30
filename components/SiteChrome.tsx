"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/data";

const MINIMAL_ROUTES = ["/book-now"];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMinimal = MINIMAL_ROUTES.some((route) => pathname?.startsWith(route));

  if (isMinimal) {
    return (
      <>
        <header className="sticky top-0 z-50 border-b border-brass/20 bg-cream/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-brass/40 bg-ink transition group-hover:border-brass">
                <img
                  src="/logo-icon.png"
                  alt={`${brand.name} logo`}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg italic tracking-wide text-ink">
                  Neha <span className="not-italic text-brass">Luxury</span>
                </span>
                <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-charcoal/50">
                  Body Spa
                </span>
              </span>
            </Link>
          </div>
        </header>
        {children}
        {/* No Footer on ad landing pages — keeps focus on the CTA */}
      </>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}