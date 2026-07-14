/**
 * Internationalisation config. The site ships bilingual: Russian (default) and
 * English, served from `/ru` and `/en`. Slugs stay identical across locales for
 * clean, stable URLs.
 */
export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

/** Short label shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
};

/** Full name for aria-labels / hreflang context. */
export const localeLabels: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
};

/** BCP-47 tags for <html lang> and Open Graph. */
export const localeHtmlLang: Record<Locale, string> = {
  ru: "ru",
  en: "en",
};

export const localeOgLocale: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix an app-relative path with a locale, e.g. ("ru","/about") → "/ru/about". */
export function localizedPath(locale: Locale, path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  // "/#contact" → "#contact" so we get "/ru#contact", not "/ru/#contact".
  const clean =
    path === "/"
      ? ""
      : path.startsWith("/#")
        ? path.slice(1)
        : path.startsWith("/")
          ? path
          : `/${path}`;
  return `/${locale}${clean}`;
}
