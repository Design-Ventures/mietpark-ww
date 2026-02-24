import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Card } from "@/components/ui/card";
import { Building2, User, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrieren",
  description: "Erstelle ein Konto beim Mietpark Westerwald – als Privatkunde oder Gewerbekunde.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Konto erstellen"
      subtitle="Wähle deinen Kontotyp, um loszulegen."
    >
      <div className="space-y-3">
        {/* Privatkunde */}
        <Link href="/register/privat">
          <Card hover padding="none" className="p-4 flex items-center gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
              <User className="w-6 h-6 text-brand-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-neutral-900 group-hover:text-brand-700 transition-colors">
                Privatkunde
              </h2>
              <p className="text-sm text-neutral-500 mt-0.5">
                Für private Projekte – Haus, Garten, Renovierung
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-brand-600 transition-colors shrink-0" />
          </Card>
        </Link>

        {/* Gewerbekunde */}
        <Link href="/register/gewerbe">
          <Card hover padding="none" className="p-4 flex items-center gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-neutral-900 group-hover:text-brand-700 transition-colors">
                Gewerbekunde
              </h2>
              <p className="text-sm text-neutral-500 mt-0.5">
                Für Firmen – mit USt-ID und Firmendaten
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-brand-600 transition-colors shrink-0" />
          </Card>
        </Link>
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
        <p className="text-sm text-neutral-500">
          Schon ein Konto?{" "}
          <Link
            href="/login"
            className="font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Anmelden
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
