"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/katalog";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setLoading(false);
      if (authError.message.includes("Invalid login credentials")) {
        setError("E-Mail oder Passwort ist falsch.");
      } else if (authError.message.includes("Email not confirmed")) {
        setError("Bitte bestätige zuerst deine E-Mail-Adresse.");
      } else {
        setError("Anmeldung fehlgeschlagen. Bitte versuche es erneut.");
      }
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <AuthLayout title="Anmelden" subtitle="Melde dich an, um Geräte zu buchen und deine Buchungen zu verwalten.">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
            {error}
          </div>
        )}

        <Input
          label="E-Mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@firma.de"
          autoComplete="email"
          required
        />

        <Input
          label="Passwort"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        <div className="flex justify-end">
          <button
            type="button"
            className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
            disabled
            title="Kommt bald"
          >
            Passwort vergessen?
          </button>
        </div>

        <Button type="submit" fullWidth loading={loading}>
          Anmelden
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
        <p className="text-sm text-neutral-500">
          Noch kein Konto?{" "}
          <Link
            href={`/register${redirectTo !== "/katalog" ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
            className="font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Jetzt registrieren
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
