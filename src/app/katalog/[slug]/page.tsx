import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProducts } from "@/lib/mock-data";
import { ProductStatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import {
  ArrowLeft,
  Package,
  Shield,
  Calendar,
  Truck,
  Info,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import type { Metadata } from "next";

// ─── SEO ──────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt nicht gefunden" };

  return {
    title: `${product.name} mieten`,
    description: product.description,
    openGraph: {
      title: `${product.name} mieten – Mietpark WW`,
      description: product.description,
      type: "website",
      locale: "de_DE",
    },
  };
}

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

// ─── PRICE TIER COMPONENT ─────────────────────────────────

function PriceTier({
  label,
  pricePerDay,
  note,
  highlighted,
}: {
  label: string;
  pricePerDay: number;
  note?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border ${
        highlighted
          ? "border-brand-200 bg-brand-50/50"
          : "border-neutral-200 bg-white"
      }`}
    >
      <div>
        <p className={`font-medium ${highlighted ? "text-brand-800" : "text-neutral-900"}`}>
          {label}
        </p>
        {note && <p className="text-xs text-neutral-500 mt-0.5">{note}</p>}
      </div>
      <div className="text-right">
        <span className={`text-lg font-bold ${highlighted ? "text-brand-700" : "text-neutral-900"}`}>
          {formatPrice(pricePerDay)}
        </span>
        <span className="text-sm text-neutral-500"> / Tag</span>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isAvailable = product.status === "verfuegbar";
  const categoryLabels: Record<string, string> = {
    werkzeug: "Werkzeug",
    maschine: "Maschine",
    fahrzeug: "Fahrzeug",
    zubehoer: "Zubehör",
  };

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          href="/katalog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Katalog
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* ─── LEFT: Images ──────────────────────────────── */}
        <div className="lg:col-span-3 space-y-4">
          {/* Main image */}
          <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative">
            {product.images[0] ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <Package className="w-16 h-16 text-neutral-300" />
                <p className="text-sm text-neutral-400">Foto folgt</p>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <ProductStatusBadge status={product.status} />
            </div>
          </div>

          {/* Thumbnail strip (placeholder for multiple images) */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className="shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 border-transparent hover:border-brand-500 transition-colors"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* ─── Specs Table (Desktop: below image) ──────── */}
          <Card padding="lg" className="hidden lg:block">
            <h2 className="font-semibold text-neutral-900 mb-4">
              Technische Daten
            </h2>
            <dl className="divide-y divide-neutral-100">
              {product.manufacturer && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Hersteller</dt>
                  <dd className="text-sm font-medium text-neutral-900">
                    {product.manufacturer}
                    {product.model && ` ${product.model}`}
                  </dd>
                </div>
              )}
              {product.year && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Baujahr</dt>
                  <dd className="text-sm font-medium text-neutral-900">{product.year}</dd>
                </div>
              )}
              {product.weight_kg && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Gewicht</dt>
                  <dd className="text-sm font-medium text-neutral-900">
                    {product.weight_kg.toLocaleString("de-DE")} kg
                  </dd>
                </div>
              )}
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">{key}</dt>
                  <dd className="text-sm font-medium text-neutral-900">{value}</dd>
                </div>
              ))}
              {product.serial_number && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Seriennr.</dt>
                  <dd className="text-sm font-medium text-neutral-400 font-mono text-xs">
                    {product.serial_number}
                  </dd>
                </div>
              )}
            </dl>
          </Card>
        </div>

        {/* ─── RIGHT: Info & Pricing ─────────────────────── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title section */}
          <div>
            <p className="text-sm font-medium text-brand-600 mb-1">
              {categoryLabels[product.category] || product.category}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price matrix */}
          <Card padding="lg">
            <h2 className="font-semibold text-neutral-900 mb-1">Mietpreise</h2>
            <p className="text-xs text-neutral-500 mb-4">
              Alle Preise brutto inkl. MwSt.
            </p>
            <div className="space-y-2">
              <PriceTier label="Tagesmiete" pricePerDay={product.price_daily} />
              <PriceTier
                label="Wochenende"
                pricePerDay={product.price_weekend}
                note="Fr–So, pro Tag"
              />
              <PriceTier
                label="Wochenmiete"
                pricePerDay={product.price_weekly}
                note="ab 7 Tage, pro Tag"
                highlighted
              />
              <PriceTier
                label="Monatsmiete"
                pricePerDay={product.price_monthly}
                note="ab 28 Tage, pro Tag"
              />
            </div>
          </Card>

          {/* Deposit */}
          <Card padding="lg" className="bg-amber-50/50 border-amber-200">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-neutral-900">Kaution</h3>
                <p className="text-sm text-neutral-600 mt-1">
                  <span className="font-bold text-neutral-900">
                    {formatPrice(product.deposit_amount)}
                  </span>{" "}
                  wird bei Buchung reserviert (nicht abgebucht). Nach
                  schadensfreier Rückgabe wird die Kaution vollständig
                  freigegeben.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="space-y-3">
            {isAvailable ? (
              <Link href={`/katalog/${product.slug}/buchen`}>
                <Button size="lg" fullWidth className="gap-2">
                  <Calendar className="w-5 h-5" />
                  Jetzt anfragen / buchen
                </Button>
              </Link>
            ) : (
              <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200 text-center">
                <AlertTriangle className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-700">
                  Dieses Gerät ist derzeit nicht verfügbar.
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Kontaktieren Sie uns für Verfügbarkeitsinfos.
                </p>
              </div>
            )}
          </div>

          {/* Info items */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Truck className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-900">Abholung in Nistertal.</span>{" "}
                Lieferung auf Anfrage möglich.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-900">Professionell gewartet.</span>{" "}
                Jedes Gerät wird vor der Ausgabe geprüft.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-neutral-900">Fragen?</span>{" "}
                Tel: 02661-938400 oder info@creationART.de
              </p>
            </div>
          </div>

          {/* Specs (Mobile: in sidebar area) */}
          <Card padding="lg" className="lg:hidden">
            <h2 className="font-semibold text-neutral-900 mb-4">
              Technische Daten
            </h2>
            <dl className="divide-y divide-neutral-100">
              {product.manufacturer && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Hersteller</dt>
                  <dd className="text-sm font-medium text-neutral-900">
                    {product.manufacturer}
                    {product.model && ` ${product.model}`}
                  </dd>
                </div>
              )}
              {product.year && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Baujahr</dt>
                  <dd className="text-sm font-medium text-neutral-900">{product.year}</dd>
                </div>
              )}
              {product.weight_kg && (
                <div className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">Gewicht</dt>
                  <dd className="text-sm font-medium text-neutral-900">
                    {product.weight_kg.toLocaleString("de-DE")} kg
                  </dd>
                </div>
              )}
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3">
                  <dt className="text-sm text-neutral-500">{key}</dt>
                  <dd className="text-sm font-medium text-neutral-900">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </div>
  );
}
