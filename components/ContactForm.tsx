"use client";

import { useState } from "react";
import { branches } from "@/lib/data";

// TODO: Sign up free at https://web3forms.com, create a form, and paste
// your Access Key below. This lets the form submit without any backend.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 rounded-xl border border-brass/30 bg-cream-dim p-6 text-sm text-charcoal/80">
        Thank you — we&apos;ve received your details and will call you back
        shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-widest text-sage">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          type="text"
          className="mt-1 w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none focus:border-brass"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-xs uppercase tracking-widest text-sage">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          required
          type="tel"
          className="mt-1 w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none focus:border-brass"
        />
      </div>
      <div>
        <label htmlFor="branch" className="text-xs uppercase tracking-widest text-sage">
          Preferred Branch
        </label>
        <select
          id="branch"
          name="branch"
          className="mt-1 w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none focus:border-brass"
        >
          {branches.map((b) => (
            <option key={b.slug} value={b.area}>
              {b.area}, {b.city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-sage">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1 w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none focus:border-brass"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ink px-6 py-3 text-sm text-cream transition hover:bg-ink-soft disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request a Call Back"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please call us directly instead.
        </p>
      )}
    </form>
  );
}
