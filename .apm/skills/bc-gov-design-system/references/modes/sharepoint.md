# SharePoint mode (SharePoint Online pages and static HTML)

Apply the design system to SharePoint Online content. Three routes; pick by page type, then follow that section. Token values come from `assets/colors_and_type.css` and `references/core-reference.md`; never retype them from memory.

| Page type | Route | Styling approach |
|---|---|---|
| Modern SitePage text web part | [Modern pages](#modern-pages-text-web-parts) | Token values inlined as `style` attributes |
| Standalone `.html` file in a document library | [Static HTML pages](#static-html-pages) | Full chrome, tokens inlined in a `<style>` block |
| Header, footer, components on modern pages | [SPFx](#spfx-components) | Separate SPFx project, React mode |

## Modern pages (text web parts)

A text web part sanitises HTML: no `<link>`, no persistent `<style>`, no custom fonts, no `var(--token)`. Therefore:

1. Inline resolved token values as `style` attributes: font stack `'BC Sans','Noto Sans',sans-serif`, body `#2D2D2D` 16px/27px, links `#255A90` underlined, headings navy `#013366` weight 700 at 36/32/28/24/20/18px with line height 1.5 (54/48/48/36/34/31px).
2. Strip legacy `font-family`, `font-size` and layout styles first so they do not fight the tokens.
3. Keep the transform idempotent: a second run must not change the output.
4. Do not change alt text, link targets, table structure or image placement.
5. Alerts and callouts: see [inline-style-hosts.md](../inline-style-hosts.md).
6. External links and file downloads (`.pdf`, `.docx`, `.xlsx`) get `target="_blank"`; text links keep `text-decoration: underline`.

Not available in a text web part: header, footer, Indigenous acknowledgment, components. Options are an SPO site theme (tenant or site admin decision) or an SPFx customizer or web part. Do neither implicitly.

## Static HTML pages

Standalone `.html` files stored in a document library (for example converted legacy `.aspx`).

1. Include the BC chrome: header with the PNG logo and navy `#013366` banner, BC Sans typography, and the standard footer links (Home, Disclaimer, Privacy, Accessibility, Copyright) plus the Indigenous acknowledgment band.
2. Inline the tokens in a `<style>` block in `<head>`. The library file preview ignores `<link rel="stylesheet">`, which leaves `var(--...)` undefined.
3. Use the token names in `assets/colors_and_type.css` (`--color-brand-primary`, `--color-text-primary`, `--text-body`, ...). Older projects may use legacy names such as `--themePrimary`; map them, do not mix.
4. Rewrite links between pages in the same library to relative paths matching the target folder structure. Any link that cannot be mapped is reported for an explicit decision; never guess a destination.
5. External links and downloads open with `target="_blank"`.

## Shared assets (CSS, fonts, logo)

Publish the design-system assets once per target site and reuse their URLs; do not upload a copy per page.

- Location: a site-level folder such as `SiteAssets/bc-gov-design-system/` with `fonts/` and `icons/`.
- Required set: everything under this skill's `assets/` (CSS, all fonts, `fonts/LICENSE`, `icons/bc-logo.png`).
- Before uploading, look for an existing approved copy; verify by exact URL and content hash, not file name. If the same release is present and reachable, reuse it. Use a new versioned path for a changed release rather than overwriting files existing pages depend on.
- Upload only through the project's approved, dry-run-first publisher, with the project's write gate.
- Verify identity, hash, URL, permissions, MIME type and real browser loading (fonts, CORS) before recording the URLs.
- Do not enable or reconfigure the Microsoft 365 CDN, and do not turn a library into an Organization Assets Library to host CSS or fonts. A public CDN origin is anonymously accessible, so never place restricted content there; origin setup is a tenant admin decision.
- Do not hardcode a constructed CDN URL, and do not rename or convert font files to work around a restriction. Preserve the relative font layout or rewrite and validate the `url()` references.
- Stop before publishing a page if access, font loading, licensing or asset identity is unresolved.

## SPFx components

Real components (header, footer, menu) need an SPFx web part or application customizer in a separate project. Use `react` mode for the component code. Static HTML and text web parts never use `@bcgov/design-system-react-components`.

## Honest limits

- Inlined tokens are "BC design tokens applied", never "design-system compliant". Re-check against `variables.css` when the token version changes.
- BC Sans renders only where installed or loaded; otherwise `Noto Sans` or `sans-serif` shows.
- Never claim conformance from local CSS alone; a human reviews the rendered page.

Project-specific rules (per-division header colours, breadcrumbs, link maps, publish commands) belong in the consuming repository, not here.
