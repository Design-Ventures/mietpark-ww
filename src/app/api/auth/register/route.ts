import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { CustomerType } from "@/types/database";

/**
 * POST /api/auth/register
 *
 * Creates a customer profile in the database after Supabase Auth signup.
 * Uses the admin client for the insert (no INSERT RLS policy for customers).
 * Auth is verified via the user's session cookies.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type,
      first_name,
      last_name,
      email,
      phone,
      street,
      zip,
      city,
      company_name,
      vat_id,
    } = body as {
      type: CustomerType;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      street: string;
      zip: string;
      city: string;
      company_name?: string;
      vat_id?: string;
    };

    // Validate required fields
    if (!type || !first_name || !last_name || !email || !phone || !street || !zip || !city) {
      return NextResponse.json(
        { error: "Alle Pflichtfelder müssen ausgefüllt sein." },
        { status: 400 }
      );
    }

    if (type === "gewerbe" && !company_name) {
      return NextResponse.json(
        { error: "Firmenname ist für Gewerbekunden erforderlich." },
        { status: 400 }
      );
    }

    // Verify the user is authenticated via session cookies
    const supabase = await createServerSupabaseClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Nicht authentifiziert." },
        { status: 401 }
      );
    }

    // Use admin client for insert (bypasses RLS, no INSERT policy for customers)
    const admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Check if profile already exists
    const { data: existing } = await admin
      .from("customers")
      .select("id")
      .eq("auth_user_id", user.id)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "Profil existiert bereits." },
        { status: 409 }
      );
    }

    // Insert customer profile
    const { data: customer, error: insertError } = await admin
      .from("customers")
      .insert({
        auth_user_id: user.id,
        type,
        first_name,
        last_name,
        email,
        phone,
        street,
        zip,
        city,
        company_name: type === "gewerbe" ? (company_name ?? null) : null,
        vat_id: type === "gewerbe" ? (vat_id ?? null) : null,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Customer insert error:", insertError);
      return NextResponse.json(
        { error: "Profil konnte nicht erstellt werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, customer_id: customer!.id });
  } catch (err) {
    console.error("Register API error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
