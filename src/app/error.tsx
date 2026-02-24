"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex-1 flex items-center justify-center py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 text-center">
        <AlertTriangle className="w-12 h-12 text-neutral-300 mx-auto mb-6" />
        <p className="text-sm font-medium text-red-600 mb-2">Fehler</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Etwas ist schiefgelaufen
        </h1>
        <p className="mt-4 text-neutral-500 max-w-md mx-auto">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es
          erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" onClick={reset}>
            Erneut versuchen
          </Button>
          <a href="/">
            <Button variant="outline" size="lg">
              Zur Startseite
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
