import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www canonical redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "onetitel.de" }],
        destination: "https://www.onetitel.de/:path*",
        permanent: true,
      },
      // Wix URL → Next.js URL (301 permanent)
      { source: "/l%C3%B6sungen", destination: "/loesungen", permanent: true },
      { source: "/lösungen",      destination: "/loesungen", permanent: true },
      { source: "/info",          destination: "/medienberichte", permanent: true },
      { source: "/beitr%C3%A4ge", destination: "/beitraege", permanent: true },
      { source: "/beiträge",      destination: "/beitraege", permanent: true },
      { source: "/cookies",       destination: "/datenschutz", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/:path*.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
    ];
  },
};

export default nextConfig;
