import { supabaseAdmin } from "./supabase";

export type Review = {
  id: string;
  name: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
  location?: string;
};

function mapRow(row: any): Review {
  return {
    id: row.id,
    name: row.name,
    rating: row.rating,
    reviewText: row.review_text,
    reviewDate: row.review_date,
    location: row.location || undefined,
  };
}

export async function getAllReviews(): Promise<Review[]> {
  const { data, error } = await supabaseAdmin
    .from("reviews")
    .select("*")
    .order("display_order", { ascending: true });

  if (error || !data) return [];
  return data.map(mapRow);
}