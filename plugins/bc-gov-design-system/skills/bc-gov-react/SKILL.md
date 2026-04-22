---
name: bc-gov-react
description: >
  Use this skill when building React components or apps aligned to the B.C.
  Government Design System. Triggers: BC Gov React component, @bcgov/design-system-react-components,
  BC government React app, BC Sans React, BC Gov form in React, government React UI,
  WCAG-compliant BC government component, React Aria BC Gov.
user-invocable: true
allowed-tools: Bash, Read, Write
---

# BC Government React Components Skill

You are building React UI using the official **B.C. Government Design System React component library** (`@bcgov/design-system-react-components` v0.7.0).

Full component patterns are in `references/REFERENCE.md`.

---

## Installation

```bash
npm install @bcgov/design-system-react-components @bcgov/bc-sans
```

### Global CSS (add once to your app entry point)

```tsx
// app entry — e.g. main.tsx, _app.tsx, layout.tsx
import '@bcgov/design-system-react-components/dist/styles.css';
import '@bcgov/bc-sans/css/BCSans.css';
```

> **Next.js App Router:** import both in `app/layout.tsx` inside the root layout.
> **Vite/CRA:** import in `main.tsx` or `index.tsx`.

---

## Core component APIs

### Button

```tsx
import { Button } from '@bcgov/design-system-react-components';

// Variants: "primary" | "secondary" | "tertiary" | "link"  (default: "primary")
// Sizes:    "xsmall" | "small" | "medium" | "large"        (default: "medium")

<Button variant="primary" size="medium" onPress={() => {}}>Submit application</Button>
<Button variant="secondary">Save draft</Button>
<Button variant="tertiary" danger>Delete record</Button>
<Button variant="link">Cancel</Button>
<Button isIconButton aria-label="Close"><CloseIcon /></Button>
```

### TextField

```tsx
import { TextField } from '@bcgov/design-system-react-components';

<TextField
  label="Full name"
  description="As it appears on your ID"
  isRequired
  placeholder="Jane Smith"
  onChange={(val) => {}}
/>

// Error state
<TextField
  label="Email address"
  isRequired
  isInvalid
  errorMessage="Enter a valid email address"
/>
```

### TextArea

```tsx
import { TextArea } from '@bcgov/design-system-react-components';

<TextArea
  label="Message"
  description="Describe your inquiry"
  maxLength={500}
/>
```

### Select

```tsx
import { Select } from '@bcgov/design-system-react-components';

// Flat list
<Select
  label="Topic"
  placeholder="Select a topic"
  items={[
    { label: 'Service inquiry', id: 'inquiry' },
    { label: 'Feedback',        id: 'feedback' },
    { label: 'Other',           id: 'other' },
  ]}
  onSelectionChange={(key) => {}}
/>

// Sectioned list
<Select
  label="Ministry"
  sections={[
    { heading: 'Services', items: [{ label: 'Service BC', id: 'sbc' }] },
    { heading: 'Health',   items: [{ label: 'Health BC',  id: 'hbc' }] },
  ]}
/>
```

### Checkbox & CheckboxGroup

```tsx
import { Checkbox, CheckboxGroup } from '@bcgov/design-system-react-components';

<CheckboxGroup label="Preferred contact method">
  <Checkbox value="email">Email</Checkbox>
  <Checkbox value="phone">Phone</Checkbox>
  <Checkbox value="mail">Mail</Checkbox>
</CheckboxGroup>
```

### Radio & RadioGroup

```tsx
import { Radio, RadioGroup } from '@bcgov/design-system-react-components';

<RadioGroup label="Application type" isRequired>
  <Radio value="new">New application</Radio>
  <Radio value="renewal">Renewal</Radio>
  <Radio value="amendment">Amendment</Radio>
</RadioGroup>
```

### AlertBanner

```tsx
import { AlertBanner } from '@bcgov/design-system-react-components';

// Variants: "info" | "success" | "warning" | "danger" | "black"
<AlertBanner variant="info" isCloseable>
  <strong>Information</strong>
  <p>Your application has been received and is under review.</p>
</AlertBanner>

<AlertBanner variant="danger" role="alert" isCloseable={false}>
  <strong>Error</strong>
  <p>Enter a valid email address.</p>
</AlertBanner>
```

### InlineAlert

```tsx
import { InlineAlert } from '@bcgov/design-system-react-components';

// Compact alert for field-level or inline feedback
<InlineAlert variant="warning">Session will expire in 5 minutes.</InlineAlert>
```

### Callout

```tsx
import { Callout } from '@bcgov/design-system-react-components';

<Callout>
  <strong>Before you begin</strong>
  <p>You will need your BC Services Card and Social Insurance Number.</p>
</Callout>
```

