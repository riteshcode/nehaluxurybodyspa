"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RichTextEditor from "@/components/admin/RichTextEditor";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read_time: string;
  content_html: string;
  image_url?: string;
};

type Review = {
  id: string;
  name: string;
  rating: number;
  review_text: string;
  review_date: string;
  location?: string;
  display_order: number;
};

type Faq = {
  id: string;
  question: string;
  answer: string;
  display_order: number;
};

const emptyPostForm = {
  slug: "",
  title: "",
  excerpt: "",
  category: "Wellness",
  date: new Date().toISOString().slice(0, 10),
  readTime: "4 min read",
  contentHtml: "<p></p>",
  imageUrl: "",
};

const emptyReviewForm = {
  id: "",
  name: "",
  rating: 5,
  reviewText: "",
  reviewDate: new Date().toISOString().slice(0, 10),
  location: "",
  displayOrder: 0,
};

const emptyFaqForm = {
  id: "",
  question: "",
  answer: "",
  displayOrder: 0,
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function AdminPage() {
  const [tab, setTab] = useState<"blog" | "reviews" | "faqs">("blog");
  const [role, setRole] = useState<"admin" | "editor" | null>(null);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl italic text-ink">Admin Panel</h1>
        {role && (
          <span className="rounded-full bg-cream-dim px-3 py-1 text-xs uppercase tracking-widest text-charcoal/60">
            {role}
          </span>
        )}
      </div>

      <div className="mt-6 flex gap-2 border-b border-charcoal/10">
        {(["blog", "reviews", "faqs"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`border-b-2 px-4 py-2.5 text-sm font-medium capitalize transition ${
              tab === t
                ? "border-brass text-ink"
                : "border-transparent text-charcoal/50 hover:text-ink"
            }`}
          >
            {t === "faqs" ? "FAQs" : t}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "blog" && <BlogTab onRoleLoaded={setRole} />}
        {tab === "reviews" && <ReviewsTab onRoleLoaded={setRole} />}
        {tab === "faqs" && <FaqsTab onRoleLoaded={setRole} />}
      </div>
    </main>
  );
}

// ==================== BLOG TAB ====================
function BlogTab({ onRoleLoaded }: { onRoleLoaded: (r: "admin" | "editor" | null) => void }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [role, setRole] = useState<"admin" | "editor" | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState(emptyPostForm);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  async function loadPosts() {
    setLoading(true);
    const res = await fetch("/api/admin/blog");
    const data = await res.json();
    if (res.ok) {
      setPosts(data.posts);
      setRole(data.role);
      onRoleLoaded(data.role);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startEdit(post: Post) {
    setEditingSlug(post.slug);
    setForm({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.read_time,
      contentHtml: post.content_html || "<p></p>",
      imageUrl: post.image_url || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingSlug(null);
    setForm(emptyPostForm);
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    setUploading(false);

    if (res.ok) {
      setForm((f) => ({ ...f, imageUrl: data.url }));
    } else {
      alert(data.error || "Upload failed");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setErrorMsg("");

    const payload = {
      slug: form.slug || slugify(form.title),
      title: form.title,
      excerpt: form.excerpt,
      category: form.category,
      date: form.date,
      readTime: form.readTime,
      contentHtml: form.contentHtml,
      imageUrl: form.imageUrl,
    };

    const res = editingSlug
      ? await fetch("/api/admin/blog", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ originalSlug: editingSlug, ...payload }),
        })
      : await fetch("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

    if (res.ok) {
      resetForm();
      await loadPosts();
      setStatus("idle");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong");
      setStatus("error");
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this post permanently?")) return;
    const res = await fetch("/api/admin/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) {
      await loadPosts();
      if (editingSlug === slug) resetForm();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to delete post");
    }
  }

  return (
    <div>
      <h2 className="font-display text-2xl italic text-ink">
        {editingSlug ? "Edit Blog Post" : "Add Blog Post"}
      </h2>
      <p className="mt-1 text-sm text-charcoal/60">Changes publish instantly.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Title</label>
          <input
            value={form.title}
            onChange={(e) => {
              const title = e.target.value;
              setForm((f) => ({ ...f, title, slug: editingSlug ? f.slug : slugify(title) }));
            }}
            required
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">URL Slug</label>
          <input
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))}
            required
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Cover Image</label>
          <div className="mt-2 flex items-center gap-4">
            {form.imageUrl && (
              <div className="relative h-20 w-32 overflow-hidden rounded-lg border border-charcoal/10">
                <Image src={form.imageUrl} alt="Preview" fill className="object-cover" />
              </div>
            )}
            <label className="cursor-pointer rounded-full border border-charcoal/20 px-5 py-2.5 text-sm text-ink transition hover:border-brass hover:text-brass">
              {uploading ? "Uploading..." : form.imageUrl ? "Change Image" : "Upload Image"}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Excerpt</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            required
            rows={2}
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">Category</label>
            <input
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              required
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              required
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">Read Time</label>
            <input
              value={form.readTime}
              onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
              required
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Content</label>
          <div className="mt-1">
            <RichTextEditor
              content={form.contentHtml}
              onChange={(html) => setForm((f) => ({ ...f, contentHtml: html }))}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={status === "saving" || uploading}
            className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft disabled:opacity-50"
          >
            {status === "saving" ? "Saving..." : editingSlug ? "Update Post" : "Publish Post"}
          </button>
          {editingSlug && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-charcoal/20 px-7 py-3 text-sm text-ink transition hover:border-brass hover:text-brass"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
      </form>

      <div className="mt-16 border-t border-charcoal/10 pt-8">
        <h3 className="font-display text-xl text-ink">Existing Posts</h3>
        {loading ? (
          <p className="mt-4 text-sm text-charcoal/50">Loading...</p>
        ) : (
          <div className="mt-4 space-y-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex items-center justify-between rounded-xl border border-charcoal/10 bg-white/60 p-4"
              >
                <div className="flex items-center gap-3">
                  {post.image_url && (
                    <div className="relative h-12 w-16 overflow-hidden rounded-lg">
                      <Image src={post.image_url} alt="" fill className="object-cover" />
                    </div>
                  )}
                  <div>
                    <p className="font-display text-base text-ink">{post.title}</p>
                    <p className="text-xs text-charcoal/50">{post.slug} — {post.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(post)}
                    className="rounded-full border border-charcoal/20 px-4 py-1.5 text-xs text-ink hover:border-brass hover:text-brass"
                  >
                    Edit
                  </button>
                  {role === "admin" && (
                    <button
                      onClick={() => handleDelete(post.slug)}
                      className="rounded-full border border-red-300 px-4 py-1.5 text-xs text-red-500 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== REVIEWS TAB ====================
function ReviewsTab({ onRoleLoaded }: { onRoleLoaded: (r: "admin" | "editor" | null) => void }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [role, setRole] = useState<"admin" | "editor" | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyReviewForm);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function loadReviews() {
    setLoading(true);
    const res = await fetch("/api/admin/reviews");
    const data = await res.json();
    if (res.ok) {
      setReviews(data.reviews);
      setRole(data.role);
      onRoleLoaded(data.role);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startEdit(r: Review) {
    setEditingId(r.id);
    setForm({
      id: r.id,
      name: r.name,
      rating: r.rating,
      reviewText: r.review_text,
      reviewDate: r.review_date,
      location: r.location || "",
      displayOrder: r.display_order,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingId(null);
    setForm(emptyReviewForm);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setErrorMsg("");

    const payload = {
      name: form.name,
      rating: form.rating,
      reviewText: form.reviewText,
      reviewDate: form.reviewDate,
      location: form.location,
      displayOrder: form.displayOrder,
    };

    const res = editingId
      ? await fetch("/api/admin/reviews", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...payload }),
        })
      : await fetch("/api/admin/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

    if (res.ok) {
      resetForm();
      await loadReviews();
      setStatus("idle");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong");
      setStatus("error");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this review permanently?")) return;
    const res = await fetch("/api/admin/reviews", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      await loadReviews();
      if (editingId === id) resetForm();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to delete review");
    }
  }

  return (
    <div>
      <h2 className="font-display text-2xl italic text-ink">
        {editingId ? "Edit Review" : "Add Review"}
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">Location (optional)</label>
            <input
              value={form.location}
              onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
              placeholder="e.g. Aerocity"
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Rating</label>
          <div className="mt-2 flex gap-2">
            {[1, 2, 3, 4, 5].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setForm((f) => ({ ...f, rating: r }))}
                className={`h-10 w-10 rounded-full border text-sm font-medium transition ${
                  form.rating >= r
                    ? "border-brass bg-brass text-ink"
                    : "border-charcoal/20 text-charcoal/40"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Review Text</label>
          <textarea
            value={form.reviewText}
            onChange={(e) => setForm((f) => ({ ...f, reviewText: e.target.value }))}
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">Date</label>
            <input
              type="date"
              value={form.reviewDate}
              onChange={(e) => setForm((f) => ({ ...f, reviewDate: e.target.value }))}
              required
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-sage">
              Display Order (lower shows first)
            </label>
            <input
              type="number"
              value={form.displayOrder}
              onChange={(e) => setForm((f) => ({ ...f, displayOrder: Number(e.target.value) }))}
              className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={status === "saving"}
            className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft disabled:opacity-50"
          >
            {status === "saving" ? "Saving..." : editingId ? "Update Review" : "Add Review"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-charcoal/20 px-7 py-3 text-sm text-ink transition hover:border-brass hover:text-brass"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
      </form>

      <div className="mt-16 border-t border-charcoal/10 pt-8">
        <h3 className="font-display text-xl text-ink">Existing Reviews</h3>
        {loading ? (
          <p className="mt-4 text-sm text-charcoal/50">Loading...</p>
        ) : (
          <div className="mt-4 space-y-3">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between rounded-xl border border-charcoal/10 bg-white/60 p-4"
              >
                <div>
                  <p className="font-display text-base text-ink">
                    {r.name} — {"★".repeat(r.rating)}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-charcoal/50">
                    {r.review_text}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(r)}
                    className="rounded-full border border-charcoal/20 px-4 py-1.5 text-xs text-ink hover:border-brass hover:text-brass"
                  >
                    Edit
                  </button>
                  {role === "admin" && (
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="rounded-full border border-red-300 px-4 py-1.5 text-xs text-red-500 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== FAQS TAB ====================
function FaqsTab({ onRoleLoaded }: { onRoleLoaded: (r: "admin" | "editor" | null) => void }) {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [role, setRole] = useState<"admin" | "editor" | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyFaqForm);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function loadFaqs() {
    setLoading(true);
    const res = await fetch("/api/admin/faqs");
    const data = await res.json();
    if (res.ok) {
      setFaqs(data.faqs);
      setRole(data.role);
      onRoleLoaded(data.role);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadFaqs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startEdit(f: Faq) {
    setEditingId(f.id);
    setForm({
      id: f.id,
      question: f.question,
      answer: f.answer,
      displayOrder: f.display_order,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingId(null);
    setForm(emptyFaqForm);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setErrorMsg("");

    const payload = {
      question: form.question,
      answer: form.answer,
      displayOrder: form.displayOrder,
    };

    const res = editingId
      ? await fetch("/api/admin/faqs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingId, ...payload }),
        })
      : await fetch("/api/admin/faqs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

    if (res.ok) {
      resetForm();
      await loadFaqs();
      setStatus("idle");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong");
      setStatus("error");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this FAQ permanently?")) return;
    const res = await fetch("/api/admin/faqs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      await loadFaqs();
      if (editingId === id) resetForm();
    } else {
      const data = await res.json();
      alert(data.error || "Failed to delete FAQ");
    }
  }

  return (
    <div>
      <h2 className="font-display text-2xl italic text-ink">
        {editingId ? "Edit FAQ" : "Add FAQ"}
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Question</label>
          <input
            value={form.question}
            onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
            required
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">Answer</label>
          <textarea
            value={form.answer}
            onChange={(e) => setForm((f) => ({ ...f, answer: e.target.value }))}
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-sage">
            Display Order (lower shows first)
          </label>
          <input
            type="number"
            value={form.displayOrder}
            onChange={(e) => setForm((f) => ({ ...f, displayOrder: Number(e.target.value) }))}
            className="mt-1 w-full rounded-xl border border-charcoal/15 px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={status === "saving"}
            className="rounded-full bg-ink px-7 py-3 text-sm text-cream transition hover:bg-ink-soft disabled:opacity-50"
          >
            {status === "saving" ? "Saving..." : editingId ? "Update FAQ" : "Add FAQ"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-charcoal/20 px-7 py-3 text-sm text-ink transition hover:border-brass hover:text-brass"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
      </form>

      <div className="mt-16 border-t border-charcoal/10 pt-8">
        <h3 className="font-display text-xl text-ink">Existing FAQs</h3>
        {loading ? (
          <p className="mt-4 text-sm text-charcoal/50">Loading...</p>
        ) : (
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <div
                key={f.id}
                className="flex items-center justify-between rounded-xl border border-charcoal/10 bg-white/60 p-4"
              >
                <div>
                  <p className="font-display text-base text-ink">{f.question}</p>
                  <p className="mt-1 line-clamp-1 text-xs text-charcoal/50">{f.answer}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(f)}
                    className="rounded-full border border-charcoal/20 px-4 py-1.5 text-xs text-ink hover:border-brass hover:text-brass"
                  >
                    Edit
                  </button>
                  {role === "admin" && (
                    <button
                      onClick={() => handleDelete(f.id)}
                      className="rounded-full border border-red-300 px-4 py-1.5 text-xs text-red-500 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}