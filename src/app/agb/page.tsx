import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Mietpark Westerwald",
  description:
    "Allgemeine Geschäftsbedingungen für die Vermietung von Werkzeugen, Maschinen und Baugeräten.",
};

export default function AGBPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <p className="text-sm text-neutral-500 mb-10">
          Stand: Februar 2026 — gültig für die Vermietung von Werkzeugen,
          Maschinen und Baugeräten durch creationART, Dipl.-Ing. Daniel
          Schnell, Gewerbepark Talstr. 5, 57647 Nistertal.
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-neutral-700">
          {/* § 1 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 1 Geltungsbereich
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für
                alle Mietverträge zwischen creationART (nachfolgend
                „Vermieter") und dem Kunden (nachfolgend „Mieter") über die
                Vermietung von Werkzeugen, Maschinen und Baugeräten.
              </li>
              <li>
                Abweichende, entgegenstehende oder ergänzende AGB des
                Mieters werden nur dann Vertragsbestandteil, wenn der
                Vermieter deren Geltung ausdrücklich schriftlich zugestimmt
                hat.
              </li>
              <li>
                Der Mieter kann sowohl Verbraucher (§ 13 BGB) als auch
                Unternehmer (§ 14 BGB) sein.
              </li>
            </ol>
          </div>

          {/* § 2 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 2 Vertragsschluss
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Die Darstellung der Mietgeräte auf unserer Website stellt
                kein verbindliches Angebot dar, sondern eine Aufforderung
                zur Abgabe einer Buchungsanfrage.
              </li>
              <li>
                Der Mietvertrag kommt durch die Bestätigung der Buchung
                durch den Vermieter zustande.
              </li>
              <li>
                Voraussetzung für eine Buchung ist die Registrierung eines
                Kundenkontos mit vollständigen und wahrheitsgemäßen Angaben.
                Privatkunden müssen sich durch ein gültiges
                Ausweisdokument identifizieren.
              </li>
            </ol>
          </div>

          {/* § 3 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 3 Mietpreise und Zahlung
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Alle angegebenen Preise verstehen sich in Euro inklusive
                der gesetzlichen Mehrwertsteuer (brutto).
              </li>
              <li>
                Die Mietpreise berechnen sich nach der jeweiligen
                Preisstaffel (Tages-, Wochenend-, Wochen- oder
                Monatspreis). Die günstigste anwendbare Staffel wird
                automatisch ermittelt.
              </li>
              <li>
                Die Zahlung der Miete erfolgt bei Buchung über den
                Zahlungsdienstleister Stripe. Die Miete ist vollständig
                im Voraus zu entrichten.
              </li>
              <li>
                Zusätzlich zur Miete wird eine Kaution erhoben. Die Höhe
                der Kaution ist bei jedem Gerät angegeben. Die Kaution
                wird bei Buchung auf der Kreditkarte reserviert
                (autorisiert) und nach ordnungsgemäßer Rückgabe freigegeben.
              </li>
            </ol>
          </div>

          {/* § 4 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 4 Übergabe und Rückgabe
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Die Übergabe und Rückgabe der Mietgeräte erfolgt am
                Standort des Vermieters: Gewerbepark Talstr. 5, 57647
                Nistertal.
              </li>
              <li>
                Bei der Übergabe wird ein Übergabeprotokoll erstellt, das
                den Zustand des Gerätes dokumentiert (Fotos, Checkliste).
                Der Mieter bestätigt den ordnungsgemäßen Zustand durch
                Unterschrift.
              </li>
              <li>
                Bei der Rückgabe wird ein Rücknahmeprotokoll erstellt. Der
                Mieter ist verpflichtet, das Gerät in dem Zustand
                zurückzugeben, in dem er es erhalten hat (abzüglich
                normaler Abnutzung).
              </li>
              <li>
                Die Ausgabe- und Rücknahmezeiten sind: Montag bis Freitag
                07:00–17:00 Uhr, Samstag 08:00–13:00 Uhr. Sonntags
                erfolgt keine Ausgabe oder Rücknahme.
              </li>
              <li>
                Wird das Gerät nicht zum vereinbarten Termin zurückgegeben,
                wird die Miete für jeden weiteren Tag zum Tagespreis
                berechnet. Der Vermieter behält sich vor, bei
                erheblichem Verzug die Kaution einzubehalten und
                weitere Schritte einzuleiten.
              </li>
            </ol>
          </div>

          {/* § 5 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 5 Pflichten des Mieters
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Der Mieter verpflichtet sich, das Mietgerät
                bestimmungsgemäß und pfleglich zu behandeln.
              </li>
              <li>
                Der Mieter darf das Mietgerät nicht an Dritte
                weitergeben oder untervermieten.
              </li>
              <li>
                Der Mieter hat dafür Sorge zu tragen, dass das Gerät nur
                von Personen bedient wird, die über die erforderlichen
                Kenntnisse und ggf. Berechtigungen verfügen.
              </li>
              <li>
                Schäden, Störungen oder der Verlust des Mietgerätes sind
                dem Vermieter unverzüglich mitzuteilen.
              </li>
              <li>
                Eigenmächtige Reparaturen am Mietgerät sind untersagt.
              </li>
            </ol>
          </div>

          {/* § 6 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 6 Haftung und Kaution
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Der Mieter haftet für alle Schäden am Mietgerät, die
                während der Mietzeit entstehen und nicht auf normalen
                Verschleiß zurückzuführen sind.
              </li>
              <li>
                Der Mieter haftet ebenfalls für den Verlust oder
                Diebstahl des Mietgerätes während der Mietzeit.
              </li>
              <li>
                Die Kaution dient als Sicherheit für eventuelle Schäden
                oder Verluste. Der Vermieter ist berechtigt, die Kaution
                ganz oder teilweise einzubehalten, soweit berechtigte
                Ansprüche bestehen.
              </li>
              <li>
                Der Vermieter haftet nicht für Schäden, die durch die
                bestimmungsgemäße Nutzung des Mietgerätes am Eigentum
                des Mieters oder Dritter entstehen. Dies gilt nicht bei
                Vorsatz oder grober Fahrlässigkeit des Vermieters.
              </li>
            </ol>
          </div>

          {/* § 7 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 7 Stornierung
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Stornierungen sind bis 24 Stunden vor dem vereinbarten
                Mietbeginn kostenfrei möglich.
              </li>
              <li>
                Bei späterer Stornierung oder Nichtabholung kann der
                Vermieter die Miete für den ersten Miettag als
                Stornogebühr einbehalten.
              </li>
              <li>
                Das gesetzliche Widerrufsrecht für Verbraucher bei
                Fernabsatzverträgen bleibt unberührt (siehe § 10).
              </li>
            </ol>
          </div>

          {/* § 8 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 8 Gewährleistung
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Der Vermieter übergibt die Mietgeräte in einem
                funktionsfähigen und sicheren Zustand.
              </li>
              <li>
                Sollte ein Gerät während der Mietzeit einen Defekt
                aufweisen, der nicht durch den Mieter verursacht wurde,
                wird der Vermieter nach Möglichkeit ein Ersatzgerät
                stellen oder die Miete anteilig erstatten.
              </li>
              <li>
                Weitergehende Ansprüche des Mieters sind ausgeschlossen,
                soweit gesetzlich zulässig.
              </li>
            </ol>
          </div>

          {/* § 9 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 9 Datenschutz
            </h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß
              unserer{" "}
              <a
                href="/datenschutz"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          {/* § 10 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 10 Widerrufsrecht für Verbraucher
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Verbraucher haben bei Fernabsatzverträgen grundsätzlich
                ein Widerrufsrecht von 14 Tagen gemäß §§ 312g, 355 BGB.
              </li>
              <li>
                Das Widerrufsrecht erlischt bei Mietverträgen über
                bewegliche Sachen vorzeitig, wenn der Vermieter die
                Leistung vollständig erbracht hat und mit der Ausführung
                erst begonnen hat, nachdem der Mieter seine ausdrückliche
                Zustimmung gegeben und gleichzeitig seine Kenntnis davon
                bestätigt hat, dass er sein Widerrufsrecht bei
                vollständiger Vertragserfüllung verliert.
              </li>
              <li>
                Um Ihr Widerrufsrecht auszuüben, senden Sie eine
                eindeutige Erklärung (z.&nbsp;B. per E-Mail an{" "}
                <a
                  href="mailto:info@creationART.de"
                  className="text-brand-600 hover:text-brand-700 transition-colors"
                >
                  info@creationART.de
                </a>
                ) an uns.
              </li>
            </ol>
          </div>

          {/* § 11 */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              § 11 Schlussbestimmungen
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Es gilt das Recht der Bundesrepublik Deutschland. Bei
                Verbrauchern gilt dies nur insoweit, als nicht
                zwingende Verbraucherschutzvorschriften des
                Aufenthaltsstaates entgegenstehen.
              </li>
              <li>
                Gerichtsstand für alle Streitigkeiten aus dem
                Vertragsverhältnis ist – soweit gesetzlich zulässig – der
                Sitz des Vermieters.
              </li>
              <li>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein
                oder werden, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
