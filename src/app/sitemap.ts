import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { serviceSlugs } from "@/content/services";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = Array.from(
    new Set(["", "/about", ...serviceSlugs.map((s) => `/${s}`)]),
  );

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of paths) {
      const languages: Record<string, string> = {};
      for (const l of locales) languages[l] = `${site.url}/${l}${path}`;
      entries.push({
        url: `${site.url}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/energy-therapy" ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }
  return entries;
}
