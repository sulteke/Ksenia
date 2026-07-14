import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArtImage } from "@/components/shared/art-image";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Journey } from "@/content/types";

const STATUS_CLASS: Record<Journey["status"], string> = {
  open: "bg-gold text-warmwhite",
  waitlist: "bg-olive text-warmwhite",
  soon: "bg-clay text-warmwhite",
};

export function JourneyCard({
  journey,
  locale,
}: {
  journey: Journey;
  locale: Locale;
}) {
  const ui = getUi(locale);
  return (
    <Link
      href={localizedPath(locale, `/journeys#${journey.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-warmwhite shadow-soft ring-1 ring-espresso/[0.07] transition-shadow duration-700 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ArtImage
          variant={journey.hero.variant}
          motif={journey.hero.motif}
          alt={journey.hero.alt}
          zoom
          rounded="rounded-none"
          className="absolute inset-0 h-full w-full"
        />
        <span
          className={cn(
            "absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-overline uppercase shadow-soft",
            STATUS_CLASS[journey.status],
          )}
        >
          {ui.journeyStatus[journey.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between text-overline uppercase text-clay/70">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {journey.country}
          </span>
          <span>{journey.season}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl text-ink">{journey.title}</h3>
        <p className="font-display text-lg italic text-gold">
          {journey.location}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso/70">
          {journey.summary}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-5">
          <div>
            <p className="text-sm text-espresso/80">{journey.dates}</p>
            <p className="text-xs text-clay">
              {journey.nights} {ui.journeyCard.nightsWord} · {journey.places}{" "}
              {ui.journeyCard.placesWord} · {ui.journeyCard.fromWord}{" "}
              {journey.priceFrom}
            </p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-espresso transition-all duration-500 ease-luxe group-hover:bg-gold group-hover:text-warmwhite">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
