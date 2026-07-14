import type { Journey } from "./types";
import type { Locale } from "@/i18n/config";

/** Upcoming author's journeys (bilingual). Add, remove or reorder freely. */
const en: Journey[] = [
  {
    slug: "amalfi-slow-light",
    title: "Slow Light",
    location: "Amalfi Coast",
    country: "Italy",
    season: "Early Autumn",
    dates: "21–27 September 2026",
    nights: 6,
    places: 8,
    priceFrom: "€4,800",
    status: "open",
    summary:
      "Lemon groves, warm stone and a sea that goes on forever. Six unhurried days of beauty, rest and quiet reconnection on Italy's most luminous coast.",
    hero: {
      variant: "dusk",
      motif: "horizon",
      alt: "Golden-hour view over the Amalfi coastline, cliffs falling into a calm sea.",
    },
    gallery: [
      { variant: "gold", motif: "sun", alt: "Sunlit terrace above the sea." },
      { variant: "dawn", alt: "Breakfast of figs and coffee in morning light." },
      { variant: "clay", motif: "horizon", alt: "A woman swimming in still turquoise water." },
      { variant: "sand", alt: "Linen, ceramics and a quiet lunch table." },
    ],
    highlights: [
      "A cliffside boutique hotel with sea-facing rooms",
      "Private boat morning along the coast",
      "Long, slow lunches in hidden family trattorias",
      "Sunset circle and gentle energy practice",
      "A full day with nothing planned but pleasure",
    ],
    included: [
      "6 nights boutique accommodation",
      "Daily breakfast & most dinners",
      "Private boat & curated excursions",
      "All gatherings, circles & practices",
      "Airport transfers on arrival & departure",
    ],
    day: [
      {
        index: "Morning",
        title: "Slow starts",
        body: "Wake without an alarm. Breakfast on the terrace, sea air, an optional gentle practice as the light comes up.",
      },
      {
        index: "Midday",
        title: "Beauty & sea",
        body: "A boat morning, a lemon-grove walk, or simply the water. Long lunches with nowhere to be.",
      },
      {
        index: "Evening",
        title: "Circle & table",
        body: "As the sun drops, we gather — a short practice, real conversation, and a beautiful shared dinner.",
      },
    ],
  },
  {
    slug: "morocco-golden-hours",
    title: "Golden Hours",
    location: "Marrakech & the Atlas",
    country: "Morocco",
    season: "Late Autumn",
    dates: "9–15 November 2026",
    nights: 6,
    places: 8,
    priceFrom: "€4,600",
    status: "waitlist",
    summary:
      "Riads, rose light and the deep quiet of the mountains. A sensory journey between the colour of Marrakech and the stillness of the Atlas.",
    hero: {
      variant: "clay",
      motif: "sun",
      alt: "Warm terracotta riad courtyard bathed in golden afternoon light.",
    },
    gallery: [
      { variant: "clay", alt: "Lantern-lit riad courtyard at dusk." },
      { variant: "gold", motif: "sun", alt: "Atlas mountains glowing at sunrise." },
      { variant: "sand", alt: "Tea, dates and textiles on a low table." },
      { variant: "dusk", motif: "horizon", alt: "Silhouettes on a rooftop at sunset." },
    ],
    highlights: [
      "A hand-restored riad in the heart of the medina",
      "A night under the stars in the Atlas foothills",
      "Hammam & slow ritual afternoon",
      "Guided quiet through the souks, then space to wander",
      "Fireside circles beneath a desert sky",
    ],
    included: [
      "6 nights in riad & mountain lodge",
      "Daily breakfast & most meals",
      "Hammam ritual & guided experiences",
      "All gatherings, circles & practices",
      "Private transfers throughout",
    ],
    day: [
      {
        index: "Morning",
        title: "Light & ritual",
        body: "Mint tea on the rooftop, a grounding practice, then a gentle immersion into the day's landscape.",
      },
      {
        index: "Midday",
        title: "Colour & calm",
        body: "The medina or the mountains — always with a rhythm that lets you feel rather than rush.",
      },
      {
        index: "Evening",
        title: "Fire & story",
        body: "We gather as the air cools: a practice, honest conversation, and a feast beneath the stars.",
      },
    ],
  },
];

