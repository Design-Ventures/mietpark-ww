"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/catalog/product-card";
import { Search } from "lucide-react";
import type { Product, ProductCategory } from "@/types/database";

const categories: { value: ProductCategory | "alle"; label: string }[] = [
  { value: "alle", label: "Alle Geräte" },
  { value: "werkzeug", label: "Werkzeuge" },
  { value: "maschine", label: "Maschinen" },
  { value: "fahrzeug", label: "Fahrzeuge" },
  { value: "zubehoer", label: "Zubehör" },
];

interface CatalogFiltersProps {
  products: Product[];
}

export function CatalogFilters({ products }: CatalogFiltersProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "alle">("alle");

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "alle") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.manufacturer?.toLowerCase().includes(q) ||
          p.model?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [products, search, activeCategory]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Gerät suchen..."
            className="h-10 w-full rounded-lg border border-neutral-300 bg-white pl-9 pr-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                activeCategory === cat.value
                  ? "bg-brand-50 text-brand-700 border-brand-200"
                  : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-neutral-500">
            Keine Geräte gefunden{search && ` für „${search}"`}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
