# TH true MILK — Design System

A brand-faithful design system for **TH true MILK** / **TH Group**, Vietnam's
premium "clean, fresh, completely-from-nature" dairy and nutrition company.
It packages TH's visual DNA — the navy-and-gold wordmark, the champagne floral
mark, the rounded DIN Round typography, a fresh blue + natural green accent
palette — into tokens, components, and full product UI kits so any design agent
can produce on-brand TH work.

> **TH = "True Happiness"** (Hạnh phúc đích thực). The company's promise is to
> bring people the *truest*, purest products from nature — "Fresh · Clean ·
> Pure essence from nature" (Tươi – Sạch – Tinh túy từ thiên nhiên).

---

## 1. Brand & product context

**TH Group** (Tập đoàn TH) is a Vietnamese high-tech agriculture and food group.
Its flagship is **TH true MILK**, the country's leading fresh-milk brand,
produced on closed-loop, hi-tech dairy farms. The portfolio has expanded into a
full "true" ecosystem of natural, low/no-added-sugar food and beverages.

**Naming convention.** Products are branded `TH true <THING>`, lowercase "true",
uppercase product word:

- **TH true MILK** — pasteurised & UHT fresh milk (the hero line)
- **TH true YOGURT** — natural & drinking yogurt
- **TH true NUT** — plant / nut milks (sữa hạt)
- **TH true JUICE** — fruit & milk-fruit drinks
- **TH true WATER** — purified water
- **TH true RICE** — roasted-rice drink
- **TH true CHEESE / BUTTER** — mozzarella sticks, natural butter
- **TOPKID / TOPTEEN** — milks formulated for children & teens
- **TH true mart** — TH's own retail store chain & e-commerce (the consumer
  touchpoint we recreate as a UI kit)

**Positioning words to keep in mind:** clean, fresh, pure, natural, safe,
nutritious, trustworthy, premium, wholesome, modern-Vietnamese.

