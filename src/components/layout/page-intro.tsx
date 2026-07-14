"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SunMark } from "@/components/shared/logo";
import { site } from "@/content/site";
import { getUi } from "@/content/ui";
import type { Locale } from "@/i18n/config";

const EASE = [0.22, 1, 0.36, 1] as const;

/** One-time cinematic loader. Renders on first paint, then lifts away. */
export function PageIntro({ locale }: { locale: Locale }) {
  const [show, setShow] = useState(true);
  const tagline = getUi(locale).intro.tagline;

  useEffect(() => {
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("aurelia-intro");
    if (seen) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      window.sessionStorage.setItem("aurelia-intro", "1");
      setShow(false);
    }, 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          className="grain fixed inset-0 z-[200] flex flex-col items-center justify-center bg-warmwhite"
          initial={{ opacity: 1 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <SunMark className="h-12 w-12" />
          </motion.div>

          <div className="mt-6 overflow-hidden">
            <motion.p
              className="font-display text-3xl font-semibold tracking-tight text-ink"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            >
              {site.name}
            </motion.p>
          </div>

          <motion.div
            className="mt-5 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
          />

          <motion.p
            className="mt-5 text-overline uppercase text-clay/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
