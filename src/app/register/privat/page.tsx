"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AddressFields } from "@/components/auth/address-fields";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info } from "lucide-react";

interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  zip: string;
  city: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.email) errors.email = "E-Mail ist erforderlich.";
  if (!data.password) errors.password = "Passwort ist erforderlich.";
  else if (data.password.length < 8)
    errors.password = "Mindestens 8 Zeichen.";
  if (data.password !== data.passwordConfirm)
    errors.passwordConfirm = "Passwörter stimmen nicht überein.";
  if (!data.firstName) errors.firstName = "Vorname ist erforderlich.";
  if (!data.lastName) errors.lastName = "Nachname ist erforderlich.";
  if (!data.phone) errors.phone = "Telefonnummer ist erforderlich.";
  if (!data.street) errors.street = "Straße ist erforderlich.";
  if (!data.zip) errors.zip = "PLZ ist erforderlich.";
  if (!data.city) errors.city = "Ort ist erforderlich.";
  return errors;
}

export default function RegisterPrivatPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    zip: "",
    city: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGlobalError(null);

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const supabase = createClient();

    // 1. Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      setLoading(false);
      if (authError.message.includes("already registered")) {
        setGlobalError("Diese E-Mail-Adresse ist bereits registriert.");
      } else {
        setGlobalError("Registrierung fehlgeschlagen. Bitte versuche es erneut.");
      }
      return;
    }

    // 2. Create customer profile via API
    if (authData.user) {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "privat",
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          street: form.street,
          zip: form.zip,
          city: form.city,
        }),
      });

      if (!res.ok) {
        setLoading(false);
        setGlobalError("Profil konnte nicht erstellt werden. Bitte kontaktiere uns.");
        return;
      }
    }

    // 3. Redirect – if email confirmation required, show message
    if (authData.user?.identities?.length === 0) {
      setGlobalError("Diese E-Mail-Adresse ist bereits registriert.");
      setLoading(false);
      return;
    }

    router.push("/katalog");
    router.refresh();
  }

  return (
    <AuthLayout
      title="Als Privatkunde registrieren"
      subtitle="Für private Projekte – Haus, Garten, Renovierung."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {globalError && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
            {globalError}
          </div>
        )}

        {/* Account */}
        <div className="space-y-4">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Zugangsdaten
          </p>
          <Input
            label="E-Mail"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="name@beispiel.de"
            autoComplete="email"
            error={errors.email}
            required
          />
          <Input
            label="Passwort"
            type="password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            placeholder="Mind. 8 Zeichen"
            autoComplete="new-password"
            error={errors.password}
            hint="Mindestens 8 Zeichen"
            required
          />
          <Input
            label="Passwort bestätigen"
            type="password"
            value={form.passwordConfirm}
            onChange={(e) => update("passwordConfirm", e.target.value)}
            placeholder="Passwort wiederholen"
            autoComplete="new-password"
            error={errors.passwordConfirm}
            required
          />
        </div>

        {/* Personal */}
        <div className="space-y-4">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Persönliche Daten
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Vorname"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="Max"
              autoComplete="given-name"
              error={errors.firstName}
              required
            />
            <Input
              label="Nachname"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              placeholder="Mustermann"
              autoComplete="family-name"
              error={errors.lastName}
              required
            />
          </div>
          <Input
            label="Telefon"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="0170 1234567"
            autoComplete="tel"
            error={errors.phone}
            required
          />
        </div>

        {/* Address */}
        <div className="space-y-4">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Adresse
          </p>
          <AddressFields
            street={form.street}
            zip={form.zip}
            city={form.city}
            onChange={(field, value) => update(field, value)}
            errors={{ street: errors.street, zip: errors.zip, city: errors.city }}
          />
        </div>

        {/* ID Upload placeholder */}
        <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
          <p className="text-xs text-neutral-500">
            <span className="font-medium text-neutral-700">Ausweisupload:</span>{" "}
            Wird nach der Registrierung in deinem Profil freigeschaltet.
          </p>
        </div>

        <Button type="submit" fullWidth loading={loading}>
          Konto erstellen
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-neutral-200 flex items-center justify-between">
        <Link
          href="/register"
          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Zurück
        </Link>
        <p className="text-sm text-neutral-500">
          Schon registriert?{" "}
          <Link href="/login" className="font-medium text-brand-600 hover:text-brand-700 transition-colors">
            Anmelden
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
