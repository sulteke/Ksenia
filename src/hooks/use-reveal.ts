"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reliable in-view trigger for entrance animations.
 *
 * Deliberately avoids depending solely on IntersectionObserver's initial
 * callback or requestAnimationFrame — both can be throttled or skipped for
 * on-screen elements in some embedded/preview browser contexts, which would
 * leave content stuck at its hidden `initial` state. Instead it combines a
 * bounding-box check on mount with passive scroll/resize listeners (which fire
 * reliably everywhere) and detaches itself once revealed.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  { amount = 0.12, once = true }: { amount?: number; once?: boolean } = {},
) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const timers: number[] = [];

    const isVisible = () => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const reveal = Math.max(0, vh * amount);
      // Any part of the element within the viewport (with a small reveal margin).
      return r.top < vh - reveal && r.bottom > reveal;
    };

    const detach = () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      document.removeEventListener("visibilitychange", onScrollOrResize);
      timers.forEach((t) => clearTimeout(t));
    };

    const check = () => {
      if (done) return;
      if (isVisible()) {
        done = true;
        setShown(true);
        if (once) detach();
      }
    };

    const onScrollOrResize = () => check();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // Re-check when a backgrounded tab becomes visible (animations resume then).
    document.addEventListener("visibilitychange", onScrollOrResize);
    // Initial checks — staggered so layout has settled, regardless of rAF/IO.
    timers.push(window.setTimeout(check, 50));
    timers.push(window.setTimeout(check, 250));
    if (typeof requestAnimationFrame !== "undefined") requestAnimationFrame(check);
    check();

    return detach;
  }, [amount, once]);

  return { ref, shown };
}
