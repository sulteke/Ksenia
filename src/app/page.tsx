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
import { generalFaqs } from "@/content/faq";
import { home } from "@/content/home";
import { faqSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutPreview />
      <Manifesto />
      <Services />
      <Approach />
      <StatsBand />
      <Results />
      <Testimonials />
      <JourneysTeaser />
      <Gallery />
      <FaqSection faqs={generalFaqs} />
      <CtaBand
        eyebrow={home.closingCta.eyebrow}
        title={home.closingCta.title}
        body={home.closingCta.body}
        primary={home.closingCta.primary}
        secondary={home.closingCta.secondary}
      />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(generalFaqs)),
        }}
      />
    </>
  );
}
