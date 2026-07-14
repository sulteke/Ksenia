import type { Locale } from "@/i18n/config";

/**
 * UI chrome strings — everything that isn't page content but still appears on
 * screen (buttons, labels, section eyebrows, aria-labels). Kept in one place so
 * both languages stay in sync.
 */
export interface Ui {
  book: string;
  explore: string;
  readStory: string;
  switchLanguage: string;
  footer: { privacy: string; terms: string; backToTop: string; rights: string };
  intro: { tagline: string };
  mobile: { whatsappMessage: string };
  marqueeWords: string[];
  testimonials: {
    eyebrow: string;
    title: string;
    prev: string;
    next: string;
    goto: string;
  };
  services: { heart: string; explorePrefix: string };
  results: { quote: string };
  journeysTeaser: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    body: string;
    cta: string;
    upcoming: string;
    viewAll: string;
  };
  gallery: { prev: string; next: string };
  faqHelp: { pre: string; link: string; post: string };
  faqDefault: { eyebrow: string; title: string };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    replies: string;
  };
  serviceDetail: {
    home: string;
    work: string;
    seeHow: string;
    meetOnlineTitle: string;
    meetOnlineBody: string;
    meetInPersonTitle: string;
    meetInPersonBody: string;
    isThisForYou: string;
    whatShiftsEyebrow: string;
    whatShiftsTitle: string;
    experienceEyebrow: string;
    experienceTitle: string;
    afterwardsEyebrow: string;
    afterwardsTitle: string;
    goodToKnow: string;
    faqTitle: string;
    readyWhenYouAre: string;
    exploreOtherWork: string;
  };
  journeysPage: {
    heroEyebrow: string;
    heroTitleMain: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    viewUpcoming: string;
    requestInvite: string;
    whatEyebrow: string;
    whatTitle: string;
    whatLede: string;
    weave: string[];
    upcomingEyebrow: string;
    upcomingTitle: string;
    dayTitle: string;
    included: string;
    reserve: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statWhen: string;
    statLength: string;
    statPlaces: string;
    statFrom: string;
    nightsWord: string;
    womenWord: string;
  };
  journeyStatus: Record<"open" | "waitlist" | "soon", string>;
  journeyCard: { nightsWord: string; placesWord: string; fromWord: string };
  notFound: { title: string; body: string; home: string; contact: string };
}

