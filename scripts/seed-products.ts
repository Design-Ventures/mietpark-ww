/**
 * Seed script: populates the Supabase `products` table and uploads
 * product images to Supabase Storage.
 *
 * Also creates the `contact_submissions` table if it doesn't exist.
 *
 * Usage:  npx tsx scripts/seed-products.ts
 */

import { createClient } from "@supabase/supabase-js";
import * as fs from "node:fs";
import * as path from "node:path";

// ─── Config ──────────────────────────────────────────────

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    "Missing env vars. Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set."
  );
  console.error("Hint: source .env.local or run with env vars set.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const BUCKET = "product-images";
const IMAGE_DIR = path.resolve(__dirname, "../public/images/produkte");

// ─── Import product data ─────────────────────────────────

// We import the raw array. tsx handles the TS path alias via tsconfig.
// But since we're running outside Next.js, we use a relative import.
import { PRODUCTS } from "../src/lib/mock-data";

// ─── Helpers ─────────────────────────────────────────────

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b) => b.name === BUCKET);

  if (!exists) {
    const { error } = await supabase.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 10 * 1024 * 1024, // 10 MB
      allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    });
    if (error) throw new Error(`Failed to create bucket: ${error.message}`);
    console.log(`Created storage bucket "${BUCKET}"`);
  } else {
    console.log(`Bucket "${BUCKET}" already exists`);
  }
}

async function uploadImage(filePath: string): Promise<string> {
  const fileName = path.basename(filePath);
  const fileBuffer = fs.readFileSync(filePath);

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, fileBuffer, {
      contentType: "image/jpeg",
      upsert: true,
    });

  if (error) throw new Error(`Upload failed for ${fileName}: ${error.message}`);

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET).getPublicUrl(fileName);

  return publicUrl;
}

async function createContactSubmissionsTable() {
  const { error: queryError } = await supabase
    .from("contact_submissions")
    .select("id")
    .limit(1);

  if (queryError?.code === "42P01") {
    // Table doesn't exist — we can't create it via the data API.
    // Print the SQL for the user to run manually.
    console.warn("\n--- contact_submissions table does NOT exist ---");
    console.warn("Run this SQL in the Supabase SQL Editor:\n");
    console.warn(`
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
`);
  } else {
    console.log("contact_submissions table exists");
  }
}

// ─── Main ────────────────────────────────────────────────

async function main() {
  console.log("Starting seed...\n");

  // 1. Ensure storage bucket
  await ensureBucket();

  // 2. Upload images and build URL map
  console.log(`\nUploading ${PRODUCTS.length} images...`);
  const urlMap = new Map<string, string>();

  for (const product of PRODUCTS) {
    const localPath = product.images[0]; // e.g. "/images/produkte/minibagger-3-5t.jpg"
    if (!localPath) continue;

    const fileName = path.basename(localPath);
    const filePath = path.join(IMAGE_DIR, fileName);

    if (!fs.existsSync(filePath)) {
      console.warn(`  SKIP: ${fileName} not found at ${filePath}`);
      continue;
    }

    const publicUrl = await uploadImage(filePath);
    urlMap.set(product.slug, publicUrl);
    console.log(`  OK: ${fileName}`);
  }

  // 3. Upsert products with updated image URLs
  // Drop the mock "mp-XXX" id — let Supabase generate UUIDs.
  // The mp-XXX identifier is preserved in qr_code_id.
  // Use slug as the unique conflict target for idempotent re-runs.
  console.log(`\nUpserting ${PRODUCTS.length} products...`);

  const productsToInsert = PRODUCTS.map(({ id: _id, ...rest }) => ({
    ...rest,
    images: urlMap.has(rest.slug) ? [urlMap.get(rest.slug)!] : rest.images,
  }));

  const { error: upsertError } = await supabase
    .from("products")
    .upsert(productsToInsert as never[], { onConflict: "slug" });

  if (upsertError) {
    console.error("Upsert failed:", upsertError);
    process.exit(1);
  }

  console.log(`Upserted ${productsToInsert.length} products`);

  // 4. Ensure contact_submissions table
  console.log("");
  await createContactSubmissionsTable();

  console.log("\nSeed complete!");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
