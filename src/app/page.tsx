import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CatalogFilters } from "@/components/catalog/catalog-filters";
import { getProducts } from "@/lib/supabase/products";
import {
  Search,
  CalendarCheck,
  CreditCard,
  Truck,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      {/* ─── SEARCH-FIRST CATALOG ────────────────────── */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Werkzeuge &amp; Baugeräte mieten
            </h1>
            <p className="mt-2 text-neutral-500">
              {products.length} Geräte verfügbar · Mietpark Westerwald, Nistertal
            </p>
          </div>

          <CatalogFilters products={products} prominent />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────── */}
      <section id="ablauf" className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              In 4 Schritten zum Gerät
            </h2>
            <p className="mt-3 text-neutral-500">
              Vom Katalog bis zur Abholung – einfach, schnell und transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                step: "1",
                title: "Gerät finden",
                description: "Durchsuchen Sie unseren Katalog und wählen Sie das passende Werkzeug oder die passende Maschine.",
              },
              {
                icon: CalendarCheck,
                step: "2",
                title: "Zeitraum wählen",
                description: "Wählen Sie Ihren Mietzeitraum. Der Preis berechnet sich automatisch nach der besten Staffel.",
              },
              {
                icon: CreditCard,
                step: "3",
                title: "Online bezahlen",
                description: "Miete bezahlen, Kaution wird nur reserviert. Sichere Zahlung über Stripe.",
              },
              {
                icon: Truck,
                step: "4",
                title: "Abholen & loslegen",
                description: "Gerät in Nistertal abholen. QR-Code scannen, Zustand dokumentieren, fertig.",
              },
            ].map((item) => (
              <Card key={item.step} padding="lg" className="text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="mt-2 mb-4 mx-auto w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST / INFO ─────────────────────────────── */}
      <section className="py-16 bg-neutral-100">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="lg" className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Standort</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Gewerbepark Talstr. 5<br />
                  57647 Nistertal
                </p>
              </div>
            </Card>

            <Card padding="lg" className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Ausgabezeiten</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Montag – Samstag<br />
                  Sonntags keine Ausgabe/Rücknahme
                </p>
              </div>
            </Card>

            <Card padding="lg" className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <Phone className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Kontakt</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Tel: 02661-938400<br />
                  info@creationART.de
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
