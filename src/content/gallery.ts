import type { GalleryItem } from "./types";

/** Masonry gallery. `size` drives the span; swap `variant` for real `src` photos. */
export const gallery: GalleryItem[] = [
  { variant: "dawn", motif: "sun", size: "tall", alt: "Morning light through sheer curtains.", caption: "First light" },
  { variant: "sand", size: "regular", alt: "Hands resting open in a lap.", caption: "Stillness" },
  { variant: "olive", size: "wide", alt: "A quiet olive grove path.", caption: "The grove" },
  { variant: "gold", motif: "sun", size: "regular", alt: "Golden light on a linen wall.", caption: "Warmth" },
  { variant: "dusk", motif: "horizon", size: "tall", alt: "A coastline at golden hour.", caption: "Golden hour" },
  { variant: "clay", size: "regular", alt: "Terracotta and ceramics in soft light.", caption: "Slow living" },
  { variant: "mist", size: "wide", alt: "Calm water meeting a soft sky.", caption: "Space to breathe" },
  { variant: "linen", size: "regular", alt: "A set table awaiting a shared meal.", caption: "Gathering" },
  { variant: "gold", size: "tall", alt: "A candle and a single flower.", caption: "Ritual" },
  { variant: "sand", motif: "horizon", size: "regular", alt: "Dunes under a wide sky.", caption: "Open horizon" },
];
