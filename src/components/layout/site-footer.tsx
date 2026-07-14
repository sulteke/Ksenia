import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import {
  site,
  getFooterNav,
  getContactChannels,
  getReachTitle,
  getSiteCopy,
} from "@/content/site";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const channels = getContactChannels(locale);
  const footerNav = getFooterNav(locale);
  const copy = getSiteCopy(locale);
  const ui = getUi(locale);

  return (
    <footer className="grain relative isolate overflow-hidden bg-ink text-cream/75">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(176,137,79,0.55), rgba(176,137,79,0) 70%)",
        }}
      />

      <div className="container-x relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo tone="cream" locale={locale} />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-cream/70">
              {copy.tagline}
            </p>
            <p className="mt-6 text-sm text-cream/50">{copy.location}</p>
            <LanguageSwitcher className="mt-6" tone="cream" />
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="text-overline uppercase text-gold-soft">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={localizedPath(locale, item.href)}
                      className="link-underline text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-overline uppercase text-gold-soft">
              {getReachTitle(locale)}
            </h4>
            <ul className="mt-5 space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-3"
                  >
                    <span>
                      <span className="block text-[0.95rem] text-cream transition-colors group-hover:text-gold-soft">
                        {c.handle}
                      </span>
                      <span className="block text-xs text-cream/45">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 translate-y-0.5 text-cream/40 transition-all duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:text-gold-soft" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mask-fade-b pointer-events-none mt-16 select-none">
          <p className="whitespace-nowrap text-center font-display text-[18vw] font-semibold leading-none text-cream/[0.05] lg:text-[15rem]">
            {site.name}
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/45">
            © {year} {site.name}. {ui.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-xs text-cream/45">
            <Link
              href={localizedPath(locale, "/#")}
              className="link-underline hover:text-cream/80"
            >
              {ui.footer.privacy}
            </Link>
            <Link
              href={localizedPath(locale, "/#")}
              className="link-underline hover:text-cream/80"
            >
              {ui.footer.terms}
            </Link>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 hover:text-cream/80"
            >
              {ui.footer.backToTop}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold-soft/60">
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
