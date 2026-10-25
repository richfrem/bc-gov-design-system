# BC Government Design System — Full Reference

**Version:** v0.7.0 (Component Library) / v3.2.0 (Design Tokens)  
**Source:** `bc-design-system/` (Claude Design export)  
**Token file:** `../assets/colors_and_type.css`

## Contents

- [All Color Tokens](#all-color-tokens)
- [Typography Tokens](#typography-tokens)
- [Spacing Tokens](#spacing-tokens)
- [Radius & Shadow Tokens](#radius--shadow-tokens)
- [Layout Tokens](#layout-tokens)
- [Full Component Patterns](#full-component-patterns)
- [Assets](#assets)
- [Design rules summary](#design-rules-summary)

---

## All Color Tokens

### Brand / Primary
| Variable | Hex | Usage |
|---|---|---|
| `--color-brand-primary` | `#013366` | Navy — buttons, headers, primary actions |
| `--color-brand-primary-dark` | `#053662` | Slightly darker navy variant |
| `--color-brand-primary-hover` | `#1E5189` | Hover state |
| `--color-brand-primary-pressed` | `#01264C` | Pressed/active state |
| `--color-brand-focus` | `#2E5DD7` | Focus ring — accessibility critical |
| `--color-brand-link` | `#255A90` | Text links |

### Text
| Variable | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#2D2D2D` | Main body text |
| `--color-text-secondary` | `#474543` | Secondary text |
| `--color-text-placeholder` | `#9F9D9C` | Placeholder / hint |
| `--color-text-disabled` | `#9F9D9C` | Disabled text |
| `--color-text-link` | `#255A90` | Links |
| `--color-text-danger` | `#CE3E39` | Inline error text |
| `--color-text-invert` | `#FFFFFF` | Text on dark backgrounds |
| `--color-text-invert-secondary` | `#ECEAE8` | Secondary on dark bg |

### Surfaces
| Variable | Hex | Usage |
|---|---|---|
| `--color-surface-white` | `#FFFFFF` | Default page background |
| `--color-surface-default` | `#FAFAF8` | Warm off-white sections |
| `--color-surface-hover` | `#EDEBE9` | Hover background |
| `--color-surface-pressed` | `#E0DEDC` | Pressed background |
| `--color-surface-disabled` | `#EDEBE9` | Disabled bg |
| `--color-surface-dark` | `#252423` | Indigenous acknowledgment band |

### Borders
| Variable | Hex | Usage |
|---|---|---|
| `--color-border` | `#D8D8D8` | Standard 1px border |
| `--color-border-dark` | `#353433` | Dark dividers |
| `--color-border-indigenous` | `#FBD389` | Indigenous band top accent |

### Semantic
| Variable | Hex |
|---|---|
| `--color-danger` | `#CE3E39` |
| `--color-danger-hover` | `#A2312D` |
| `--color-danger-bg` | `#F4E1E2` |
| `--color-danger-border` | `#CE3E39` |
| `--color-success` | `#42814A` |
| `--color-success-bg` | `#F6FFF8` |
| `--color-success-border` | `#42814A` |
| `--color-warning` | `#F8BB47` |
| `--color-warning-bg` | `#FEF1D8` |
| `--color-warning-border` | `#F8BB47` |
| `--color-info` | `#2E5DD7` |
| `--color-info-bg` | `#D8EAFD` |
| `--color-info-border` | `#2E5DD7` |

---

## Typography Tokens

```css
--font-primary:   'BC Sans', 'Noto Sans', sans-serif;
--font-secondary: 'Roboto', sans-serif;

--text-label-sm: 12px;  --lh-label:   18px;
--text-body-sm:  14px;  --lh-body-sm: 21px;
--text-body:     16px;  --lh-body:    27px;
--text-body-lg:  18px;  --lh-body-lg: 30.6px;
--text-h6:       18px;  --lh-heading: 1.1;
--text-h5:       20px;
--text-h4:       24px;
--text-h3:       28px;
--text-h2:       32px;
--text-h1:       36px;
--text-display:  48px;  --lh-display: 1.0;

--fw-regular: 400;
--fw-bold:    700;
```

BC Sans font files (6 weights × woff + woff2):
- BCSans-Regular, BCSans-Bold, BCSans-Italic, BCSans-BoldItalic, BCSans-Light, BCSans-LightItalic

---

## Spacing Tokens

```css
--space-1:  4px;   --space-6:  32px;
--space-2:  8px;   --space-7:  48px;
--space-3:  12px;  --space-8:  64px;
--space-4:  16px;  --space-9:  88px;
--space-5:  24px;  --space-10: 96px;
```

## Radius & Shadow Tokens

```css
--radius-sm:   4px;    /* buttons, inputs, cards, tags */
--radius-md:   8px;    /* larger cards */
--radius-lg:   24px;   /* doc frames */
--radius-full: 999px;  /* pills */

--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 1px 4px rgba(0,0,0,0.13), 0 1px 2px rgba(0,0,0,0.10);

--focus-ring: 0 0 0 2px #FFFFFF, 0 0 0 4px #2E5DD7;
--focus-ring-offset: 2px;
```

## Layout Tokens

```css
--layout-max-width:     1440px;
--layout-content-width: 1200px;
--layout-px:            36px;
```

---

## Full Component Patterns

### Header (with subheader)
```html
<header class="site-header">
  <div class="header-main">
    <div class="header-left">
      <img class="header-logo" src="/assets/icons/bc-logo.png" alt="Government of British Columbia" style="height:38px">
      <div style="width:1px;height:32px;background:#D8D8D8"></div>
      <span style="font-size:20px;font-weight:700;color:#2D2D2D">Service name</span>
    </div>
    <div class="header-right">
      <button class="header-nav-link">Français</button>
      <button class="header-nav-link">Sign in</button>
    </div>
  </div>
  <div class="subheader">
    <div class="subheader-inner">
      <button class="subnav-link active">Overview</button>
      <button class="subnav-link">Services</button>
      <button class="subnav-link">Resources</button>
    </div>
  </div>
</header>
```
```css
.site-header { background:#fff; border-bottom:1px solid #D8D8D8; position:sticky; top:0; z-index:100; box-shadow:0 1px 4px rgba(0,0,0,0.08); }
.header-main { max-width:1200px; margin:0 auto; padding:0 32px; height:56px; display:flex; align-items:center; justify-content:space-between; }
.header-nav-link { font-size:14px; color:#2D2D2D; background:none; border:none; border-radius:4px; padding:8px 12px; cursor:pointer; font-family:var(--font-primary); }
.header-nav-link:hover { background:#EDEBE9; }
.subheader { border-top:1px solid #D8D8D8; background:#fff; }
.subheader-inner { max-width:1200px; margin:0 auto; padding:0 32px; display:flex; align-items:center; height:40px; }
.subnav-link { font-size:14px; color:#2D2D2D; padding:0 16px; height:40px; display:flex; align-items:center; cursor:pointer; border-right:1px solid #D8D8D8; background:none; border-top:none; border-bottom:none; border-left:none; font-family:var(--font-primary); }
.subnav-link.active { font-weight:700; color:#013366; }
```

### Hero section (on-brand navy)
```html
<section style="background:#013366;color:#fff;padding:64px 32px;">
  <div style="max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
    <div>
      <h1 style="font-size:42px;font-weight:700;line-height:1.1;margin-bottom:16px;">Digital services for British Columbians</h1>
      <p style="font-size:18px;line-height:1.6;opacity:0.9;margin-bottom:28px;">Access government services quickly and easily.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <button style="background:#fff;color:#013366;padding:10px 20px;font-size:16px;font-weight:700;border-radius:4px;border:none;cursor:pointer;font-family:var(--font-primary);">Get started</button>
        <button style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.6);padding:10px 20px;font-size:16px;font-weight:700;border-radius:4px;cursor:pointer;font-family:var(--font-primary);">Learn more</button>
      </div>
    </div>
  </div>
</section>
```

### Card grid (3-column)
```html
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
  <div style="background:#fff;border:1px solid #D8D8D8;border-radius:4px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <div style="width:40px;height:40px;border-radius:50%;background:#D8EAFD;display:flex;align-items:center;justify-content:center;color:#013366;font-size:18px;margin-bottom:12px;">
      <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
    </div>
    <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;">Apply for a permit</h3>
    <p style="font-size:14px;color:#474543;line-height:1.6;margin-bottom:16px;">Submit applications for business, environmental, and construction permits online.</p>
    <a href="#" style="font-size:14px;color:#255A90;text-decoration:underline;">Start application</a>
  </div>
</div>
```

### Accordion
```html
<div style="border:1px solid #D8D8D8;border-radius:4px;overflow:hidden;">
  <div style="border-bottom:1px solid #D8D8D8;">
    <button onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded')==='true'?'false':'true'); this.nextElementSibling.hidden = !this.nextElementSibling.hidden;"
      aria-expanded="false" style="width:100%;text-align:left;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;background:#fff;border:none;cursor:pointer;font-family:var(--font-primary);font-size:16px;font-weight:700;color:#2D2D2D;">
      How do I create an account?
      <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
    </button>
    <div hidden style="padding:16px 20px;font-size:14px;color:#474543;line-height:1.6;background:#FAFAF8;border-top:1px solid #D8D8D8;">
      You can create an account by visiting the registration page and providing your personal information.
    </div>
  </div>
</div>
```

### Data table with tags
```html
<table style="width:100%;border-collapse:collapse;font-size:14px;">
  <thead>
    <tr>
      <th scope="col" style="background:#FAFAF8;text-align:left;padding:12px 16px;font-weight:700;border-bottom:2px solid #D8D8D8;">Application ID</th>
      <th scope="col" style="background:#FAFAF8;text-align:left;padding:12px 16px;font-weight:700;border-bottom:2px solid #D8D8D8;">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #D8D8D8;"><a href="#" style="color:#255A90;font-weight:700;">APP-2025-001</a></td>
      <td style="padding:12px 16px;border-bottom:1px solid #D8D8D8;"><span class="tag tag-green">Approved</span></td>
    </tr>
  </tbody>
</table>
```

### Dialog / modal
```html
<div style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:200;display:flex;align-items:center;justify-content:center;"
  role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <div style="background:#fff;border-radius:4px;padding:32px;max-width:480px;width:90%;box-shadow:0 8px 24px rgba(0,0,0,0.2);">
    <h2 id="dialog-title" style="font-size:22px;font-weight:700;margin-bottom:12px;">Dialog title</h2>
    <p style="font-size:14px;color:#474543;margin-bottom:24px;line-height:1.6;">Supporting description text.</p>
    <div style="display:flex;gap:12px;justify-content:flex-end;">
      <button class="btn btn-outline btn-sm">Cancel</button>
      <button class="btn btn-blue btn-sm">Confirm</button>
    </div>
  </div>
</div>
```

### Progress bar
```html
<div>
  <div style="display:flex;justify-content:space-between;font-size:12px;color:#474543;margin-bottom:4px;">
    <span>Application progress</span><span>65%</span>
  </div>
  <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
    style="height:8px;background:#EDEBE9;border-radius:4px;overflow:hidden;">
    <div style="width:65%;height:100%;background:#013366;border-radius:4px;"></div>
  </div>
</div>
```

### Toggle / switch
```html
<label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
  <span style="position:relative;width:44px;height:24px;flex-shrink:0;">
    <input type="checkbox" checked style="opacity:0;width:0;height:0;" aria-label="Email notifications">
    <!-- JS-driven: add/remove checked class on wrapper to toggle -->
  </span>
  <span style="font-size:14px;color:#2D2D2D;">Email notifications</span>
</label>
```

### Callout
```html
<!-- Matches @bcgov/design-system-react-components Callout.css, lightBlue theme. Default (lightGrey) uses background #FAF9F8. -->
<div role="note" style="background:#F1F8FE;border-left:4px solid #013366;border-radius:4px 0 0 4px;padding:1rem 1.5rem;margin-bottom:1rem;">
  <div style="font-weight:700;font-size:1.125rem;line-height:1.913rem;color:#2D2D2D;margin-bottom:0.5rem;">Before you begin</div>
  <div style="font-size:1rem;line-height:1.688rem;color:#474543;">You will need your Business Number and proof of insurance.</div>
</div>
```
Callout vs Alert: a Callout (light grey/blue/gold, 4px left border, left-only radius) highlights neutral supporting content. An Alert (status colours, full 1px border, 4px radius) signals a state: info, success, warning, danger. Use the Callout for "Training materials" style boxes and the Alert for "IMPORTANT NOTICE" style warnings. See `inline-style-hosts.md`.

### Breadcrumb
```html
<nav aria-label="Breadcrumb">
  <ol style="display:flex;align-items:center;gap:8px;font-size:13px;color:#474543;list-style:none;padding:0;margin-bottom:24px;">
    <li><a href="/" style="color:#255A90;text-decoration:none;">Home</a></li>
    <li aria-hidden="true">/</li>
    <li><a href="/services" style="color:#255A90;text-decoration:none;">Services</a></li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">Apply for a permit</li>
  </ol>
</nav>
```

### Full footer
```html
<footer>
  <div style="background:#252423;border-top:3px solid #FBD389;padding:20px 32px;">
    <p style="font-size:12px;color:#fff;line-height:1.6;max-width:900px;margin:0 auto;">
      The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands. We acknowledge the rights, interests, priorities, and concerns of all Indigenous Peoples — First Nations, Métis, and Inuit — respecting and acknowledging their distinct cultures, histories, rights, laws, and governments.
    </p>
  </div>
  <div style="background:#FAFAF8;padding:32px;">
    <div style="max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:flex-start;gap:32px;flex-wrap:wrap;">
      <div>
        <img src="/assets/icons/bc-logo.png" alt="Government of British Columbia" style="height:38px;display:block;margin-bottom:12px;">
        <p style="font-size:13px;color:#474543;line-height:1.5;max-width:280px;">We can help in over 220 languages and through other accessible options.</p>
      </div>
      <div style="display:flex;gap:48px;">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#2D2D2D;margin-bottom:10px;">More info</div>
          <a href="#" style="display:block;font-size:13px;color:#255A90;text-decoration:none;margin-bottom:8px;">Disclaimer</a>
          <a href="#" style="display:block;font-size:13px;color:#255A90;text-decoration:none;margin-bottom:8px;">Privacy</a>
          <a href="#" style="display:block;font-size:13px;color:#255A90;text-decoration:none;margin-bottom:8px;">Accessibility</a>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#2D2D2D;margin-bottom:10px;">Connect</div>
          <a href="#" style="display:block;font-size:13px;color:#255A90;text-decoration:none;margin-bottom:8px;">Contact us</a>
          <a href="#" style="display:block;font-size:13px;color:#255A90;text-decoration:none;margin-bottom:8px;">Social media</a>
        </div>
      </div>
    </div>
  </div>
  <div style="background:#FAFAF8;border-top:1px solid #353433;padding:12px 32px;">
    <p style="font-size:12px;color:#474543;max-width:1200px;margin:0 auto;">© 2025 Government of British Columbia.</p>
  </div>
</footer>
```

---

## Assets

- **BC logo:** `assets/icons/bc-logo.png` — 166×64px, `alt="Government of British Columbia"` always required
- **Icons:** Font Awesome 6 Pro (use free CDN as fallback: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`)
- **Font files:** BCSans-Regular/Bold/Italic/BoldItalic/Light/LightItalic in woff2 + woff formats

## Design rules summary

| Rule | Value |
|---|---|
| Border radius | 4px (components), 999px (pills) |
| Button font-weight | 700 (bold) |
| Standard border | `1px solid #D8D8D8` |
| Focus ring | `2px solid #2E5DD7`, offset 2px |
| Max content width | 1200px centered |
| Header height | 56px (main) + optional 40px (subheader) |
| Tone | Sentence case, no emoji, no exclamation marks |
| Accessibility | WCAG 2.1 AA minimum |