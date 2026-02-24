import { ProductCard } from "@/components/catalog/product-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import type { Product, ProductCategory } from "@/types/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog – Werkzeuge & Baugeräte mieten",
  description:
    "Alle verfügbaren Werkzeuge, Maschinen und Baugeräte zum Mieten im Mietpark Westerwald. Rüttelplatten, Minibagger, Holzspalter und mehr.",
};

/**
 * Sample products based on actual Mietpark WW inventory.
 * In production, this comes from Supabase.
 */
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Rüttelplatte Weber WHV 6013",
    slug: "ruettelplatte-weber-whv-6013",
    description: "Rüttelplatte 60kg. Alle Preise brutto inkl. MwSt.",
    category: "maschine",
    images: [],
    serial_number: "WEB-6013-001",
    manufacturer: "Weber",
    model: "WHV 6013",
    year: 2020,
    weight_kg: 60,
    specs: { Gewicht: "60kg", Verdichtungskraft: "13 kN" },
    price_daily: 6700,
    price_weekend: 6300,
    price_weekly: 5500,
    price_monthly: 3500,
    deposit_amount: 10000,
    questionnaire_type: "kurz",
    status: "verfuegbar",
    qr_code_id: "MP-001",
    last_maintenance: "2024-11-01",
    next_maintenance: "2025-05-01",
    maintenance_notes: null,
  },
  {
    id: "2",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Minibagger 3,5 Tonnen",
    slug: "minibagger-3-5-tonnen",
    description: "Minibagger 3,5 Tonnen zu vermieten. Inklusive Standardlöffel.",
    category: "maschine",
    images: [],
    serial_number: "MB-35-001",
    manufacturer: null,
    model: "3,5t",
    year: 2019,
    weight_kg: 3500,
    specs: { Gewicht: "3.500kg", Grabtiefe: "3,2m" },
    price_daily: 19500,
    price_weekend: 17500,
    price_weekly: 15000,
    price_monthly: 10000,
    deposit_amount: 50000,
    questionnaire_type: "ausfuehrlich",
    status: "verfuegbar",
    qr_code_id: "MP-002",
    last_maintenance: "2024-10-15",
    next_maintenance: "2025-04-15",
    maintenance_notes: null,
  },
  {
    id: "3",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Holzspalter am Anhänger",
    slug: "holzspalter-anhaenger",
    description: "Holzspalter am Anhänger zu vermieten. Maximale Spaltkraft 22 Tonnen.",
    category: "maschine",
    images: [],
    serial_number: "HS-22-001",
    manufacturer: "Posch",
    model: "22t Anhänger",
    year: 2021,
    weight_kg: 850,
    specs: { Spaltkraft: "22 Tonnen", "Max. Spalthöhe": "60cm" },
    price_daily: 6700,
    price_weekend: 6000,
    price_weekly: 5000,
    price_monthly: 3000,
    deposit_amount: 15000,
    questionnaire_type: "kurz",
    status: "verfuegbar",
    qr_code_id: "MP-003",
    last_maintenance: null,
    next_maintenance: null,
    maintenance_notes: null,
  },
  {
    id: "4",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Rotationslaser",
    slug: "rotationslaser",
    description: "Rotationslaser zu vermieten. Alle Preise brutto inkl. MwSt.",
    category: "werkzeug",
    images: [],
    serial_number: "RL-001",
    manufacturer: null,
    model: null,
    year: 2022,
    weight_kg: 3,
    specs: { Reichweite: "500m", Genauigkeit: "±1mm/10m" },
    price_daily: 3600,
    price_weekend: 3200,
    price_weekly: 2900,
    price_monthly: 1800,
    deposit_amount: 10000,
    questionnaire_type: "kurz",
    status: "verfuegbar",
    qr_code_id: "MP-004",
    last_maintenance: null,
    next_maintenance: null,
    maintenance_notes: null,
  },
  {
    id: "5",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Nassschneidemaschine SSB EGO400",
    slug: "nassschneidemaschine-ssb-ego400",
    description: "Nassschneidemaschine SSB EGO400 2,8kW. Max. Schnittlänge 800mm.",
    category: "maschine",
    images: [],
    serial_number: "NS-400-001",
    manufacturer: "SSB",
    model: "EGO400",
    year: 2020,
    weight_kg: 85,
    specs: { Leistung: "2,8kW", "Max. Schnittlänge": "800mm" },
    price_daily: 3000,
    price_weekend: 2700,
    price_weekly: 2400,
    price_monthly: 1500,
    deposit_amount: 10000,
    questionnaire_type: "kurz",
    status: "vermietet",
    qr_code_id: "MP-005",
    last_maintenance: null,
    next_maintenance: null,
    maintenance_notes: null,
  },
  {
    id: "6",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Flügelglätter Atlas Copco BG 240",
    slug: "fluegelglaetter-atlas-copco-bg-240",
    description: "Flügelglätter Atlas Copco BG 240. Alle Preise brutto inkl. MwSt.",
    category: "maschine",
    images: [],
    serial_number: "FG-240-001",
    manufacturer: "Atlas Copco",
    model: "BG 240",
    year: 2021,
    weight_kg: 65,
    specs: { Arbeitsbreite: "240mm" },
    price_daily: 6600,
    price_weekend: 6000,
    price_weekly: 5500,
    price_monthly: 3500,
    deposit_amount: 10000,
    questionnaire_type: "kurz",
    status: "verfuegbar",
    qr_code_id: "MP-006",
    last_maintenance: null,
    next_maintenance: null,
    maintenance_notes: null,
  },
];

const categories: { value: ProductCategory | "alle"; label: string }[] = [
  { value: "alle", label: "Alle Geräte" },
  { value: "werkzeug", label: "Werkzeuge" },
  { value: "maschine", label: "Maschinen" },
  { value: "fahrzeug", label: "Fahrzeuge" },
  { value: "zubehoer", label: "Zubehör" },
];

export default function KatalogPage() {
  // In production: fetch from Supabase, support search & filter via URL params
  const products = SAMPLE_PRODUCTS;

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          Gerätekatalog
        </h1>
        <p className="mt-2 text-neutral-500">
          {products.length} Geräte verfügbar · Alle Preise brutto inkl. MwSt.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="search"
            placeholder="Gerät suchen..."
            className="h-10 w-full rounded-lg border border-neutral-300 bg-white pl-9 pr-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className="px-3 py-1.5 text-sm rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors data-[active=true]:bg-brand-50 data-[active=true]:text-brand-700 data-[active=true]:border-brand-200"
              data-active={cat.value === "alle"}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
