"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/content/testimonials";

const EASE = [0.22, 1, 0.36, 1] as const;

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 64 : -64, opacity: 0, filter: "blur(8px)" }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: number) => ({ x: dir > 0 ? -64 : 64, opacity: 0, filter: "blur(8px)" }),
};

export function Testimonials() {
  const count = testimonials.length;
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (d: number) => setState(([i]) => [(i + d + count) % count, d]),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6800);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-warmwhite via-cream/50 to-warmwhite py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Kind words"
          title="Held with trust, remembered with warmth."
          align="center"
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote
            aria-hidden
            className="mx-auto mb-6 h-12 w-12 text-gold/40"
            strokeWidth={1.25}
          />

          <div className="relative min-h-[19rem] sm:min-h-[16rem]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.blockquote
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex items-center gap-1.5">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-balance font-display text-2xl leading-snug text-ink sm:text-3xl sm:leading-[1.32]">
                  {t.quote}
                </p>
                <footer className="mt-8">
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="mt-1 text-sm text-clay">
                    {t.detail} · <span className="text-gold">{t.service}</span>
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-luxe",
                    i === index
                      ? "w-8 bg-gold"
                      : "w-2 bg-espresso/20 hover:bg-espresso/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