const en: Ui = {
  book: "Book a session",
  explore: "Explore",
  readStory: "Read my story",
  switchLanguage: "Language",
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    backToTop: "Back to top",
    rights: "Crafted with care. All rights reserved.",
  },
  intro: { tagline: "Come home to yourself" },
  mobile: { whatsappMessage: "Hi Aurelia, I'd love to book a session." },
  marqueeWords: [
    "Calmer",
    "More rested",
    "Clearer",
    "Lighter",
    "More present",
    "Reconnected",
    "At home in yourself",
  ],
  testimonials: {
    eyebrow: "Kind words",
    title: "Held with trust, remembered with warmth.",
    prev: "Previous testimonial",
    next: "Next testimonial",
    goto: "Go to testimonial",
  },
  services: { heart: "The heart of the practice", explorePrefix: "Explore " },
  results: { quote: "The exhale you didn't know you were holding." },
  journeysTeaser: {
    eyebrow: "The third direction · Women's journeys",
    titleMain: "Not a retreat. Not a holiday.",
    titleAccent: "A homecoming.",
    body: "Author's journeys for women — luxury, nature, slow living and deep conversation, woven into a few beautiful days that quietly change you.",
    cta: "Discover the journeys",
    upcoming: "Upcoming journeys",
    viewAll: "View all",
  },
  gallery: { prev: "Previous image", next: "Next image" },
  faqHelp: {
    pre: "Still unsure? The kindest first step is simply a conversation. ",
    link: "Reach out",
    post: " and I'll answer personally.",
  },
  faqDefault: {
    eyebrow: "Questions & answers",
    title: "Everything you might be wondering.",
  },
  contact: {
    eyebrow: "Begin the conversation",
    title: "Let's find your way in.",
    lede: "Reach out however feels easiest. I read and answer every message myself — there's no funnel, no pressure, just a real reply from me.",
    replies: "Replies within 24 hours",
  },
  serviceDetail: {
    home: "Home",
    work: "Work",
    seeHow: "See how it works",
    meetOnlineTitle: "Online, from anywhere",
    meetOnlineBody:
      "Held over video in the quiet of your own space — the same depth as being in the room, and often even easier to relax into.",
    meetInPersonTitle: "In person, by appointment",
    meetInPersonBody:
      "In a calm, private setting designed for you to fully let go. A held, unhurried space that is entirely yours.",
    isThisForYou: "Is this for you?",
    whatShiftsEyebrow: "What shifts",
    whatShiftsTitle: "The change you can feel.",
    experienceEyebrow: "The experience",
    experienceTitle: "How our work unfolds.",
    afterwardsEyebrow: "Afterwards",
    afterwardsTitle: "What you can expect to carry with you.",
    goodToKnow: "Good to know",
    faqTitle: "Questions, answered.",
    readyWhenYouAre: "Ready when you are",
    exploreOtherWork: "Explore other work",
  },
  journeysPage: {
    heroEyebrow: "Author's journeys for women",
    heroTitleMain: "Travel that returns you",
    heroTitleAccent: "to yourself.",
    heroSubtitle:
      "Not a retreat. Not ordinary tourism. Intimate journeys where luxury, nature and deep conversation quietly change you — and you come home with more than photographs.",
    viewUpcoming: "View upcoming journeys",
    requestInvite: "Request an invitation",
    whatEyebrow: "A different kind of journey",
    whatTitle: "Everything you love about travel — with a soul underneath.",
    whatLede:
      "These journeys weave together beauty and depth in a way most trips never dare to. Luxury that means something. Rest that changes you.",
    weave: [
      "Luxury travel",
      "Untouched nature",
      "Beautiful hotels",
      "Real pleasure",
      "Slow living",
      "Meaningful conversation",
      "Self-discovery",
      "Inner transformation",
      "Unforgettable beauty",
    ],
    upcomingEyebrow: "Upcoming journeys",
    upcomingTitle: "Where we're going next.",
    dayTitle: "A day, unhurried",
    included: "What's included",
    reserve: "Reserve your place",
    faqEyebrow: "Before you come",
    faqTitle: "Questions about the journeys.",
    ctaEyebrow: "Places are few",
    ctaTitle: "Reserve your place.",
    ctaBody:
      "Each journey is intentionally intimate. Tell me you're interested and I'll share the next one with you personally — no obligation, just an open door.",
    ctaPrimary: "Request an invitation",
    ctaSecondary: "See all the work",
    statWhen: "When",
    statLength: "Length",
    statPlaces: "Places",
    statFrom: "From",
    nightsWord: "nights",
    womenWord: "women",
  },
  journeyStatus: {
    open: "Places open",
    waitlist: "Waitlist",
    soon: "Coming soon",
  },
  journeyCard: { nightsWord: "nights", placesWord: "places", fromWord: "from" },
  notFound: {
    title: "This path has drifted off the map.",
    body: "The page you were looking for isn't here — but every good journey has a wrong turn or two. Let's guide you back.",
    home: "Return home",
    contact: "Get in touch",
  },
};

