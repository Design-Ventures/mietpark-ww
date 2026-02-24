import { createServerSupabaseClient } from "./server";
import type { Product } from "@/types/database";

export async function getProducts(): Promise<Product[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("name");

  if (error) throw error;
  return data;
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error && error.code !== "PGRST116") throw error; // PGRST116 = no rows
  return data;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const supabase = await createServerSupabaseClient();

  if (category === "alle") {
    return getProducts();
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("name");

  if (error) throw error;
  return data;
}

export async function getAvailableProducts(): Promise<Product[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "verfuegbar")
    .order("name");

  if (error) throw error;
  return data;
}