### Tag & TagGroup

```tsx
import { Tag, TagGroup, TagList } from '@bcgov/design-system-react-components';

<TagGroup label="Application status" selectionMode="none">
  <TagList>
    <Tag id="review">In review</Tag>
    <Tag id="approved">Approved</Tag>
  </TagList>
</TagGroup>
```

### Switch

```tsx
import { Switch } from '@bcgov/design-system-react-components';

<Switch defaultSelected={false} onChange={(val) => {}}>
  Enable notifications
</Switch>
```

### ProgressBar

```tsx
import { ProgressBar } from '@bcgov/design-system-react-components';

<ProgressBar label="Upload progress" value={65} minValue={0} maxValue={100} />
```

### Dialog & Modal

```tsx
import { Button, Dialog, DialogTrigger, Modal } from '@bcgov/design-system-react-components';

<DialogTrigger>
  <Button variant="secondary">Open dialog</Button>
  <Modal>
    <Dialog>
      {({ close }) => (
        <>
          <Heading slot="title">Confirm submission</Heading>
          <p>Are you sure you want to submit this application?</p>
          <Button onPress={close} variant="secondary">Cancel</Button>
          <Button onPress={() => { submit(); close(); }}>Confirm</Button>
        </>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>
```

### Accordion & AccordionGroup

```tsx
import { Accordion, AccordionGroup } from '@bcgov/design-system-react-components';

<AccordionGroup>
  <Accordion title="What documents do I need?">
    <p>You will need government-issued photo ID and proof of address.</p>
  </Accordion>
  <Accordion title="How long does processing take?">
    <p>Processing takes 5–10 business days.</p>
  </Accordion>
</AccordionGroup>
```

### Header & Footer

```tsx
import { Header, Footer, FooterLinks } from '@bcgov/design-system-react-components';

<Header title="My BC Government Service" />

<Footer>
  <FooterLinks>
    <a href="/privacy">Privacy</a>
    <a href="/disclaimer">Disclaimer</a>
    <a href="/accessibility">Accessibility</a>
  </FooterLinks>
</Footer>
```

### Link

```tsx
import { Link } from '@bcgov/design-system-react-components';

<Link href="/apply">Start your application</Link>

// External link (adds icon automatically)
<Link href="https://gov.bc.ca" target="_blank">BC Government website</Link>
```

### Tooltip

```tsx
import { Tooltip, TooltipTrigger, Button } from '@bcgov/design-system-react-components';

<TooltipTrigger>
  <Button variant="tertiary" isIconButton aria-label="More information">
    <InfoIcon />
  </Button>
  <Tooltip>This field is required for processing your application.</Tooltip>
</TooltipTrigger>
```

### Form with validation

```tsx
import { Form, Button, TextField, Select } from '@bcgov/design-system-react-components';

<Form onSubmit={(e) => { e.preventDefault(); /* handle */ }}>
  <TextField label="Full name" isRequired />
  <TextField label="Email address" type="email" isRequired />
  <Select label="Topic" items={topics} />
  <Button type="submit">Send message</Button>
  <Button variant="link" type="reset">Clear form</Button>
</Form>
```

---

## Available icons

```tsx
import {
  BcLogo, CloseIcon, InfoIcon, CheckIcon, CheckCircleIcon,
  ExclamationIcon, ExclamationCircleIcon, CalendarIcon,
  PlusIcon, MinusIcon, DashIcon, UpRightFromSquareIcon
} from '@bcgov/design-system-react-components';
```

---

## Non-negotiable rules

1. **Always import the CSS** — components are unstyled without `dist/styles.css`
2. **Use `isRequired` not HTML `required`** — React Aria manages ARIA attributes
3. **Use `isInvalid` + `errorMessage`** — never roll custom error rendering alongside these components
4. **Use `onPress` not `onClick`** for Button — React Aria normalizes pointer/keyboard events
5. **Sentence case** — "Submit application" not "Submit Application"
6. **No emoji** — use the provided icon components
7. **`role="alert"`** on AlertBanner for errors/warnings; `role="status"` for info/success
8. **Focus is handled automatically** by React Aria — do not override focus styles on these components
9. **WCAG 2.1 AA** — the library satisfies this when used correctly; do not unwrap into plain HTML
10. **Indigenous acknowledgment footer** — required on every full-page layout; use the `<Footer>` component

## Do NOT
- Import from deep paths like `@bcgov/design-system-react-components/dist/Button` — always use the package root
- Mix plain `<button>` / `<input>` elements with these components in the same form
- Override `bcds-*` CSS class internals — extend via wrapper classes only
- Use `@bcgov/design-tokens` CSS vars directly in component `style` props — let the library handle tokens
