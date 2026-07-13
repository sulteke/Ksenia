"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reveals a heading word-by-word, each rising from behind a mask.
 *
 * The in-view trigger (`useReveal`) sits on the UNCLIPPED outer span; each word
 * then carries its own direct `animate` in pixels, because the words start
 * fully outside their own `overflow:hidden` masks and can't host the observer
 * themselves. Pixel (not %) offsets keep framer's interpolation reliable.
 */
export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  once = true,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>({ once, amount: 0.2 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 ? " " : null}
          <span
            aria-hidden
            className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em] align-bottom"
          >
            <motion.span
              className={cn("inline-block", wordClassName)}
              initial={{ y: 130 }}
              animate={shown ? { y: 0 } : { y: 130 }}
              transition={{ duration: 0.9, ease: EASE, delay: delay + i * stagger }}
            >
              {word}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </span>
  );
}
