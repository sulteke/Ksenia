import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ArtImage } from "@/components/shared/art-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { getServicesByOrder } from "@/content/services";
import { getHome } from "@/content/home";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";

export function Services({ locale }: { locale: Locale }) {
  const [featured, ...rest] = getServicesByOrder(locale);
  const intro = getHome(locale).servicesIntro;
  const ui = getUi(locale);

  return (
    <section id="services" className="container-x py-24 sm:py-32 lg:py-40">
      <SectionHeading
        eyebrow={intro.eyebrow}
        title={intro.title}
        lede={intro.body}
        align="center"
      />

      {/* Featured — Energy Therapy */}
      <Reveal delay={0.1} y={40} className="mt-16">
        <article className="group relative grid overflow-hidden rounded-[2.5rem] bg-warmwhite shadow-soft ring-1 ring-espresso/[0.07] transition-shadow duration-700 hover:shadow-lift lg:grid-cols-2">
          <div className="relative min-h-[20rem] lg:min-h-[32rem]">
            <ArtImage
              variant={featured.cardMedia.variant}
              motif={featured.cardMedia.motif}
              alt={featured.cardMedia.alt}
              zoom
              rounded="rounded-none"
              className="absolute inset-0 h-full w-full"
            />
            <span className="absolute left-6 top-6 rounded-full bg-warmwhite/90 px-4 py-1.5 text-overline uppercase text-gold shadow-soft backdrop-blur">
              {ui.services.heart}
            </span>
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-14">
            <span className="text-overline uppercase text-clay/70">
              01 · {featured.format}
            </span>
            <h3 className="text-display-md text-ink">{featured.name}</h3>
            <p className="font-display text-xl italic text-gold">
              {featured.tagline}
            </p>
            <p className="max-w-md text-espresso/70">{featured.summary}</p>
            <div className="mt-2">
              <Button asChild size="lg">
                <Link href={localizedPath(locale, `/${featured.slug}`)}>
                  {ui.services.explorePrefix}
                  {featured.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </Reveal>

      {/* The other two directions */}
      <Stagger className="mt-8 grid gap-8 md:grid-cols-2">
        {rest.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={localizedPath(locale, `/${service.slug}`)}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-warmwhite shadow-soft ring-1 ring-espresso/[0.07] transition-shadow duration-700 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ArtImage
                  variant={service.cardMedia.variant}
                  motif={service.cardMedia.motif}
                  alt={service.cardMedia.alt}
                  zoom
                  rounded="rounded-none"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 sm:p-8">
                <span className="text-overline uppercase text-clay/70">
                  {String(service.order).padStart(2, "0")} · {service.format}
                </span>
                <h3 className="font-display text-2xl text-ink">
                  {service.name}
                </h3>
                <p className="font-display text-lg italic text-gold">
                  {service.tagline}
                </p>
                <p className="flex-1 text-sm leading-relaxed text-espresso/70">
                  {service.summary}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  {ui.explore}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
