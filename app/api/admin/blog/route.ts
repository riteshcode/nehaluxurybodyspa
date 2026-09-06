import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken, COOKIE_NAME } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase";

async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return await verifySessionToken(token);
}

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select("*")
    .order("date", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ posts: data, role: session.role });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { slug, title, excerpt, category, date, readTime, content, imageUrl } = body;

  if (!slug || !title || !excerpt || !category || !date || !readTime || !Array.isArray(content)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("blog_posts").insert({
    slug,
    title,
    excerpt,
    category,
    date,
    read_time: readTime,
    content,
    image_url: imageUrl || null,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { originalSlug, slug, title, excerpt, category, date, readTime, content, imageUrl } = body;

  if (!originalSlug || !slug || !title || !excerpt || !category || !date || !readTime || !Array.isArray(content)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("blog_posts")
    .update({
      slug,
      title,
      excerpt,
      category,
      date,
      read_time: readTime,
      content,
      image_url: imageUrl || null,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", originalSlug);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "admin") {
    return NextResponse.json({ error: "Only admins can delete posts" }, { status: 403 });
  }

  const { slug } = await req.json();
  if (!slug) return NextResponse.json({ error: "Slug required" }, { status: 400 });

  const { error } = await supabaseAdmin.from("blog_posts").delete().eq("slug", slug);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}