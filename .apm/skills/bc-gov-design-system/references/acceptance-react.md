# Acceptance criteria — bc-gov-react skill

## Setup
- [ ] `@bcgov/design-system-react-components` installed
- [ ] `@bcgov/bc-sans` installed
- [ ] `@bcgov/bc-sans/css/BC_Sans.css` imported in app entry point
- [ ] No `className` overrides on design system components; props exist in `dist/index.d.ts`

## Component usage
- [ ] All components imported from package root (not deep paths)
- [ ] `isRequired` used (not HTML `required` attribute)
- [ ] `onPress` used on Button (not `onClick`)
- [ ] `isInvalid` + `errorMessage` used for field errors
- [ ] `role="alert"` on error/warning AlertBanner
- [ ] `role="status"` on info/success AlertBanner

## Design rules
- [ ] Sentence case on all labels and button text
- [ ] No emoji — icon components used instead
- [ ] Indigenous acknowledgment footer present on full-page layouts
- [ ] No plain `<button>` or `<input>` mixed with library components in same form

## Accessibility
- [ ] No manual focus style overrides on `bcds-*` components
- [ ] No custom error rendering alongside `errorMessage` prop
- [ ] All interactive elements have accessible labels (aria-label where no visible label)
