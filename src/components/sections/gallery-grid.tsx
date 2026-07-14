"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArtImage } from "@/components/shared/art-image";
import { getGallery } from "@/content/gallery";
import { getUi } from "@/content/ui";
import type { Locale } from "@/i18n/config";

const ASPECT: Record<string, string> = {
  tall: "aspect-[3/4]",
  regular: "aspect-square",
  wide: "aspect-[5/4]",
};


export function GalleryGrid({ locale }: { locale: Locale }) {
  const gallery = getGallery(locale);
  const ui = getUi(locale).gallery;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const count = gallery.length;

  const go = useCallback(
    (d: number) => setIndex((i) => (i + d + count) % count),
    [count],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const active = gallery[index];

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {gallery.map((item, i) => (
          <Reveal
            key={i}
            as="div"
            delay={(i % 4) * 0.06}
            duration={0.7}
            className="break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-espresso/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <div className={cn("relative w-full", ASPECT[item.size])}>
                <ArtImage
                  variant={item.variant}
                  motif={item.motif}
                  alt={item.alt}
                  zoom
                  rounded="rounded-none"
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.caption && (
                    <span className="font-display text-lg text-cream">
                      {item.caption}
                    </span>
                  )}
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent hideClose className="max-w-4xl">
          <DialogTitle className="sr-only">
            {active.caption ?? "Gallery image"}
          </DialogTitle>
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-lift">
            <div className="relative aspect-[3/2] w-full">
              <ArtImage
                key={index}
                variant={active.variant}
                motif={active.motif}
                alt={active.alt}
                rounded="rounded-none"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            {active.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
                <p className="font-display text-xl text-cream">
                  {active.caption}
                </p>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={ui.prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <span className="text-sm tabular-nums text-cream/70">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={ui.next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
