import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.onetitel.de";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/loesungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/medienberichte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/beitraege`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/initiativen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/initiativen/true-dads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/initiativen/true-dads/ueber-uns`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/true-dads/situation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/true-dads/fakten-recht`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/true-dads/leitfaden`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/true-dads/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/initiativen/ba-digital-marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/ba-digital-marketing/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/initiativen/ba-digital-marketing/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/initiativen/eritaj`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/onematic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/lersi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/adhasi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/tshirt-trend`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
