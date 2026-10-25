# Acceptance Criteria: sharepoint mode

## Trigger accuracy
- MUST route to `sharepoint` for BC design tokens or chrome on SharePoint Online pages, text web parts, or static HTML in a document library.
- MUST route React component code for SPFx web parts to `react`.

## Output quality
- Modern-page output has no `<link>`, `<style>` or `var(--...)`; token values are inline and the font stack falls back to `'Noto Sans', sans-serif`.
- Static pages inline tokens in a `<style>` block in `<head>` and include header, footer links and the Indigenous acknowledgment band.
- Body text `#2D2D2D`, links `#255A90` underlined, headings navy `#013366`; contrast at least 4.5:1.
- Re-running the transform yields identical HTML.
- External links and file downloads have `target="_blank"`.
- Alt text, link targets, table structure and image placement are unchanged.
- Unmapped links are listed, not guessed.

## Shared assets
- Assets are reused by verified URL and hash, not duplicated per page; changed releases use a new versioned path.
- No CDN or Organization Assets Library change is made implicitly.

## Reporting
- Result is reported as "BC design tokens applied", never "design-system compliant".
