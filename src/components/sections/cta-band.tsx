import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SunMark } from "@/components/shared/logo";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { localizedPath, type Locale } from "@/i18n/config";

interface CtaLink {
  label: string;
  href: string;
}

/** Reusable closing call-to-action band, used on the home and detail pages. */
export function CtaBand({
  locale,
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  body?: string;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal y={30}>
        <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-espresso px-7 py-16 text-center text-cream shadow-lift sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(198,166,114,0.7), rgba(198,166,114,0) 70%)",
            }}
          />
          <div className="relative flex flex-col items-center">
            <SunMark className="h-9 w-9" />
            {eyebrow && (
              <span className="mt-6 text-overline uppercase text-gold-soft">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl leading-tight text-cream sm:text-5xl">
              {title}
            </h2>
            {body && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
                {body}
              </p>
            )}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={0.4}>
                <Button asChild size="lg" variant="gold">
                  <Link href={localizedPath(locale, primary.href)}>
                    {primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              {secondary && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/[0.06]"
                >
                  <Link href={localizedPath(locale, secondary.href)}>
                    {secondary.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
