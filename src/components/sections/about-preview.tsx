import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { ArtImage } from "@/components/shared/art-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { getAbout } from "@/content/about";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";

export function AboutPreview({ locale }: { locale: Locale }) {
  const about = getAbout(locale);
  const ui = getUi(locale);
  return (
    <section id="about" className="container-x py-24 sm:py-32 lg:py-40">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Portrait */}
        <Reveal y={40} className="order-2 lg:order-1">
          <div className="group relative">
            <div className="relative aspect-[4/5] w-full max-w-md">
              <Parallax speed={0.06} className="h-full w-full">
                <ArtImage
                  variant="sand"
                  alt={about.portrait.alt}
                  zoom
                  rounded="rounded-[2.25rem]"
                  className="h-full w-full shadow-lift ring-1 ring-espresso/[0.06]"
                />
              </Parallax>
              {/* Signature chip */}
              <div className="absolute -right-4 bottom-8 hidden sm:block">
                <div className="glass rounded-2xl px-5 py-4 shadow-soft">
                  <p className="font-display text-xl italic text-ink">
                    {about.signature}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            titleClassName="text-display-md"
          />
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-espresso/75">
            {about.story.slice(0, 2).map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-9">
              <Button asChild variant="outline" size="md">
                <Link href={localizedPath(locale, "/about")}>
                  {ui.readStory}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
