import { CatalogFilters } from "@/components/catalog/catalog-filters";
import { getProducts } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog – Werkzeuge & Baugeräte mieten",
  description:
    "Alle verfügbaren Werkzeuge, Maschinen und Baugeräte zum Mieten im Mietpark Westerwald. Rüttelplatten, Minibagger, Holzspalter und mehr.",
};

export default function KatalogPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          Gerätekatalog
        </h1>
        <p className="mt-2 text-neutral-500">
          {products.length} Geräte · Alle Preise brutto inkl. MwSt.
        </p>
      </div>

      {/* Interactive filters + product grid */}
      <CatalogFilters products={products} />
    </div>
  );
}
