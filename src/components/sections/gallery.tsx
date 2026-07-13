import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { home } from "@/content/home";

export function Gallery() {
  return (
    <section id="gallery" className="container-x py-24 sm:py-32 lg:py-40">
      <SectionHeading
        eyebrow={home.galleryIntro.eyebrow}
        title={home.galleryIntro.title}
        lede={home.galleryIntro.body}
        align="center"
        className="mb-14"
      />
      <GalleryGrid />
    </section>
  );
}
