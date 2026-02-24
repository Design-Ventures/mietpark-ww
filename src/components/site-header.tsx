"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";

const navItems = [
  { label: "Katalog", href: "/katalog" },
  { label: "So funktioniert's", href: "/#ablauf" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-600 text-white group-hover:bg-brand-700 transition-colors">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-neutral-900 leading-tight">
                Mietpark WW
              </span>
              <span className="text-[10px] text-neutral-500 leading-tight">
                Westerwald · Nistertal
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Anmelden
              </Button>
            </Link>
            <Link href="/katalog">
              <Button size="sm">Gerät mieten</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 text-sm text-neutral-700 rounded-lg hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-neutral-200 flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" fullWidth>Anmelden</Button>
              </Link>
              <Link href="/katalog" onClick={() => setMobileOpen(false)}>
                <Button fullWidth>Gerät mieten</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
