import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mietpark WW – Werkzeuge & Baugeräte mieten im Westerwald",
    template: "%s | Mietpark WW",
  },
  description:
    "Professionelle Werkzeuge, Maschinen und Baugeräte mieten in Nistertal / Westerwald. Rüttelplatten, Minibagger, Holzspalter und mehr – fair, unkompliziert, sofort verfügbar.",
  keywords: [
    "Baugeräte mieten Westerwald",
    "Werkzeug Verleih Nistertal",
    "Rüttelplatte mieten",
    "Minibagger mieten Westerwald",
    "Holzspalter leihen",
    "Baumaschinen Verleih Hachenburg",
    "Mietpark Westerwald",
  ],
  openGraph: {
    title: "Mietpark WW – Werkzeuge & Baugeräte mieten im Westerwald",
    description:
      "Professionelle Werkzeuge und Baugeräte mieten. Fair, unkompliziert, sofort verfügbar.",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
