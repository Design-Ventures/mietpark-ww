/**
 * Mock data for development.
 *
 * These functions mimic the Supabase API so switching to real data
 * later is a one-line change per call site:
 *   getProducts() → supabase.from("products").select("*")
 */

import type { Product } from "@/types/database";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    name: "Rüttelplatte Weber WHV 6013",
    slug: "ruettelplatte-weber-whv-6013",
    description:
      "Kompakte Rüttelplatte mit 60 kg Betriebsgewicht und 13 kN Verdichtungskraft. Ideal für den Garten- und Landschaftsbau, Pflasterarbeiten und kleine Verdichtungsaufgaben. Einfach zu transportieren und zu bedienen.",
    category: "maschine",
    images: [],
    serial_number: "WEB-6013-001",
    manufacturer: "Weber",
    model: "WHV 6013",
    year: 2020,
    weight_kg: 60,
    specs: {
      Gewicht: "60 kg",
      Verdichtungskraft: "13 kN",
      Plattenbreite: "400 mm",
      Motor: "Honda GX 160",
      Vorlaufgeschwindigkeit: "25 m/min",
    },
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
    description:
      "Leistungsstarker Minibagger mit 3,5 Tonnen Einsatzgewicht. Inklusive Standardlöffel (300 mm). Ideal für Erdarbeiten, Aushub, Kanalbau und Abbrucharbeiten. Nullheck-Design ermöglicht Arbeiten auf engem Raum.",
    category: "maschine",
    images: [],
    serial_number: "MB-35-001",
    manufacturer: null,
    model: "3,5t",
    year: 2019,
    weight_kg: 3500,
    specs: {
      Einsatzgewicht: "3.500 kg",
      Grabtiefe: "3,2 m",
      Ausschütthöhe: "2,8 m",
      Löffelbreite: "300 mm (Standard)",
      Motorleistung: "24,4 PS",
      Bauart: "Nullheck",
    },
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
    description:
      "Mobiler Holzspalter auf Straßenanhänger mit 22 Tonnen Spaltkraft. Kann direkt an den Einsatzort gefahren werden (Führerschein BE erforderlich). Geeignet für Stammholz bis 60 cm Durchmesser.",
    category: "maschine",
    images: [],
    serial_number: "HS-22-001",
    manufacturer: "Posch",
    model: "22t Anhänger",
    year: 2021,
    weight_kg: 850,
    specs: {
      Spaltkraft: "22 Tonnen",
      "Max. Spalthöhe": "60 cm",
      "Max. Stammdurchmesser": "60 cm",
      Antrieb: "Zapfwelle / E-Motor",
      Transport: "Straßenanhänger (BE-Führerschein)",
    },
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
    description:
      "Präziser Rotationslaser für Nivellierarbeiten. Selbstnivellierend mit hoher Reichweite. Ideal für Fundament-, Estrich- und Tiefbauarbeiten. Inklusive Empfänger und Stativ.",
    category: "werkzeug",
    images: [],
    serial_number: "RL-001",
    manufacturer: null,
    model: null,
    year: 2022,
    weight_kg: 3,
    specs: {
      Reichweite: "bis 500 m (mit Empfänger)",
      Genauigkeit: "±1 mm / 10 m",
      Selbstnivellierung: "± 5°",
      Schutzklasse: "IP66",
      Lieferumfang: "Laser, Empfänger, Stativ, Koffer",
    },
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
    description:
      "Nassschneidemaschine mit 2,8 kW Leistung und bis zu 800 mm Schnittlänge. Für präzise Schnitte in Fliesen, Naturstein und Betonplatten. Wassergekühltes Diamantblatt für staubfreies Arbeiten.",
    category: "maschine",
    images: [],
    serial_number: "NS-400-001",
    manufacturer: "SSB",
    model: "EGO400",
    year: 2020,
    weight_kg: 85,
    specs: {
      Leistung: "2,8 kW",
      "Max. Schnittlänge": "800 mm",
      "Max. Schnitttiefe": "120 mm",
      Blattdurchmesser: "400 mm",
      Kühlung: "Wassergekühlt",
    },
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
    description:
      "Handgeführter Flügelglätter für die Betonglättung. Ideal für kleinere Flächen wie Garagen, Terrassen und Kellerräume. Einfach zu bedienen mit geringem Gewicht.",
    category: "maschine",
    images: [],
    serial_number: "FG-240-001",
    manufacturer: "Atlas Copco",
    model: "BG 240",
    year: 2021,
    weight_kg: 65,
    specs: {
      Arbeitsbreite: "600 mm",
      Drehzahl: "60–120 U/min",
      Motor: "Honda GX 160",
      Gewicht: "65 kg",
    },
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

// ─── DATA ACCESS FUNCTIONS ──────────────────────────────────
// Replace these with Supabase queries when ready.

export function getProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "alle") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getAvailableProducts(): Product[] {
  return PRODUCTS.filter((p) => p.status === "verfuegbar");
}
