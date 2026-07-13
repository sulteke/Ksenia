import type { Journey } from "./types";

/** Upcoming author's journeys. Add, remove or reorder freely. */
export const journeys: Journey[] = [
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

export const getJourney = (slug: string) =>
  journeys.find((j) => j.slug === slug);
