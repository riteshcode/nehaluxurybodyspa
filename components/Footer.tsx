import Link from "next/link";
import { brand, branches, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-brass-light">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brass-light">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-brass-light">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brass-light">Home</Link></li>
            <li><Link href="/services" className="hover:text-brass-light">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-brass-light">Price Plans</Link></li>
            <li><Link href="/branches" className="hover:text-brass-light">Our Outlets</Link></li>
            <li><Link href="/gallery" className="hover:text-brass-light">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-brass-light">Blog</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brass-light">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-brass-light">
            Outlets
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {branches.map((b) => (
              <li key={b.slug}>
                <Link href={`/branches/${b.slug}`} className="hover:text-brass-light">
                  Spa in {b.area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-brass-light">
            Get in Touch
          </p>
          <p className="mt-3 text-sm">{brand.address}</p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${brand.email}`} className="hover:text-brass-light">
              {brand.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-brass-light">
              {brand.phone}
            </a>
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={brand.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-cream/70 hover:text-brass-light"
            >
              WhatsApp
            </a>
            <a
              href={brand.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cream/70 hover:text-brass-light"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}