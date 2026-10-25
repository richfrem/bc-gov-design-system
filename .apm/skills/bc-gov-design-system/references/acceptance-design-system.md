# Acceptance Criteria — bc-gov-design-system skill

## Trigger accuracy
- MUST trigger for any prompt mentioning BC Government branding, BC Sans font, BC color palette, BC Gov website, or WCAG 2.1 AA + government context
- MUST trigger for requests to build BC Gov forms, headers, footers, or any component from the design system
- MUST NOT trigger for generic UI work with no BC government context

## Output quality
- All generated HTML must use BC Sans as primary font with correct @font-face declarations
- All color values must reference CSS custom properties (`--color-brand-primary`, etc.) not raw hex
- All interactive elements must include visible focus rings (`outline: 2px solid #2E5DD7; outline-offset: 2px`)
- Full-page layouts must include the Indigenous acknowledgment footer band with correct colors (#252423 bg, #FBD389 border)
- Button labels, headings, and nav links must use sentence case
- No emoji, gradients, or heavy decorative shadows in generated output
- WCAG 2.1 AA — no color combination with contrast ratio below 4.5:1 for normal text

## Structural requirements
- SKILL.md frontmatter description must not exceed 1024 characters
- evals/evals.json must use `should_trigger: true/false` schema
- Token reference must be sourced from `assets/colors_and_type.css` (the canonical file)
- core-reference.md must cover all component patterns: header, hero, buttons, forms, alerts, tags, cards, accordion, table, dialog, progress, toggle, callout, breadcrumb, footer