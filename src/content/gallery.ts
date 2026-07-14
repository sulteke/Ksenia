import type { GalleryItem } from "./types";
import type { Locale } from "@/i18n/config";

/** Masonry gallery. `size` drives the span; swap `variant` for real `src` photos. */
const en: GalleryItem[] = [
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

const ru: GalleryItem[] = [
  { variant: "dawn", motif: "sun", size: "tall", alt: "Утренний свет сквозь лёгкие шторы.", caption: "Первый свет" },
  { variant: "sand", size: "regular", alt: "Открытые ладони, покоящиеся на коленях.", caption: "Тишина" },
  { variant: "olive", size: "wide", alt: "Тихая тропа в оливковой роще.", caption: "Роща" },
  { variant: "gold", motif: "sun", size: "regular", alt: "Золотой свет на льняной стене.", caption: "Тепло" },
  { variant: "dusk", motif: "horizon", size: "tall", alt: "Побережье в золотой час.", caption: "Золотой час" },
  { variant: "clay", size: "regular", alt: "Терракота и керамика в мягком свете.", caption: "Медленная жизнь" },
  { variant: "mist", size: "wide", alt: "Спокойная вода, встречающая мягкое небо.", caption: "Простор, чтобы дышать" },
  { variant: "linen", size: "regular", alt: "Накрытый стол в ожидании общей трапезы.", caption: "Встреча" },
  { variant: "gold", size: "tall", alt: "Свеча и один цветок.", caption: "Ритуал" },
  { variant: "sand", motif: "horizon", size: "regular", alt: "Дюны под широким небом.", caption: "Открытый горизонт" },
];

const byLocale: Record<Locale, GalleryItem[]> = { en, ru };

export const getGallery = (locale: Locale) => byLocale[locale];
