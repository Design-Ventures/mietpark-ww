"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface StickyBookingBarProps {
  productName: string;
  priceDaily: number;
  bookingHref: string;
}

export function StickyBookingBar({
  productName,
  priceDaily,
  bookingHref,
}: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ctaEl = document.getElementById("product-cta");
    if (!ctaEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(ctaEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[var(--z-sticky)] lg:hidden bg-white border-t border-neutral-200 shadow-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-content px-4 h-16 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-neutral-900 truncate">
            {productName}
          </p>
          <p className="text-xs text-neutral-500">
            ab {formatPrice(priceDaily)} / Tag
          </p>
        </div>
        <Link href={bookingHref} className="shrink-0">
          <Button size="sm" className="gap-1.5">
            <Calendar className="w-4 h-4" />
            Jetzt anfragen
          </Button>
        </Link>
      </div>
    </div>
  );
}
