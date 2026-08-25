import type { MetadataRoute } from "next";
import { branches } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nehaluxurybodyspa.in";
  const staticPages = ["", "/about", "/services", "/branches", "/gallery", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })
  );
  const branchPages = branches.map((b) => ({
    url: `${base}/branches/${b.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...branchPages];
}
