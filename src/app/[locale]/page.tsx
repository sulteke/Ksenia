import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { AboutPreview } from "@/components/sections/about-preview";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { Approach } from "@/components/sections/approach";
import { StatsBand } from "@/components/sections/stats-band";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { JourneysTeaser } from "@/components/sections/journeys-teaser";
import { Gallery } from "@/components/sections/gallery";
import { FaqSection } from "@/components/sections/faq-section";
import { Contact } from "@/components/sections/contact";
import { CtaBand } from "@/components/sections/cta-band";
import { getGeneralFaqs } from "@/content/faq";
import { getHome } from "@/content/home";
import { getUi } from "@/content/ui";
import { faqSchema, buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: "" });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const faqs = getGeneralFaqs(locale);
  const home = getHome(locale);
  const ui = getUi(locale);

  return (
    <>
      <Hero locale={locale} />
      <MarqueeStrip locale={locale} />
      <AboutPreview locale={locale} />
      <Manifesto locale={locale} />
      <Services locale={locale} />
      <Approach locale={locale} />
      <StatsBand locale={locale} />
      <Results locale={locale} />
      <Testimonials locale={locale} />
      <JourneysTeaser locale={locale} />
      <Gallery locale={locale} />
      <FaqSection
        locale={locale}
        faqs={faqs}
        eyebrow={ui.faqDefault.eyebrow}
        title={ui.faqDefault.title}
      />
      <CtaBand
        locale={locale}
        eyebrow={home.closingCta.eyebrow}
        title={home.closingCta.title}
        body={home.closingCta.body}
        primary={home.closingCta.primary}
        secondary={home.closingCta.secondary}
      />
      <Contact locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </>
  );
}
