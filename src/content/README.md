# Editing the site content

**Everything you can change on the website lives in this folder.** You do not
need to touch any design or code files. Each file below controls one part of the
site. Edit the text between the quotation marks `"..."`, save, and the site
updates.

## 🌍 Two languages (Russian + English)

The site is bilingual: **Russian** (`/ru`, the default) and **English** (`/en`),
with a switcher in the header. Inside most files you'll see two blocks — `ru`
and `en`:

```ts
const ru = [ /* Russian text here */ ];
const en = [ /* English text here */ ];
```

Edit the **matching block** for the language you want to change (change the
Russian text inside `ru`, the English inside `en`). Keep both in sync so nothing
looks half-translated. `src/content/ui.ts` holds the small interface labels
(buttons, section titles) in the same `ru` / `en` pairs.

- To change the **default language**, edit `defaultLocale` in `src/i18n/config.ts`.
- **Photos, prices, dates and layout are shared** across both languages — only
  the words differ.

> Tip: keep the punctuation exactly as it is — the quotes `"`, commas `,` and
> curly braces `{ }` are the “containers” that hold your words. Only change the
> words **inside** the quotes.

| File | Controls |
| --- | --- |
| `site.ts` | Brand name, tagline, and **all contact details** (Instagram, WhatsApp, Telegram, email) + the navigation menu. |
| `home.ts` | The home‑page hero headline, the philosophy lines, and the short intros above each section. |
| `services.ts` | The three offerings (Energy Therapy, Transformational Game, Journeys): descriptions, benefits, process steps, results and their FAQs. |
| `journeys.ts` | Every trip: title, location, dates, price, what’s included, the daily programme and photos. Add or remove whole trips here. |
| `about.ts` | Your story, mission and values on the About page. |
| `approach.ts` | The “why choose me” method steps, the trust points, the result words and the statistics. |
| `testimonials.ts` | Client quotes for the animated slider. |
| `faq.ts` | The general questions on the home page. |
| `gallery.ts` | The photo gallery tiles. |

## Common edits

**Change a phone number / handle** → `site.ts`, inside the `contact { … }` block.

**Add a new journey** → open `journeys.ts`, copy one whole `{ … }` block
(from `{` to `},`), paste it below, and change the details. `status` can be
`"open"`, `"waitlist"` or `"soon"`.

**Add a testimonial** → `testimonials.ts`, copy a `{ … }` block and edit it.

**Add a gallery photo** → `gallery.ts`, copy a line and edit its `caption`
and `size` (`"tall"`, `"wide"` or `"regular"`).

## Adding real photography

The site ships with hand‑crafted, warm gradient placeholders so it looks
finished immediately. To use real photos, add a `src` to any image, e.g.:

```ts
hero: {
  src: "https://images.unsplash.com/photo-...",   // ← your photo URL
  variant: "dawn",                                 // stays as a fallback
  alt: "A calm portrait in soft morning light.",
},
```

Photo hosts already allowed: **Unsplash, Cloudinary, Sanity CDN** (configured in
`next.config.mjs` — add more hosts there if needed). Always fill in a short,
descriptive `alt` — it helps accessibility and SEO.

## Want a visual editor (no code at all)?

This content layer is deliberately structured to map 1:1 onto a headless CMS.
The recommended upgrade path is **Sanity** or **Payload**: the developer mirrors
these files as CMS “schemas”, and you then edit everything from a friendly
dashboard with live preview. Nothing about the design needs to change.
