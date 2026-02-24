# Mietpark WW

Vermietungsplattform für Werkzeuge, Maschinen und Baugeräte – Mietpark Westerwald / Nistertal.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Design System)
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **Payments:** Stripe (Payment Intents + Kautions-Autorisierung)
- **Email:** Resend (transaktional)
- **Hosting:** Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local
# → Fill in Supabase + Stripe keys

# 3. Set up database
# → Run supabase/schema.sql in Supabase SQL Editor

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── katalog/            # Product catalog (public)
│   ├── admin/              # Admin dashboard (protected)
│   ├── api/                # API routes (Stripe, bookings)
│   └── (auth)/             # Login/Register
├── components/
│   ├── ui/                 # Design system primitives (Button, Card, Input, Badge)
│   ├── catalog/            # Product listing components
│   ├── booking/            # Booking flow components
│   ├── checkout/           # Check-in/Check-out components
│   └── admin/              # Admin dashboard components
├── lib/
│   ├── supabase/           # Supabase client (browser + server)
│   ├── stripe/             # Stripe client (browser + server)
│   └── utils.ts            # Shared utilities (cn, formatPrice, etc.)
└── types/
    └── database.ts         # TypeScript types matching Supabase schema
```

## Design System

Colors, typography, spacing, and shadows are defined in `tailwind.config.ts`. All UI components use the `cn()` utility for class merging. Status colors follow a consistent mapping:

- 🟢 `brand-*` / `status-available` → Verfügbar, Erfolg
- 🔵 `status-rented` → Aktiv, Vermietet
- 🟡 `status-pending` → Wartend, Angefragt
- 🔴 `status-maintenance` → Wartung, Fehler
- 🟣 `status-returned` → Zurückgegeben

## Phases

1. **MVP** – Katalog + Buchungsstrecke + Stripe + Admin-Dashboard
2. **Übergabe** – QR-Code Check-in/Check-out mit Fotodokumentation
3. **Automatisierung** – Rechnungen, Erinnerungen, Analytics, White-Label
