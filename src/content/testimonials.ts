import type { Testimonial } from "./types";
import type { Locale } from "@/i18n/config";

const en: Testimonial[] = [
  {
    quote:
      "I arrived exhausted in a way sleep couldn't touch. After a few sessions I felt something unclench that I'd been holding for years. I finally feel like myself again.",
    name: "Marina K.",
    detail: "Founder · London",
    service: "Energy Therapy",
    rating: 5,
  },
  {
    quote:
      "I came with one impossible decision and left with total clarity. It didn't feel like work — it felt like remembering something I already knew.",
    name: "Elena R.",
    detail: "Creative director · Berlin",
    service: "Transformational Game",
    rating: 5,
  },
  {
    quote:
      "The journey to Amalfi rearranged something in me. Beautiful beyond words, but it was the depth underneath the beauty that I carried home.",
    name: "Sofia M.",
    detail: "Architect · Milan",
    service: "Women's Journeys",
    rating: 5,
  },
  {
    quote:
      "Online, from my own kitchen, I went deeper than I have in years of talking. My sleep changed within a week. I didn't think that was possible.",
    name: "Anna T.",
    detail: "Physician · Vienna",
    service: "Energy Therapy",
    rating: 5,
  },
  {
    quote:
      "There's a rare kind of safety in how she holds a space. Nothing is forced. You simply feel permission to finally let go.",
    name: "Dana P.",
    detail: "Lawyer · Dubai",
    service: "Energy Therapy",
    rating: 5,
  },
  {
    quote:
      "I've travelled the world, but never like this. Slow, luxurious and quietly profound. I came back softer, and I've stayed that way.",
    name: "Yulia S.",
    detail: "Entrepreneur · Cyprus",
    service: "Women's Journeys",
    rating: 5,
  },
];

const ru: Testimonial[] = [
  {
    quote:
      "Я пришла с усталостью, которую не брал даже сон. После нескольких сессий во мне отпустило то, что я держала годами. Я снова чувствую себя собой.",
    name: "Марина К.",
    detail: "Основательница · Лондон",
    service: "Энергетическая терапия",
    rating: 5,
  },
  {
    quote:
      "Я пришла с одним невозможным решением, а ушла с полной ясностью. Это не было похоже на работу — скорее на воспоминание того, что я уже знала.",
    name: "Елена Р.",
    detail: "Креативный директор · Берлин",
    service: "Трансформационная игра",
    rating: 5,
  },
  {
    quote:
      "Путешествие на Амальфи что-то во мне переставило. Красиво до слов, но домой я увезла глубину под этой красотой.",
    name: "София М.",
    detail: "Архитектор · Милан",
    service: "Женские путешествия",
    rating: 5,
  },
  {
    quote:
      "Онлайн, из собственной кухни, я ушла глубже, чем за годы разговоров. Мой сон изменился за неделю. Я не думала, что так бывает.",
    name: "Анна Т.",
    detail: "Врач · Вена",
    service: "Энергетическая терапия",
    rating: 5,
  },
  {
    quote:
      "В том, как она держит пространство, есть редкая безопасность. Ничего через силу. Просто чувствуешь разрешение наконец отпустить.",
    name: "Дана П.",
    detail: "Юрист · Дубай",
    service: "Энергетическая терапия",
    rating: 5,
  },
  {
    quote:
      "Я объездила мир, но так — никогда. Медленно, роскошно и тихо глубоко. Я вернулась мягче и такой осталась.",
    name: "Юлия С.",
    detail: "Предприниматель · Кипр",
    service: "Женские путешествия",
    rating: 5,
  },
];

const byLocale: Record<Locale, Testimonial[]> = { en, ru };

export const getTestimonials = (locale: Locale) => byLocale[locale];
