import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onetitel.de"),
  title: {
    default: "OneTitel – Sales, Consulting & Interim-Management | Oliver M. Müller",
    template: "%s | OneTitel",
  },
  description:
    "Oliver M. Müller – Experte für Sales-Consulting, Digital-Marketing, KI-Automatisierung und Interim-Management. BAFA-förderfähig. Kostenlose Erstberatung.",
  keywords: [
    "Sales Consulting",
    "Interim Management",
    "Digital Marketing Beratung",
    "KI Automatisierung",
    "Vertriebsoptimierung",
    "Programmatic Advertising",
    "Business Angel",
    "BAFA Beratung",
    "Unternehmensberatung Deutschland",
    "Oliver Müller Berater",
  ],
  authors: [{ name: "Oliver M. Müller", url: "https://www.onetitel.de" }],
  creator: "Oliver M. Müller",
  publisher: "OneTitel – Digital & Business Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.onetitel.de",
    siteName: "OneTitel",
    title: "OneTitel – Sales, Consulting & Interim-Management",
    description:
      "Oliver M. Müller – Experte für Sales-Consulting, Digital-Marketing und Interim-Management. BAFA-förderfähig.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OneTitel – Sales, Consulting & Interim-Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneTitel – Sales, Consulting & Interim-Management",
    description:
      "Oliver M. Müller – Experte für Sales, Digital-Marketing und Interim-Management.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.onetitel.de",
    languages: { "de-DE": "https://www.onetitel.de" },
  },
  verification: {
    google: "",
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
        <SchemaOrg />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRMD9DWW');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TG10ER8DT7" />
        <script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TG10ER8DT7');
` }} />
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
