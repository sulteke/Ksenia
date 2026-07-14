"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  locales,
  localeNames,
  localeLabels,
  defaultLocale,
  isLocale,
} from "@/i18n/config";

/** RU / EN toggle. Keeps the current sub-path and remembers the choice. */
export function LanguageSwitcher({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const current = isLocale(segments[0]) ? segments[0] : defaultLocale;
  const tail = segments.slice(1).join("/");

  const hrefFor = (locale: string) => `/${locale}${tail ? `/${tail}` : ""}`;

  const remember = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5",
        tone === "ink" ? "border-espresso/15" : "border-cream/20",
        className,
      )}
      role="group"
      aria-label={current === "ru" ? "Язык" : "Language"}
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={hrefFor(locale)}
            hrefLang={locale}
            onClick={() => remember(locale)}
            aria-label={localeLabels[locale]}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium tracking-[0.08em] transition-colors duration-300",
              active
                ? tone === "ink"
                  ? "bg-ink text-cream"
                  : "bg-cream text-ink"
                : tone === "ink"
                  ? "text-espresso/60 hover:text-ink"
                  : "text-cream/60 hover:text-cream",
            )}
          >
            {localeNames[locale]}
          </Link>
        );
      })}
    </div>
  );
}
