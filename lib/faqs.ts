import { supabaseAdmin } from "./supabase";

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

function mapRow(row: any): Faq {
  return {
    id: row.id,
    question: row.question,
    answer: row.answer,
  };
}

export async function getAllFaqs(): Promise<Faq[]> {
  const { data, error } = await supabaseAdmin
    .from("faqs")
    .select("*")
    .order("display_order", { ascending: true });

  if (error || !data) return [];
  return data.map(mapRow);
}