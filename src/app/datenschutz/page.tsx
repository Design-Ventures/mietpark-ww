import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Mietpark Westerwald",
  description:
    "Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-narrow px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-8">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-sm leading-relaxed text-neutral-700">
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <p className="mt-2">
              creationART
              <br />
              Dipl.-Ing. Daniel Schnell
              <br />
              Gewerbepark Talstr. 5
              <br />
              57647 Nistertal
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@creationART.de"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                info@creationART.de
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+492661938400"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                02661-938400
              </a>
            </p>
          </div>

          {/* 2. Überblick */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              2. Überblick über die Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur
              Bereitstellung unserer Website, unserer Dienstleistungen und
              zur Abwicklung von Mietvorgängen erforderlich ist. Die
              Verarbeitung erfolgt auf Grundlage der
              Datenschutz-Grundverordnung (DSGVO) und des
              Bundesdatenschutzgesetzes (BDSG).
            </p>
          </div>

          {/* 3. Hosting */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Baxter St, Covina,
              CA 91723, USA, gehostet. Beim Besuch unserer Website werden
              automatisch Informationen in sogenannten Server-Log-Dateien
              erfasst, die Ihr Browser automatisch an uns übermittelt. Dies
              sind:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Seite</li>
              <li>Übertragene Datenmenge</li>
              <li>Browser-Typ und -Version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden zur Sicherstellung eines
              störungsfreien Betriebs der Website verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten
              werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="mt-2">
              Der Einsatz von Vercel erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
              einer zuverlässigen Darstellung unserer Website. Es besteht
              ein Vertrag über Auftragsverarbeitung (Data Processing
              Agreement) mit Vercel.
            </p>
          </div>

          {/* 4. Registrierung & Kundenkonto */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              4. Registrierung und Kundenkonto
            </h2>
            <p>
              Zur Nutzung unseres Mietservice können Sie ein Kundenkonto
              anlegen. Dabei erheben wir folgende Daten:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Anschrift (Straße, PLZ, Ort)</li>
              <li>
                Bei Gewerbekunden zusätzlich: Firmenname,
                USt-Identifikationsnummer
              </li>
              <li>
                Bei Privatkunden: Ausweisdokument zur
                Identitätsprüfung
              </li>
            </ul>
            <p className="mt-2">
              Die Verarbeitung erfolgt zur Vertragsdurchführung (Art. 6
              Abs. 1 lit. b DSGVO). Die Daten werden gespeichert, solange
              Ihr Kundenkonto besteht und darüber hinaus gemäß den
              gesetzlichen Aufbewahrungsfristen.
            </p>
            <p className="mt-2">
              Die Authentifizierung erfolgt über Supabase (Supabase Inc.,
              970 Toa Payoh North #07-04, Singapore 318992). Supabase
              verarbeitet Ihre Anmeldedaten (E-Mail, Passwort-Hash) in
              unserem Auftrag. Es besteht ein Vertrag über
              Auftragsverarbeitung.
            </p>
          </div>

          {/* 5. Kontaktformular */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              5. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, werden
              die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse,
              optional Telefonnummer, Betreff und Nachricht) zur
              Bearbeitung Ihrer Anfrage gespeichert. Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>
            <p className="mt-2">
              Ihre Daten werden nach abschließender Bearbeitung Ihrer
              Anfrage gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          {/* 6. Zahlungsabwicklung */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              6. Zahlungsabwicklung
            </h2>
            <p>
              Die Zahlungsabwicklung erfolgt über Stripe (Stripe
              Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand
              Canal Dock, Dublin, D02 H210, Irland). Bei einer Zahlung
              werden die von Ihnen eingegebenen Zahlungsdaten direkt an
              Stripe übermittelt. Wir selbst speichern keine vollständigen
              Zahlungsdaten (z.&nbsp;B. Kreditkartennummern).
            </p>
            <p className="mt-2">
              Stripe verarbeitet Ihre Daten als eigenständiger
              Verantwortlicher. Die Datenschutzerklärung von Stripe finden
              Sie unter:{" "}
              <a
                href="https://stripe.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                https://stripe.com/de/privacy
              </a>
              .
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt zur Vertragsdurchführung gemäß Art.
              6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          {/* 7. Cookies */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              7. Cookies
            </h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige
              Cookies. Diese dienen der Authentifizierung und
              Sitzungsverwaltung und sind für den Betrieb der Website
              erforderlich.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse). Wir setzen keine Cookies zu Analyse- oder
              Werbezwecken ein.
            </p>
          </div>

          {/* 8. Datensicherheit */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              8. Datensicherheit
            </h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://" auf „https://" wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          {/* 9. Betroffenenrechte */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              9. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <strong>Auskunft</strong> über Ihre bei uns gespeicherten
                personenbezogenen Daten (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger Daten (Art. 16
                DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung</strong> der Verarbeitung (Art. 18
                DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruch</strong> gegen die Verarbeitung (Art.
                21 DSGVO)
              </li>
            </ul>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{" "}
              <a
                href="mailto:info@creationART.de"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                info@creationART.de
              </a>
              .
            </p>
          </div>

          {/* 10. Beschwerderecht */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              10. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen die DSGVO verstößt, haben Sie
              das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren (Art. 77 DSGVO). Die zuständige Aufsichtsbehörde
              ist:
            </p>
            <p className="mt-2">
              Der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Rheinland-Pfalz
              <br />
              Postfach 30 40
              <br />
              55020 Mainz
              <br />
              <a
                href="https://www.datenschutz.rlp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 transition-colors"
              >
                www.datenschutz.rlp.de
              </a>
            </p>
          </div>

          {/* 11. Aktualität */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              11. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig (Stand: Februar
              2026). Aufgrund der Weiterentwicklung unserer Website oder
              geänderter gesetzlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
