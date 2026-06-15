import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rorichgroup.co.za";
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/industries", priority: 0.8 },
    { path: "/products", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/legal", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
