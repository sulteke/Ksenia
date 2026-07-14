import type { Feature, ProcessStep, ResultStat } from "./types";
import type { Locale } from "@/i18n/config";

/** "Why choose her" — methodology as an elegant timeline. */
const methodology: Record<Locale, ProcessStep[]> = {
  en: [
    { index: "01", title: "We begin with safety", body: "Before anything else, we build the conditions for your system to relax. No pushing, no exposure, no rush — only a space calm enough to let go in." },
    { index: "02", title: "We listen to the body", body: "Your body has been keeping score for years. Rather than analysing from the head, we work directly with the nervous system, where the tension actually lives." },
    { index: "03", title: "We release, gently", body: "Held stress and emotion are met and allowed to move — slowly enough to feel safe, deeply enough to make a real difference." },
    { index: "04", title: "We restore self-regulation", body: "You relearn the felt sense of your own centre, so calm becomes something you can find again on your own, in ordinary life." },
    { index: "05", title: "We integrate for the long run", body: "You leave with simple, personal practices — not dependence on me. The goal is always to return you to yourself." },
  ],
  ru: [
    { index: "01", title: "Мы начинаем с безопасности", body: "Прежде всего мы создаём условия, чтобы ваша система расслабилась. Без давления, без обнажения, без спешки — только пространство, достаточно спокойное, чтобы отпустить." },
    { index: "02", title: "Мы слушаем тело", body: "Ваше тело годами вело счёт. Вместо анализа из головы мы работаем напрямую с нервной системой, там, где на самом деле живёт напряжение." },
    { index: "03", title: "Мы отпускаем, бережно", body: "Удержанный стресс и эмоции встречаются и получают возможность двигаться — достаточно медленно, чтобы было безопасно, достаточно глубоко, чтобы это действительно меняло." },
    { index: "04", title: "Мы восстанавливаем саморегуляцию", body: "Вы заново обретаете ощущение собственного центра, чтобы покой стал тем, что можно находить самостоятельно, в обычной жизни." },
    { index: "05", title: "Мы интегрируем надолго", body: "Вы уходите с простыми, личными практиками — а не с зависимостью от меня. Цель всегда одна: вернуть вас себе." },
  ],
};

export const getMethodology = (locale: Locale) => methodology[locale];

const distinctions: Record<Locale, Feature[]> = {
  en: [
    { title: "A nervous-system approach", body: "Rooted in how safety, stress and regulation actually work in the body — not vague promises." },
    { title: "Online & in person", body: "The same depth whether we meet in the room or across the world by video." },
    { title: "Held with total discretion", body: "A private, confidential practice. What you bring stays entirely between us." },
    { title: "Woman-centred, always", body: "Designed around the real lives, pressures and inner worlds of women 25–50." },
  ],
  ru: [
    { title: "Подход через нервную систему", body: "Основан на том, как безопасность, стресс и регуляция действительно работают в теле — без расплывчатых обещаний." },
    { title: "Онлайн и лично", body: "Одинаковая глубина, встречаемся ли мы в комнате или через полмира по видео." },
    { title: "Полная конфиденциальность", body: "Частная, конфиденциальная практика. То, что вы приносите, остаётся только между нами." },
    { title: "Всегда в центре — женщина", body: "Выстроено вокруг реальной жизни, нагрузок и внутреннего мира женщин 25–50 лет." },
  ],
};

export const getDistinctions = (locale: Locale) => distinctions[locale];

const results: Record<
  Locale,
  { eyebrow: string; title: string; lede: string; states: string[] }
> = {
  en: {
    eyebrow: "How it feels afterwards",
    title: "The quiet difference of feeling like yourself again.",
    lede: "Change here is rarely loud. It's the exhale you didn't know you were holding — and then, gradually, a different way of living.",
    states: ["Calmer", "More rested", "Clearer", "Lighter", "More present", "More yourself"],
  },
  ru: {
    eyebrow: "Каково это — после",
    title: "Тихая разница — снова чувствовать себя собой.",
    lede: "Изменения здесь редко громкие. Это выдох, о котором вы не знали, — а затем, постепенно, другой способ жить.",
    states: ["Спокойнее", "Отдохнувшая", "Яснее", "Легче", "В моменте", "Больше собой"],
  },
};

export const getResults = (locale: Locale) => results[locale];

const statsLabels: Record<Locale, string[]> = {
  en: [
    "years holding this work",
    "sessions guided",
    "countries reached online",
    "would return or refer",
  ],
  ru: [
    "лет в этой работе",
    "проведённых сессий",
    "стран онлайн",
    "вернулись бы или порекомендовали",
  ],
};

const statValues = ["10", "1,200+", "30+", "98%"];

export const getStats = (locale: Locale): ResultStat[] =>
  statValues.map((value, i) => ({ value, label: statsLabels[locale][i] }));
