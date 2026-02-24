import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ProductStatusBadge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/database";
import { Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/katalog/${product.slug}`}>
      <Card hover padding="none" className="overflow-hidden group">
        {/* Image */}
        <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="w-12 h-12 text-neutral-300" />
            </div>
          )}
          <div className="absolute top-3 left-3">
            <ProductStatusBadge status={product.status} />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-neutral-900 group-hover:text-brand-700 transition-colors line-clamp-1">
                {product.name}
              </h3>
              {product.manufacturer && (
                <p className="text-sm text-neutral-500 mt-0.5">
                  {product.manufacturer}
                  {product.model && ` ${product.model}`}
                </p>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="mt-3 pt-3 border-t border-neutral-100">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-neutral-900">
                {formatPrice(product.price_daily)}
              </span>
              <span className="text-sm text-neutral-500">/ Tag</span>
            </div>
            {product.price_weekly < product.price_daily && (
              <p className="text-xs text-neutral-400 mt-0.5">
                ab {formatPrice(product.price_weekly)}/Tag bei Wochenmiete
              </p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
