import type { Feature, ProcessStep, ResultStat } from "./types";

/** "Why choose her" — methodology as an elegant timeline. */
export const methodology: ProcessStep[] = [
  {
    index: "01",
    title: "We begin with safety",
    body: "Before anything else, we build the conditions for your system to relax. No pushing, no exposure, no rush — only a space calm enough to let go in.",
  },
  {
    index: "02",
    title: "We listen to the body",
    body: "Your body has been keeping score for years. Rather than analysing from the head, we work directly with the nervous system, where the tension actually lives.",
  },
  {
    index: "03",
    title: "We release, gently",
    body: "Held stress and emotion are met and allowed to move — slowly enough to feel safe, deeply enough to make a real difference.",
  },
  {
    index: "04",
    title: "We restore self-regulation",
    body: "You relearn the felt sense of your own centre, so calm becomes something you can find again on your own, in ordinary life.",
  },
  {
    index: "05",
    title: "We integrate for the long run",
    body: "You leave with simple, personal practices — not dependence on me. The goal is always to return you to yourself.",
  },
];

/** Signals of a professional, trustworthy practice. */
export const distinctions: Feature[] = [
  {
    title: "A nervous-system approach",
    body: "Rooted in how safety, stress and regulation actually work in the body — not vague promises.",
  },
  {
    title: "Online & in person",
    body: "The same depth whether we meet in the room or across the world by video.",
  },
  {
    title: "Held with total discretion",
    body: "A private, confidential practice. What you bring stays entirely between us.",
  },
  {
    title: "Woman-centred, always",
    body: "Designed around the real lives, pressures and inner worlds of women 25–50.",
  },
];

export const results = {
  eyebrow: "How it feels afterwards",
  title: "The quiet difference of feeling like yourself again.",
  lede: "Change here is rarely loud. It's the exhale you didn't know you were holding — and then, gradually, a different way of living.",
  states: [
    "Calmer",
    "More rested",
    "Clearer",
    "Lighter",
    "More present",
    "More yourself",
  ],
};

export const stats: ResultStat[] = [
  { value: "10", label: "years holding this work" },
  { value: "1,200+", label: "sessions guided" },
  { value: "30+", label: "countries reached online" },
  { value: "98%", label: "would return or refer" },
];
