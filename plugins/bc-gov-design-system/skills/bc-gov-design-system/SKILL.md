---
name: bc-gov-design-system
description: >
  Use this skill when building any BC Government digital product or UI. Triggers:
  BC Gov branding, government website, BC Sans font, BC color palette, government
  forms, WCAG 2.1 AA compliance, BC government visual identity, Indigenous
  acknowledgment footer, or any project using the official British Columbia
  government design system tokens or components.
user-invocable: true
allowed-tools: Bash, Read, Write
---

# BC Government Design System Skill

You are now operating as an expert in the **B.C. Government Design System** (v0.7.0 components / v3.2.0 tokens).

The complete token reference is in `references/REFERENCE.md`. The canonical CSS token file is in `assets/colors_and_type.css`.

## Bundled assets (available after skill install)

All assets are resolved to real files in the installed skill directory:

```
assets/
├── colors_and_type.css          ← import or copy into project root CSS
├── fonts/
│   ├── BCSans-Regular.woff2     ← copy all to project's public/fonts/
│   ├── BCSans-Regular.woff
│   ├── BCSans-Bold.woff2
│   ├── BCSans-Bold.woff
│   ├── BCSans-Italic.woff2
│   ├── BCSans-Italic.woff
│   ├── BCSans-BoldItalic.woff2
│   ├── BCSans-BoldItalic.woff
│   ├── BCSans-Light.woff2
│   ├── BCSans-Light.woff
│   ├── BCSans-LightItalic.woff2
│   └── BCSans-LightItalic.woff
└── icons/
    └── bc-logo.png              ← 166×64px official BC wordmark
```

**Integration steps for any project:**
1. Copy `assets/fonts/` into your project's `public/fonts/` (or equivalent static assets dir)
2. Copy `assets/colors_and_type.css` into your project and update every `@font-face` `src` URL to use an **absolute path from the public root** — not relative:
   ```css
   /* ✓ correct — absolute from public root */
   src: url('/fonts/BCSans-Regular.woff2') format('woff2');

   /* ✗ wrong — relative path breaks if CSS is not adjacent to fonts/ */
   src: url('./fonts/BCSans-Regular.woff2') format('woff2');
   ```
3. Copy `assets/icons/bc-logo.png` into your project's public assets — note this is **PNG only** (no SVG available in the official export); use at sizes ≤166×64px to avoid pixelation
4. Add `<link rel="stylesheet" href="/path/to/colors_and_type.css">` in your HTML `<head>`

**Font licensing:** BC Sans is © Province of British Columbia. See `assets/fonts/LICENSE`. Upstream design system: https://github.com/bcgov/design-system

---

## Quick Token Reference

### Primary colors
| Token | Hex | Use |
|---|---|---|
| `--color-brand-primary` | `#013366` | Buttons, header, primary actions |
| `--color-brand-primary-hover` | `#1E5189` | Hover state |
| `--color-brand-primary-pressed` | `#01264C` | Pressed/active state |
| `--color-brand-focus` | `#2E5DD7` | Focus ring — never omit |
| `--color-brand-link` | `#255A90` | Text links |

### Text
| Token | Hex | Use |
|---|---|---|
| `--color-text-primary` | `#2D2D2D` | Main body text |
| `--color-text-secondary` | `#474543` | Secondary/supporting text |
| `--color-text-placeholder` | `#9F9D9C` | Placeholder / disabled |

### Surfaces & borders
| Token | Hex | Use |
|---|---|---|
| `--color-surface-default` | `#FAFAF8` | Off-white secondary sections |
| `--color-surface-dark` | `#252423` | Indigenous acknowledgment band |
| `--color-border` | `#D8D8D8` | Standard 1px border |
| `--color-border-indigenous` | `#FBD389` | Indigenous band top border |

### Semantic
| Token | Hex | Use |
|---|---|---|
| `--color-danger` / `--color-danger-bg` | `#CE3E39` / `#F4E1E2` | Error states |
| `--color-success` / `--color-success-bg` | `#42814A` / `#F6FFF8` | Success states |
| `--color-warning` / `--color-warning-bg` | `#F8BB47` / `#FEF1D8` | Warning states |
| `--color-info` / `--color-info-bg` | `#2E5DD7` / `#D8EAFD` | Info states |

