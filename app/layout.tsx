import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onetitel.de"),
  title: {
    default: "OneTitel – Sales, Consulting und Interim-Management",
    template: "%s | OneTitel",
  },
  description:
    "Oliver M. Müller – Experte für Sales, Digital-Marketing, KI-Automatisierung und Interim-Management. Maßgeschneiderte Lösungen für nachhaltiges Wachstum.",
  keywords: [
    "Sales Consulting",
    "Interim Management",
    "Digital Marketing",
    "KI Automatisierung",
    "Vertriebsoptimierung",
    "Coaching",
  ],
  openGraph: {
    siteName: "OneTitel",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
