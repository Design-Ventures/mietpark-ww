-- ═══════════════════════════════════════════════════════════
-- MIETPARK WW – DATABASE SCHEMA
-- Run this in Supabase SQL Editor to set up the database.
-- ═══════════════════════════════════════════════════════════

-- ─── ENUMS ────────────────────────────────────────────────

CREATE TYPE product_category AS ENUM ('werkzeug', 'maschine', 'fahrzeug', 'zubehoer');
CREATE TYPE product_status AS ENUM ('verfuegbar', 'vermietet', 'wartung', 'gesperrt');
CREATE TYPE customer_type AS ENUM ('gewerbe', 'privat');
CREATE TYPE booking_status AS ENUM ('angefragt', 'freigegeben', 'aktiv', 'zurueckgegeben', 'abgeschlossen', 'storniert');
CREATE TYPE protocol_type AS ENUM ('checkout', 'checkin');

-- ─── PRODUCTS ─────────────────────────────────────────────

CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Basic info
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category product_category NOT NULL DEFAULT 'werkzeug',
  images TEXT[] DEFAULT '{}',

  -- Specs
  serial_number TEXT,
  manufacturer TEXT,
  model TEXT,
  year INTEGER,
  weight_kg NUMERIC,
  specs JSONB DEFAULT '{}',

  -- Pricing (cents, brutto inkl. MwSt.)
  price_daily INTEGER NOT NULL,
  price_weekend INTEGER NOT NULL,
  price_weekly INTEGER NOT NULL,
  price_monthly INTEGER NOT NULL,
  deposit_amount INTEGER NOT NULL DEFAULT 10000,

  -- Questionnaire
  questionnaire_type TEXT NOT NULL DEFAULT 'kurz' CHECK (questionnaire_type IN ('kurz', 'ausfuehrlich')),

  -- Status
  status product_status NOT NULL DEFAULT 'verfuegbar',
  qr_code_id TEXT UNIQUE,

  -- Maintenance
  last_maintenance DATE,
  next_maintenance DATE,
  maintenance_notes TEXT
);

-- ─── CUSTOMERS ────────────────────────────────────────────

CREATE TABLE customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  auth_user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  type customer_type NOT NULL,

  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT,
  vat_id TEXT,

  street TEXT NOT NULL,
  zip TEXT NOT NULL,
  city TEXT NOT NULL,

  id_document_url TEXT
);

-- ─── BOOKINGS ─────────────────────────────────────────────

CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  customer_id UUID NOT NULL REFERENCES customers(id),
  product_id UUID NOT NULL REFERENCES products(id),

  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  actual_return_date DATE,

  rental_days INTEGER NOT NULL,
  price_per_day INTEGER NOT NULL,
  total_price INTEGER NOT NULL,
  price_tier TEXT NOT NULL,

  stripe_payment_intent_id TEXT,
  stripe_deposit_intent_id TEXT,
  deposit_amount INTEGER NOT NULL,
  deposit_status TEXT CHECK (deposit_status IN ('authorized', 'released', 'captured')),

  status booking_status NOT NULL DEFAULT 'angefragt',

  questionnaire_answers JSONB,
  notes TEXT,
  requires_operator BOOLEAN NOT NULL DEFAULT FALSE,

  CONSTRAINT valid_dates CHECK (end_date >= start_date)
);

-- ─── CHECKOUT PROTOCOLS ───────────────────────────────────

CREATE TABLE checkout_protocols (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  booking_id UUID NOT NULL REFERENCES bookings(id),
  type protocol_type NOT NULL,

  photos JSONB DEFAULT '[]',
  checklist JSONB DEFAULT '[]',

  condition_notes TEXT,
  has_damage BOOLEAN NOT NULL DEFAULT FALSE,
  damage_description TEXT,

  signature_data TEXT,
  signed_by TEXT NOT NULL,
  signed_at TIMESTAMPTZ NOT NULL
);

-- ─── INDEXES ──────────────────────────────────────────────

CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_product ON bookings(product_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_dates ON bookings(start_date, end_date);
CREATE INDEX idx_protocols_booking ON checkout_protocols(booking_id);
CREATE INDEX idx_customers_auth ON customers(auth_user_id);

-- ─── UPDATED_AT TRIGGER ──────────────────────────────────

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── ROW LEVEL SECURITY ──────────────────────────────────

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkout_protocols ENABLE ROW LEVEL SECURITY;

-- Products: everyone can read, only service role can write
CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT USING (true);

-- Customers: users can only see their own data
CREATE POLICY "Users can view own customer profile"
  ON customers FOR SELECT
  USING (auth.uid() = auth_user_id);

CREATE POLICY "Users can update own customer profile"
  ON customers FOR UPDATE
  USING (auth.uid() = auth_user_id);

-- Bookings: users can see their own bookings
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  USING (customer_id IN (
    SELECT id FROM customers WHERE auth_user_id = auth.uid()
  ));

-- Protocols: users can see protocols for their bookings
CREATE POLICY "Users can view own protocols"
  ON checkout_protocols FOR SELECT
  USING (booking_id IN (
    SELECT b.id FROM bookings b
    JOIN customers c ON b.customer_id = c.id
    WHERE c.auth_user_id = auth.uid()
  ));

CREATE POLICY "Users can insert protocols for their bookings"
  ON checkout_protocols FOR INSERT
  WITH CHECK (booking_id IN (
    SELECT b.id FROM bookings b
    JOIN customers c ON b.customer_id = c.id
    WHERE c.auth_user_id = auth.uid()
  ));
