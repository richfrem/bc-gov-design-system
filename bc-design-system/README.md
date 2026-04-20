# B.C. Design System

The B.C. Design System gives design and software development teams the building blocks to deliver intuitive, accessible digital services for the Government of British Columbia.

**Version:** v0.7.0 (Component Library) / v3.2.0 (Design Tokens)  
**Contact:** designsystem@gov.bc.ca  
**Source:** Figma file "B.C. Design System (Community).fig" (mounted as virtual filesystem)

---

## What Is This?

This is the official Government of British Columbia design system — a Figma component library plus token schema for building consistent, accessible digital services across BC government websites and apps. It is actively maintained by Government Communications & Public Engagement (GCPE).

The system covers:
- **Design tokens** (CSS/JS variables for colour, typography, spacing, elevation)
- **Reusable components** (buttons, inputs, alerts, dialogs, navigation, calendars, etc.)
- **BC Sans typeface** — mandatory for all BC government digital services
- **Font Awesome 6 Pro** — icon system (Pro licence required)
- **BC Logo** — official brand mark

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Professional, plain, and direct.** Government copy avoids jargon and legalese.
- **First person plural (We/Our)** when speaking as the BC government: *"We can help in over 220 languages."*
- **Second person (you/your)** when addressing the user: *"Import this library into your project."*
- **Sentence case** for headings and labels (not Title Case): *"Colour palettes"*, *"Design tokens inventory"*.
- **No emoji.** Government interfaces never use emoji — purely text and icons.
- **No exclamation marks** in UI copy — calm, authoritative tone.
- **Underlined headings** are used on documentation pages for section anchors (e.g. "Design tokens", "Component library").

### Casing
- Labels, nav links, button text: sentence case ("Submit form", not "Submit Form")
- Section headings in docs: sentence case
- Acronyms preserved: BC, B.C., GCPE, TDD

### Examples
- *"The B.C. Design System gives design and software development teams the building blocks to deliver intuitive, accessible digital services."*
- *"If you have questions or feedback, email designsystem@gov.bc.ca"*
- *"The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands."* (Indigenous land acknowledgment, always in footer)

---

## VISUAL FOUNDATIONS

### Colours
- **Primary brand:** Dark navy `#013366` / `#053662` — used for primary buttons, header accents
- **Primary hover:** `#1E5189` (lighter navy)
- **Primary pressed:** `#01264C` (darker navy)
- **Focus ring:** `#2E5DD7` (bright blue, 2px solid, 4px offset) — accessibility-critical
- **Link:** `#255A90`
- **Danger:** `#CE3E39` / hover `#A2312D` / bg `#F4E1E2`
- **Success:** `#42814A` / bg `#F6FFF8`
- **Warning:** `#F8BB47` / bg `#FEF1D8`
- **Info bg:** `#D8EAFD`
- **Primary text:** `#2D2D2D` (near-black)
- **Secondary text:** `#474543`
- **Placeholder/disabled text:** `#9F9D9C`
- **Surface default:** `#FAFAF8` (warm off-white)
- **Surface hover:** `#EDEBE9`
- **Surface pressed:** `#E0DEDC`
- **Border/divider:** `#D8D8D8`
- **Dark banner bg:** `#252423` (used in Indigenous acknowledgment footer band)
- **Indigenous banner accent:** `#FBD389` (amber border)

### Typography
- **BC Sans** — mandatory for all BC government digital services. Maintained by GCPE. Humanist sans-serif. Regular, Bold, Italic weights used.
- **Roboto** — secondary face, used at 12–16px in some UI elements (labels, tags)
- **No display/serif typefaces** — system is sans-serif only
- Type scale: 12 (label-sm) → 14 (body-sm) → 16 (body) → 18 (body-lg) → 20 (h5) → 24 (h4) → 28 (h3) → 32 (h2) → 36 (h1) → 48 (display)
- Line heights: body ~1.5× (e.g., 21px for 14px), display 100%

