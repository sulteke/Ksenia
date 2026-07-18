import type { Feature, Media } from "./types";
import type { Locale } from "@/i18n/config";
import { site } from "./site";

interface AboutContent {
  eyebrow: string;
  title: string;
  portrait: Media;
  story: string[];
  mission: { title: string; body: string };
  values: Feature[];
  signature: string;
  quote: string;
  quoteAccent: string;
  valuesEyebrow: string;
  valuesTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const en: AboutContent = {
  eyebrow: "The woman behind the work",
  title: "I help women come home to themselves.",
  portrait: {
    variant: "sand",
    motif: "none",
    alt: `A warm, natural portrait of ${site.founder}, calm and present.`,
  },
  story: [
    "For most of my life I was the strong one — capable, composed, always holding it together. From the outside it looked like everything was fine. Inside, my nervous system had been braced for so long I'd forgotten what calm even felt like.",
    "My own return began when I stopped trying to think my way out and started listening to my body instead. As it softened, everything changed — my sleep, my relationships, the way I met my own life. That quiet homecoming became my work.",
    "Today I hold that same space for other women. Through energy therapy, a transformational game, and journeys made for slowing down, I help you move out of survival and back into a life that actually feels like yours.",
  ],
  mission: {
    title: "My mission",
    body: "To help women step out of chronic stress and back into themselves — with warmth, safety and a depth that lasts long after our work together ends.",
  },
  values: [
    { title: "Safety first", body: "Nothing real happens without safety. Everything I do begins by making it truly safe to let go." },
    { title: "Depth over hype", body: "No pressure, no performance, no quick fixes. Only honest, lasting change at a human pace." },
    { title: "Beauty as medicine", body: "Calm, beauty and pleasure aren't extras — they're part of how the nervous system heals." },
    { title: "Your own authority", body: "I never hand you dependence. I hand you back to yourself, with tools you keep for life." },
  ],
  signature: `With warmth, ${site.founder}`,
  quote: "Calm is not something I give you. It's something I help you",
  quoteAccent: "remember.",
  valuesEyebrow: "What I hold to",
  valuesTitle: "The values beneath the work.",
  ctaEyebrow: "Let's begin",
  ctaTitle: "Come home to yourself.",
  ctaBody:
    "Wherever you are right now is the perfect place to start. Reach out, and we'll take the first gentle step together.",
  ctaPrimary: "Book a session",
  ctaSecondary: "Explore the work",
};

const ru: AboutContent = {
  eyebrow: "Кто я",
  title: "Я иду рядом.",
  portrait: {
    variant: "sand",
    motif: "none",
    alt: "Тёплый, естественный портрет: спокойствие и присутствие.",
  },
  story: [
    "Меня зовут Ксения. Я мастер состояний, проводник, энерготерапевт и игропрактик. Но если убрать все инструменты и определения — прежде всего я женщина, которая однажды сама оказалась в точке невозврата, где поняла: жить по-старому больше невозможно.",
    "Я знаю, каково это — искать ответы снаружи, бояться проявиться, пытаться соответствовать чужим ожиданиям, бесконечно анализировать себя и быть удобной. Я проходила этот путь сама — поэтому никогда не смотрю на женщину свысока. Я не гуру и не наставник. Я иду рядом.",
    "Моя задача — создать настолько безопасное пространство, чтобы женщина смогла перестать бороться с собой, выдохнуть и услышать то, что давно знает внутри. Я не даю готовых ответов и не принимаю решения за вас — я создаю условия, в которых меняется само внутреннее состояние.",
  ],
  mission: {
    title: "Моя миссия",
    body: "Создавать бережное пространство, где женщина возвращает контакт с собой, своими желаниями и чувствами — и начинает жить не из страха, контроля и долженствования, а из своей истинной сути.",
  },
  values: [
    { title: "Глубокая эмпатия", body: "Я тонко чувствую состояние человека и создаю атмосферу, в которой раскрывается то, что долго было спрятано за страхом, напряжением и контролем." },
    { title: "Я иду рядом", body: "Не гуру и не наставник. Я не спасаю и не переделываю — я рядом, чтобы вы могли перестать бороться с собой и наконец выдохнуть." },
    { title: "Только прожитое", body: "Я никогда не веду женщину по пути, которым не прошла сама. Каждый инструмент сначала стал частью моей жизни — и только потом частью практики." },
    { title: "Опыт материнства", body: "Я мама двух дочерей. Этот опыт научил меня безусловной любви, принятию и доверию жизни больше, чем любые книги и обучения." },
  ],
  signature: "С теплом, Ксения",
  quote: "Внутри каждой женщины уже есть всё необходимое для наполненной и свободной",
  quoteAccent: "жизни.",
  valuesEyebrow: "Чему я верна",
  valuesTitle: "Ценности, лежащие в основе работы.",
  ctaEyebrow: "Давайте начнём",
  ctaTitle: "Вернитесь к себе.",
  ctaBody:
    "Где бы вы ни были сейчас — это идеальное место для начала. Напишите, и мы сделаем первый бережный шаг вместе.",
  ctaPrimary: "Записаться на сессию",
  ctaSecondary: "Узнать больше",
};

const byLocale: Record<Locale, AboutContent> = { en, ru };

export const getAbout = (locale: Locale) => byLocale[locale];
