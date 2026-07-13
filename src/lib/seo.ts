import type { Metadata } from "next";
import { site } from "@/content/site";

const titleTemplate = (t?: string) =>
  t ? `${t} — ${site.name}` : `${site.name} — ${site.tagline}`;

/** Build page metadata with sensible, on-brand defaults + Open Graph. */
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image = "/opengraph-image",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: titleTemplate(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: titleTemplate(title),
      description,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleTemplate(title),
      description,
      images: [image],
    },
  };
}

/** Organisation + person + service structured data for rich results. */
export function structuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "HealthAndBeautyBusiness"],
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.whatsapp,
    areaServed: "Worldwide",
    founder: { "@type": "Person", name: site.founder, jobTitle: site.role },
    sameAs: [site.contact.instagramUrl, site.contact.telegramUrl],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Energy Therapy",
          description:
            "Restorative energy therapy for the nervous system, emotional balance and self-regulation, online and in person.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transformational Game",
          description:
            "A guided, interactive transformational experience for clarity and personal growth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Women's Transformational Journeys",
          description:
            "Author's luxury journeys for women blending travel, nature, slow living and inner transformation.",
        },
      },
    ],
  };
  return org;
}

/** FAQPage schema from a list of Q&A. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
