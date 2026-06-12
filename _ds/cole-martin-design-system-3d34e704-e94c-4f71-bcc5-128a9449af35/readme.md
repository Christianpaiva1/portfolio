# Cole Martin — Design System

A glassy, editorial design system for **Cole Martin**, a product designer. Built around oversized
uppercase display type, technical monospace metadata, three pastel accents on a warm off-white
canvas, and a signature material vocabulary of glass surfaces, gradient border shells, and organic
blob-shaped accent cards.

> **Source:** This system was authored from a written brand/style specification (no codebase or
> Figma file was attached). If you have the original Figma, production site, or font binaries, share
> them and this system can be tightened to match exactly. Fonts are currently loaded from Google
> Fonts via CDN — see the caveat under *Visual Foundations → Type*.

---

## At a glance

| | |
|---|---|
| **Vibe** | Editorial, glassy, technical-but-warm. Designer-portfolio energy. |
| **Composition** | Grid · full-bleed · strong structural framing |
| **Display type** | Space Grotesk — oversized, uppercase, tight tracking |
| **Support type** | Space Mono — small, wide-tracked labels & body |
| **Accents** | Lavender `#A79CFF` · Amber `#F4B942` · Sage `#88C999` |
| **Canvas** | Warm off-white `#F9F8F5`; deep `#000000` for inversions |
| **Material** | Glass-first — blur 12px, hairline borders, soft low shadows |
| **Signature** | Gradient border shells + organic blob accent cards |
| **Motion** | Moderate — ~150ms, `cubic-bezier(0.4,0,0.2,1)`, GSAP ScrollTrigger reveals |

---

## CONTENT FUNDAMENTALS

How copy is written across this brand.

- **Voice:** First-person and direct — *"I design products,"* *"Selected work,"* *"Let's build
  something."* Cole speaks as himself. When describing capabilities, lead with the value, not the
  feature.
- **Tone:** Confident, plain-spoken, lightly technical. Sentences are short and declarative. No
  marketing fluff, no exclamation-point energy. Restraint reads as craft.
- **Casing:** Two registers, used deliberately:
  - **UPPERCASE** for display statements, section numerals, and labels (Space Grotesk display +
    Space Mono labels are both set uppercase).
  - **Sentence case** for body copy and longer prose (Space Mono body).
- **Labels & metadata:** Monospace, uppercase, widely tracked, often prefixed with an index —
  `01 / WORK`, `[ AVAILABLE ]`, `EST. 2019`. Treat metadata like a spec sheet.
- **Numbers:** Used as oversized display moments (`140`, `01`, `2026`), not decorative stats.
  Don't pad the page with invented metrics.
- **Emoji:** None. The system has no emoji. Iconography is linear/outline only.
- **Examples:**
  - Hero: `PRODUCT / DESIGNER` (display) + `Designing calm, useful software since 2019.` (mono body)
  - Label: `01 — SELECTED WORK`
  - Status pill: `[ OPEN FOR PROJECTS ]`
  - CTA: `Start a project →`

---

## VISUAL FOUNDATIONS

### Color
A **light-mode, warm** palette. The page sits on off-white `#F9F8F5`; pure white `#FFFFFF` is the
raised surface. Text is near-black `#1A1A1A` (secondary `#1F2937`). Three pastel accents carry
emphasis and never compete: **lavender** (primary — action, links, focus), **amber** (secondary —
accent cards, highlights), **sage** (tertiary — reserved contrast). Accents most often appear at
**20% opacity** as glass washes or gradient stops rather than as solid fills. The signature gradient
runs `lavender-20 → paper → amber-20` (to-top-right). Deep `#000000` is reserved for full inversion
sections where the same accents pop against black.

### Type
Two families, sharply contrasted in role and size:
- **Space Grotesk** — display & headings. Oversized (up to 140px), uppercase, tight `-0.05em`
  tracking, weight 600. This is the loud, structural voice.
- **Space Mono** — body, labels, metadata. Small (12–14px), weight 400/700, wide tracking, often
  uppercase for labels. This is the technical, quiet voice.
- The pairing creates editorial tension: enormous silent display next to tiny precise mono.
- **⚠ Font caveat:** Both are Google Fonts, loaded via `@import` in `tokens/fonts.css`. If you want
  fully offline/self-hosted binaries, drop the `.woff2` files in `assets/fonts/` and swap the import
  for local `@font-face` rules. Flagging so you can supply official files if licensing requires it.

### Spacing & layout
- **4px base rhythm.** Scale: 4 · 6 · 8 · 12 · 14 · 16 · 20 · 24. Larger gaps step from that cadence;
  never introduce unrelated values.
