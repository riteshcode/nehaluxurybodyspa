import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import RippleDivider from "@/components/RippleDivider";
import BrandImage from "@/components/BrandImage";
import { blogPosts, brand } from "@/lib/data";
import { SITE_URL } from "@/lib/config";


export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "/og-image.jpg", // TODO: ideally a post-specific cover image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.jpg"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: brand.name,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brass/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-brass-light">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-cream/40" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl italic md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-cream/50">
            {formatDate(post.date)}
          </p>
        </div>
      </section>
      <RippleDivider tone="ink" />

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <BrandImage alt={post.title} ratio="wide" tone="light" />

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brass/25 bg-cream-dim p-7 text-center">
          <p className="font-display text-lg text-ink">
            Ready to experience it yourself?
          </p>
          <p className="mt-2 text-sm text-charcoal/70">
            Book a session at your nearest {brand.name} branch.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`}
              className="rounded-full bg-ink px-6 py-3 text-sm text-cream transition hover:bg-ink-soft"
            >
              Call to Book
            </a>
            <Link
              href="/branches"
              className="rounded-full border border-brass/40 px-6 py-3 text-sm text-ink transition hover:bg-ink hover:text-cream"
            >
              Find a Branch
            </Link>
          </div>
        </div>
      </section>

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="bg-cream-dim py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brass">
              Keep Reading
            </p>
            <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">
              More from the journal
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-charcoal/10 bg-white/60 p-6 transition hover:border-brass/40 hover:shadow-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-sage">
                    {p.category}
                  </p>
                  <p className="mt-2 font-display text-lg text-ink transition group-hover:text-brass">
                    {p.title}
                  </p>
                  <span className="mt-3 inline-block text-sm text-brass group-hover:underline">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}