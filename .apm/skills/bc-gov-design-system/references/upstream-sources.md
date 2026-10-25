# Upstream sources and currency

The skill is aligned to the official B.C. Design System. When guidance here conflicts with upstream, upstream wins.

## Contents

- [Official sources](#official-sources)
- [Versions checked](#versions-checked)
- [Token naming](#token-naming)
- [Refreshing the skill](#refreshing-the-skill)

## Official sources

- Design system site: <https://www2.gov.bc.ca/gov/content/digital/design-system>
- Components: <https://www2.gov.bc.ca/gov/content/digital/design-system/components>
- Design tokens: <https://www2.gov.bc.ca/gov/content/digital/design-system/foundations/design-tokens>
- Repository: <https://github.com/bcgov/design-system>
  - `packages/design-tokens` (`@bcgov/design-tokens`; generated CSS at `build/css/variables.css`, never edit by hand)
  - `packages/react-components` (`@bcgov/design-system-react-components`; per-component docs are Storybook MDX at `src/stories/<Name>.mdx`; the shipped `AGENTS.md` holds the library's agent rules)
  - `docs/` and `AGENTS.example.md` (boilerplate for a consuming project's `AGENTS.md`)

## Versions checked

| Item | Version |
|---|---|
| `@bcgov/design-system-react-components` | 0.8.1 |
| `@bcgov/design-tokens` | 5.0.0 |
| Upstream commit | `020bd78` |

## Token naming

- [`assets/design-tokens.css`](../assets/design-tokens.css) is a verbatim copy of the upstream generated file (`--surface-color-*`, `--typography-color-*`, `--layout-*`, `--theme-blue-*`, `--theme-gold-*`, `--theme-gray-*`). Prefer it for new work.
- [`assets/colors_and_type.css`](../assets/colors_and_type.css) is the curated short-alias set (`--color-brand-primary`, `--text-*`, `--space-*`) kept for the bundled examples; its values are aligned to upstream (heading line heights, shadows).
- Upstream radius: none, small 2px, medium 4px, large 6px. Icon sizes: 14, 16, 20, 24, 32px.

## Refreshing the skill

1. Clone or pull `bcgov/design-system` (for example under a gitignored `temp/repos/`).
2. Compare versions in both package `package.json` files and read `packages/react-components/CHANGELOG.md` since the versions above.
3. Copy `packages/design-tokens/build/css/variables.css` over `assets/design-tokens.css`.
4. Update [react-reference.md](react-reference.md) from `src/components` and `src/stories/*.mdx` (new components, new props), then the version strings in `SKILL.md`, the mode files and [core-reference.md](core-reference.md).
5. Re-run the package and skill audits.
