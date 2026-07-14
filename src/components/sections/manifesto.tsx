import { SunMark } from "@/components/shared/logo";
import { Reveal } from "@/components/motion/reveal";
import { getHome } from "@/content/home";
import type { Locale } from "@/i18n/config";

/** A deep, still section — the philosophical heart of the site. */
export function Manifesto({ locale }: { locale: Locale }) {
  const manifesto = getHome(locale).manifesto;
  return (
    <section className="grain relative isolate overflow-hidden bg-espresso py-28 text-cream sm:py-36 lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(198,166,114,0.6), rgba(198,166,114,0) 70%)",
        }}
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal>
          <SunMark className="h-10 w-10" />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="mt-8 block text-overline uppercase text-gold-soft">
            {manifesto.eyebrow}
          </span>
        </Reveal>

        <p className="mt-9 max-w-4xl text-balance font-display text-3xl leading-[1.35] text-cream sm:text-4xl lg:text-5xl lg:leading-[1.3]">
          {manifesto.lines.map((line, i) => (
            <Reveal key={i} as="span" delay={i * 0.12} className="block">
              <span
                className={
                  i === manifesto.lines.length - 1
                    ? "italic text-gold-soft"
                    : undefined
                }
              >
                {line}
              </span>
            </Reveal>
          ))}
        </p>
      </div>
    </section>
  );
}
