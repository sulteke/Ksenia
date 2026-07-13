import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ArtImage } from "@/components/shared/art-image";
import { JourneyCard } from "@/components/shared/journey-card";
import { journeys } from "@/content/journeys";

export function JourneysTeaser() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      {/* Immersive band */}
      <Reveal y={30}>
        <div className="container-x">
          <div className="group relative isolate overflow-hidden rounded-[2.5rem] shadow-lift">
            <ArtImage
              variant="dusk"
              motif="horizon"
              alt="A woman looking out over a golden coastline at dusk — freedom, beauty, space."
              zoom
              rounded="rounded-none"
              className="absolute inset-0 h-full w-full"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(34,26,16,0.15) 0%, rgba(34,26,16,0.15) 40%, rgba(34,26,16,0.72) 100%)",
              }}
            />
            <div className="relative flex min-h-[26rem] flex-col justify-end p-8 sm:min-h-[34rem] sm:p-14">
              <div className="max-w-2xl">
                <span className="text-overline uppercase text-gold-soft">
                  The third direction · Women’s journeys
                </span>
                <h2 className="mt-5 text-balance font-display text-4xl leading-tight text-cream text-shadow-soft sm:text-5xl lg:text-6xl">
                  Not a retreat. Not a holiday.
                  <span className="italic text-gold-soft"> A homecoming.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
                  Author’s journeys for women — luxury, nature, slow living and
                  deep conversation, woven into a few beautiful days that quietly
                  change you.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" variant="soft">
                    <Link href="/journeys">
                      Discover the journeys
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Upcoming */}
      <div className="container-x mt-12">
        <div className="mb-8 flex items-end justify-between">
          <h3 className="font-display text-2xl text-ink sm:text-3xl">
            Upcoming journeys
          </h3>
          <Link
            href="/journeys"
            className="link-underline hidden text-sm font-medium text-espresso/80 hover:text-ink sm:inline-flex"
          >
            View all
          </Link>
        </div>
        <Stagger className="grid gap-8 md:grid-cols-2">
          {journeys.map((j) => (
            <StaggerItem key={j.slug}>
              <JourneyCard journey={j} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
