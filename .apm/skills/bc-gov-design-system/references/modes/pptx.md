# PowerPoint mode

You are creating a PowerPoint presentation aligned to the **B.C. Government Design System (components v0.8.1, tokens v5.0.0)**.

The reference generator is at `assets/generate.js`. The canonical token reference is in `references/core-reference.md`.

## Contents

- [How to generate a deck](#how-to-generate-a-deck)
- [Color tokens](#color-tokens-no--prefix--pptxgenjs-requirement)
- [Typography](#typography)
- [Slide library](#slide-library)
- [Non-negotiable rules](#non-negotiable-rules)
- [Do NOT](#do-not)

---

## How to generate a deck

1. Copy `assets/generate.js` into the project output folder (e.g. `temp/bc-gov-pptx/`)
2. Copy `assets/icons/bc-logo.png` into the same folder
3. Install dependency: `npm install pptxgenjs` (local) or `npm install -g pptxgenjs`
4. Edit the script to replace placeholder content with real content
5. Run: `node generate.js`
6. QA: `python -m markitdown output.pptx` — check all slides extracted correctly

---

## Color tokens (no `#` prefix — pptxgenjs requirement)

| Token | Hex | Use |
|---|---|---|
| `013366` | Navy primary | Slide header bars, stat panels, section dividers |
| `1E5189` | Navy hover | Section number large type, accent tints |
| `FBD389` | Indigenous amber | Title/closing band, quote accent, stat numbers on navy |
| `252423` | Dark surface | Closing slide background |
| `FAFAF8` | Off-white surface | Content slide background, alternating table rows |
| `2D2D2D` | Text primary | Body text |
| `474543` | Text secondary | Supporting text, captions, attribution |
| `FFFFFF` | White | Text on dark/navy backgrounds |
| `CADCFC` | Ice blue | Subtitle, secondary text on navy |
| `9BBAD6` | Muted blue | Tertiary text on navy, contact lines |
| `D8D8D8` | Border | Table borders, divider rules |
| `2E5DD7` | Focus/info blue | Info icon circles |
| `42814A` | Success green | Success icon circles |
| `CE3E39` | Danger red | Error icon circles |

---

## Typography

- **Font:** Calibri (BC Sans substitute — install BC Sans for production)
- **Slide titles:** 36–44pt bold
- **Section headers:** 18–24pt bold
- **Body:** 13–16pt regular
- **Captions/labels:** 10–13pt, color `474543`
- **Large stats:** 48pt bold, color `FBD389` on navy backgrounds

---

## Slide library

### Title slide
- Full navy (`013366`) background
- BC logo top-left (`bc-logo.png`, 1.66" × 0.64")
- Amber band at bottom (`FBD389`, 0.18" tall)
- Title: 40pt bold white
- Subtitle: 16pt `CADCFC`
- Presenter line: 13pt `9BBAD6`

### Agenda / contents
- White background, navy top bar
- Numbered circles (navy fill, white number)
- Divider rules between items (`D8D8D8`)

### Section divider
- Two-panel layout: navy left (3.2"), off-white right (6.8")
- Large section number on navy in `1E5189` at 72pt
- Section title 32pt bold on right panel
- Amber bottom strip on navy panel

### Content with icon rows
- White background, navy top bar
- Card per item: off-white fill, `D8D8D8` border, left accent bar, icon circle
- Use `mkShadow()` factory — never reuse shadow objects

### Two-column stat + bullets
- Navy stat panel left (3.8"): 48pt stats in `FBD389`, labels in `CADCFC`
- Bullet list right (5"): 14pt body, `paraSpaceAfter: 10`

### Data table
- Navy header row (white bold text)
- Alternating `FAFAF8` / white rows
- `D8D8D8` borders, 1pt

### Quote / callout
- Off-white background
- `FBD389` left accent bar (0.1" wide)
- Quote text 22pt italic, attribution 13pt bold secondary

### Closing / next steps
- Dark (`252423`) background
- `FBD389` amber band at top
- BC logo
- Numbered steps with amber circles
- Contact line bottom-left: `9BBAD6`

---

## Non-negotiable rules

1. **Never use `#` in hex colors** — corrupts pptxgenjs output
2. **Never encode opacity in hex** — use `opacity` property; 8-char hex corrupts files
3. **Never reuse option objects** — use factory functions like `mkShadow()`; pptxgenjs mutates objects
4. **No accent lines under titles** — use background color or whitespace instead
5. **No gradients** — flat government aesthetic; use solid fills only
6. **Never use `ROUNDED_RECTANGLE` with accent border overlays** — corners won't align; use `RECTANGLE`
7. **Never use unicode bullets** (`•`) — use `bullet: true` in pptxgenjs
8. **Use `breakLine: true`** between array text items, not newlines
9. **Sentence case** throughout — "Next steps" not "Next Steps"
10. **Indigenous acknowledgment** — amber band on title and closing slides is mandatory

## Do NOT
- Use fonts other than Calibri (or BC Sans if installed)
- Use colors outside the token map above
- Create text-only slides — every slide needs a visual element (shape, table, or logo)
- Use Title Case for headings or slide titles
- Add emoji anywhere in the deck
