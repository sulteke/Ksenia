import type { ContactChannel, NavItem } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  BRAND CONFIG — edit these values to rebrand the whole site.
 *  (Name, tagline and all contact handles are PLACEHOLDERS.)
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: "Aurelia",
  /** Shown under the wordmark and in the browser tab. */
  wordmarkSuffix: "studio",
  founder: "Aurelia",
  role: "Energy Therapist & Guide",
  tagline:
    "Energy therapy, a transformational game, and author's journeys for women.",
  description:
    "A calm, private practice for restoring the nervous system, emotional balance and self-regulation — through energy therapy, a transformational game, and author's journeys for women.",
  // Used for canonical URLs, sitemap and Open Graph. Replace with the live domain.
  url: "https://aurelia.studio",
  locale: "en",
  location: "Online worldwide · Sessions in person by appointment",

  contact: {
    email: "hello@aurelia.studio",
    // International format — click-to-chat links are generated from this.
    whatsapp: "+1 (555) 018 2200",
    instagramHandle: "@aurelia.studio",
    instagramUrl: "https://instagram.com/aurelia.studio",
    telegramHandle: "@aurelia",
    telegramUrl: "https://t.me/aurelia",
  },
} as const;

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Energy Therapy", href: "/energy-therapy" },
  { label: "Transformational Game", href: "/transformational-game" },
  { label: "Journeys", href: "/journeys" },
  { label: "Contact", href: "/#contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Practice",
    items: [
      { label: "About Aurelia", href: "/about" },
      { label: "The approach", href: "/#approach" },
      { label: "Results", href: "/#results" },
      { label: "Journal", href: "/#" },
    ],
  },
  {
    title: "Work with me",
    items: [
      { label: "Energy Therapy", href: "/energy-therapy" },
      { label: "Transformational Game", href: "/transformational-game" },
      { label: "Women's Journeys", href: "/journeys" },
    ],
  },
];

export const contactChannels = (): ContactChannel[] => [
  {
    label: "Instagram",
    value: "Daily field notes & light",
    handle: site.contact.instagramHandle,
    href: site.contact.instagramUrl,
  },
  {
    label: "WhatsApp",
    value: "The fastest way to reach me",
    handle: site.contact.whatsapp,
    href: `https://wa.me/${site.contact.whatsapp.replace(/[^\d]/g, "")}`,
  },
  {
    label: "Telegram",
    value: "Questions & bookings",
    handle: site.contact.telegramHandle,
    href: site.contact.telegramUrl,
  },
  {
    label: "Email",
    value: "For journeys & collaborations",
    handle: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
];
