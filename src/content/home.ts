import type { Locale } from "@/i18n/config";

/** Home page hero + connective copy, per locale. */
const home = {
  ru: {
    hero: {
      eyebrow: "Энергетическая терапия · Путешествия для женщин",
      titleLines: ["Вернись", "к себе"],
      lede: "Спокойная частная практика, чтобы восстановить нервную систему, вернуть баланс и ощущение себя — через энергетическую терапию, трансформационную игру и авторские путешествия для женщин.",
      primaryCta: { label: "Начать с сессии", href: "/energy-therapy" },
      secondaryCta: { label: "Узнать больше", href: "/#services" },
      scrollHint: "Листайте вниз",
    },
    manifesto: {
      eyebrow: "Философия",
      lines: [
        "Вы не сломаны,",
        "и вас не нужно чинить.",
        "Вам нужно достаточно безопасности,",
        "чтобы расслабиться — и вспомнить",
        "себя настоящую, под всем этим.",
      ],
    },
    servicesIntro: {
      eyebrow: "Три способа начать",
      title: "Одна практика, три двери домой.",
      body: "Нужно ли успокоить нервную систему, обрести ясность или полностью уйти в красоту — здесь есть путь для того состояния, в котором вы сейчас.",
    },
    approachIntro: {
      eyebrow: "Почему женщины доверяют этой работе",
      title: "Бережный метод с серьёзной основой.",
      body: "Без ажиотажа, давления и зависимости. Только ясный, человечный подход, в центре которого — ваша безопасность и самостоятельность.",
    },
    galleryIntro: {
      eyebrow: "Чувство в образах",
      title: "Атмосфера работы.",
      body: "Мягкий свет, неспешные утра, красивые места и простор, чтобы дышать — немного о том, каково это, быть здесь.",
    },
    closingCta: {
      eyebrow: "Ваш первый шаг",
      title: "Когда будете готовы — я рядом.",
      body: "Никакой спешки и давления. Когда что-то внутри будет готово начать — напишите, и мы сделаем первый бережный шаг вместе.",
      primary: { label: "Записаться на сессию", href: "/energy-therapy" },
      secondary: { label: "Задать вопрос", href: "/#contact" },
    },
  },

  en: {
    hero: {
      eyebrow: "Energy therapy · Journeys for women",
      titleLines: ["Come home", "to yourself"],
      lede: "A calm, private practice for restoring your nervous system, your balance and your sense of self — through energy therapy, a transformational game, and author's journeys for women.",
      primaryCta: { label: "Begin with a session", href: "/energy-therapy" },
      secondaryCta: { label: "Explore the work", href: "/#services" },
      scrollHint: "Scroll to begin",
    },
    manifesto: {
      eyebrow: "The philosophy",
      lines: [
        "You are not broken,",
        "and you don't need fixing.",
        "You need to feel safe enough",
        "to soften — and remember",
        "who you were underneath it all.",
      ],
    },
    servicesIntro: {
      eyebrow: "Three ways to begin",
      title: "One practice, three doorways home.",
      body: "Whether you need to settle your system, find clarity, or step fully away into beauty — there's a way in made for where you are right now.",
    },
    approachIntro: {
      eyebrow: "Why women trust this work",
      title: "A gentle method with a serious foundation.",
      body: "No hype, no pressure, no dependence. Just a clear, humane way of working that keeps your safety and your autonomy at the centre.",
    },
    galleryIntro: {
      eyebrow: "A feeling, in images",
      title: "The atmosphere of the work.",
      body: "Soft light, slow mornings, beautiful places and space to breathe — a glimpse of how it feels to be here.",
    },
    closingCta: {
      eyebrow: "Your first step",
      title: "Whenever you're ready, I'm here.",
      body: "There's no rush and no pressure. When something in you is ready to begin, reach out — and we'll take the first gentle step together.",
      primary: { label: "Book a session", href: "/energy-therapy" },
      secondary: { label: "Ask a question", href: "/#contact" },
    },
  },
} as const;

export const getHome = (locale: Locale) => home[locale];
