import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getUi } from "@/content/ui";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Faq } from "@/content/types";

export function FaqSection({
  locale,
  faqs,
  eyebrow,
  title,
  id = "faq",
}: {
  locale: Locale;
  faqs: Faq[];
  eyebrow: string;
  title: string;
  id?: string;
}) {
  const help = getUi(locale).faqHelp;
  return (
    <section id={id} className="container-x py-24 sm:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            titleClassName="text-display-md"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-espresso/70">
              {help.pre}
              <Link
                href={localizedPath(locale, "/#contact")}
                className="link-underline font-medium text-gold"
              >
                {help.link}
              </Link>
              {help.post}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="leading-relaxed">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
