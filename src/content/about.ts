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
  eyebrow: "Женщина за этой работой",
  title: "Я помогаю женщинам вернуться к себе.",
  portrait: {
    variant: "sand",
    motif: "none",
    alt: "Тёплый, естественный портрет: спокойствие и присутствие.",
  },
  story: [
    "Большую часть жизни я была «сильной» — способной, собранной, всегда держащей всё под контролем. Снаружи казалось, что всё хорошо. Внутри моя нервная система была напряжена так долго, что я забыла, каково это — покой.",
    "Моё собственное возвращение началось, когда я перестала пытаться всё продумать и начала слушать тело. Когда оно смягчилось, изменилось всё — сон, отношения, то, как я встречала свою жизнь. Это тихое возвращение домой стало моей работой.",
    "Сегодня я держу это же пространство для других женщин. Через энергетическую терапию, трансформационную игру и путешествия, созданные для замедления, я помогаю выйти из режима выживания и вернуться в жизнь, которая ощущается вашей.",
  ],
  mission: {
    title: "Моя миссия",
    body: "Помогать женщинам выходить из хронического стресса обратно к себе — с теплом, безопасностью и глубиной, которая остаётся надолго после нашей работы.",
  },
  values: [
    { title: "Сначала безопасность", body: "Без безопасности не происходит ничего настоящего. Всё, что я делаю, начинается с того, чтобы стало по-настоящему безопасно отпустить." },
    { title: "Глубина вместо шума", body: "Без давления, ролей и быстрых решений. Только честные, устойчивые изменения в человеческом ритме." },
    { title: "Красота как лекарство", body: "Покой, красота и удовольствие — не излишества, а часть того, как исцеляется нервная система." },
    { title: "Ваша собственная опора", body: "Я не даю зависимость. Я возвращаю вас себе — с инструментами, которые остаются на всю жизнь." },
  ],
  signature: `С теплом, ${site.founder}`,
  quote: "Покой — это не то, что я вам даю. Это то, что я помогаю вам",
  quoteAccent: "вспомнить.",
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
