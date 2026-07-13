import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Sparkles, Moon, Sun, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { Magnetic } from "@/components/motion/magnetic";
import { WordReveal } from "@/components/motion/text-reveal";
import { ArtImage } from "@/components/shared/art-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { journeys } from "@/content/journeys";
import { getService } from "@/content/services";
import { buildMetadata, faqSchema } from "@/lib/seo";
import type { Journey } from "@/content/types";

const journeysService = getService("journeys");

export const metadata = buildMetadata({
  title: "Women’s Transformational Journeys",
  description:
    "Author’s luxury journeys for women — travel, nature, slow living and quiet transformation. Not a retreat, not tourism. A homecoming.",
  path: "/journeys",
});

const WEAVE = [
  "Luxury travel",
  "Untouched nature",
  "Beautiful hotels",
  "Real pleasure",
  "Slow living",
  "Meaningful conversation",
  "Self-discovery",
  "Inner transformation",
  "Unforgettable beauty",
];

const DAY_ICONS = [Sunrise, Sun, Moon];

export default function JourneysPage() {
  return (
    <>
      {/* IMMERSIVE HERO */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
        <ArtImage
          variant="dusk"
          motif="horizon"
          alt="A woman looking out over a golden coastline at dusk — freedom and beauty."
          priority
          rounded="rounded-none"
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,26,16,0.35) 0%, rgba(34,26,16,0.1) 35%, rgba(34,26,16,0.78) 100%)",
          }}
        />
        <div className="container-x relative pb-20 pt-40">
          <Reveal>
            <span className="text-overline uppercase text-gold-soft">
              Author’s journeys for women
            </span>
          </Reveal>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.05] text-cream text-shadow-soft sm:text-6xl lg:text-7xl">
            <WordReveal text="Travel that returns you" delay={0.1} />{" "}
            <span className="italic text-gold-soft">
              <WordReveal text="to yourself." delay={0.5} />
            </span>
          </h1>
          <Reveal delay={0.7}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/85">
              Not a retreat. Not ordinary tourism. Intimate journeys where
              luxury, nature and deep conversation quietly change you — and you
              come home with more than photographs.
            </p>
          </Reveal>
          <Reveal delay={0.85}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.4}>
                <Button asChild size="lg" variant="soft">
                  <Link href="#upcoming">
                    View upcoming journeys
                    <ArrowDown className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream/30 text-cream hover:border-cream/70 hover:bg-cream/[0.06]"
              >
                <Link href="/#contact">Request an invitation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT THESE ARE */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          eyebrow="A different kind of journey"
          title="Everything you love about travel — with a soul underneath."
          lede="These journeys weave together beauty and depth in a way most trips never dare to. Luxury that means something. Rest that changes you."
          align="center"
        />
        <Stagger className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {WEAVE.map((w) => (
            <StaggerItem key={w}>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-5 py-2.5 font-display text-lg text-ink ring-1 ring-espresso/[0.06]">
                <Sparkles className="h-4 w-4 text-gold" />
                {w}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* UPCOMING JOURNEYS */}
      <div id="upcoming" className="scroll-mt-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Upcoming journeys"
            title="Where we’re going next."
          />
        </div>
        {journeys.map((journey, i) => (
          <JourneyFeature key={journey.slug} journey={journey} flip={i % 2 === 1} />
        ))}
      </div>

      {/* FAQ */}
      {journeysService && (
        <>
          <FaqSection
            faqs={journeysService.faqs}
            eyebrow="Before you come"
            title="Questions about the journeys."
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema(journeysService.faqs)),
            }}
          />
        </>
      )}

      <CtaBand
        eyebrow="Places are few"
        title="Reserve your place."
        body="Each journey is intentionally intimate. Tell me you’re interested and I’ll share the next one with you personally — no obligation, just an open door."
        primary={{ label: "Request an invitation", href: "/#contact" }}
        secondary={{ label: "See all the work", href: "/#services" }}
      />
    </>
  );
}

function JourneyFeature({ journey, flip }: { journey: Journey; flip: boolean }) {
  return (
    <section
      id={journey.slug}
      className="scroll-mt-24 border-t border-espresso/10 py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal y={40} className={flip ? "lg:order-2" : ""}>
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2.25rem] shadow-lift ring-1 ring-espresso/[0.06]">
              <Parallax speed={0.06} className="h-full w-full">
                <ArtImage
                  variant={journey.hero.variant}
                  motif={journey.hero.motif}
                  alt={journey.hero.alt}
                  zoom
                  className="h-full w-full"
                />
              </Parallax>
              <div className="absolute left-5 top-5 rounded-full bg-warmwhite/90 px-4 py-1.5 text-overline uppercase text-gold shadow-soft backdrop-blur">
                {journey.status === "open"
                  ? "Places open"
                  : journey.status === "waitlist"
                    ? "Waitlist"
                    : "Coming soon"}
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <div className={flip ? "lg:order-1" : ""}>
            <span className="text-overline uppercase text-clay/70">
              {journey.country} · {journey.season}
            </span>
            <h3 className="mt-3 font-display text-display-md text-ink">
              {journey.title}
            </h3>
            <p className="font-display text-xl italic text-gold">
              {journey.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { k: "When", v: journey.dates },
                { k: "Length", v: `${journey.nights} nights` },
                { k: "Places", v: `${journey.places} women` },
                { k: "From", v: journey.priceFrom },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-overline uppercase text-clay/60">{s.k}</p>
                  <p className="mt-1 font-display text-lg text-ink">{s.v}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-espresso/75">
              {journey.summary}
            </p>

            <ul className="mt-6 space-y-2.5">
              {journey.highlights.slice(0, 4).map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-espresso/80">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/#contact">
                  Reserve your place
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Daily program + included */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h4 className="font-display text-2xl text-ink">A day, unhurried</h4>
            <div className="mt-6 space-y-5">
              {journey.day.map((step, i) => {
                const Icon = DAY_ICONS[i % DAY_ICONS.length];
                return (
                  <div key={step.index} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream text-gold ring-1 ring-espresso/[0.06]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-overline uppercase text-clay/60">
                        {step.index}
                      </p>
                      <p className="font-display text-lg text-ink">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-espresso/70">
                        {step.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-cream/50 p-8 ring-1 ring-espresso/[0.06]">
            <h4 className="font-display text-2xl text-ink">What’s included</h4>
            <ul className="mt-5 space-y-3">
              {journey.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-espresso/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mini gallery */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {journey.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft ring-1 ring-espresso/[0.06]">
                <ArtImage
                  variant={g.variant}
                  motif={g.motif}
                  alt={g.alt}
                  className="h-full w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
