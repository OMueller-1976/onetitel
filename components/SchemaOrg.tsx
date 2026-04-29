export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.onetitel.de/#person",
        name: "Oliver M. Müller",
        jobTitle: "Sales Consultant & Interim Manager",
        url: "https://www.onetitel.de",
        sameAs: [
          "https://www.linkedin.com/in/oliver-m-mueller/",
          "https://www.xing.com/profile/OliverMarkus_Mueller/web_profiles",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Am Bruchborn 6",
          addressLocality: "Kirchweiler",
          postalCode: "54570",
          addressCountry: "DE",
        },
        email: "info@onetitel.de",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.onetitel.de/#business",
        name: "OneTitel – Digital & Business Solutions",
        description:
          "Sales-Consulting, Interim-Management, Digital-Marketing und KI-Automatisierung",
        url: "https://www.onetitel.de",
        founder: { "@id": "https://www.onetitel.de/#person" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Am Bruchborn 6",
          addressLocality: "Kirchweiler",
          postalCode: "54570",
          addressCountry: "DE",
        },
        email: "info@onetitel.de",
        priceRange: "€€",
        areaServed: "DE",
        serviceType: [
          "Sales Consulting",
          "Interim Management",
          "Digital Marketing Beratung",
          "KI Automatisierung",
          "Coaching",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.onetitel.de/#website",
        url: "https://www.onetitel.de",
        name: "OneTitel",
        publisher: { "@id": "https://www.onetitel.de/#business" },
        inLanguage: "de-DE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
