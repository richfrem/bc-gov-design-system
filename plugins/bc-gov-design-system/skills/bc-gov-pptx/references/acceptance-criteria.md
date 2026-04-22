# Acceptance criteria — bc-gov-pptx skill

## Required slides
- [ ] Title slide with BC logo, navy background, amber bottom band
- [ ] At least one content slide (icon rows, two-column, or table)
- [ ] Closing slide with dark background, amber top band

## Color compliance
- [ ] No raw hex with `#` prefix anywhere in generate.js
- [ ] No 8-char hex (opacity encoded in color string)
- [ ] No colors outside the BC Gov token map
- [ ] Stats on navy use `FBD389` amber
- [ ] Body text on light backgrounds uses `2D2D2D`

## Typography
- [ ] Titles 36pt+ bold
- [ ] Body text 13–16pt
- [ ] Sentence case throughout — no Title Case headings

## Layout rules
- [ ] No accent lines under slide titles
- [ ] No gradients (solid fills only)
- [ ] Every slide has at least one visual element
- [ ] RECTANGLE used for accent borders (not ROUNDED_RECTANGLE)

## Code quality
- [ ] `mkShadow()` factory function used — no shared shadow objects
- [ ] `bullet: true` used — no unicode `•` bullets
- [ ] `breakLine: true` used between array text items

## QA
- [ ] `python -m markitdown output.pptx` runs without error
- [ ] No leftover placeholder text (xxxx, lorem, ipsum)
- [ ] All slides accounted for in markitdown output
