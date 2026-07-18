import type { ContactChannel, NavItem } from "./types";
import type { Locale } from "@/i18n/config";

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
  founder: "Ksenia Mingalieva",
  // Used for canonical URLs, sitemap and Open Graph. Replace with the live domain.
  url: "https://aurelia.studio",

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

/** Localised brand copy. */
export const siteCopy: Record<
  Locale,
  { role: string; tagline: string; description: string; location: string }
> = {
  ru: {
    role: "Энерготерапевт и проводник",
    tagline:
      "Энергоактивация, трансформационная игра и авторские путешествия для женщин.",
    description:
      "Спокойная частная практика для восстановления нервной системы, эмоционального баланса и способности к саморегуляции — через энергетическую терапию, трансформационную игру и авторские путешествия для женщин.",
    location: "Онлайн по всему миру · Личные сессии по записи",
  },
  en: {
    role: "Energy Therapist & Guide",
    tagline:
      "Energy therapy, a transformational game, and author's journeys for women.",
    description:
      "A calm, private practice for restoring the nervous system, emotional balance and self-regulation — through energy therapy, a transformational game, and author's journeys for women.",
    location: "Online worldwide · Sessions in person by appointment",
  },
};

export const getSiteCopy = (locale: Locale) => siteCopy[locale];

const primaryNav: Record<Locale, NavItem[]> = {
  ru: [
    { label: "Обо мне", href: "/about" },
    { label: "Энергоактивация", href: "/energy-therapy" },
    { label: "Трансформационная игра", href: "/transformational-game" },
    { label: "Путешествия", href: "/journeys" },
    { label: "Контакты", href: "/#contact" },
  ],
  en: [
    { label: "About", href: "/about" },
    { label: "Energy Therapy", href: "/energy-therapy" },
    { label: "Transformational Game", href: "/transformational-game" },
    { label: "Journeys", href: "/journeys" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const getPrimaryNav = (locale: Locale) => primaryNav[locale];

const footerNav: Record<Locale, { title: string; items: NavItem[] }[]> = {
  ru: [
    {
      title: "Практика",
      items: [
        { label: "Обо мне", href: "/about" },
        { label: "Метод", href: "/#approach" },
        { label: "Результаты", href: "/#results" },
        { label: "Журнал", href: "/#" },
      ],
    },
    {
      title: "Работа со мной",
      items: [
        { label: "Энергоактивация", href: "/energy-therapy" },
        { label: "Трансформационная игра", href: "/transformational-game" },
        { label: "Женские путешествия", href: "/journeys" },
      ],
    },
  ],
  en: [
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
  ],
};

export const getFooterNav = (locale: Locale) => footerNav[locale];

const channelValues: Record<
  Locale,
  { instagram: string; whatsapp: string; telegram: string; email: string; reach: string }
> = {
  ru: {
    instagram: "Свет и заметки каждый день",
    whatsapp: "Самый быстрый способ связаться",
    telegram: "Вопросы и запись",
    email: "Путешествия и сотрудничество",
    reach: "Связаться со мной",
  },
  en: {
    instagram: "Daily field notes & light",
    whatsapp: "The fastest way to reach me",
    telegram: "Questions & bookings",
    email: "For journeys & collaborations",
    reach: "Reach me",
  },
};

export const getReachTitle = (locale: Locale) => channelValues[locale].reach;

export const getContactChannels = (locale: Locale): ContactChannel[] => {
  const v = channelValues[locale];
  return [
    {
      label: "Instagram",
      value: v.instagram,
      handle: site.contact.instagramHandle,
      href: site.contact.instagramUrl,
    },
    {
      label: "WhatsApp",
      value: v.whatsapp,
      handle: site.contact.whatsapp,
      href: `https://wa.me/${site.contact.whatsapp.replace(/[^\d]/g, "")}`,
    },
    {
      label: "Telegram",
      value: v.telegram,
      handle: site.contact.telegramHandle,
      href: site.contact.telegramUrl,
    },
    {
      label: "Email",
      value: v.email,
      handle: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
  ];
};
