import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/impressum", "/datenschutz", "/_next/", "/api/"],
      },
    ],
    sitemap: "https://www.onetitel.de/sitemap.xml",
    host: "https://www.onetitel.de",
  };
}
