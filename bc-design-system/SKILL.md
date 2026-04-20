---
name: bc-design
description: Use this skill to generate well-branded interfaces and assets for the B.C. (British Columbia) Government Design System. Contains design guidelines, color/type tokens, assets, and UI kit components for prototyping or production.
user-invocable: true
---

## What this skill gives you

You are now an expert in the **B.C. Design System** (Government of British Columbia, v0.7.0).

Read `README.md` for the full reference. Key files:

| File | What it contains |
|------|-----------------|
| `README.md` | Full brand guidelines, visual foundations, content tone |
| `colors_and_type.css` | All CSS custom properties — colors, type scale, spacing, radius, shadows |
| `assets/bc-logo.png` | Official BC Government wordmark (166×64px) |
| `fonts/BCSans-*.woff2` | BC Sans typeface — Regular, Bold, Italic, BoldItalic, Light, LightItalic |
| `ui_kits/bc-gov-website/index.html` | Full interactive UI kit — home, form, data table, components |
| `preview/*.html` | Individual component cards — colors, type, buttons, inputs, alerts, tags, header, footer |

## How to use in a project

### For HTML prototypes / mocks
1. Copy `assets/bc-logo.png` and `fonts/` into your project
2. Either link `colors_and_type.css` or inline the CSS vars
3. Use BC Sans via `@font-face` pointing to the copied font files
4. Follow the visual foundations in `README.md` — no gradients, 4px radius, #013366 primary, sentence case copy

### For production code (React / Next.js / etc.)
1. Copy font files into `public/fonts/`
2. Declare `@font-face` in your global CSS
3. Use the token values from `colors_and_type.css` as your design tokens
4. Reference `ui_kits/bc-gov-website/index.html` for component patterns

## Core design rules (always apply these)

- **Font:** BC Sans (woff2 files in `fonts/`). Never substitute with Inter, Roboto, or system fonts for headings.
- **Primary color:** `#013366` (navy). Hover: `#1E5189`. Focus ring: `#2E5DD7` (2px, 4px offset).
- **Text:** `#2D2D2D` primary, `#474543` secondary, `#9F9D9C` disabled/placeholder.
- **Surfaces:** `#FFFFFF` default, `#FAFAF8` secondary, `#EDEBE9` hover.
- **Border:** `1px solid #D8D8D8`. Radius: `4px` on all interactive elements.
- **No gradients.** No emoji. No decorative shadows. Clean, flat, accessible.
- **Copy tone:** Plain English, sentence case, no exclamation marks, no jargon.
- **Footer:** Always include Indigenous land acknowledgment band (`#252423` bg, `#FBD389` top border).
- **Focus states:** Always visible — `2px solid #2E5DD7` outline, `2px` offset.
- **Button hierarchy:** Primary (`#013366` fill) → Secondary (outlined) → Tertiary (transparent) → Link (underlined text).

## If the user asks you to design something

1. Ask what surface (website, form, dashboard, etc.) if not clear
2. Copy `assets/bc-logo.png` into the working directory
3. Declare BC Sans via `@font-face` using files from `fonts/`
4. Build in HTML — reference `ui_kits/bc-gov-website/index.html` for patterns
5. Apply all core design rules above
6. Include the Indigenous acknowledgment footer if building a full-page layout
