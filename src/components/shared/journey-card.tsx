import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArtImage } from "@/components/shared/art-image";
import type { Journey } from "@/content/types";

const STATUS: Record<Journey["status"], { label: string; className: string }> = {
  open: { label: "Places open", className: "bg-gold text-warmwhite" },
  waitlist: { label: "Waitlist", className: "bg-olive text-warmwhite" },
  soon: { label: "Coming soon", className: "bg-clay text-warmwhite" },
};

export function JourneyCard({ journey }: { journey: Journey }) {
  const status = STATUS[journey.status];
  return (
    <Link
      href={`/journeys#${journey.slug}`}
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
            status.className,
          )}
        >
          {status.label}
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
              {journey.nights} nights · {journey.places} places · from{" "}
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
