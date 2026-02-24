import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { ProductStatus, BookingStatus } from "@/types/database";

type BadgeVariant = "default" | "success" | "warning" | "error" | "info" | "purple";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  error: "bg-red-50 text-red-700 border-red-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
};

export function Badge({ className, variant = "default", size = "sm", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border border-transparent",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** Pre-mapped badge for product status */
const productStatusMap: Record<ProductStatus, { label: string; variant: BadgeVariant }> = {
  verfuegbar: { label: "Verfügbar", variant: "success" },
  vermietet: { label: "Vermietet", variant: "info" },
  wartung: { label: "In Wartung", variant: "warning" },
  gesperrt: { label: "Gesperrt", variant: "error" },
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const { label, variant } = productStatusMap[status];
  return <Badge variant={variant}>{label}</Badge>;
}

/** Pre-mapped badge for booking status */
const bookingStatusMap: Record<BookingStatus, { label: string; variant: BadgeVariant }> = {
  angefragt: { label: "Angefragt", variant: "warning" },
  freigegeben: { label: "Freigegeben", variant: "info" },
  aktiv: { label: "Aktiv", variant: "success" },
  zurueckgegeben: { label: "Zurückgegeben", variant: "purple" },
  abgeschlossen: { label: "Abgeschlossen", variant: "default" },
  storniert: { label: "Storniert", variant: "error" },
};

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  const { label, variant } = bookingStatusMap[status];
  return <Badge variant={variant}>{label}</Badge>;
}
