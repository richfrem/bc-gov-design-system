# Acceptance criteria — bc-gov-blazor skill

## Setup
- [ ] BC Sans `@font-face` declarations present for all 4 weights
- [ ] `colors_and_type.css` linked in `App.razor` or `_Layout.cshtml`
- [ ] Font Awesome 6 CDN linked
- [ ] BC logo PNG copied to `wwwroot/img/bc-logo.png`

## Component structure
- [ ] Each component has a matching `.razor.css` scoped stylesheet
- [ ] Components use CSS custom properties (never raw hex)
- [ ] `CaptureUnmatchedValues` used on components that wrap HTML elements

## Accessibility
- [ ] `aria-expanded` on accordion triggers reflects open state
- [ ] `aria-invalid` + `aria-describedby` on invalid inputs
- [ ] `role="alert"` / `aria-live="assertive"` on danger/warning alerts
- [ ] `role="status"` / `aria-live="polite"` on info/success alerts
- [ ] All interactive elements have `:focus-visible` ring

## Design rules
- [ ] Sentence case on all labels and button text
- [ ] No emoji — Font Awesome icons used
- [ ] Indigenous acknowledgment footer present in MainLayout
- [ ] No Title Case headings or button labels
