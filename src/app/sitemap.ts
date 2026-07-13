import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/about", ...services.map((s) => `/${s.slug}`)];
  // Dedupe (journeys appears both as a service slug and its own route).
  const unique = Array.from(new Set(paths));

  return unique.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/energy-therapy" ? 0.9 : 0.8,
  }));
}
