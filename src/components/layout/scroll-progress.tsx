"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline reading-progress indicator fixed to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[120] h-0.5 origin-left bg-gradient-to-r from-gold-soft via-gold to-clay"
    />
  );
}
