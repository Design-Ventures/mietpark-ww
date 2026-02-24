/**
 * Database types for Supabase.
 *
 * These mirror the PostgreSQL schema. When you set up Supabase,
 * you can auto-generate these with:
 *   npx supabase gen types typescript --project-id <id> > src/types/database.ts
 *
 * For now, these are manually defined to match our data model.
 */

export type Database = {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Omit<Product, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Product, "id" | "created_at">>;
      };
      customers: {
        Row: Customer;
        Insert: Omit<Customer, "id" | "created_at">;
        Update: Partial<Omit<Customer, "id" | "created_at">>;
      };
      bookings: {
        Row: Booking;
        Insert: Omit<Booking, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Booking, "id" | "created_at">>;
      };
      checkout_protocols: {
        Row: CheckoutProtocol;
        Insert: Omit<CheckoutProtocol, "id" | "created_at">;
        Update: Partial<Omit<CheckoutProtocol, "id" | "created_at">>;
      };
    };
    Enums: {
      product_category: ProductCategory;
      product_status: ProductStatus;
      customer_type: CustomerType;
      booking_status: BookingStatus;
      protocol_type: ProtocolType;
    };
  };
};

// ─── ENUMS ────────────────────────────────────────────────

export type ProductCategory = "werkzeug" | "maschine" | "fahrzeug" | "zubehoer";
export type ProductStatus = "verfuegbar" | "vermietet" | "wartung" | "gesperrt";
export type CustomerType = "gewerbe" | "privat";
export type BookingStatus =
  | "angefragt"
  | "freigegeben"
  | "aktiv"
  | "zurueckgegeben"
  | "abgeschlossen"
  | "storniert";
export type ProtocolType = "checkout" | "checkin";

// ─── PRODUCT ──────────────────────────────────────────────

export interface Product {
  id: string;
  created_at: string;
  updated_at: string;

  // Basic info
  name: string;
  slug: string;
  description: string;
  category: ProductCategory;
  images: string[];             // URLs in Supabase Storage

  // Specs
  serial_number: string | null;
  manufacturer: string | null;
  model: string | null;
  year: number | null;
  weight_kg: number | null;
  specs: Record<string, string>; // Flexible key-value for product-specific specs

  // Pricing (all in cents, brutto inkl. MwSt.)
  price_daily: number;
  price_weekend: number;        // per day
  price_weekly: number;         // per day
  price_monthly: number;        // per day
  deposit_amount: number;       // Kaution

  // Questionnaire
  questionnaire_type: "kurz" | "ausfuehrlich";

  // Status
  status: ProductStatus;
  qr_code_id: string | null;

  // Maintenance
  last_maintenance: string | null;
  next_maintenance: string | null;
  maintenance_notes: string | null;
}

// ─── CUSTOMER ─────────────────────────────────────────────

export interface Customer {
  id: string;
  created_at: string;
  auth_user_id: string;         // Links to Supabase Auth

  type: CustomerType;

  // Personal / Company
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string | null;  // Only for Gewerbe
  vat_id: string | null;        // USt-ID, only for Gewerbe

  // Address
  street: string;
  zip: string;
  city: string;

  // Verification
  id_document_url: string | null;  // Ausweis upload for Privatkunden
}

// ─── BOOKING ──────────────────────────────────────────────

export interface Booking {
  id: string;
  created_at: string;
  updated_at: string;

  customer_id: string;
  product_id: string;

  // Dates
  start_date: string;
  end_date: string;
  actual_return_date: string | null;

  // Pricing
  rental_days: number;
  price_per_day: number;        // cents
  total_price: number;          // cents
  price_tier: string;           // "Tagesmiete" | "Wochenmiete" | etc.

  // Payments
  stripe_payment_intent_id: string | null;    // Rental payment
  stripe_deposit_intent_id: string | null;    // Deposit authorization
  deposit_amount: number;                      // cents
  deposit_status: "authorized" | "released" | "captured" | null;

  // Status
  status: BookingStatus;

  // Questionnaire answers
  questionnaire_answers: Record<string, string> | null;

  // Notes
  notes: string | null;
  requires_operator: boolean;   // Mit Maschinenführer?
}

// ─── CHECKOUT / CHECKIN PROTOCOL ──────────────────────────

export interface CheckoutProtocol {
  id: string;
  created_at: string;

  booking_id: string;
  type: ProtocolType;           // "checkout" or "checkin"

  // Photos (URLs in Supabase Storage)
  photos: {
    position: string;           // "front" | "back" | "left" | "right" | "detail"
    url: string;
    note: string | null;
  }[];

  // Checklist
  checklist: {
    item: string;
    checked: boolean;
    note: string | null;
  }[];

  // Condition
  condition_notes: string | null;
  has_damage: boolean;
  damage_description: string | null;

  // Signature
  signature_data: string | null;  // Base64 encoded signature image
  signed_by: string;              // Name of person who signed
  signed_at: string;
}

// ─── BRIEFING (generated, not stored – or stored as JSON) ─

export interface Briefing {
  booking_id: string;
  generated_at: string;

  // Customer info for the on-site worker
  customer_name: string;
  customer_phone: string;
  customer_type: CustomerType;

  // Product info
  product_name: string;
  product_serial: string | null;

  // Rental details
  start_date: string;
  end_date: string;
  pickup_time: string | null;

  // Special requirements
  requires_operator: boolean;
  special_notes: string | null;
  questionnaire_summary: string | null;
}
