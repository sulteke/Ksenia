import type { MetadataRoute } from "next";
import { site, getSiteCopy } from "@/content/site";
import { defaultLocale } from "@/i18n/config";

export default function manifest(): MetadataRoute.Manifest {
  const copy = getSiteCopy(defaultLocale);
  return {
    name: `${site.name} — ${copy.tagline}`,
    short_name: site.name,
    description: copy.description,
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: "#FBF8F2",
    theme_color: "#FBF8F2",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