---

## Typography

- **Primary font:** `'BC Sans', 'Noto Sans', sans-serif` — mandatory, never substitute with Inter or system fonts
- **Secondary font:** `'Roboto', sans-serif` — labels, tags, small UI text only
- **Type scale:** 12px (label) → 14px (body-sm) → 16px (body) → 18px (body-lg/h6) → 20px (h5) → 24px (h4) → 28px (h3) → 32px (h2) → 36px (h1) → 48px (display)
- **Body line-height:** 27px (16px text), headings 1.1, display 1.0
- **Weights:** 400 (regular), 700 (bold) — light (300) for display use only

Font-face declarations (adjust path to your project's font location):
```css
@font-face { font-family:'BC Sans'; src:url('/fonts/BCSans-Regular.woff2') format('woff2'); font-weight:400; font-style:normal; font-display:swap; }
@font-face { font-family:'BC Sans'; src:url('/fonts/BCSans-Bold.woff2') format('woff2'); font-weight:700; font-style:normal; font-display:swap; }
@font-face { font-family:'BC Sans'; src:url('/fonts/BCSans-Italic.woff2') format('woff2'); font-weight:400; font-style:italic; font-display:swap; }
@font-face { font-family:'BC Sans'; src:url('/fonts/BCSans-BoldItalic.woff2') format('woff2'); font-weight:700; font-style:italic; font-display:swap; }
@font-face { font-family:'BC Sans'; src:url('/fonts/BCSans-Light.woff2') format('woff2'); font-weight:300; font-style:normal; font-display:swap; }
@font-face { font-family:'BC Sans'; src:url('/fonts/BCSans-LightItalic.woff2') format('woff2'); font-weight:300; font-style:italic; font-display:swap; }
```

---

## Spacing, Radius & Shadows

**Spacing (8px grid):** `--space-1` (4px) → `--space-10` (96px)  
Common: `--space-2` 8px, `--space-4` 16px, `--space-5` 24px, `--space-6` 32px, `--space-7` 48px

**Border radius:** `--radius-sm` 4px (buttons/inputs/cards), `--radius-full` 999px (pills)

**Shadows:** `--shadow-md: 0 1px 4px rgba(0,0,0,0.13), 0 1px 2px rgba(0,0,0,0.10)` — cards and dialogs only

**Focus ring (apply to all interactive elements):**
```css
:focus-visible { outline: 2px solid #2E5DD7; outline-offset: 2px; }
```

---

## Component Patterns

### Button hierarchy
```html
<!-- Primary -->
<button class="btn btn-blue">Submit application</button>
<!-- Secondary -->
<button class="btn btn-outline">Save draft</button>
<!-- Link -->
<button class="btn-link">Cancel</button>
<!-- Small -->
<button class="btn btn-blue btn-sm">Add item</button>
```
```css
.btn { display:inline-flex; align-items:center; gap:8px; border-radius:4px; font-family:var(--font-primary); font-weight:700; cursor:pointer; border:1px solid transparent; }
.btn:focus-visible { outline:2px solid #2E5DD7; outline-offset:2px; }
.btn-blue { background:#013366; color:#fff; padding:10px 20px; font-size:16px; border:none; }
.btn-blue:hover { background:#1E5189; }
.btn-outline { background:#fff; color:#013366; border-color:#013366; padding:10px 20px; font-size:16px; }
.btn-outline:hover { background:#FAFAF8; }
.btn-link { background:none; border:none; color:#255A90; font-size:14px; font-weight:400; text-decoration:underline; cursor:pointer; padding:0; }
.btn-sm { padding:6px 14px; font-size:14px; }
```

### Form field
```html
<div class="field">
  <label for="id">Field label *</label>
  <span class="hint">Helper text</span>
  <input id="id" type="text" placeholder="Placeholder">
</div>
<!-- Error state -->
<div class="field">
  <label for="email">Email *</label>
  <input id="email" type="email" aria-describedby="email-err" aria-invalid="true">
  <span id="email-err" style="font-size:12px;color:#CE3E39;font-weight:700">Enter a valid email address</span>
</div>
```
```css
.field { display:flex; flex-direction:column; gap:4px; }
.field label { font-size:14px; font-weight:700; color:#2D2D2D; }
.field .hint { font-size:12px; color:#474543; }
.field input, .field select, .field textarea { font-family:var(--font-primary); font-size:14px; border:2px solid #2D2D2D; border-radius:4px; padding:8px 12px; color:#2D2D2D; background:#fff; }
.field input:focus, .field select:focus, .field textarea:focus { outline:none; border-color:#2E5DD7; }
```

### Alert banner
```html
<div class="alert-banner alert-info" role="status">
  <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
  <div><strong>Title</strong><p>Message text.</p></div>
</div>
```
```css
.alert-banner { display:flex; align-items:flex-start; gap:12px; padding:16px 20px; border-radius:4px; border:1px solid; margin-bottom:16px; font-size:14px; }
.alert-info    { background:#D8EAFD; border-color:#2E5DD7; color:#013366; }
.alert-success { background:#F6FFF8; border-color:#42814A; color:#42814A; }
.alert-warning { background:#FEF1D8; border-color:#F8BB47; color:#2D2D2D; }
.alert-danger  { background:#F4E1E2; border-color:#CE3E39; color:#CE3E39; }
```
Use `role="alert"` for errors/warnings, `role="status"` for info/success.

### Tag / badge
```html
<span class="tag tag-blue">In review</span>
<span class="tag tag-green">Approved</span>
<span class="tag tag-red">Rejected</span>
```
```css
.tag { display:inline-flex; align-items:center; border-radius:4px; font-size:12px; font-weight:700; padding:2px 8px; }
.tag-gray   { background:#EDEBE9; color:#474543; border:1px solid #D8D8D8; }
.tag-blue   { background:#D8EAFD; color:#013366; border:1px solid #2E5DD7; }
.tag-green  { background:#F6FFF8; color:#42814A; border:1px solid #42814A; }
.tag-yellow { background:#FEF1D8; color:#2D2D2D; border:1px solid #F8BB47; }
.tag-red    { background:#F4E1E2; color:#CE3E39; border:1px solid #CE3E39; }
```

### Indigenous acknowledgment footer (mandatory on full-page layouts)
```html
<footer>
  <div style="background:#252423; border-top:3px solid #FBD389; padding:20px 32px;">
    <p style="font-size:12px; color:#fff; line-height:1.6; max-width:900px; margin:0 auto;">
      The B.C. Public Service acknowledges the territories of First Nations around B.C.
      and is grateful to carry out our work on these lands. We acknowledge the rights,
      interests, priorities, and concerns of all Indigenous Peoples — First Nations,
      Métis, and Inuit — respecting and acknowledging their distinct cultures, histories,
      rights, laws, and governments.
    </p>
  </div>
  <div style="background:#FAFAF8; border-top:1px solid #353433; padding:12px 32px;">
    <p style="font-size:12px; color:#474543; max-width:1200px; margin:0 auto;">
      © 2025 Government of British Columbia.
    </p>
  </div>
</footer>
```

### See `references/REFERENCE.md` for full patterns:
Card, Accordion, Data table, Dialog/modal, Progress bar, Toggle/switch, Callout, Breadcrumb, Hero section, Header with subheader.

---

## Non-negotiable rules

1. BC Sans is mandatory — include `@font-face` declarations, never substitute
2. Focus rings on **all** interactive elements — `2px solid #2E5DD7` with `2px` offset
3. WCAG 2.1 AA — verify contrast ratios before shipping
4. Sentence case — "Submit form" not "Submit Form"
5. No emoji in UI — use Font Awesome 6 icons only
6. No gradients, no heavy shadows
7. Indigenous acknowledgment footer required on every full-page layout
8. Use semantic token variables (`--color-*`), not raw hex in component code
9. Plain English — no jargon, no exclamation marks
10. Government forms: label → hint → input → error message order, always with ARIA

## Do NOT
- Use colors outside the defined palette
- Deviate from the type scale (no 13px, 15px, etc.)
- Use custom components when a system component exists
- Skip the Indigenous acknowledgment footer
- Use Title Case for headings or button labels