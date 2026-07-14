import type { Metadata } from "next";
import { site, getSiteCopy } from "@/content/site";
import { getServices } from "@/content/services";
import {
  type Locale,
  locales,
  defaultLocale,
  localeOgLocale,
} from "@/i18n/config";

/**
 * Build locale-aware page metadata with canonical + hreflang alternates and
 * Open Graph. `path` is the locale-less path, e.g. "" (home) or "/about".
 */
export function buildMetadata({
  locale,
  title,
  description,
  path = "",
  image = "/opengraph-image",
}: {
  locale: Locale;
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const copy = getSiteCopy(locale);
  const desc = description ?? copy.description;
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${copy.tagline}`;
  const url = `${site.url}/${locale}${path}`;

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${site.url}/${l}${path}`;
  languages["x-default"] = `${site.url}/${defaultLocale}${path}`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description: desc,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      locale: localeOgLocale[locale],
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}

/** Organisation + services structured data for rich results. */
export function structuredData(locale: Locale) {
  const copy = getSiteCopy(locale);
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "HealthAndBeautyBusiness"],
    name: site.name,
    description: copy.description,
    url: `${site.url}/${locale}`,
    email: site.contact.email,
    telephone: site.contact.whatsapp,
    areaServed: "Worldwide",
    founder: { "@type": "Person", name: site.founder, jobTitle: copy.role },
    sameAs: [site.contact.instagramUrl, site.contact.telegramUrl],
    makesOffer: getServices(locale).map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
      },
    })),
  };
}

/** FAQPage schema from a list of Q&A. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
