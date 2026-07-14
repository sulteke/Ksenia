import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getService } from "@/content/services";
import { buildMetadata, faqSchema } from "@/lib/seo";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const service = getService(locale, "energy-therapy");
  if (!service) return {};
  return buildMetadata({
    locale,
    title: `${service.name} — ${service.tagline}`,
    description: service.summary,
    path: `/${service.slug}`,
  });
}

export default async function EnergyTherapyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const service = getService(locale, "energy-therapy");
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />
    </>
  );
}
