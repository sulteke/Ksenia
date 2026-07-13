/**
 * Content model for AURELIA.
 * Every editable string on the site is typed here and authored in the sibling
 * files. This layer is intentionally framework-free so it can later be swapped
 * for a headless CMS (Sanity / Payload) with a matching schema — see
 * `src/content/README.md`.
 */

export type ArtVariant =
  | "dawn"
  | "dusk"
  | "sand"
  | "olive"
  | "gold"
  | "linen"
  | "clay"
  | "mist";

/** A visual slot. `src` (real photography) wins; otherwise the art placeholder renders. */
export interface Media {
  /** Optional real image URL (Unsplash / Cloudinary / Sanity CDN — see next.config). */
  src?: string;
  /** Art-directed gradient used until real photography is added. */
  variant: ArtVariant;
  /** Accessible description of the intended photograph. */
  alt: string;
  /** Optional landscape motif for hero-style blocks. */
  motif?: "sun" | "horizon" | "none";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  handle: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  service: string;
  rating?: number;
}

export interface GalleryItem extends Media {
  /** Masonry span hint: "tall" | "wide" | "regular". */
  size: "tall" | "wide" | "regular";
  caption?: string;
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  order: number;
  /** Short label for nav / cards. */
  name: string;
  /** One-line positioning. */
  tagline: string;
  /** Card + hero description. */
  summary: string;
  /** Emotional promise shown large on the detail hero. */
  promise: string;
  format: string;
  accent: "gold" | "olive" | "clay";
  hero: Media;
  cardMedia: Media;
  forWhom: { title: string; items: string[] };
  benefits: Feature[];
  process: ProcessStep[];
  results: string[];
  faqs: Faq[];
  cta: { title: string; body: string; action: string };
}

export interface Journey {
  slug: string;
  title: string;
  location: string;
  country: string;
  season: string;
  dates: string;
  nights: number;
  places: number;
  priceFrom: string;
  status: "open" | "waitlist" | "soon";
  summary: string;
  hero: Media;
  gallery: Media[];
  highlights: string[];
  included: string[];
  day: ProcessStep[];
}
