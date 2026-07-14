import Link from "next/link";
import { ArrowRight, Check, Video, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { Magnetic } from "@/components/motion/magnetic";
import { WordReveal } from "@/components/motion/text-reveal";
import { ArtImage } from "@/components/shared/art-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { getTestimonials } from "@/content/testimonials";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Service } from "@/content/types";

export function ServiceDetail({
  service,
  locale,
}: {
  service: Service;
  locale: Locale;
}) {
  const ui = getUi(locale).serviceDetail;
  const quotes = getTestimonials(locale)
    .filter((t) => t.service === service.name)
    .slice(0, 2);

  const meet = [
    { icon: Video, title: ui.meetOnlineTitle, body: ui.meetOnlineBody },
    { icon: MapPin, title: ui.meetInPersonTitle, body: ui.meetInPersonBody },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(110% 70% at 88% -10%, rgba(230,199,152,0.45), rgba(230,199,152,0) 55%)",
          }}
        />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <nav className="mb-7 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-clay/70">
                <Link href={localizedPath(locale, "/")} className="hover:text-gold">
                  {ui.home}
                </Link>
                <span>/</span>
                <Link
                  href={localizedPath(locale, "/#services")}
                  className="hover:text-gold"
                >
                  {ui.work}
                </Link>
                <span>/</span>
                <span className="text-espresso">{service.name}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="eyebrow">{service.format}</span>
            </Reveal>
            <h1 className="mt-6 text-display-xl text-ink">
              <WordReveal text={service.promise} delay={0.1} />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-espresso/75">
                {service.summary}
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.4}>
                  <Button asChild size="lg">
                    <Link href={localizedPath(locale, "/#contact")}>
                      {service.cta.action}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Magnetic>
                <Button asChild size="lg" variant="outline">
                  <Link href="#process">{ui.seeHow}</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={40}>
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <Parallax speed={0.07} className="h-full w-full">
                <ArtImage
                  variant={service.hero.variant}
                  motif={service.hero.motif}
                  alt={service.hero.alt}
                  priority
                  zoom
                  rounded="rounded-[2.5rem]"
                  className="h-full w-full shadow-lift ring-1 ring-espresso/[0.06]"
                />
              </Parallax>
              <div className="animate-float absolute -bottom-6 -left-4 sm:-left-8">
                <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <p className="max-w-[10rem] font-display text-base italic leading-tight text-ink">
                    {service.promise}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE MEET */}
      <section className="container-x py-16 lg:py-20">
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {meet.map((item) => (
            <StaggerItem
              key={item.title}
              className="flex flex-col gap-4 rounded-[1.75rem] bg-cream/50 p-8 ring-1 ring-espresso/[0.06]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warmwhite text-gold shadow-soft">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="text-espresso/70">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FOR WHOM */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal y={40}>
            <div className="relative aspect-[5/6] w-full max-w-md overflow-hidden rounded-[2.25rem] shadow-lift ring-1 ring-espresso/[0.06]">
              <ArtImage
                variant={service.cardMedia.variant}
                motif={service.cardMedia.motif}
                alt={service.cardMedia.alt}
                className="h-full w-full"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={ui.isThisForYou}
              title={service.forWhom.title}
              titleClassName="text-display-md"
            />
            <Stagger className="mt-8 space-y-4">
              {service.forWhom.items.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex items-start gap-4 border-b border-espresso/10 pb-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-lg text-espresso/80">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow={ui.whatShiftsEyebrow}
          title={ui.whatShiftsTitle}
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {service.benefits.map((b, i) => (
            <StaggerItem
              key={b.title}
              className="group rounded-[1.75rem] bg-warmwhite p-8 shadow-soft ring-1 ring-espresso/[0.06] transition-shadow duration-500 hover:shadow-lift"
            >
              <span className="font-display text-3xl text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-espresso/70">{b.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="scroll-mt-24 bg-gradient-to-b from-cream/60 to-warmwhite py-24 sm:py-32"
      >
        <div className="container-x">
          <SectionHeading
            eyebrow={ui.experienceEyebrow}
            title={ui.experienceTitle}
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <StaggerItem
                key={step.index}
                className="relative rounded-[1.75rem] bg-warmwhite p-7 shadow-soft ring-1 ring-espresso/[0.06]"
              >
                <span className="font-display text-5xl text-gold/25">
                  {step.index}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/70">
                  {step.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow={ui.afterwardsEyebrow}
          title={ui.afterwardsTitle}
          align="center"
        />
        <Stagger className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {service.results.map((r) => (
            <StaggerItem key={r}>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-5 py-2.5 font-display text-lg text-ink ring-1 ring-espresso/[0.06]">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {r}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TESTIMONIALS */}
      {quotes.length > 0 && (
        <section className="container-x py-16 sm:py-24">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {quotes.map((q) => (
              <StaggerItem
                key={q.name}
                className="flex flex-col rounded-[2rem] bg-espresso p-8 text-cream shadow-soft sm:p-10"
              >
                <p className="flex-1 text-balance font-display text-xl italic leading-snug text-cream/95 sm:text-2xl">
                  “{q.quote}”
                </p>
                <footer className="mt-6 text-sm">
                  <span className="font-display text-lg not-italic text-gold-soft">
                    {q.name}
                  </span>
                  <span className="mt-1 block text-cream/55">{q.detail}</span>
                </footer>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* FAQ */}
      <FaqSection
        locale={locale}
        faqs={service.faqs}
        eyebrow={ui.goodToKnow}
        title={ui.faqTitle}
        id="faq"
      />

      {/* CTA */}
      <CtaBand
        locale={locale}
        eyebrow={ui.readyWhenYouAre}
        title={service.cta.title}
        body={service.cta.body}
        primary={{ label: service.cta.action, href: "/#contact" }}
        secondary={{ label: ui.exploreOtherWork, href: "/#services" }}
      />
    </>
  );
}
