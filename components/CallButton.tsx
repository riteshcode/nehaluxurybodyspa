import { brand } from "@/lib/data";

export default function CallButton() {
  return (
    <a
      href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-ink text-cream shadow-lg transition hover:scale-105"
      aria-label="Call to Book"
    >
      <span className="absolute inset-0 rounded-full bg-ink animate-gentle-pulse" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-6 w-6">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z" />
      </svg>
    </a>
  );
}