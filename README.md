# Aurelia — premium personal brand website

A calm, editorial, luxury website for a practitioner offering **Energy Therapy**,
a **Transformational Game**, and **women’s transformational Journeys**.

Built to feel like an Aman / Aesop / Apple‑grade experience: warm, spacious,
photographic, and quietly expensive — with a cinematic scroll, a native‑feeling
mobile experience, and a full SEO/performance setup.

> **Brand name is a placeholder.** “Aurelia” (evokes *aurum*, gold, light) and
> all handles/phone numbers are placeholders. Change them in one place:
> [`src/content/site.ts`](src/content/site.ts). See the wordmark in
> [`src/components/shared/logo.tsx`](src/components/shared/logo.tsx).

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Bilingual** 🇷🇺 🇬🇧 — Russian (default) + English, at `/ru` and `/en`
- **Tailwind CSS** design system (warm‑neutral tokens, fluid type scale)
- **Playfair Display** (display serif, Latin + Cyrillic) + **Inter** (body)
- **Framer Motion** for the motion system
- **Radix UI** primitives, styled in **shadcn/ui** style (`components/ui`)
- Static‑first: every route prerenders to HTML for **both** locales.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

## Project structure

```
src/
  middleware.ts            # locale detection + redirects ("/" → "/ru")
  app/
    [locale]/              # all pages live under the locale segment (/ru, /en)
      layout.tsx           #   root layout: fonts, <html lang>, header/footer
      page.tsx             #   home — the full narrative
      about/               #   About
      energy-therapy/      #   ┐ service detail pages (share ServiceDetail template)
      transformational-game/ # ┘
      journeys/            #   bespoke luxury‑travel page
      not-found.tsx        #   localized 404
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg
  i18n/                    # config.ts (locales, helpers) — the i18n source of truth
  components/
    layout/                # header, footer, loader, scroll progress, mobile CTA, language switcher
    sections/              # every page section (hero, services, testimonials, gallery…)
    motion/                # Reveal, Stagger, Parallax, Magnetic, Marquee, WordReveal, Counter
    shared/                # ArtImage, Logo, SectionHeading, JourneyCard
    ui/                    # Button, Accordion, Dialog (shadcn‑style, Radix‑powered)
  content/                 # ← ALL editable copy & data, per language (see content/README.md)
  hooks/                   # useReveal (robust in‑view trigger)
  lib/                     # cn(), SEO helpers + JSON‑LD, utils
```

## Languages (i18n)

Bilingual with locale‑prefixed URLs (`/ru`, `/en`). `src/middleware.ts` detects
the visitor's language (cookie → `Accept-Language` → Russian default) and
redirects `/`. Content lives per‑language in `src/content/*` as `ru` / `en`
pairs; the header/footer carry a **language switcher** that keeps the current
page. SEO is locale‑aware: per‑locale `<html lang>`, `<title>`, canonical +
`hreflang` alternates, and a sitemap covering both locales. Change the default
or add a language in `src/i18n/config.ts`.

## Content & “CMS”

All copy, services, journeys, testimonials, FAQ, gallery and contact details live
in [`src/content`](src/content) as clean, typed, well‑commented data files — the
client edits words, never code. Full guide: **[`src/content/README.md`](src/content/README.md)**.
The layer maps 1:1 onto **Sanity/Payload** for a future visual dashboard.

## Imagery

Ships with a first‑class **art‑directed placeholder system**
([`ArtImage`](src/components/shared/art-image.tsx)) — warm layered gradients with
sun/horizon motifs and film grain — so the site looks finished with zero photos.
Drop in real photography by adding a `src` to any image in the content files;
`next.config.mjs` already allows Unsplash / Cloudinary / Sanity hosts and uses
`next/image` optimisation (AVIF/WebP).

## SEO & performance

- Per‑page metadata, canonicals, Open Graph + Twitter cards ([`lib/seo.ts`](src/lib/seo.ts))
- Dynamic OG image ([`app/opengraph-image.tsx`](src/app/opengraph-image.tsx))
- JSON‑LD structured data: `ProfessionalService` + per‑service `FAQPage`
- `sitemap.xml`, `robots.txt`, PWA `manifest.webmanifest`, SVG favicon
- Static prerendering, font optimisation (`next/font`), lazy image loading,
  `prefers-reduced-motion` respected.

## Motion system (note for developers)

Entrance reveals use [`useReveal`](src/hooks/use-reveal.ts) rather than framer’s
`whileInView`. It combines a post‑paint bounding‑box check with passive
scroll/resize/visibility listeners, so on‑screen content reveals reliably even in
embedded/preview browsers that throttle `requestAnimationFrame` or defer the
IntersectionObserver’s initial callback. Word‑mask reveals animate in **pixels**
(not `%`) so framer interpolates the transform reliably.

## Deploy

Zero‑config on **Vercel** (or any Node host: `npm run build` → `npm run start`).
Before launch, set the real domain in `site.url` ([`src/content/site.ts`](src/content/site.ts))
so canonicals, sitemap and Open Graph resolve correctly.
