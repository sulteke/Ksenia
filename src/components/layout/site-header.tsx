"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { getPrimaryNav, getContactChannels, getSiteCopy } from "@/content/site";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = getPrimaryNav(locale);
  const ui = getUi(locale);
  const channels = getContactChannels(locale);
  const location = getSiteCopy(locale).location;
  const base = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    const clean = href.split("#")[0];
    if (clean === "/" || clean === "") return pathname === base;
    const target = `${base}${clean}`;
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[110] transition-all duration-500 ease-luxe",
          scrolled
            ? "glass border-b border-espresso/[0.06] py-3 shadow-soft"
            : "border-b border-transparent py-5",
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo locale={locale} />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className={cn(
                  "link-underline text-sm font-medium tracking-tight text-espresso/80 transition-colors hover:text-ink",
                  isActive(item.href) && "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Magnetic className="hidden sm:inline-flex" strength={0.4}>
              <Button asChild size="sm" variant="primary">
                <Link href={localizedPath(locale, "/#contact")}>{ui.book}</Link>
              </Button>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-ink transition-colors hover:bg-espresso/[0.05] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="grain fixed inset-0 z-[130] flex flex-col bg-warmwhite lg:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="container-x flex items-center justify-between py-5">
              <Logo locale={locale} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container-x mt-6 flex flex-1 flex-col justify-center">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: EASE }}
                >
                  <Link
                    href={localizedPath(locale, item.href)}
                    className="block border-b border-espresso/10 py-5 font-display text-3xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="container-x pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            >
              <div className="mb-5 flex items-center justify-between">
                <Button asChild size="lg" variant="primary">
                  <Link href={localizedPath(locale, "/#contact")}>{ui.book}</Link>
                </Button>
                <LanguageSwitcher />
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-clay">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="link-underline"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs text-clay/70">{location}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
