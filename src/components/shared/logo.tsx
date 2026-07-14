import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { localizedPath, type Locale } from "@/i18n/config";

/** The Aurelia wordmark with a fine "rising sun" emblem. */
export function Logo({
  className,
  tone = "ink",
  withMark = true,
  locale,
}: {
  className?: string;
  tone?: "ink" | "cream";
  withMark?: boolean;
  locale: Locale;
}) {
  return (
    <Link
      href={localizedPath(locale, "/")}
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 leading-none",
        tone === "ink" ? "text-ink" : "text-cream",
        className,
      )}
    >
      {withMark && <SunMark className="h-6 w-6 shrink-0" />}
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-[1.35rem] font-semibold tracking-tight">
          {site.name}
        </span>
        <span
          className={cn(
            "text-overline font-medium uppercase",
            tone === "ink" ? "text-gold" : "text-gold-soft",
          )}
        >
          {site.wordmarkSuffix}
        </span>
      </span>
    </Link>
  );
}

export function SunMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="13" r="4.4" className="fill-gold" />
      <path
        d="M2 20.5h20"
        className="stroke-gold"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {[...Array(7)].map((_, i) => {
        const angle = (-90 + (i - 3) * 26) * (Math.PI / 180);
        const x1 = 12 + Math.cos(angle) * 6.4;
        const y1 = 13 + Math.sin(angle) * 6.4;
        const x2 = 12 + Math.cos(angle) * 8.6;
        const y2 = 13 + Math.sin(angle) * 8.6;
        return (
          <path
            key={i}
            d={`M${x1} ${y1}L${x2} ${y2}`}
            className="stroke-gold-soft transition-opacity duration-500 group-hover:opacity-100"
            strokeWidth="1.2"
            strokeLinecap="round"
            style={{ opacity: 0.55 }}
          />
        );
      })}
    </svg>
  );
}
