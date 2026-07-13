import type { Feature, Media } from "./types";
import { site } from "./site";

export const about = {
  eyebrow: "The woman behind the work",
  title: "I help women come home to themselves.",
  portrait: {
    variant: "sand",
    motif: "none",
    alt: `A warm, natural portrait of ${site.founder}, calm and present.`,
  } as Media,

  /** Her voice — first person. */
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
    {
      title: "Safety first",
      body: "Nothing real happens without safety. Everything I do begins by making it truly safe to let go.",
    },
    {
      title: "Depth over hype",
      body: "No pressure, no performance, no quick fixes. Only honest, lasting change at a human pace.",
    },
    {
      title: "Beauty as medicine",
      body: "Calm, beauty and pleasure aren't extras — they're part of how the nervous system heals.",
    },
    {
      title: "Your own authority",
      body: "I never hand you dependence. I hand you back to yourself, with tools you keep for life.",
    },
  ] as Feature[],

  signature: `With warmth, ${site.founder}`,
};
