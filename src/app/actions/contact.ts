"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { ContactSubmission } from "@/types/database";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim() || null;
  const subject = formData.get("subject")?.toString().trim() || null;
  const message = formData.get("message")?.toString().trim();

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  }

  try {
    const supabase = await createServerSupabaseClient();

    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone,
        subject,
        message,
      } as Omit<ContactSubmission, "id" | "created_at"> as never);

    if (error) {
      console.error("Contact form insert error:", error);
      return { success: false, error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut." };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut." };
  }
}
