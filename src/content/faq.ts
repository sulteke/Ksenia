import type { Faq } from "./types";
import type { Locale } from "@/i18n/config";

/** General FAQ shown on the home page. Service-specific FAQs live in services.ts. */
const en: Faq[] = [
  {
    q: "How do I know which direction is right for me?",
    a: "If you feel depleted or braced, begin with Energy Therapy. If you're stuck on a specific decision or pattern, the Transformational Game brings fast clarity. If you're craving rest, beauty and reconnection, a Journey is the way. Unsure? Message me and we'll choose together.",
  },
  {
    q: "Do you work with men too?",
    a: "Most of the people I work with are women, and the journeys are for women only. Energy Therapy and the Transformational Game are open to men as well — everyone is met with the same care.",
  },
  {
    q: "Is everything really available online?",
    a: "Energy Therapy and the Transformational Game are held both online and in person, with equal depth. Journeys are, of course, in person. Wherever you are in the world, there's a way to begin.",
  },
  {
    q: "I've never done anything like this. Where do I start?",
    a: "Exactly where you are. There's nothing to prepare and nothing to believe in advance. A short, no-pressure conversation is always the first step — reach out and we'll find your way in.",
  },
  {
    q: "How do I book?",
    a: "Message me on WhatsApp, Telegram or Instagram, or send an email. I answer personally, and together we'll find the right time and format for you.",
  },
];

const ru: Faq[] = [
  {
    q: "Как понять, какое направление мне подходит?",
    a: "Если вы истощены или напряжены, начните с энергетической терапии. Если застряли в конкретном решении или сценарии, трансформационная игра быстро принесёт ясность. Если хочется отдыха, красоты и возвращения к себе — выбирайте путешествие. Сомневаетесь? Напишите мне, и мы выберем вместе.",
  },
  {
    q: "Вы работаете и с мужчинами?",
    a: "Большинство тех, с кем я работаю, — женщины, и путешествия только для женщин. Энергетическая терапия и трансформационная игра открыты и для мужчин — ко всем я отношусь с одинаковой заботой.",
  },
  {
    q: "Всё действительно доступно онлайн?",
    a: "Энергетическая терапия и трансформационная игра проходят и онлайн, и лично, с одинаковой глубиной. Путешествия, конечно, очно. Где бы вы ни были, есть способ начать.",
  },
  {
    q: "Я никогда не пробовала подобного. С чего начать?",
    a: "Ровно оттуда, где вы сейчас. Ничего не нужно готовить и ни во что верить заранее. Первый шаг — всегда короткий разговор без давления. Напишите, и мы найдём ваш путь.",
  },
  {
    q: "Как записаться?",
    a: "Напишите мне в WhatsApp, Telegram или Instagram либо на почту. Я отвечаю лично, и вместе мы подберём удобное время и формат.",
  },
];

const byLocale: Record<Locale, Faq[]> = { en, ru };

export const getGeneralFaqs = (locale: Locale) => byLocale[locale];