### Spacing & Layout
- Base unit: 8px grid
- Component padding: 8/12/16/24px depending on size
- Section padding: 48px top, 96px horizontal, 88px bottom on doc pages
- Gap between related items: 8/16/24/32px

### Backgrounds & Surfaces
- Predominantly white (`#FFFFFF`) or warm off-white (`#FAFAF8`)
- **No gradients** — clean, flat government aesthetic
- **No images as decorative backgrounds** — images used only as content illustrations
- Section dividers: 1px solid `#D8D8D8` horizontal rules

### Borders & Radius
- Button radius: **4px**
- Card/container radius: **4px** (tight, professional)
- Doc page radius: 24px (presentation frame only)
- Focus ring radius: button radius + 2px (e.g., 6px)
- Standard border: `1px solid #D8D8D8`

### Shadows
- Subtle: `box-shadow: 0 1px 4px rgba(0,0,0,0.13), 0 1px 2px rgba(0,0,0,0.1)`
- Used on cards/dialogs — never heavy drop shadows

### Hover / Press / Disabled States
- **Hover:** slightly darker background (e.g. primary `#053662` → `#1E5189`)
- **Pressed/active:** show focus ring (2px `#2E5DD7`) + darker bg
- **Disabled:** muted gray bg `#EDEBE9`, text `#9F9D9C`, `not-allowed` cursor
- **No opacity-based hover** — always explicit color token changes

### Animation
- **Minimal / no animation** — accessibility-first government design
- Form focus: instant (no transition on focus rings)
- No bounce or spring animations

### Iconography
- **Font Awesome 6 Pro** — primary icon system (requires org licence)
- 16px, 20px, 24px sizes used
- Used sparingly — only to aid navigation, not decorative
- BC-specific icons (Gov BC theme icons) for brand/government contexts
- No emoji used as icons

### Cards
- White bg, 1px `#D8D8D8` border, 4px radius, subtle shadow
- Compact padding (16px)
- Underlined text links for card titles

### Layout
- Max content width: 1440px, centered, 36px horizontal padding
- 12-column grid, 1392px total
- Header: 54px tall (no subheader) or 94px (with subheader)
- Footer: dark Indigenous acknowledgment band (127px) + light info band + copyright strip

---

## ICONOGRAPHY

- **Primary system:** Font Awesome 6 Pro (CDN or npm; org licence required for Pro)
- **Sizes:** 16px, 20px, 24px icon containers
- **Style:** Regular weight (outline), not solid fill — clean and accessible
- **Government icons:** Custom BC Gov SVG icons (brand/logos, info indicators)
- **BC Logo:** Available as PNG at `assets/bc-logo.png` (166×64px)
- **No emoji.** Never used as UI icons.
- **Icon-only buttons** always include accessible labels.

CDN (Font Awesome Free as substitute for Pro):  
`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`

---

## FILES

```
README.md                   ← This file
SKILL.md                    ← Agent skill definition
colors_and_type.css         ← All CSS variables (colors + typography)
assets/
  bc-logo.png               ← Official BC government logo (166×64px)
preview/
  colors-brand.html         ← Brand & primary color swatches
  colors-neutral.html       ← Neutral gray scale
  colors-semantic.html      ← Semantic (danger/success/warning/info)
  colors-interactive.html   ← Interactive state colors
  type-scale.html           ← Full typographic scale
  type-weights.html         ← Font weight specimens
  spacing-tokens.html       ← Spacing & radius tokens
  components-buttons.html   ← Button hierarchy & states
  components-inputs.html    ← Form inputs & controls
  components-alerts.html    ← Alert banners & inline alerts
  components-tags.html      ← Tags & badges
  components-header.html    ← Website header
  components-footer.html    ← Website footer
ui_kits/
  bc-gov-website/
    index.html              ← BC Government website UI kit
    README.md               ← UI kit docs
```
