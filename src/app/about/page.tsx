import { buildMetadata } from "@/lib/seo";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { WordReveal } from "@/components/motion/text-reveal";
import { ArtImage } from "@/components/shared/art-image";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = buildMetadata({
  title: `About ${site.founder}`,
  description: about.mission.body,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(100% 60% at 15% -10%, rgba(230,199,152,0.4), rgba(230,199,152,0) 55%)",
          }}
        />
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
            </Reveal>
            <h1 className="mt-6 text-display-xl text-ink">
              <WordReveal text={about.title} delay={0.1} />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-espresso/75">
                {about.story[0]}
              </p>
            </Reveal>
            <Reveal delay={0.55}>
              <p className="mt-8 font-display text-2xl italic text-gold">
                {about.signature}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={40}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <Parallax speed={0.06} className="h-full w-full">
                <ArtImage
                  variant="sand"
                  alt={about.portrait.alt}
                  priority
                  rounded="rounded-[2.5rem]"
                  className="h-full w-full shadow-lift ring-1 ring-espresso/[0.06]"
                />
              </Parallax>
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="container-x py-20 sm:py-28">
        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-espresso/80">
          {about.story.slice(1).map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote className="mx-auto mt-14 max-w-3xl text-balance text-center font-display text-3xl leading-snug text-ink sm:text-4xl">
            “Calm is not something I give you. It’s something I help you
            <span className="italic text-gold"> remember.</span>”
          </blockquote>
        </Reveal>
      </section>

      {/* MISSION */}
      <section className="grain relative isolate overflow-hidden bg-espresso py-24 text-cream sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(198,166,114,0.6), rgba(198,166,114,0) 70%)",
          }}
        />
        <div className="container-x relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-overline uppercase text-gold-soft">
              {about.mission.title}
            </span>
          </Reveal>
          <p className="mt-7 text-balance font-display text-3xl leading-snug text-cream sm:text-4xl sm:leading-[1.3]">
            <WordReveal text={about.mission.body} />
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          eyebrow="What I hold to"
          title="The values beneath the work."
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {about.values.map((v, i) => (
            <StaggerItem
              key={v.title}
              className="rounded-[1.75rem] bg-warmwhite p-8 shadow-soft ring-1 ring-espresso/[0.06]"
            >
              <span className="font-display text-3xl text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-espresso/70">{v.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <StatsBand />

      <CtaBand
        eyebrow="Let’s begin"
        title="Come home to yourself."
        body="Wherever you are right now is the perfect place to start. Reach out, and we’ll take the first gentle step together."
        primary={{ label: "Book a session", href: "/#contact" }}
        secondary={{ label: "Explore the work", href: "/#services" }}
      />
    </>
  );
}
