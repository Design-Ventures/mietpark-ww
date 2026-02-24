import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Search,
  CalendarCheck,
  CreditCard,
  Truck,
  ClipboardCheck,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        {/* Layered gradients — forest depth, not flat black */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_0%,_rgba(22,163,74,0.15),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_100%,_rgba(22,163,74,0.06),_transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

        <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-brand-400 font-medium text-sm tracking-wide mb-4">
              Mietpark Westerwald · Nistertal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Werkzeuge &amp; Baugeräte{" "}
              <span className="text-brand-400">mieten</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 max-w-lg leading-relaxed">
              Rüttelplatten, Minibagger, Holzspalter und mehr – professionell
              gewartet, fair bepreist, direkt verfügbar.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/katalog">
                <Button size="lg" className="gap-2">
                  Katalog ansehen
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#ablauf">
                <Button variant="outline" size="lg" className="border-neutral-700 text-white hover:bg-neutral-800">
                  So funktioniert&apos;s
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────── */}
      <section id="ablauf" className="py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              In 4 Schritten zum Gerät
            </h2>
            <p className="mt-3 text-neutral-500">
              Vom Katalog bis zur Abholung – einfach, schnell und transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                step: "1",
                title: "Gerät finden",
                description: "Durchsuchen Sie unseren Katalog und wählen Sie das passende Werkzeug oder die passende Maschine.",
              },
              {
                icon: CalendarCheck,
                step: "2",
                title: "Zeitraum wählen",
                description: "Wählen Sie Ihren Mietzeitraum. Der Preis berechnet sich automatisch nach der besten Staffel.",
              },
              {
                icon: CreditCard,
                step: "3",
                title: "Online bezahlen",
                description: "Miete bezahlen, Kaution wird nur reserviert. Sichere Zahlung über Stripe.",
              },
              {
                icon: Truck,
                step: "4",
                title: "Abholen & loslegen",
                description: "Gerät in Nistertal abholen. QR-Code scannen, Zustand dokumentieren, fertig.",
              },
            ].map((item) => (
              <Card key={item.step} padding="lg" className="text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div className="mt-2 mb-4 mx-auto w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST / INFO ─────────────────────────────── */}
      <section className="py-16 bg-neutral-100">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="lg" className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Standort</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Gewerbepark Talstr. 5<br />
                  57647 Nistertal
                </p>
              </div>
            </Card>

            <Card padding="lg" className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Ausgabezeiten</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Montag – Samstag<br />
                  Sonntags keine Ausgabe/Rücknahme
                </p>
              </div>
            </Card>

            <Card padding="lg" className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                <Phone className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Kontakt</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Tel: 02661-938400<br />
                  info@creationART.de
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 text-center">
          <ClipboardCheck className="w-10 h-10 text-brand-600 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Bereit für Ihr Projekt?
          </h2>
          <p className="mt-3 text-neutral-500 max-w-md mx-auto">
            Durchsuchen Sie unseren Katalog und buchen Sie direkt online –
            ohne Wartezeit, ohne Telefon-Ping-Pong.
          </p>
          <div className="mt-6">
            <Link href="/katalog">
              <Button size="lg" className="gap-2">
                Zum Katalog
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
