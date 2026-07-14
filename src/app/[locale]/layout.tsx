import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import {
  locales,
  isLocale,
  localeHtmlLang,
  type Locale,
} from "@/i18n/config";
import { site } from "@/content/site";
import { buildMetadata, structuredData } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageIntro } from "@/components/layout/page-intro";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { MobileCta } from "@/components/layout/mobile-cta";

const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(site.url),
    ...buildMetadata({ locale }),
    manifest: "/manifest.webmanifest",
    appleWebApp: { capable: true, statusBarStyle: "default", title: site.name },
  };
}

export const viewport: Viewport = {
  themeColor: "#FBF8F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;

  return (
    <html
      lang={localeHtmlLang[typed]}
      className={`${display.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-warmwhite antialiased">
        <div id="top" />
        <PageIntro locale={typed} />
        <ScrollProgress />
        <SiteHeader locale={typed} />
        <main>{children}</main>
        <SiteFooter locale={typed} />
        <MobileCta locale={typed} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData(typed)),
          }}
        />
      </body>
    </html>
  );
}
