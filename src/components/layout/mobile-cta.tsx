"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { getUi } from "@/content/ui";
import { whatsappLink } from "@/lib/utils";
import { localizedPath, type Locale } from "@/i18n/config";

/** Native-feeling sticky action bar for mobile, revealed after the hero. */
export function MobileCta({ locale }: { locale: Locale }) {
  const [show, setShow] = useState(false);
  const ui = getUi(locale);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-[115] px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))] pt-2 lg:hidden"
          initial={{ y: 130, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 130, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass flex items-center gap-2 rounded-full p-2 shadow-lift">
            <a
              href={whatsappLink(site.contact.whatsapp, ui.mobile.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-espresso transition-colors hover:bg-linen"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <Button asChild size="md" className="h-12 flex-1">
              <Link href={localizedPath(locale, "/#contact")}>{ui.book}</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
