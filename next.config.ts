import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Wix URL → Next.js URL (301 permanent)
      { source: "/l%C3%B6sungen", destination: "/loesungen", permanent: true },
      { source: "/lösungen",      destination: "/loesungen", permanent: true },
      { source: "/info",          destination: "/medienberichte", permanent: true },
      { source: "/beitr%C3%A4ge", destination: "/beitraege", permanent: true },
      { source: "/beiträge",      destination: "/beitraege", permanent: true },
      { source: "/cookies",       destination: "/datenschutz", permanent: true },
    ];
  },
};

export default nextConfig;
