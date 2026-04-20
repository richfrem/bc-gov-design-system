# B.C. Gov Website — UI Kit

A high-fidelity, interactive recreation of the B.C. Government website design pattern — header, footer, forms, data tables, and component states.

## Screens

| Screen | Description |
|--------|-------------|
| **Home** | Hero banner, service cards, accordion FAQ, full header/footer |
| **Form** | Multi-section permit application form with validation states |
| **Data table** | Searchable, filterable table with status tags and pagination |
| **Components** | Progress bars, toggles, alerts, button hierarchy showcase |

## Components

- `BCHeader` — sticky header with logo, site title, subheader nav
- `BCFooter` — Indigenous acknowledgment band + info + copyright
- `HeroSection` — dark navy hero with CTA buttons
- `ServiceCard` — icon + title + description + link
- `AlertBanner` — info / success / warning / danger variants
- `AccordionGroup` — expand/collapse FAQ pattern
- `DataTable` — sortable table with tag status cells
- `PermitForm` — multi-column form with field states
- `Dialog` — modal overlay with form
- `ProgressBar` — track + fill with label
- `Switch` — toggle with label
- `Tags` — gray / blue / green / yellow / red

## Usage

Open `index.html` in a browser. Click the screen tabs to navigate between views. All interactions are client-side.

## Design tokens

All colors, typography and spacing come from `../../colors_and_type.css` (or inline via CSS vars). See that file for the full token list.

## Font note

Uses **Noto Sans** as a substitute for **BC Sans** (government-proprietary). Replace with actual BC Sans files from GCPE when available.
