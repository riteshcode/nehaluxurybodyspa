function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i <= rating ? "#FBBC04" : "#E0E0E0"}
          className="h-4 w-4"
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  const date = new Date(iso);
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());

  if (diffMonths < 1) return "This month";
  if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  const years = Math.floor(diffMonths / 12);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

export default function GoogleReviewCard({
  name,
  rating,
  reviewText,
  reviewDate,
  location,
}: {
  name: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
  location?: string;
}) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass text-lg font-medium text-ink">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-medium text-ink">{name}</p>
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
          <div className="mt-0.5 flex items-center gap-2 text-xs text-charcoal/50">
            <StarRating rating={rating} />
            <span>·</span>
            <span>{formatDate(reviewDate)}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{reviewText}</p>
      {location && (
        <p className="mt-3 text-xs uppercase tracking-widest text-sage">{location}</p>
      )}
    </div>
  );
}