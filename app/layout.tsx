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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRMD9DWW');` }} />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRMD9DWW" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
