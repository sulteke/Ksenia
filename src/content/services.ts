import type { Service } from "./types";

/**
 * THE THREE DIRECTIONS.
 * Energy Therapy is the heart of the practice and carries the most detail.
 */
export const services: Service[] = [
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

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const servicesByOrder = [...services].sort((a, b) => a.order - b.order);
