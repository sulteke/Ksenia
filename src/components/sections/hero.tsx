import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { WordReveal } from "@/components/motion/text-reveal";
import { Parallax } from "@/components/motion/parallax";
import { Magnetic } from "@/components/motion/magnetic";
import { ArtImage } from "@/components/shared/art-image";
import { getHome } from "@/content/home";
import { getStats } from "@/content/approach";
import { localizedPath, type Locale } from "@/i18n/config";

export function Hero({ locale }: { locale: Locale }) {
  const hero = getHome(locale).hero;
  const stats = getStats(locale);

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
      {/* Ambient warm wash. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 85% -10%, rgba(230,199,152,0.5), rgba(230,199,152,0) 55%), radial-gradient(90% 70% at 0% 100%, rgba(108,109,74,0.14), rgba(108,109,74,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 animate-float-slow rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(198,166,114,0.5), rgba(198,166,114,0) 70%)",
        }}
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">{hero.eyebrow}</span>
          </Reveal>

          <h1 className="mt-6 text-display-2xl text-ink">
            <span className="block">
              <WordReveal text={hero.titleLines[0]} delay={0.05} />
            </span>
            <span className="block italic text-gold">
              <WordReveal text={hero.titleLines[1]} delay={0.28} />
            </span>
          </h1>

          <Reveal delay={0.5}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-espresso/75">
              {hero.lede}
            </p>
          </Reveal>

          <Reveal delay={0.62}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.4}>
                <Button asChild size="lg" variant="primary">
                  <Link href={localizedPath(locale, hero.primaryCta.href)}>
                    {hero.primaryCta.label}
                  </Link>
                </Button>
              </Magnetic>
              <Button asChild size="lg" variant="outline">
                <Link href={localizedPath(locale, hero.secondaryCta.href)}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.75}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-2xl text-ink">
                    {s.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-clay/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.2} y={40} className="relative">
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <Parallax speed={0.08} className="h-full w-full">
              <ArtImage
                variant="dawn"
                motif="sun"
                alt="Soft morning light falling across linen — a feeling of calm and homecoming."
                priority
                zoom
                rounded="rounded-[2.5rem]"
                className="h-full w-full shadow-lift ring-1 ring-espresso/[0.06]"
              />
            </Parallax>

            {/* Floating glass card */}
            <div className="animate-float absolute -bottom-6 -left-4 sm:-left-8">
              <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4 shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base leading-tight text-ink">
                    Now booking
                  </p>
                  <p className="text-xs text-clay">Online & in person · 1:1</p>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-gold/40 sm:-right-5 sm:-top-5" />
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <Reveal delay={1} className="mt-16 flex justify-center lg:mt-20">
        <div className="flex flex-col items-center gap-3 text-clay/70">
          <span className="text-overline uppercase">{hero.scrollHint}</span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-clay/30 p-1">
            <ArrowDown className="h-3.5 w-3.5 animate-float" />
          </span>
        </div>
      </Reveal>
    </section>
  );
}
