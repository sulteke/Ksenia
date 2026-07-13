import { Instagram, MessageCircle, Send, Mail, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { site, contactChannels } from "@/content/site";

const ICONS: Record<string, React.ElementType> = {
  Instagram,
  WhatsApp: MessageCircle,
  Telegram: Send,
  Email: Mail,
};

export function Contact() {
  const channels = contactChannels();
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-gradient-to-b from-warmwhite to-cream/60 py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Begin the conversation"
          title="Let’s find your way in."
          lede="Reach out however feels easiest. I read and answer every message myself — there’s no funnel, no pressure, just a real reply from me."
          align="center"
        />

        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {channels.map((c) => {
            const Icon = ICONS[c.label] ?? Mail;
            const external = c.href.startsWith("http");
            return (
              <StaggerItem key={c.label}>
                <a
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-[1.75rem] bg-warmwhite p-6 shadow-soft ring-1 ring-espresso/[0.06] transition-all duration-500 ease-luxe hover:-translate-y-0.5 hover:shadow-lift sm:p-7"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-warmwhite">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 font-display text-xl text-ink">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-clay">
                      {c.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-espresso/30 transition-all duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:text-gold" />
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-clay">
            {site.location} · Replies within 24 hours
          </p>
        </Reveal>
      </div>
    </section>
  );
}
