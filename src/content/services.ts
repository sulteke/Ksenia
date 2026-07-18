import type { Service } from "./types";
import type { Locale } from "@/i18n/config";

/**
 * THE THREE DIRECTIONS (bilingual).
 * Energy Therapy is the heart of the practice and carries the most detail.
 * Slugs are shared across locales so URLs stay clean and stable.
 */
const en: Service[] = [
  {
    slug: "energy-therapy",
    order: 1,
    name: "Energy Therapy",
    tagline: "Restore the nervous system. Return to yourself.",
    summary:
      "The heart of the practice. A gentle, deeply restorative method for calming an overwhelmed nervous system, releasing the residue of chronic stress, and coming back into balance with yourself.",
    promise: "Softly, your system remembers how to feel safe.",
    format: "Online & in person · 1:1",
    accent: "gold",
    hero: {
      variant: "dawn",
      motif: "sun",
      alt: "Soft morning light falling across linen and open hands resting in stillness.",
    },
    cardMedia: {
      variant: "gold",
      motif: "sun",
      alt: "Warm golden light, a calm and grounded presence.",
    },
    forWhom: {
      title: "This is for you if",
      items: [
        "You are carrying the weight of chronic stress and can't fully switch off.",
        "You feel disconnected from yourself — running on autopilot.",
        "Your sleep, energy or emotions have quietly slipped out of balance.",
        "You've recovered on the outside, but your system still feels braced.",
        "You long for calm that is real, not performed.",
      ],
    },
    benefits: [
      {
        title: "A settled nervous system",
        body: "We gently move you out of survival mode and back toward rest, so your body can finally down-regulate and repair.",
      },
      {
        title: "Emotional balance",
        body: "Old tension and held emotion are met and released, leaving more space, steadiness and room to breathe.",
      },
      {
        title: "Self-regulation you keep",
        body: "You leave with a felt sense of your own centre — and simple practices to return to it on your own.",
      },
      {
        title: "Reconnection",
        body: "Beneath the noise, you meet yourself again: your needs, your intuition, your natural state.",
      },
    ],
    process: [
      {
        index: "01",
        title: "Arriving",
        body: "We begin with a quiet conversation. No pressure, no performance — simply landing, and listening to where you are.",
      },
      {
        index: "02",
        title: "Attuning",
        body: "I read the state of your system and we set a gentle intention. You do nothing but receive.",
      },
      {
        index: "03",
        title: "Release",
        body: "Through energy work, breath and deep relaxation, held stress begins to move and your system softens into safety.",
      },
      {
        index: "04",
        title: "Integration",
        body: "We close with grounding and a few tailored practices, so the calm continues living in your days.",
      },
    ],
    results: [
      "Deeper, more restful sleep",
      "A calmer, clearer mind",
      "Steadier emotions",
      "More energy through the day",
      "A felt sense of safety in the body",
      "Reconnection with your intuition",
    ],
    faqs: [
      {
        q: "What actually happens in a session?",
        a: "You rest, fully clothed and comfortable, while I work with the energy field and nervous system through gentle attention, breath and — in person — light touch. Most people describe it as profoundly relaxing, like exhaling after holding their breath for years.",
      },
      {
        q: "Does it work online?",
        a: "Yes. Energy is not bound by distance. Online sessions are held over video in the quiet of your own space, and are just as deep as being in the room together — many clients prefer them.",
      },
      {
        q: "How many sessions will I need?",
        a: "Some feel a shift after one. For lasting change with chronic stress, a rhythm of sessions over several weeks lets the nervous system relearn safety gradually. We decide together, never by pressure.",
      },
      {
        q: "Is this therapy or medical treatment?",
        a: "It is a complementary, restorative practice for wellbeing and self-regulation. It sits beautifully alongside medical or psychological care, and never replaces it.",
      },
      {
        q: "I'm sensitive / sceptical / very tired. Is that okay?",
        a: "All of it is welcome. Sensitivity is an asset here, scepticism is safe, and exhaustion is exactly what this work is for. You don't need to believe anything for your body to soften.",
      },
    ],
    cta: {
      title: "Begin with a session",
      body: "The first step is a gentle conversation. Tell me where you are, and we'll find the right way in.",
      action: "Book a session",
    },
  },
  {
    slug: "transformational-game",
    order: 2,
    name: "Transformational Game",
    tagline: "Play your way to clarity.",
    summary:
      "An interactive, guided experience that turns self-discovery into something you can see and feel. In a few focused hours you move past a stuck point and leave with real clarity on your next step.",
    promise: "What felt tangled becomes clear — almost like play.",
    format: "Online & in person · 1:1 or small group",
    accent: "olive",
    hero: {
      variant: "olive",
      motif: "none",
      alt: "A beautifully set table with cards and objects, warm light, an invitation to play.",
    },
    cardMedia: {
      variant: "olive",
      alt: "Olive-toned, considered, a sense of quiet play.",
    },
    forWhom: {
      title: "This is for you if",
      items: [
        "You're standing at a crossroads and can't see the way forward.",
        "A limiting pattern keeps repeating and you're ready to understand it.",
        "You want insight that feels alive, not another worksheet.",
        "You'd love a container to think honestly about your life.",
      ],
    },
    benefits: [
      {
        title: "Clarity you can act on",
        body: "The game externalises what's inside you, so the answer stops hiding and becomes obvious.",
      },
      {
        title: "Freedom from old limits",
        body: "You spot the belief that's been running the show — and choose a different move.",
      },
      {
        title: "A felt shift",
        body: "Insight lands in the body, not just the head. You leave changed, not merely informed.",
      },
      {
        title: "A map for the next step",
        body: "You walk away with a concrete, personal direction and the resolve to follow it.",
      },
    ],
    process: [
      {
        index: "01",
        title: "Your question",
        body: "We name the real question beneath the surface — the one worth answering right now.",
      },
      {
        index: "02",
        title: "The board",
        body: "Guided by the game, you move through a living landscape of your inner world, meeting each part honestly.",
      },
      {
        index: "03",
        title: "The turn",
        body: "A pattern reveals itself, and with it the moment of choice — the point where things begin to change.",
      },
      {
        index: "04",
        title: "Your move",
        body: "We translate insight into a clear next action, so the shift continues long after the game ends.",
      },
    ],
    results: [
      "A clear decision or direction",
      "Release of a limiting belief",
      "Renewed motivation",
      "A tangible next step",
      "A lighter, freer feeling",
    ],
    faqs: [
      {
        q: "Is this a board game?",
        a: "It uses a beautifully designed game as its structure, but it is a guided transformational process. The playfulness is what lets your deeper wisdom speak freely.",
      },
      {
        q: "Solo or with others?",
        a: "Both. One-to-one is intimate and precise; a small group adds warmth, reflection and shared insight. Each has its own magic.",
      },
      {
        q: "How long does it take?",
        a: "A session runs around two to three hours — enough to go deep and arrive somewhere real, in a single sitting.",
      },
      {
        q: "Do I need to prepare?",
        a: "Only bring one honest question or a situation you're wrestling with. The game and I will hold the rest.",
      },
    ],
    cta: {
      title: "Play your next chapter",
      body: "Bring the question you keep circling. In one session, we'll turn it into clarity.",
      action: "Book the game",
    },
  },
  {
    slug: "journeys",
    order: 3,
    name: "Women's Journeys",
    tagline: "Author's journeys for women who are ready to feel again.",
    summary:
      "Not a retreat. Not tourism. Intimate, beautifully designed journeys for women — luxury, nature, slow living and deep conversation, woven into an experience that quietly transforms you.",
    promise: "You come back with more than photographs.",
    format: "Small groups · A few times a year",
    accent: "clay",
    hero: {
      variant: "dusk",
      motif: "horizon",
      alt: "A woman looking out over a golden coastline at dusk, serene and free.",
    },
    cardMedia: {
      variant: "clay",
      motif: "horizon",
      alt: "Warm horizon at golden hour, a sense of aspiration and freedom.",
    },
    forWhom: {
      title: "This is for you if",
      items: [
        "You give so much to everyone that you've drifted from yourself.",
        "You crave beauty, rest and depth — all at once.",
        "You want to travel meaningfully, in exquisite company.",
        "You're ready to return home subtly, quietly changed.",
      ],
    },
    benefits: [
      {
        title: "Luxury with meaning",
        body: "Beautiful hotels, exceptional settings and slow, sensual days — with real inner depth underneath the beauty.",
      },
      {
        title: "Nature that resets you",
        body: "Landscapes chosen to soothe your system: sea, mountain, light and space to finally exhale.",
      },
      {
        title: "Conversations that matter",
        body: "Intimate circles of remarkable women, and the kind of talk that stays with you for years.",
      },
      {
        title: "Quiet transformation",
        body: "Gentle practices woven through the days, so you return not just rested — but subtly, deeply changed.",
      },
    ],
    process: [
      {
        index: "01",
        title: "The invitation",
        body: "A small circle of women is gathered with care. Every detail — place, pace, people — is chosen intentionally.",
      },
      {
        index: "02",
        title: "Arrival",
        body: "You step out of your life and into beauty. The nervous system begins to settle before the first evening ends.",
      },
      {
        index: "03",
        title: "The days",
        body: "Slow mornings, beautiful excursions, meaningful practice and free time to simply be. Nothing rushed, nothing forced.",
      },
      {
        index: "04",
        title: "The return",
        body: "You come home lighter, clearer and more yourself — carrying the journey quietly inside you.",
      },
    ],
    results: [
      "Deep rest and renewal",
      "A softer, more open heart",
      "New, lasting friendships",
      "Perspective and clarity",
      "A reconnection with pleasure",
    ],
    faqs: [
      {
        q: "How is this different from a retreat?",
        a: "There's no rigid schedule, no austerity, no dawn gongs. This is luxury travel with soul — pleasure and beauty first, with transformation woven gently through, on your own terms.",
      },
      {
        q: "Who will I be travelling with?",
        a: "A small, carefully gathered group of women — usually 25 to 50 — who share a love of growth, beauty and honest conversation. The company is part of the magic.",
      },
      {
        q: "What's included?",
        a: "Boutique accommodation, curated experiences, most meals, all in-journey guidance and gatherings. Flights and personal spending are separate. Full details are shared per journey.",
      },
      {
        q: "Can I come alone?",
        a: "Most women do. You'll arrive as an individual and leave with friendships — the intimacy of the group makes coming solo the most natural thing in the world.",
      },
    ],
    cta: {
      title: "Reserve your place",
      body: "Places are intentionally few. Tell me you're interested and I'll share the next journey personally.",
      action: "Request an invitation",
    },
  },
];

