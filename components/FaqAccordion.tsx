"use client";

import { useState } from "react";

export default function FaqAccordion({
  faqs,
}: {
  faqs: { id: string; question: string; answer: string }[];
}) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/60"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-display text-base text-ink">{faq.question}</span>
              <span
                className={`shrink-0 text-brass transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-charcoal/70">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}