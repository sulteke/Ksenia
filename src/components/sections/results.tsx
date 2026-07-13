import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { ArtImage } from "@/components/shared/art-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { results } from "@/content/approach";

export function Results() {
  return (
    <section id="results" className="container-x py-24 sm:py-32 lg:py-40">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal y={40}>
          <div className="group relative aspect-[5/6] w-full max-w-lg overflow-hidden rounded-[2.25rem] shadow-lift ring-1 ring-espresso/[0.06]">
            <Parallax speed={0.07} className="h-full w-full">
              <ArtImage
                variant="linen"
                motif="sun"
                alt="A woman resting in soft daylight, at ease in her own body."
                zoom
                className="h-full w-full"
              />
            </Parallax>
            <div className="absolute inset-x-6 bottom-6">
              <div className="glass rounded-2xl px-6 py-5 shadow-soft">
                <p className="font-display text-xl italic leading-snug text-ink">
                  “The exhale you didn’t know you were holding.”
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy + states */}
        <div>
          <SectionHeading
            eyebrow={results.eyebrow}
            title={results.title}
            lede={results.lede}
            titleClassName="text-display-md"
          />
          <Stagger className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4">
            {results.states.map((state) => (
              <StaggerItem
                key={state}
                className="flex items-center gap-3 border-b border-espresso/10 pb-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-display text-lg text-ink">{state}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