const ru: Service[] = [
  {
    slug: "energy-therapy",
    order: 1,
    name: "Энергоактивация",
    tagline: "Снять напряжение, которое годами живёт в теле.",
    summary:
      "Метод работы с телом, нервной системой и внутренним состоянием женщины. Через концентрацию внимания и мягкую работу с телом запускаются естественные процессы саморегуляции — тело освобождается от того, что удерживало годами, и возвращается к своей природной чувствительности.",
    promise: "Ничего не нужно делать через усилие — тело знает само.",
    format: "Индивидуально и в группе · онлайн и офлайн",
    accent: "gold",
    hero: {
      variant: "dawn",
      motif: "sun",
      alt: "Мягкий утренний свет на льне и открытые ладони, покоящиеся в тишине.",
    },
    cardMedia: {
      variant: "gold",
      motif: "sun",
      alt: "Тёплый золотой свет, спокойное и заземлённое присутствие.",
    },
    forWhom: {
      title: "С чем чаще всего приходят",
      items: [
        "Постоянная усталость и напряжение, которого уже не замечаешь.",
        "Тревога, внутренняя спешка и желание всё контролировать.",
        "Потеря интереса к жизни и нехватка энергии.",
        "Подавленные эмоции и страх проявляться.",
        "Ощущение, что живёшь будто не своей жизнью.",
      ],
    },
    benefits: [
      {
        title: "Уходит напряжение",
        body: "Постоянное внутреннее напряжение, с которым вы привыкли жить, наконец отпускает — в теле появляется лёгкость.",
      },
      {
        title: "Возвращается спокойствие",
        body: "Становится меньше тревоги и внутренней спешки, возвращается ощущение безопасности и доверие к себе.",
      },
      {
        title: "Проще решения",
        body: "Из спокойного состояния решения приходят иначе — без бесконечных сомнений и анализа.",
      },
      {
        title: "Больше жизни",
        body: "Возвращается энергия и желание жить, творить, любить и проявляться.",
      },
    ],
    process: [
      {
        index: "01",
        title: "Безопасность",
        body: "Мы создаём пространство, где ничего не нужно делать правильно, соответствовать ожиданиям или стараться получить результат.",
      },
      {
        index: "02",
        title: "Концентрация",
        body: "Через внимание, работу с определёнными точками тела и нервной системой мягко запускаются естественные процессы саморегуляции.",
      },
      {
        index: "03",
        title: "Освобождение",
        body: "Могут появиться непроизвольные движения, изменение дыхания, дрожь, слёзы — так тело отпускает то, что долго удерживало внутри.",
      },
      {
        index: "04",
        title: "Восстановление",
        body: "Нервная система переходит в режим восстановления, а телу возвращается природная чувствительность. Тело само выбирает темп.",
      },
    ],
    results: [
      "Лёгкость в теле",
      "Спокойствие вместо тревоги",
      "Доверие к себе",
      "Больше энергии",
      "Ясность в решениях",
      "Возвращение чувствительности",
    ],
    faqs: [
      {
        q: "Что происходит на сессии?",
        a: "Через концентрацию внимания и работу с точками тела и нервной системой запускаются естественные процессы саморегуляции. Могут возникать непроизвольные движения, изменение дыхания, дрожь, эмоциональное освобождение — это естественная реакция, которая помогает восстановить баланс. Ничего не нужно делать через усилие: тело само выбирает темп, к которому готово.",
      },
      {
        q: "Работает ли это онлайн?",
        a: "Да. Я провожу энергоактивации и онлайн, и офлайн, индивидуально и в группе. Онлайн-формат не менее глубок — за последние годы так со мной работали женщины из России, Украины, Беларуси, Узбекистана, Казахстана, Израиля, Италии, Таиланда, Индонезии, Финляндии и других стран.",
      },
      {
        q: "Мне нужно во что-то верить или что-то уметь?",
        a: "Нет. Не нужно ничего делать правильно, соответствовать ожиданиям или стараться получить результат. Мы не заставляем тело расслабляться — только создаём условия, в которых оно само вспоминает, как отпускать.",
      },
      {
        q: "Это психотерапия или лечение?",
        a: "Это бережная восстановительная практика для тела, нервной системы и состояния. Она хорошо сочетается с психологической или медицинской помощью и не заменяет её.",
      },
      {
        q: "Что я почувствую после?",
        a: "Чаще всего женщины рассказывают, что уходит напряжение, появляется лёгкость и спокойствие, возвращается доверие к себе, становится проще принимать решения и появляется больше энергии и желания жить.",
      },
    ],
    cta: {
      title: "Начните с сессии",
      body: "Первый шаг — мягкий разговор. Расскажите, где вы сейчас, и мы вместе найдём подходящий формат: индивидуально или в группе, онлайн или лично.",
      action: "Записаться на сессию",
    },
  },
  {
    slug: "transformational-game",
    order: 2,
    name: "Трансформационная игра",
    tagline: "Играючи прийти к ясности.",
    summary:
      "Интерактивный процесс с проводником, который превращает самопознание в то, что можно увидеть и почувствовать. За несколько сосредоточенных часов вы проходите точку застревания и уходите с ясностью о следующем шаге.",
    promise: "То, что казалось запутанным, становится ясным — почти как в игре.",
    format: "Онлайн и лично · 1:1 или малая группа",
    accent: "olive",
    hero: {
      variant: "olive",
      motif: "none",
      alt: "Красиво накрытый стол с картами и предметами, тёплый свет, приглашение к игре.",
    },
    cardMedia: {
      variant: "olive",
      alt: "Оливковые тона, вдумчивость, ощущение тихой игры.",
    },
    forWhom: {
      title: "Это для вас, если",
      items: [
        "Вы на перепутье и не видите пути вперёд.",
        "Ограничивающий сценарий повторяется, и вы готовы его понять.",
        "Вы хотите живого озарения, а не очередной таблицы.",
        "Вам нужно пространство, чтобы честно подумать о своей жизни.",
      ],
    },
    benefits: [
      {
        title: "Ясность, с которой можно действовать",
        body: "Игра выносит наружу то, что внутри, и ответ перестаёт прятаться, становится очевидным.",
      },
      {
        title: "Свобода от старых ограничений",
        body: "Вы замечаете убеждение, которое управляло всем — и выбираете другой ход.",
      },
      {
        title: "Ощутимый сдвиг",
        body: "Озарение приходит в тело, а не только в голову. Вы уходите изменившейся, а не просто проинформированной.",
      },
      {
        title: "Карта следующего шага",
        body: "Вы уходите с конкретным личным направлением и решимостью ему следовать.",
      },
    ],
    process: [
      {
        index: "01",
        title: "Ваш вопрос",
        body: "Мы называем настоящий вопрос под поверхностью — тот, на который стоит ответить сейчас.",
      },
      {
        index: "02",
        title: "Поле",
        body: "Ведомые игрой, вы проходите живой ландшафт своего внутреннего мира, честно встречая каждую его часть.",
      },
      {
        index: "03",
        title: "Поворот",
        body: "Проявляется сценарий, а с ним момент выбора — точка, где всё начинает меняться.",
      },
      {
        index: "04",
        title: "Ваш ход",
        body: "Мы переводим озарение в ясное следующее действие, чтобы сдвиг продолжался долго после игры.",
      },
    ],
    results: [
      "Ясное решение или направление",
      "Отпущенное ограничивающее убеждение",
      "Обновлённая мотивация",
      "Конкретный следующий шаг",
      "Ощущение лёгкости и свободы",
    ],
    faqs: [
      {
        q: "Это настольная игра?",
        a: "В её основе — красиво продуманная игра, но это процесс трансформации с проводником. Именно игровая лёгкость позволяет вашей глубинной мудрости говорить свободно.",
      },
      {
        q: "Одной или с другими?",
        a: "И так, и так. Один на один — камернее и точнее; малая группа добавляет тепла, отражения и общего инсайта. У каждого формата своя магия.",
      },
      {
        q: "Сколько это длится?",
        a: "Сессия длится около двух-трёх часов — достаточно, чтобы уйти вглубь и прийти к чему-то настоящему за одну встречу.",
      },
      {
        q: "Нужно ли готовиться?",
        a: "Достаточно принести один честный вопрос или ситуацию, которая вас беспокоит. Остальное держим я и игра.",
      },
    ],
    cta: {
      title: "Сыграйте свою следующую главу",
      body: "Принесите вопрос, вокруг которого ходите. За одну сессию мы превратим его в ясность.",
      action: "Записаться на игру",
    },
  },
  {
    slug: "journeys",
    order: 3,
    name: "Женские путешествия",
    tagline: "Авторские путешествия для женщин, готовых снова чувствовать.",
    summary:
      "Не ретрит. Не туризм. Камерные, красиво продуманные путешествия для женщин — роскошь, природа, медленная жизнь и глубокие разговоры, сплетённые в опыт, который тихо преображает.",
    promise: "Вы возвращаетесь не только с фотографиями.",
    format: "Малые группы · Несколько раз в год",
    accent: "clay",
    hero: {
      variant: "dusk",
      motif: "horizon",
      alt: "Женщина смотрит на золотое побережье на закате, спокойная и свободная.",
    },
    cardMedia: {
      variant: "clay",
      motif: "horizon",
      alt: "Тёплый горизонт в золотой час, ощущение мечты и свободы.",
    },
    forWhom: {
      title: "Это для вас, если",
      items: [
        "Вы так много отдаёте всем, что отдалились от себя.",
        "Вы жаждете красоты, отдыха и глубины — всего сразу.",
        "Вы хотите путешествовать со смыслом, в изысканной компании.",
        "Вы готовы вернуться домой едва заметно, тихо изменившейся.",
      ],
    },
    benefits: [
      {
        title: "Роскошь со смыслом",
        body: "Красивые отели, исключительные места и медленные, чувственные дни — с настоящей внутренней глубиной под красотой.",
      },
      {
        title: "Природа, которая перезагружает",
        body: "Пейзажи, выбранные, чтобы успокоить вашу систему: море, горы, свет и простор, чтобы наконец выдохнуть.",
      },
      {
        title: "Разговоры, которые важны",
        body: "Камерные круги замечательных женщин и разговоры, которые остаются с вами на годы.",
      },
      {
        title: "Тихая трансформация",
        body: "Мягкие практики, вплетённые в дни, чтобы вернуться не просто отдохнувшей — а тихо, глубоко изменившейся.",
      },
    ],
    process: [
      {
        index: "01",
        title: "Приглашение",
        body: "Небольшой круг женщин собирается с заботой. Каждая деталь — место, ритм, люди — выбрана осознанно.",
      },
      {
        index: "02",
        title: "Прибытие",
        body: "Вы выходите из своей жизни в красоту. Нервная система начинает успокаиваться ещё до конца первого вечера.",
      },
      {
        index: "03",
        title: "Дни",
        body: "Неспешные утра, красивые поездки, значимые практики и свободное время, чтобы просто быть. Ничего впопыхах, ничего через силу.",
      },
      {
        index: "04",
        title: "Возвращение",
        body: "Вы возвращаетесь легче, яснее и больше собой — унося путешествие тихо внутри.",
      },
    ],
    results: [
      "Глубокий отдых и обновление",
      "Более мягкое, открытое сердце",
      "Новые, долгие дружбы",
      "Перспектива и ясность",
      "Возвращённая связь с удовольствием",
    ],
    faqs: [
      {
        q: "Чем это отличается от ретрита?",
        a: "Здесь нет жёсткого расписания, аскезы и подъёмов по гонгу на рассвете. Это роскошное путешествие с душой — сначала удовольствие и красота, а трансформация мягко вплетена, на ваших условиях.",
      },
      {
        q: "С кем я буду путешествовать?",
        a: "С небольшой, бережно собранной группой женщин — обычно от 25 до 50 лет — которых объединяет любовь к росту, красоте и честным разговорам. Компания — часть магии.",
      },
      {
        q: "Что входит?",
        a: "Бутик-проживание, продуманные впечатления, большинство приёмов пищи, всё сопровождение и встречи в путешествии. Перелёты и личные расходы — отдельно. Полные детали — по каждому путешествию.",
      },
      {
        q: "Можно приехать одной?",
        a: "Большинство так и делают. Вы приезжаете как отдельный человек, а уезжаете с дружбами — камерность группы делает поездку в одиночку самым естественным решением.",
      },
    ],
    cta: {
      title: "Забронировать место",
      body: "Мест намеренно немного. Напишите, что вам интересно, и я лично расскажу о ближайшем путешествии.",
      action: "Запросить приглашение",
    },
  },
];

const servicesByLocale: Record<Locale, Service[]> = { en, ru };

export const getServices = (locale: Locale) => servicesByLocale[locale];

export const getServicesByOrder = (locale: Locale) =>
  [...servicesByLocale[locale]].sort((a, b) => a.order - b.order);

export const getService = (locale: Locale, slug: string) =>
  servicesByLocale[locale].find((s) => s.slug === slug);

/** Slugs are locale-independent. */
export const serviceSlugs = en.map((s) => s.slug);
