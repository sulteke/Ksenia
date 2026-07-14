import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { getHome } from "@/content/home";
import type { Locale } from "@/i18n/config";

export function Gallery({ locale }: { locale: Locale }) {
  const intro = getHome(locale).galleryIntro;
  return (
    <section id="gallery" className="container-x py-24 sm:py-32 lg:py-40">
      <SectionHeading
        eyebrow={intro.eyebrow}
        title={intro.title}
        lede={intro.body}
        align="center"
        className="mb-14"
      />
      <GalleryGrid locale={locale} />
    </section>
  );
}
