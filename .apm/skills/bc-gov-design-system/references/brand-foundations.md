# Brand foundations: content and visual rules

Voice, layout and behaviour rules from the B.C. Design System that complement the token and component patterns in [core-reference.md](core-reference.md). Token values live in `../assets/colors_and_type.css`; this file records the rules, not a second copy of the palette.

## Contents

- [About the system](#about-the-system)
- [Content fundamentals](#content-fundamentals)
- [Visual foundations](#visual-foundations)
- [Iconography](#iconography)
- [Example pages](#example-pages)
- [Known export differences](#known-export-differences)

## About the system

The B.C. Design System gives design and development teams building blocks for intuitive, accessible digital services for the Government of British Columbia. It is maintained by Government Communications & Public Engagement (GCPE); contact designsystem@gov.bc.ca.

Version: components v0.7.0, tokens v3.2.0 (the export; the upstream repo carries tokens 5.x). It covers design tokens (colour, type, spacing, elevation), reusable components, the BC Sans typeface (mandatory), Font Awesome 6 Pro icons and the official BC logo.

## Content fundamentals

- **Tone:** professional, plain and direct. No jargon or legalese. No exclamation marks; calm and authoritative.
- **Person:** first person plural ("we", "our") when the government speaks (*"We can help in over 220 languages."*); second person ("you", "your") when addressing the user (*"Import this library into your project."*).
- **Casing:** sentence case for headings, labels, nav links and button text ("Submit form", not "Submit Form"). Keep acronyms: BC, B.C., GCPE, TDD.
- **No emoji** anywhere in UI copy.
- **Documentation pages** use underlined section headings as anchors (for example "Design tokens", "Component library").
- **Land acknowledgment** is always in the footer: *"The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands."*
- Example copy: *"The B.C. Design System gives design and software development teams the building blocks to deliver intuitive, accessible digital services."*

## Visual foundations

### Colour use

- Primary navy `#013366` for primary buttons and header accents. Hover `#1E5189` (lighter), pressed `#01264C` (darker).
- Focus ring `#2E5DD7`, 2px solid, 4px offset; accessibility-critical, never removed.
- Text `#2D2D2D`, secondary `#474543`, placeholder and disabled `#9F9D9C`. Link `#255A90`.
- Surfaces: white or warm off-white `#FAF9F8`; hover `#EDEBE9`; pressed `#E0DEDC`. Border and divider `#D8D8D8`.
- Semantic: danger `#CE3E39` (hover `#A2312D`, bg `#F4E1E2`), success `#42814A` (bg `#F6FFF8`), warning `#F8BB47` (bg `#FEF1D8`), info bg `#D8EAFD`.
- Indigenous acknowledgment band: bg `#252423`, amber accent `#FBD389`.

### Typography

- BC Sans (humanist sans-serif; regular, bold, italic, light) is mandatory. Roboto is the secondary face at 12-16px for labels and tags. No serif or display faces.
- Scale: 12 (label-sm), 14 (body-sm), 16 (body), 18 (body-lg), 20 (h5), 24 (h4), 28 (h3), 32 (h2), 36 (h1), 48 (display). Body line height about 1.5 (21px at 14px); display 100%.

### Spacing and layout

- 8px base grid. Component padding 8/12/16/24px by size; gaps between related items 8/16/24/32px.
- Maximum content width 1440px, centred, 36px horizontal padding; 12-column grid, 1392px total.
- Header 54px tall without a subheader, 94px with one. Footer: dark Indigenous acknowledgment band (127px), a light information band and a copyright strip.
- Documentation pages: section padding 48px top, 96px horizontal, 88px bottom; the 24px page radius is for the presentation frame only.

### Surfaces, borders, shadows

- Mostly white or off-white. No gradients; no decorative background images (images are content only). Section dividers are 1px `#D8D8D8` rules.
- Radius 4px for buttons and containers. Focus-ring radius is the element radius plus 2px (6px on buttons).
- Standard border `1px solid #D8D8D8`. Shadow only subtle: `0 1px 4px rgba(0,0,0,0.13), 0 1px 2px rgba(0,0,0,0.1)` on cards and dialogs; never heavy drop shadows.
- Cards: white, 1px `#D8D8D8` border, 4px radius, 16px padding, underlined text links for titles.

### States and motion

- Hover: explicit darker background token (primary `#053662` to `#1E5189`). Never opacity-based hover.
- Pressed or active: show the focus ring plus a darker background.
- Disabled: background `#EDEBE9`, text `#9F9D9C`, `not-allowed` cursor.
- Motion: minimal or none. Focus rings appear instantly, with no transition; no bounce or spring animation.

## Iconography

- Font Awesome 6 Pro (organisation licence). The free CDN `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css` is a stand-in.
- Sizes 16, 20 and 24px; regular (outline) weight, not solid. Use sparingly to aid navigation, not as decoration.
- BC-specific SVG icons for brand and information indicators. The logo is the PNG at `assets/icons/bc-logo.png` (166x64px).
- Icon-only buttons always carry an accessible label. No emoji as icons.

## Example pages

Working HTML references live in `../assets/examples/`; open them in a browser.

- `examples/ui-kit/index.html` ([README](../assets/examples/ui-kit/README.md)): website kit with home, permit form, data table and component screens (header, footer, hero, service cards, alerts, accordion, table, dialog, progress, switch, tags).
- `examples/preview/*.html`: single-topic cards: `colors-brand`, `colors-neutral`, `colors-semantic`, `type-scale`, `type-weights`, `spacing-tokens`, `components-buttons`, `components-inputs`, `components-alerts`, `components-tags`, `components-header`, `components-footer`.

Use them for component patterns when `core-reference.md` does not show the exact variant.

## Known export differences

The original Claude Design export (since removed) listed the surface colour as `#FAFAF8` and a 2px focus offset in one rule list. This skill uses the canonical `#FAF9F8` and the 4px offset from `colors_and_type.css`. Its UI kit used a Noto Sans stand-in; the bundled BC Sans files are used here.
