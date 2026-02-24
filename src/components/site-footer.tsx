import Link from "next/link";
import { Wrench } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white mt-auto">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600 text-white">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-bold text-neutral-900">Mietpark WW</span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs">
              Werkzeuge, Maschinen und Baugeräte mieten im Westerwald.
              Professionell, fair und unkompliziert.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-3">Mietpark</h4>
            <ul className="space-y-2">
              <li><Link href="/katalog" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Katalog</Link></li>
              <li><Link href="/#ablauf" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">So funktioniert&apos;s</Link></li>
              <li><Link href="/kontakt" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-3">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} creationART · Dipl.-Ing. Daniel Schnell · Gewerbepark Talstr. 5, 57647 Nistertal
          </p>
          <p className="text-xs text-neutral-400">
            USt-ID: DE 152 175 178
          </p>
        </div>
      </div>
    </footer>
  );
}