**Taglines (use verbatim, don't invent new ones):**
- Brand name meaning: **"True Happiness"**
- Product slogan: **"Thật sự thiên nhiên" / "Truly Natural"**
- Essence: **"Tươi – Sạch – Tinh túy từ thiên nhiên"** (Fresh – Clean – Pure essence from nature)
- Corporate aspiration: **"Vì tầm vóc Việt"** (For Vietnamese Stature)

### Sources used to build this system
The user supplied **brand assets only** — no codebase or Figma file. This system
is reconstructed from those assets plus public brand references. Stored here in
case the reader has access:

- Uploaded logos: `assets/logo-th-primary.png`, `assets/logo-th-white.png`,
  `assets/logo-th-white-gold-flower.png`, `assets/flower-mark-gold.png`
- Uploaded fonts: DIN Round OT (Light / Regular / Medium / Bold) → `assets/fonts/`
- Public references: `thmilk.vn`, `thgroupglobal.com` (TH Group global site),
  `th-truemart.com.vn` (TH true mart store).

> ⚠️ **No source code / Figma was provided.** Component internals and UI-kit
> layouts are faithful *recreations* informed by the brand assets and public
> sites — not extracted from production code. Colours are sampled directly from
> the supplied logo (navy `#183D6E`, gold `#C9AE6C` / champagne `#F1E2BC`).

---

## 2. Content fundamentals — how TH writes

**Voice:** warm, sincere, reassuring, quietly proud. TH talks like a caring
provider, not a hype machine. The emotional register is *trust and care* — milk
for your family, for the nation's children, for "Vietnamese stature."

**Tone & person.**
- Speaks **to "you / your family"** and **about "we / TH"**. Inclusive, familial.
- Confident but never boastful — claims are about purity, nature, science, and
  safety, always substantiated (closed-loop farms, international standards).
- Bilingual brand: Vietnamese-first for the home market, clean English for
  global. English copy stays simple and declarative.

**Casing & mechanics.**
- The product lockup is always `TH true <WORD>` — lowercase "true", the product
  word in **uppercase** (TH true MILK, TH true YOGURT).
- Headlines are **sentence case or Title Case**, short and benefit-led; not
  ALL-CAPS shouting. Small **eyebrows/labels are uppercase** with wide tracking.
- Numbers and claims are concrete: "100% fresh milk", "no added sugar",
  "from our own farms".

**Vocabulary to favour:** fresh, clean, pure, natural, nutritious, wholesome,
trusted, gentle, every drop, from nature, for your family, hi-tech farm.
**Avoid:** slangy hype, aggressive discount-speak, jargon, irony, fear-mongering.

**Emoji:** Not part of the brand voice. Avoid in product/marketing copy. (A
sparing ★ flourish nods to the gold mark, but prefer the real flower asset.)

**Example copy (on-brand):**
- "Fresh, clean milk — true essence of nature in every drop."
- "From our own hi-tech farms to your family's table."
- "Truly natural. Truly TH."
- CTA style: "Shop now", "Find a store", "Discover TH true NUT" — calm,
  direct, no exclamation-mark spam.

---

## 3. Visual foundations

### Colour
- **Brand Navy `#183D6E`** (`--navy-700`) is the anchor — wordmark, headlines,
  primary buttons, footers, hero blocks. It reads premium, trustworthy, calm.
- **Champagne Gold** (`--gold-500 #C9AE6C` → highlight `#F1E2BC` → deep `#8A7339`)
  is the *premium signature*, used sparingly: the floral mark, hairline accents,
  premium ribbons, dividers, and gold-gradient flourishes (`--gold-gradient`).
  Gold is a jewel, not a fill — never large flat gold areas.
- **White** dominates surfaces. The brand world is bright, airy, milk-clean.
- **Fresh Sky `#2E9BD6`** (`--sky-500`) — secondary accent evoking clean
  milk/water/sky; links, info, fresh product tags.
- **Natural Green `#5A9E3F`** (`--green-500`) — farm / herbal / "natural"
  signalling, success states.
- **Warm neutrals** for text and UI chrome (`--neutral-*`), never pure black.
  Body text is `--neutral-800`; the strongest text is near-navy `--navy-900`.

### Typography
- Single family: **DIN Round OT** — a soft, rounded, geometric humanist sans.
  Friendly yet precise; pairs the brand's "premium + caring" duality.
- **Light (300)** for large display numerals & airy hero type;
  **Regular (400)** body; **Medium (500)** headings/labels/buttons;
  **Bold (700)** emphasis & punchy headlines.
- Display is set tight (`--tracking-tight`, `--leading-tight`) and balanced.
  Eyebrows/overlines are uppercase with wide tracking (`--tracking-caps`).
- The **"TH" wordmark itself is a custom serif** (in the logo asset only) — do
  **not** try to set "TH" in DIN Round to fake the logo; use the logo PNG.

### Spacing & layout
- 4px-based scale (`--space-*`). Generous whitespace; the brand breathes.
- Centred content containers (`--container` 1200px / `--container-wide` 1360px).
- Comfortable, airy density — this is consumer/retail, not a dense dashboard.

### Shape & corners
- **Rounded** everywhere, echoing DIN Round and the soft brand personality.
  Cards `--radius-lg` (18px) → `--radius-xl` (26px); pills `--radius-pill`;
  inputs/buttons `--radius-md`–`--radius-pill`. Avoid hard 0px corners.

### Surfaces, borders, shadows
- Cards: white surface, hairline `--border` (`#e1e4ea`), soft **navy-tinted**
  shadow (`--shadow-sm/md`) — never harsh black drop shadows.
- Shadows are low, soft and cool (tinted with navy `rgba(15,35,71,…)`).
  A special `--shadow-gold` gives premium elements a warm lift.
- Section dividers are hairlines or thin gold rules — not heavy bars.

### Imagery
- Bright, fresh, naturally lit. Greens of pastures, blue skies, white milk,
  clean studio product shots on white. Warm and wholesome, **never** moody,
  grungy, high-contrast, or heavily filtered. Slight warmth is welcome.
- Hero treatments: full-bleed farm/sky/product photography with navy or
  white text panels; gold floral mark as a watermark/flourish accent.

### Motion
- Gentle and graceful — soft fades and short rises (`--dur-base` 200ms,
  `--ease-out`). **No** bouncy/springy, aggressive, or playful-cartoon motion.
  Premium calm. Respect `prefers-reduced-motion`.

### Interaction states
- **Hover:** darken brand fills one step (navy-700 → navy-800), or lift card
  shadow `sm → md`; ghost/links gain the soft brand wash (`--brand-soft`).
- **Press:** slightly deeper colour + subtle `scale(.98)` — never large bounce.
- **Focus:** 3px soft navy ring (`--focus-ring` / `--ring`), keyboard-visible.
- **Disabled:** reduced opacity, no shadow, `not-allowed` cursor.

### Transparency & blur
- Used lightly: sticky headers may use a white blur (`backdrop-filter`) over
  photography; gold-gradient overlays/scrims protect text over imagery. Avoid
  heavy glassmorphism — the brand favours clean opaque surfaces.

---

## 4. Iconography

- **No proprietary icon font was provided.** TH's own product UI uses simple,
  friendly **line icons** with rounded caps/joins — consistent with DIN Round's
  rounded geometry.
- **Substitution (flagged):** this system uses **[Lucide](https://lucide.dev)**
  via CDN as the icon set — its rounded-cap, ~2px-stroke line style is the
  closest match to TH's friendly-but-precise feel. **If TH has an official icon
  library, please share it and we'll swap Lucide out.**
  Load: `<script src="https://unpkg.com/lucide@latest"></script>` then
  `lucide.createIcons()`; or use `https://unpkg.com/lucide-static/icons/<name>.svg`.
- Use line (not filled) icons by default; 1.75–2px stroke; size 18–24px in UI.
  Tint with `currentColor` so they inherit navy/neutral text colour. Reserve
  gold for the brand mark, not for utility icons.
- **The floral / star mark** (`assets/flower-mark-gold.png`, and the gold flower
  in the full logo) is the one true brand glyph — an 8-petal champagne lily/star
  signalling credibility and the "natural essence" promise. Use it as a brand
  flourish, watermark, list bullet, or section ornament — never redraw it.
- **Emoji / unicode as icons:** avoid. Use real line icons or the brand mark.

---

## 5. Index / manifest

Root files
- `styles.css` — global entry point (import this one file). `@import`s the tokens.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.

`tokens/`
- `colors.css` — navy / gold / sky / green scales + semantic aliases
- `typography.css` — DIN Round families, weights, type scale, tracking
- `effects.css` — spacing, radii, shadows, motion, layout widths
- `fonts.css` — `@font-face` for DIN Round OT (4 weights)
- `base.css` — element defaults + helpers (`.th-eyebrow`, `.th-gold-text`)

`assets/`
- `logo-th-primary.png` — navy TH + gold flower (on light)
- `logo-th-white.png` — all-white logo (on navy/photo)
- `logo-th-white-gold-flower.png` — white TH + gold flower (on navy/photo)
- `flower-mark-gold.png` — standalone gold floral mark
- `fonts/` — DIN Round OT OTFs

`components/` — reusable React primitives (see each `*.prompt.md`)
- `core/` — Button, IconButton, Badge, Tag, Card, ProductCard, Input, Select,
  Checkbox, Radio, Switch, Avatar, Tabs, Breadcrumb, Rating, QtyStepper, Alert,
  PriceTag, SectionHeading, Logo (see component cards in the Design System tab)

`ui_kits/`
- `th-true-mart/` — TH true mart retail e-commerce store (shop, PDP, cart)
- `th-brand/` — TH corporate/marketing brand site (hero, products, farm story)

`templates/` — copy-to-start folders consuming projects can seed from
- `th-storefront/` — retail e-commerce starter (header, hero, product grid)
- `th-landing/` — brand marketing starter (navy hero, pillars, gold CTA)

Foundation specimen cards live throughout and are tagged `@dsCard` so the
Design System tab renders them (groups: Brand, Colors, Type, Spacing,
Components, plus the two product groups).
