import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getMethodology, getDistinctions } from "@/content/approach";
import { getHome } from "@/content/home";
import type { Locale } from "@/i18n/config";

export function Approach({ locale }: { locale: Locale }) {
  const methodology = getMethodology(locale);
  const distinctions = getDistinctions(locale);
  const intro = getHome(locale).approachIntro;
  return (
    <section
      id="approach"
      className="relative bg-gradient-to-b from-cream/60 to-warmwhite py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Heading */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            lede={intro.body}
            titleClassName="text-display-md"
          />
        </div>

        {/* Timeline */}
        <Stagger className="pt-2">
          <ol>
            {methodology.map((step, i) => (
              <StaggerItem key={step.index} as="li">
                <div className="grid grid-cols-[auto_1fr] gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-warmwhite font-display text-lg text-gold shadow-soft">
                      {step.index}
                    </span>
                    {i < methodology.length - 1 && (
                      <span className="my-2 w-px flex-1 bg-gradient-to-b from-gold/40 to-espresso/10" />
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="font-display text-2xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-espresso/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </ol>
        </Stagger>
      </div>

      {/* Distinctions */}
      <div className="container-x mt-8">
        <Stagger className="grid gap-px overflow-hidden rounded-[2rem] bg-espresso/10 ring-1 ring-espresso/10 sm:grid-cols-2 lg:grid-cols-4">
          {distinctions.map((d) => (
            <StaggerItem
              key={d.title}
              className="flex flex-col gap-3 bg-warmwhite p-8 transition-colors duration-500 hover:bg-cream/50"
            >
              <span className="h-px w-8 bg-gold" />
              <h4 className="font-display text-xl text-ink">{d.title}</h4>
              <p className="text-sm leading-relaxed text-espresso/70">{d.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
