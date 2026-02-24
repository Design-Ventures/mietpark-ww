import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper conflict resolution.
 * Use this everywhere instead of raw className strings.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-brand-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in EUR with German locale.
 */
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

/**
 * Format date in German locale.
 */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Format date with time.
 */
export function formatDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

/**
 * Calculate rental price based on duration and pricing tiers.
 */
export function calculateRentalPrice(
  days: number,
  pricing: {
    daily: number;      // cents
    weekend: number;    // cents per day
    weekly: number;     // cents per day
    monthly: number;    // cents per day
  }
): { total: number; perDay: number; tier: string } {
  if (days >= 28) {
    return { total: days * pricing.monthly, perDay: pricing.monthly, tier: "Monatsmiete" };
  }
  if (days >= 7) {
    return { total: days * pricing.weekly, perDay: pricing.weekly, tier: "Wochenmiete" };
  }
  if (days >= 2 && days <= 3) {
    return { total: days * pricing.weekend, perDay: pricing.weekend, tier: "Wochenende" };
  }
  return { total: days * pricing.daily, perDay: pricing.daily, tier: "Tagesmiete" };
}
