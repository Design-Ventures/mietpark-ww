import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Mietpark Westerwald",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-8">
          Impressum
        </h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-neutral-700">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              creationART
              <br />
              Dipl.-Ing. Daniel Schnell
              <br />
              Gewerbepark Talstr. 5
              <br />
              57647 Nistertal
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+492661938400"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                02661-938400
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@creationART.de"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                info@creationART.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz:
              <br />
              DE 152 175 178
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Dipl.-Ing. Daniel Schnell
              <br />
              Gewerbepark Talstr. 5
              <br />
              57647 Nistertal
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
              waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-2">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke
              auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
              der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers. Downloads und Kopien dieser Seite sind nur für
              den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-2">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber
              erstellt wurden, werden die Urheberrechte Dritter beachtet.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung
              aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
