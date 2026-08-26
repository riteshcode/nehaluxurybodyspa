import type { MetadataRoute } from "next";
import { branches, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nehaluxurybodyspa.in";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/branches`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const branchPages: MetadataRoute.Sitemap = branches.map((b) => ({
    url: `${base}/branches/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticPages, ...branchPages, ...servicePages];
}