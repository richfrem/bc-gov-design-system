# BC Government React Components — Full Reference

Package: `@bcgov/design-system-react-components` v0.7.0  
Source: https://github.com/bcgov/design-system/tree/main/packages/react-components

---

## Complete component list

| Component | Import | Notes |
|---|---|---|
| Accordion | `Accordion, AccordionGroup` | Collapsible content panels |
| AlertBanner | `AlertBanner` | Page-level alert — info/success/warning/danger/black |
| AlertDialog | `AlertDialog` | Accessible alert dialog (blocking) |
| Button | `Button` | primary/secondary/tertiary/link + danger flag |
| ButtonGroup | `ButtonGroup` | Wraps multiple buttons |
| Calendar | `Calendar` | Date picker calendar |
| Callout | `Callout` | Highlighted note/aside |
| Checkbox | `Checkbox, CheckboxGroup` | Single or grouped checkboxes |
| DatePicker | `DatePicker` | Full date input with calendar popover |
| Dialog | `Dialog, DialogTrigger` | Non-blocking dialog |
| Footer | `Footer, FooterLinks` | Site footer with Indigenous acknowledgment |
| Form | `Form` | Form wrapper with validation context |
| Header | `Header` | Site header with BC logo |
| Heading | `Heading` | Semantic heading (h1–h6) |
| InlineAlert | `InlineAlert` | Compact inline alert |
| Link | `Link` | Accessible link with external indicator |
| Modal | `Modal` | Modal overlay wrapper for Dialog |
| NumberField | `NumberField` | Numeric input with increment/decrement |
| ProgressBar | `ProgressBar` | Linear progress indicator |
| ProgressCircle | `ProgressCircle` | Circular spinner/progress |
| Radio | `Radio, RadioGroup` | Single or grouped radio buttons |
| Select | `Select` | Accessible dropdown (flat or sectioned) |
| Separator | `Separator` | Horizontal rule / divider |
| Switch | `Switch` | Toggle on/off |
| Tag | `Tag, TagGroup, TagList` | Status tags, filterable |
| Text | `Text` | Styled text block |
| TextArea | `TextArea` | Multi-line text input |
| TextField | `TextField` | Single-line text input |
| TimeField | `TimeField` | Time input |
| ToggleButton | `ToggleButton, ToggleButtonGroup` | Pressed/active toggle |
| Tooltip | `Tooltip, TooltipTrigger` | Hover/focus tooltip |

---

## Full page layout example (Next.js App Router)

```tsx
// app/layout.tsx
import '@bcgov/design-system-react-components/dist/styles.css';
import '@bcgov/bc-sans/css/BCSans.css';
import { Header, Footer, FooterLinks } from '@bcgov/design-system-react-components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header title="Service name" />
        <main>{children}</main>
        <Footer>
          <FooterLinks>
            <a href="/privacy">Privacy</a>
            <a href="/disclaimer">Disclaimer</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/copyright">Copyright</a>
          </FooterLinks>
        </Footer>
      </body>
    </html>
  );
}
```

---

## Complete contact form

