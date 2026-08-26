type PlaceholderImageProps = {
  label: string;
  ratio?: "square" | "portrait" | "wide" | "video";
  tone?: "dark" | "light";
  className?: string;
};

const ratioClass: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  video: "aspect-[4/3]",
};

export default function PlaceholderImage({
  label,
  ratio = "wide",
  tone = "light",
  className = "",
}: PlaceholderImageProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${ratioClass[ratio]} ${className} ${
        isDark ? "bg-ink-soft" : "bg-cream-dim"
      }`}
      role="img"
      aria-label={label}
    >
      {/* corner frame accent */}
      <div
        className={`absolute left-4 top-4 h-6 w-6 rounded-tl-sm border-l border-t ${
          isDark ? "border-brass-light/50" : "border-brass/50"
        }`}
      />
      <div
        className={`absolute bottom-4 right-4 h-6 w-6 rounded-br-sm border-b border-r ${
          isDark ? "border-brass-light/50" : "border-brass/50"
        }`}
      />

      {/* monogram watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-display text-6xl italic ${
            isDark ? "text-brass-light/15" : "text-brass/15"
          }`}
        >
          N
        </span>
      </div>

      {/* concentric ripple, echoing RippleDivider */}
      <div
        className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full border ${
          isDark ? "border-brass-light/10" : "border-brass/10"
        }`}
      />
      <div
        className={`absolute -bottom-10 -right-10 h-28 w-28 rounded-full border ${
          isDark ? "border-brass-light/15" : "border-brass/15"
        }`}
      />

      {/* label */}
      <p
        className={`absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em] ${
          isDark ? "text-cream/40" : "text-charcoal/35"
        }`}
      >
        {label}
      </p>
    </div>
  );
}