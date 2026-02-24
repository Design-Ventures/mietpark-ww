import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 text-center">
        <SearchX className="w-12 h-12 text-neutral-300 mx-auto mb-6" />
        <p className="text-sm font-medium text-brand-600 mb-2">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-neutral-500 max-w-md mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
          Prüfen Sie die URL oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button size="lg">Zur Startseite</Button>
          </Link>
          <Link href="/katalog">
            <Button variant="outline" size="lg">
              Katalog ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
