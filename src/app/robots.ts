import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://uumair327.github.io/sitemap.xml",
    host: "https://uumair327.github.io",
  };
}
