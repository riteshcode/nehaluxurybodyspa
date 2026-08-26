import Image from "next/image";

type BrandImageProps = {
  /** Descriptive alt text — REQUIRED for SEO & accessibility. Write it as if the image already exists. */
  alt: string;
  /** Path to real image once available, e.g. "/images/branches/noida-interior.jpg". Leave undefined to show placeholder. */
  src?: string;
  ratio?: "square" | "portrait" | "wide" | "video" | "fill";
  tone?: "dark" | "light";
  className?: string;
  /** Set true only for the single most important above-the-fold image (e.g. hero) */
  priority?: boolean;
  sizes?: string;
};

const ratioClass: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  video: "aspect-[4/3]",
  fill: "h-full",
};

export default function BrandImage({
  alt,
  src,
  ratio = "wide",
  tone = "light",
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 33vw, 100vw",
}: BrandImageProps) {
  const isDark = tone === "dark";

  // Real image once src is provided — fully SEO-crawlable with proper alt text
  if (src) {
    return (
      <div
        className={`relative min-w-0 overflow-hidden rounded-2xl ${ratioClass[ratio]} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  // Fallback placeholder — visual only, intentionally NOT an <img> so it
  // never gets indexed as a broken/empty image result before real photos exist.
  return (
    <div
      className={`relative min-w-0 overflow-hidden rounded-2xl ${ratioClass[ratio]} ${className} ${isDark ? "bg-ink-soft" : "bg-cream-dim"
        }`}
      aria-hidden="true"
    >
      <div
        className={`absolute left-4 top-4 h-6 w-6 rounded-tl-sm border-l border-t ${isDark ? "border-brass-light/50" : "border-brass/50"
          }`}
      />
      <div
        className={`absolute bottom-4 right-4 h-6 w-6 rounded-br-sm border-b border-r ${isDark ? "border-brass-light/50" : "border-brass/50"
          }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-display text-6xl italic ${isDark ? "text-brass-light/15" : "text-brass/15"
            }`}
        >
          N
        </span>
      </div>
      <div
        className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full border ${isDark ? "border-brass-light/10" : "border-brass/10"
          }`}
      />
      <div
        className={`absolute -bottom-10 -right-10 h-28 w-28 rounded-full border ${isDark ? "border-brass-light/15" : "border-brass/15"
          }`}
      />
      <p
        className={`absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em] ${isDark ? "text-cream/40" : "text-charcoal/35"
          }`}
      >
        Photo coming soon
      </p>
    </div>
  );
}