# Applying BC design tokens where CSS variables are unavailable

Hosts such as SharePoint Online text web parts, CMS rich-text fields and email strip `<style>` blocks and cannot resolve `var(--token)`. Inline the resolved token values instead.

## Verify against source, do not guess

Clone the design system into a gitignored folder of the consuming repo (for example `temp/repos/design-system`, with `temp/` in `.gitignore`):

```
git clone https://github.com/bcgov/design-system temp/repos/design-system
```

- Component CSS: `packages/react-components/src/components/<Component>/<Component>.css`
- Resolved token values: `packages/design-tokens/build/css/variables.css`

Read the component CSS, then resolve each `var(--x)` in `variables.css`.

## Resolved values (design-tokens build, checked 2026)

| Purpose | Value |
|---|---|
| Padding medium / large | `1rem` / `1.5rem` |
| Margin small / medium | `0.5rem` / `1rem` |
| Border radius medium | `4px` |
| Border width medium / large | `1px` / `4px` |
| Body font | `400 1rem/1.688rem 'BC Sans'` |
| Bold large body | `700 1.125rem/1.913rem 'BC Sans'` |
| Text primary / secondary | `#2D2D2D` / `#474543` |
| Link | `#255A90`, underlined |
| Primary blue | `#013366` |

## Alert (status)

Full 1px border, 4px radius, padding `1rem 1.5rem`.

| Variant | Background | Border |
|---|---|---|
| Info | `#F7F9FC` | `#053662` |
| Success | `#F6FFF8` | `#42814A` |
| Warning | `#FEF1D8` | `#F8BB47` |
| Danger | `#F4E1E2` | `#CE3E39` |

## Callout (neutral highlight)

Light grey (default) `#FAF9F8`; background pairs with a 4px `#013366` left border, radius `4px 0 0 4px`, padding `1rem 1.5rem`, title bold, description `#474543`. Dark themes use a gold left border and inverted text; see `Callout.css`.

## Rules

- Prefer a callout for neutral supporting content and an alert for status messages; do not use a thin black border box.
- Use `<div>` children inside the container, not `<p>`, so the host does not add empty paragraphs or extra margin.
- Report "BC design tokens applied", never "design-system compliant"; inlined values cannot track token updates, so re-check against `variables.css` when the tokens version changes.
