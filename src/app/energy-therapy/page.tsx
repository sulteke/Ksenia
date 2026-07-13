import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getService } from "@/content/services";
import { buildMetadata, faqSchema } from "@/lib/seo";

const service = getService("energy-therapy");

export const metadata = service
  ? buildMetadata({
      title: `${service.name} — ${service.tagline}`,
      description: service.summary,
      path: `/${service.slug}`,
    })
  : {};

export default function EnergyTherapyPage() {
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />
    </>
  );
}
