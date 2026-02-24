import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Kontakt – Mietpark Westerwald",
  description:
    "Sprechen Sie uns an – persönlich vor Ort in Nistertal, telefonisch oder per E-Mail. Wir beraten Sie gerne zu Werkzeugen und Baugeräten.",
};

export default function KontaktPage() {
  return (
    <>
      {/* ─── PAGE HEADER ─────────────────────────────── */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Sprechen Sie uns an
            </h1>
            <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
              Kein Callcenter, keine Warteschleife – bei uns erreichen Sie echte
              Ansprechpartner direkt vor Ort im Nistertal.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FORM + INFO ─────────────────────────────── */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left column — Contact Form */}
            <div className="lg:col-span-3">
              <Card padding="lg">
                <h2 className="text-lg font-semibold text-neutral-900 mb-6">
                  Nachricht senden
                </h2>
                <ContactForm />
              </Card>
            </div>

            {/* Right column — Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card padding="lg" className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Standort</h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Gewerbepark Talstr. 5
                    <br />
                    57647 Nistertal
                  </p>
                </div>
              </Card>

              <Card padding="lg" className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Erreichbarkeit
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Montag – Freitag: 07:00 – 17:00
                    <br />
                    Samstag: 08:00 – 13:00
                    <br />
                    Sonntag: geschlossen
                  </p>
                </div>
              </Card>

              <Card padding="lg" className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Telefon &amp; E-Mail
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    <a
                      href="tel:+492661938400"
                      className="hover:text-brand-600 transition-colors"
                    >
                      02661-938400
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm text-neutral-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <a
                      href="mailto:info@creationART.de"
                      className="hover:text-brand-600 transition-colors"
                    >
                      info@creationART.de
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
