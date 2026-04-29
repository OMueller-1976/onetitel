import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.onetitel.de";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/loesungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/medienberichte`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/beitraege`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/initiativen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/initiativen/true-dads`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/true-dads/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/true-dads/situation`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/true-dads/fakten-recht`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/true-dads/leitfaden`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/initiativen/true-dads/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/initiativen/ba-digital-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiativen/ba-digital-marketing/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/initiativen/ba-digital-marketing/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/initiativen/eritaj`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/onematic`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/lersi`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/initiativen/adhasi`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/initiativen/tshirt-trend`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
