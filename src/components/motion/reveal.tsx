"use client";

import { Children, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "span" | "li" | "section" | "figure";

function pick(as: Tag) {
  switch (as) {
    case "span":
      return motion.span;
    case "li":
      return motion.li;
    case "section":
      return motion.section;
    case "figure":
      return motion.figure;
    default:
      return motion.div;
  }
}

/** Fade + rise + blur-in as the element enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  blur = true,
  once = true,
  duration = 0.9,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  duration?: number;
  as?: Tag;
}) {
  const M = pick(as) as typeof motion.div;
  const { ref, shown } = useReveal<HTMLDivElement>({ once });
  const hidden = { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" };

  return (
    <M
      ref={ref}
      className={className}
      initial={hidden}
      animate={shown ? { opacity: 1, y: 0, filter: "blur(0px)" } : hidden}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

const StaggerCtx = createContext<{ shown: boolean; index: number }>({
  shown: false,
  index: 0,
});

/** Wrap items whose entrance should cascade. */
export function Stagger({
  children,
  className,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>({ once, amount });
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => (
        <StaggerCtx.Provider key={index} value={{ shown, index }}>
          {child}
        </StaggerCtx.Provider>
      ))}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}) {
  const M = pick(as);
  const { shown, index } = useContext(StaggerCtx);
  const hidden = { opacity: 0, y: 24, filter: "blur(8px)" };

  return (
    <M
      className={cn(className)}
      initial={hidden}
      animate={
        shown
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: EASE, delay: 0.05 + index * 0.09 },
            }
          : hidden
      }
    >
      {children}
    </M>
  );
}
