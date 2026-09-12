import { supabaseAdmin } from "./supabase";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  contentHtml: string; // CHANGED — was content: string[]
  image?: string;
};

function mapRow(row: any): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    date: row.date,
    readTime: row.read_time,
    contentHtml: row.content_html || "",
    image: row.image_url || undefined,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .order("date", { ascending: false });

  if (error || !data) return [];
  return data.map(mapRow);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return undefined;
  return mapRow(data);
}