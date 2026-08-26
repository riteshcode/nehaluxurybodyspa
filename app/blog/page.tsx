import type { Metadata } from "next";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { blogPosts, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Wellness tips, massage guides and self-care advice from Neha Luxury Body Spa, Delhi NCR.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brass-light">
            Blog
          </p>
          <h1 className="mt-4 font-display text-4xl italic md:text-5xl">
            Wellness Journal
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70">
            Guides, tips and things worth knowing about massage, recovery
            and everyday wellness — from the {brand.name} team.
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Featured post */}
      {/* Featured post */}
      {featured && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group flex flex-col items-stretch overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition hover:border-brass/40 hover:shadow-sm md:flex-row"
          >
            <div className="min-w-0 md:w-1/2">
              <BrandImage
                alt={featured.title}
                ratio="fill"
                tone="light"
                className="w-full rounded-none"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center p-7 md:w-1/2 md:p-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-sage">
                <span>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-brass" />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl text-ink transition group-hover:text-brass md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {featured.excerpt}
              </p>
              <p className="mt-4 text-xs text-charcoal/45">
                {formatDate(featured.date)}
              </p>
              <span className="mt-5 inline-block text-sm text-brass group-hover:underline">
                Read article →
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Rest of posts */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60 transition hover:border-brass/40 hover:shadow-sm"
            >
              <BrandImage
                alt={post.title}
                ratio="video"
                tone="light"
                className="rounded-none"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-sage">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-brass" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg text-ink transition group-hover:text-brass">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-charcoal/45">
                  {formatDate(post.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}