- **Section padding:** 32 / 48 / 144px. **Card padding:** 16 / 32px. **Gaps:** 4 / 8 / 12 / 16px.
- **Grid, full-bleed.** Content runs edge-to-edge inside a strong structural grid. Preserve the grid
  frame before changing ornament. Fixed header; generous vertical breathing room (144px section
  padding at large breakpoints).

### Material, elevation & depth
- **Glass first.** Surfaces read as frosted glass: `rgba(255,255,255,0.55)` + `backdrop-filter:
  blur(12px)` + hairline border. Borders, shadows and blur reinforce the glass — they're never the
  primary signal.
- **Borders:** 1px hairlines stepping `#F3F4F6 → #E5E7EB → #D1D5DB`.
- **Shadows:** very soft and low — `0 1px 2px rgba(0,0,0,0.05)`, `0 8px 30px rgba(0,0,0,0.04)`,
  occasional inset `inset 0 0 0 1px rgba(0,0,0,0.05)`. Nothing heavy or dramatic.
- **Gradient border shell (signature):** wrap the hero surface in a 1px gradient frame
  (`lavender-20 → paper → amber-20`) with a `9999px` radius; inset the real surface inside at a
  slightly smaller radius so the gradient reads as a premium hairline edge, not a flat stroke.

### Shape & corners
- Radius family: **12px** (controls/badges), **32px** (large surfaces), **9999px** (pills, shells).
- **Organic blob cards (signature):** accent cards use asymmetric blob radii —
  `70% 30% 60% 40% / 50% 60% 40% 50%` (amber) and `30px 10px 30px 30px` (sage). These soft organic
  silhouettes are a deliberate counterpoint to the rigid grid. Use sparingly, on accent content.

### Iconography
- **Linear / outline** only, matched to the **Solar** icon set's stroke weight and geometry.
- No emoji, no filled glyphs. See *Iconography* section below for the CDN substitution in use.

### Motion
- **Moderate intensity.** Durations cluster around **150ms**; easing favors `ease` and
  `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Hover:** text/color/opacity shifts — no scale-up. **Press:** subtle color shift.
- **Scroll:** GSAP ScrollTrigger drives section reveals and pacing (fades + small upward translates).
  Don't exceed moderate intensity without reason.

---

## ICONOGRAPHY

The brand uses **linear (outline) icons** matched to the **Solar** icon family — thin, consistent
stroke, rounded joins, no fills. No emoji and no decorative unicode glyphs are used anywhere; the
only "symbols" in copy are the arrow `→` for directional CTAs and the index slash `/` in labels.

- **In this system:** Solar isn't on a stable free CDN, so UI kits and components use
  **[Lucide](https://lucide.dev)** via CDN as the closest match (same thin outline weight, rounded
  joins). **⚠ Substitution flagged** — if you have the official Solar SVGs, drop them in
  `assets/icons/` and components will reference those instead.
- **Usage:** icons sit at 16–24px, stroke ~1.5px, inherit `currentColor`, and pair with mono labels.
  Keep them quiet — they annotate, they don't decorate.

---

## DO / DON'T

**Do** — use the pastel accents at 20% as glass washes · keep spacing on the 4px rhythm · reuse the
glass surface recipe everywhere · keep radii in the 12 / 32 / 9999 family (plus the two blob shapes)
· set display type uppercase with tight tracking · keep motion at ~150ms.

**Don't** — introduce accent colors outside lavender/amber/sage · mix heavy or mismatched shadow
recipes · use filled or multi-weight icons · add emoji · pad the page with invented stats · break the
grid/full-bleed frame for ornament.

---

## INDEX — what's in this project

**Foundations**
- `styles.css` — global entry point (import-only). Consumers link this.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/effects.css` ·
  `tokens/fonts.css` — CSS custom properties + `@font-face`/`@import`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Effects).

**Components** (`components/`) — reusable React primitives, each with `.jsx` + `.d.ts` +
`.prompt.md` + a `@dsCard` HTML:
- `core/Button`, `core/IconButton`, `core/Tag`, `core/StatusPill`
- `surfaces/Card`, `surfaces/GlassPanel`
- `forms/Input`

**UI Kit** (`ui_kits/portfolio/`) — high-fidelity recreation of Cole Martin's portfolio /
feature-section landing page, composed from the components above.

**Meta**
- `SKILL.md` — lets this system be used as a downloadable Claude Agent Skill.
- `assets/` — logos, icons, imagery.