const ru: Journey[] = [
  {
    slug: "amalfi-slow-light",
    title: "Медленный свет",
    location: "Амальфитанское побережье",
    country: "Италия",
    season: "Ранняя осень",
    dates: "21–27 сентября 2026",
    nights: 6,
    places: 8,
    priceFrom: "€4 800",
    status: "open",
    summary:
      "Лимонные рощи, тёплый камень и море без конца. Шесть неспешных дней красоты, отдыха и тихого возвращения к себе на самом сияющем побережье Италии.",
    hero: {
      variant: "dusk",
      motif: "horizon",
      alt: "Вид на Амальфитанское побережье в золотой час, скалы, спадающие в спокойное море.",
    },
    gallery: [
      { variant: "gold", motif: "sun", alt: "Залитая солнцем терраса над морем." },
      { variant: "dawn", alt: "Завтрак из инжира и кофе в утреннем свете." },
      { variant: "clay", motif: "horizon", alt: "Женщина плывёт в спокойной бирюзовой воде." },
      { variant: "sand", alt: "Лён, керамика и тихий обеденный стол." },
    ],
    highlights: [
      "Бутик-отель на скале с видом на море",
      "Утро на частной лодке вдоль побережья",
      "Долгие, неспешные обеды в укромных семейных тратториях",
      "Круг на закате и мягкая энергетическая практика",
      "Целый день, где не запланировано ничего, кроме удовольствия",
    ],
    included: [
      "6 ночей в бутик-отеле",
      "Ежедневные завтраки и большинство ужинов",
      "Частная лодка и продуманные экскурсии",
      "Все встречи, круги и практики",
      "Трансферы из аэропорта по прибытии и отъезду",
    ],
    day: [
      {
        index: "Утро",
        title: "Медленные пробуждения",
        body: "Просыпаться без будильника. Завтрак на террасе, морской воздух и по желанию мягкая практика на рассвете.",
      },
      {
        index: "День",
        title: "Красота и море",
        body: "Утро на лодке, прогулка по лимонной роще или просто вода. Долгие обеды, когда никуда не нужно.",
      },
      {
        index: "Вечер",
        title: "Круг и стол",
        body: "Когда солнце садится, мы собираемся — короткая практика, настоящий разговор и красивый общий ужин.",
      },
    ],
  },
  {
    slug: "morocco-golden-hours",
    title: "Золотые часы",
    location: "Марракеш и Атлас",
    country: "Марокко",
    season: "Поздняя осень",
    dates: "9–15 ноября 2026",
    nights: 6,
    places: 8,
    priceFrom: "€4 600",
    status: "waitlist",
    summary:
      "Риады, розовый свет и глубокая тишина гор. Чувственное путешествие между красками Марракеша и покоем Атласа.",
    hero: {
      variant: "clay",
      motif: "sun",
      alt: "Тёплый терракотовый двор риада, залитый золотым послеполуденным светом.",
    },
    gallery: [
      { variant: "clay", alt: "Двор риада в свете фонарей на закате." },
      { variant: "gold", motif: "sun", alt: "Горы Атласа, сияющие на рассвете." },
      { variant: "sand", alt: "Чай, финики и ткани на низком столе." },
      { variant: "dusk", motif: "horizon", alt: "Силуэты на крыше на закате." },
    ],
    highlights: [
      "Вручную отреставрированный риад в сердце медины",
      "Ночь под звёздами в предгорьях Атласа",
      "Хаммам и неспешный ритуальный день",
      "Тихое сопровождение по сукам, а затем время побродить одной",
      "Круги у огня под пустынным небом",
    ],
    included: [
      "6 ночей в риаде и горном лодже",
      "Ежедневные завтраки и большинство приёмов пищи",
      "Ритуал хаммама и сопровождаемые впечатления",
      "Все встречи, круги и практики",
      "Частные трансферы на всём протяжении",
    ],
    day: [
      {
        index: "Утро",
        title: "Свет и ритуал",
        body: "Мятный чай на крыше, практика заземления, а затем мягкое погружение в пейзаж дня.",
      },
      {
        index: "День",
        title: "Краски и покой",
        body: "Медина или горы — всегда в ритме, где важнее чувствовать, а не спешить.",
      },
      {
        index: "Вечер",
        title: "Огонь и истории",
        body: "Мы собираемся, когда воздух остывает: практика, честный разговор и пир под звёздами.",
      },
    ],
  },
];

const journeysByLocale: Record<Locale, Journey[]> = { en, ru };

export const getJourneys = (locale: Locale) => journeysByLocale[locale];

export const getJourney = (locale: Locale, slug: string) =>
  journeysByLocale[locale].find((j) => j.slug === slug);