```tsx
'use client'; // Next.js App Router
import { useState } from 'react';
import {
  Form, TextField, TextArea, Select, RadioGroup, Radio,
  CheckboxGroup, Checkbox, Button, AlertBanner
} from '@bcgov/design-system-react-components';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <AlertBanner variant="success" isCloseable={false}>
        <strong>Application submitted</strong>
        <p>We will contact you within 5 business days.</p>
      </AlertBanner>
    );
  }

  return (
    <Form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <TextField
        label="Full name"
        description="As it appears on your government-issued ID"
        isRequired
        autoComplete="name"
      />
      <TextField
        label="Email address"
        type="email"
        isRequired
        autoComplete="email"
      />
      <TextField
        label="Phone number"
        type="tel"
        autoComplete="tel"
      />
      <Select
        label="Topic"
        isRequired
        placeholder="Select a topic"
        items={[
          { id: 'inquiry',  label: 'Service inquiry' },
          { id: 'feedback', label: 'Feedback' },
          { id: 'appeal',   label: 'Appeal or complaint' },
          { id: 'other',    label: 'Other' },
        ]}
      />
      <RadioGroup label="Preferred contact method" isRequired>
        <Radio value="email">Email</Radio>
        <Radio value="phone">Phone</Radio>
        <Radio value="mail">Mail</Radio>
      </RadioGroup>
      <TextArea
        label="Message"
        description="Describe your inquiry in plain language"
        maxLength={1000}
      />
      <CheckboxGroup label="Consent">
        <Checkbox value="consent" isRequired>
          I consent to the collection and use of this information as described
          in the <a href="/privacy">privacy notice</a>.
        </Checkbox>
      </CheckboxGroup>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button type="submit">Submit inquiry</Button>
        <Button variant="link" type="reset">Clear form</Button>
      </div>
    </Form>
  );
}
```

---

## Accordion FAQ pattern

```tsx
import { AccordionGroup, Accordion } from '@bcgov/design-system-react-components';

const faqs = [
  { q: 'What documents do I need?',        a: 'You will need government-issued photo ID and proof of residence.' },
  { q: 'How long does processing take?',   a: 'Processing takes 5–10 business days after we receive all required documents.' },
  { q: 'Can I check my application status?', a: 'Yes. Sign in to your BC Services Card account to view your status.' },
];

export function FAQ() {
  return (
    <AccordionGroup>
      {faqs.map(({ q, a }) => (
        <Accordion key={q} title={q}>
          <p>{a}</p>
        </Accordion>
      ))}
    </AccordionGroup>
  );
}
```

---

## Data table with status tags

```tsx
import { Tag, TagGroup, TagList } from '@bcgov/design-system-react-components';

type RowStatus = 'live' | 'beta' | 'pilot' | 'review';

const statusVariant: Record<RowStatus, string> = {
  live:   'success',
  beta:   'info',
  pilot:  'warning',
  review: 'neutral',
};

// Tags render as plain <Tag> — wrap in TagGroup/TagList for accessible grouping
export function StatusTag({ status }: { status: RowStatus }) {
  return (
    <TagGroup label={`Status: ${status}`} selectionMode="none">
      <TagList>
        <Tag id={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</Tag>
      </TagList>
    </TagGroup>
  );
}
```

---

## Confirm dialog pattern

```tsx
import {
  Button, Dialog, DialogTrigger, Modal, Heading
} from '@bcgov/design-system-react-components';

export function DeleteConfirmDialog({ onConfirm }: { onConfirm: () => void }) {
  return (
    <DialogTrigger>
      <Button variant="tertiary" danger>Delete record</Button>
      <Modal>
        <Dialog>
          {({ close }) => (
            <>
              <Heading slot="title">Delete this record?</Heading>
              <p>This action cannot be undone. The record will be permanently removed.</p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <Button variant="secondary" onPress={close}>Cancel</Button>
                <Button danger onPress={() => { onConfirm(); close(); }}>Delete record</Button>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
```

---

## Progress with loading state

```tsx
import { ProgressBar, ProgressCircle } from '@bcgov/design-system-react-components';

// Determinate — file upload
<ProgressBar label="Uploading document" value={uploadProgress} minValue={0} maxValue={100} />

// Indeterminate — waiting for server
<ProgressCircle aria-label="Loading" isIndeterminate />
```

---

## CSS token override (advanced)

The library uses `@bcgov/design-tokens` CSS custom properties. Override at the `:root` level in your global CSS — do not override `bcds-*` class internals:

```css
/* globals.css — advanced token overrides only */
:root {
  /* Tokens follow --bcds-* naming in the design-tokens package */
  /* Check @bcgov/design-tokens/css/variables.css for the full list */
}
```

Do not import `colors_and_type.css` from this plugin alongside the React library — it uses a different token namespace (`--color-*` vs `--bcds-*`) and will conflict.