const ru: Ui = {
  book: "Записаться на сессию",
  explore: "Подробнее",
  readStory: "Моя история",
  switchLanguage: "Язык",
  footer: {
    privacy: "Конфиденциальность",
    terms: "Условия",
    backToTop: "Наверх",
    rights: "Сделано с заботой. Все права защищены.",
  },
  intro: { tagline: "Вернись к себе" },
  mobile: {
    whatsappMessage: "Здравствуйте, Aurelia! Хочу записаться на сессию.",
  },
  marqueeWords: [
    "Спокойнее",
    "Отдохнувшая",
    "Яснее",
    "Легче",
    "В моменте",
    "Возвращение связи",
    "Дома в себе",
  ],
  testimonials: {
    eyebrow: "Тёплые слова",
    title: "С доверием — и остаётся теплом.",
    prev: "Предыдущий отзыв",
    next: "Следующий отзыв",
    goto: "Перейти к отзыву",
  },
  services: { heart: "Сердце практики", explorePrefix: "Подробнее: " },
  results: { quote: "Выдох, о котором вы не знали." },
  journeysTeaser: {
    eyebrow: "Третье направление · Женские путешествия",
    titleMain: "Не ретрит. Не отпуск.",
    titleAccent: "Возвращение домой.",
    body: "Авторские путешествия для женщин — роскошь, природа, медленная жизнь и глубокие разговоры, сплетённые в несколько красивых дней, которые тихо меняют.",
    cta: "Открыть путешествия",
    upcoming: "Ближайшие путешествия",
    viewAll: "Смотреть все",
  },
  gallery: { prev: "Предыдущее фото", next: "Следующее фото" },
  faqHelp: {
    pre: "Всё ещё не уверены? Самый бережный первый шаг — просто разговор. ",
    link: "Напишите мне",
    post: ", и я отвечу лично.",
  },
  faqDefault: {
    eyebrow: "Вопросы и ответы",
    title: "Всё, о чём вы могли задуматься.",
  },
  contact: {
    eyebrow: "Начнём разговор",
    title: "Найдём ваш путь.",
    lede: "Напишите так, как вам удобнее. Я сама читаю и отвечаю на каждое сообщение — никаких воронок и давления, только настоящий ответ от меня.",
    replies: "Отвечаю в течение 24 часов",
  },
  serviceDetail: {
    home: "Главная",
    work: "Работа",
    seeHow: "Как это устроено",
    meetOnlineTitle: "Онлайн, из любой точки",
    meetOnlineBody:
      "По видео, в тишине вашего пространства — та же глубина, что и в комнате, и часто расслабиться даже проще.",
    meetInPersonTitle: "Лично, по записи",
    meetInPersonBody:
      "В спокойном, приватном пространстве, созданном, чтобы полностью отпустить. Бережное, неспешное место, целиком ваше.",
    isThisForYou: "Это для вас?",
    whatShiftsEyebrow: "Что меняется",
    whatShiftsTitle: "Изменение, которое чувствуется.",
    experienceEyebrow: "Как проходит",
    experienceTitle: "Как разворачивается наша работа.",
    afterwardsEyebrow: "После",
    afterwardsTitle: "Что вы унесёте с собой.",
    goodToKnow: "Полезно знать",
    faqTitle: "Частые вопросы.",
    readyWhenYouAre: "Когда будете готовы",
    exploreOtherWork: "Другие направления",
  },
  journeysPage: {
    heroEyebrow: "Авторские путешествия для женщин",
    heroTitleMain: "Путешествие, которое возвращает вас",
    heroTitleAccent: "к себе.",
    heroSubtitle:
      "Не ретрит. Не обычный туризм. Камерные путешествия, где роскошь, природа и глубокие разговоры тихо меняют вас — и домой вы возвращаетесь не только с фотографиями.",
    viewUpcoming: "Ближайшие путешествия",
    requestInvite: "Запросить приглашение",
    whatEyebrow: "Путешествие иного рода",
    whatTitle: "Всё, что вы любите в путешествиях — с душой внутри.",
    whatLede:
      "Эти путешествия сплетают красоту и глубину так, как редко решаются обычные поездки. Роскошь, которая что-то значит. Отдых, который меняет.",
    weave: [
      "Роскошные путешествия",
      "Нетронутая природа",
      "Красивые отели",
      "Настоящее удовольствие",
      "Медленная жизнь",
      "Значимые разговоры",
      "Самопознание",
      "Внутренняя трансформация",
      "Незабываемая красота",
    ],
    upcomingEyebrow: "Ближайшие путешествия",
    upcomingTitle: "Куда мы отправимся дальше.",
    dayTitle: "Один неспешный день",
    included: "Что входит",
    reserve: "Забронировать место",
    faqEyebrow: "Перед поездкой",
    faqTitle: "Вопросы о путешествиях.",
    ctaEyebrow: "Мест немного",
    ctaTitle: "Забронируйте место.",
    ctaBody:
      "Каждое путешествие намеренно камерное. Напишите, что вам интересно, и я лично расскажу о ближайшем — без обязательств, просто открытая дверь.",
    ctaPrimary: "Запросить приглашение",
    ctaSecondary: "Все направления",
    statWhen: "Когда",
    statLength: "Длительность",
    statPlaces: "Мест",
    statFrom: "От",
    nightsWord: "ночей",
    womenWord: "женщин",
  },
  journeyStatus: {
    open: "Есть места",
    waitlist: "Лист ожидания",
    soon: "Скоро",
  },
  journeyCard: { nightsWord: "ночей", placesWord: "мест", fromWord: "от" },
  notFound: {
    title: "Эта тропа сошла с карты.",
    body: "Страницы, которую вы искали, здесь нет — но в каждом хорошем путешествии бывает неверный поворот. Давайте вернём вас на путь.",
    home: "На главную",
    contact: "Связаться",
  },
};

const byLocale: Record<Locale, Ui> = { en, ru };

export const getUi = (locale: Locale): Ui => byLocale[locale];
