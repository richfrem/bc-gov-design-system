---
name: bc-gov-blazor
description: >
  Use this skill when building Blazor components or apps aligned to the B.C.
  Government Design System. Triggers: BC Gov Blazor component, Blazor BC government,
  BC Sans Blazor, BC government Razor component, WCAG Blazor BC, government Blazor UI,
  BC design tokens Blazor, Blazor Server BC Gov, Blazor WASM BC Gov.
user-invocable: true
allowed-tools: Bash, Read, Write
---

# BC Government Blazor Components Skill

You are building Blazor (Server or WASM) UI aligned to the **B.C. Government Design System v0.7.0**.

There is no official BC Gov Blazor component package. This skill derives component patterns directly from the design tokens CSS (`colors_and_type.css`) and the visual rules in the design system. The approach: write Razor components whose CSS mirrors the `bcds-*` class patterns from the React library.

The canonical token file is in `assets/colors_and_type.css`. Full component patterns are in `references/REFERENCE.md`.

---

## Setup

### 1. Add BC Sans font

Copy the `BCSans-*.woff2/.woff` files to `wwwroot/fonts/`.

In `wwwroot/css/site.css` (or equivalent global CSS):

```css
@font-face {
  font-family: 'BC Sans';
  src: url('/fonts/BCSans-Regular.woff2') format('woff2'),
       url('/fonts/BCSans-Regular.woff') format('woff');
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'BC Sans';
  src: url('/fonts/BCSans-Bold.woff2') format('woff2'),
       url('/fonts/BCSans-Bold.woff') format('woff');
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'BC Sans';
  src: url('/fonts/BCSans-Italic.woff2') format('woff2'),
       url('/fonts/BCSans-Italic.woff') format('woff');
  font-weight: 400; font-style: italic; font-display: swap;
}
@font-face {
  font-family: 'BC Sans';
  src: url('/fonts/BCSans-BoldItalic.woff2') format('woff2'),
       url('/fonts/BCSans-BoldItalic.woff') format('woff');
  font-weight: 700; font-style: italic; font-display: swap;
}
```

### 2. Add design tokens

Copy `colors_and_type.css` (from this skill's `assets/`) to `wwwroot/css/colors_and_type.css`.

In `App.razor` or `_Layout.cshtml`:

```html
<link rel="stylesheet" href="/css/colors_and_type.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
```

### 3. Folder structure

```
Components/
  BcGov/
    BcButton.razor         + BcButton.razor.css
    BcTextField.razor      + BcTextField.razor.css
    BcAlert.razor          + BcAlert.razor.css
    BcHeader.razor         + BcHeader.razor.css
    BcFooter.razor         + BcFooter.razor.css
    BcTag.razor
    BcAccordion.razor      + BcAccordion.razor.css
    BcCallout.razor
    BcProgressBar.razor
```

---

## Component patterns

### BcButton.razor

```razor
@* Variants: primary | secondary | tertiary | link
   Sizes:    small | medium | large              *@

<button class="bc-btn bc-btn--@Variant @(Danger ? "bc-btn--danger" : "") bc-btn--@Size"
        type="@Type"
        disabled="@IsDisabled"
        @onclick="OnClick"
        @attributes="AdditionalAttributes">
    @if (IconLeft != null) { <span class="bc-btn__icon" aria-hidden="true">@IconLeft</span> }
    @ChildContent
    @if (IconRight != null) { <span class="bc-btn__icon" aria-hidden="true">@IconRight</span> }
</button>

@code {
    [Parameter] public string Variant { get; set; } = "primary";
    [Parameter] public string Size { get; set; } = "medium";
    [Parameter] public string Type { get; set; } = "button";
    [Parameter] public bool Danger { get; set; }
    [Parameter] public bool IsDisabled { get; set; }
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public RenderFragment? IconLeft { get; set; }
    [Parameter] public RenderFragment? IconRight { get; set; }
    [Parameter] public EventCallback OnClick { get; set; }
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }
}
```

```css
/* BcButton.razor.css */
.bc-btn {
    display: inline-flex; align-items: center; gap: var(--space-2);
    border-radius: var(--radius-sm); font-family: var(--font-primary);
    font-weight: var(--fw-bold); cursor: pointer;
    border: 1px solid transparent; text-decoration: none;
}
.bc-btn:focus-visible { outline: 2px solid var(--color-brand-focus); outline-offset: 2px; }
.bc-btn--primary  { background: var(--color-brand-primary); color: var(--color-text-invert); padding: 10px 20px; font-size: var(--text-body); border: none; }
.bc-btn--primary:hover  { background: var(--color-brand-primary-hover); }
.bc-btn--primary:active { background: var(--color-brand-primary-pressed); }
.bc-btn--secondary { background: var(--color-surface-white); color: var(--color-brand-primary); border-color: var(--color-brand-primary); padding: 10px 20px; font-size: var(--text-body); }
.bc-btn--secondary:hover { background: var(--color-surface-default); }
.bc-btn--tertiary  { background: var(--color-surface-default); color: var(--color-brand-primary); padding: 10px 20px; font-size: var(--text-body); }
.bc-btn--link      { background: none; border: none; color: var(--color-text-link); font-size: var(--text-body-sm); font-weight: var(--fw-regular); text-decoration: underline; padding: 0; }
.bc-btn--danger.bc-btn--primary    { background: var(--color-danger); }
.bc-btn--danger.bc-btn--primary:hover { background: var(--color-danger-hover); }
.bc-btn--danger.bc-btn--secondary  { color: var(--color-danger); border-color: var(--color-danger); }
.bc-btn--small  { padding: 6px 14px; font-size: var(--text-body-sm); }
.bc-btn--large  { padding: 14px 28px; font-size: var(--text-body-lg); }
.bc-btn:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); cursor: not-allowed; border-color: transparent; }
```

---

### BcTextField.razor

```razor
<div class="bc-field @(IsInvalid ? "bc-field--invalid" : "")">
    <label for="@Id" class="bc-field__label">
        @Label @if (IsRequired) { <span aria-hidden="true">*</span> }
    </label>
    @if (!string.IsNullOrEmpty(Description)) {
        <span id="@(Id)-desc" class="bc-field__hint">@Description</span>
    }
    <input id="@Id"
           type="@Type"
           class="bc-field__input"
           value="@Value"
           placeholder="@Placeholder"
           required="@IsRequired"
           aria-required="@IsRequired"
           aria-invalid="@IsInvalid"
           aria-describedby="@AriaDescribedBy"
           @oninput="OnInput"
           @attributes="AdditionalAttributes" />
    @if (IsInvalid && !string.IsNullOrEmpty(ErrorMessage)) {
        <span id="@(Id)-err" class="bc-field__error" role="alert">@ErrorMessage</span>
    }
</div>

@code {
    [Parameter, EditorRequired] public string Id { get; set; } = default!;
    [Parameter, EditorRequired] public string Label { get; set; } = default!;
    [Parameter] public string Type { get; set; } = "text";
    [Parameter] public string? Value { get; set; }
    [Parameter] public string? Placeholder { get; set; }
    [Parameter] public string? Description { get; set; }
    [Parameter] public string? ErrorMessage { get; set; }
    [Parameter] public bool IsRequired { get; set; }
    [Parameter] public bool IsInvalid { get; set; }
    [Parameter] public EventCallback<ChangeEventArgs> OnInput { get; set; }
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

    private string? AriaDescribedBy =>
        string.Join(" ", new[] {
            !string.IsNullOrEmpty(Description)    ? $"{Id}-desc" : null,
            IsInvalid && !string.IsNullOrEmpty(ErrorMessage) ? $"{Id}-err" : null
        }.Where(x => x != null));
}
```

```css
/* BcTextField.razor.css */
.bc-field { display: flex; flex-direction: column; gap: var(--space-1); margin-bottom: var(--space-4); }
.bc-field__label { font-size: var(--text-body-sm); font-weight: var(--fw-bold); color: var(--color-text-primary); }
.bc-field__hint  { font-size: var(--text-label-sm); color: var(--color-text-secondary); }
.bc-field__input {
    font-family: var(--font-primary); font-size: var(--text-body-sm);
    border: 2px solid var(--color-text-primary); border-radius: var(--radius-sm);
    padding: var(--space-2) var(--space-3); color: var(--color-text-primary);
    background: var(--color-surface-white);
}
.bc-field__input:focus { outline: none; border-color: var(--color-brand-focus); }
.bc-field__input::placeholder { color: var(--color-text-placeholder); }
.bc-field--invalid .bc-field__input { border-color: var(--color-danger); }
.bc-field__error { font-size: var(--text-label-sm); color: var(--color-danger); font-weight: var(--fw-bold); }
```

---

### BcAlert.razor

```razor
@* Variants: info | success | warning | danger *@

<div class="bc-alert bc-alert--@Variant" role="@Role" aria-live="@AriaLive">
    <i class="@IconClass" aria-hidden="true"></i>
    <div class="bc-alert__body">@ChildContent</div>
    @if (IsCloseable) {
        <button class="bc-alert__close" aria-label="Dismiss" @onclick="Dismiss">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
    }
</div>

@code {
    [Parameter] public string Variant { get; set; } = "info";
    [Parameter] public bool IsCloseable { get; set; } = true;
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }

    private string Role => Variant is "danger" or "warning" ? "alert" : "status";
    private string AriaLive => Variant is "danger" or "warning" ? "assertive" : "polite";
    private string IconClass => Variant switch {
        "success" => "fa-solid fa-circle-check",
        "warning" => "fa-solid fa-triangle-exclamation",
        "danger"  => "fa-solid fa-circle-exclamation",
        _         => "fa-solid fa-circle-info",
    };

    private async Task Dismiss() => await OnClose.InvokeAsync();
}
```

```css
/* BcAlert.razor.css */
.bc-alert { display: flex; align-items: flex-start; gap: var(--space-3); padding: var(--space-4) var(--space-5); border-radius: var(--radius-sm); border: 1px solid; margin-bottom: var(--space-4); font-size: var(--text-body-sm); }
.bc-alert--info    { background: var(--color-info-bg);    border-color: var(--color-info-border);    color: var(--color-brand-primary); }
.bc-alert--success { background: var(--color-success-bg); border-color: var(--color-success-border); color: var(--color-success); }
.bc-alert--warning { background: var(--color-warning-bg); border-color: var(--color-warning-border); color: var(--color-text-primary); }
.bc-alert--danger  { background: var(--color-danger-bg);  border-color: var(--color-danger-border);  color: var(--color-danger); }
.bc-alert__body { flex: 1; }
.bc-alert__close { background: none; border: none; cursor: pointer; padding: 0; color: inherit; }
.bc-alert__close:focus-visible { outline: 2px solid var(--color-brand-focus); outline-offset: 2px; }
```

---

### BcHeader.razor

```razor
<header class="bc-header" role="banner">
    <a href="/" class="bc-header__logo">
        <img src="/img/bc-logo.png" alt="Government of British Columbia" class="bc-header__wordmark" />
    </a>
    @if (ServiceName != null) {
        <span class="bc-header__service-name">@ServiceName</span>
    }
    @if (NavContent != null) {
        <nav class="bc-header__nav" aria-label="Main navigation">@NavContent</nav>
    }
</header>

@code {
    [Parameter] public string? ServiceName { get; set; }
    [Parameter] public RenderFragment? NavContent { get; set; }
}
```

```css
/* BcHeader.razor.css */
.bc-header { background: var(--color-brand-primary); padding: var(--space-4) var(--layout-px); display: flex; align-items: center; gap: var(--space-4); }
.bc-header__wordmark { max-height: 48px; display: block; }
.bc-header__service-name { font-family: var(--font-primary); font-weight: var(--fw-bold); font-size: var(--text-body-lg); color: var(--color-text-invert); }
.bc-header__nav { margin-left: auto; display: flex; gap: var(--space-5); }
.bc-header__nav a { color: var(--color-text-invert); font-size: var(--text-body-sm); font-weight: var(--fw-bold); text-decoration: none; padding-bottom: 2px; border-bottom: 2px solid transparent; }
.bc-header__nav a:hover { border-bottom-color: var(--color-text-invert); }
.bc-header__nav a:focus-visible { outline: 2px solid var(--color-brand-focus); outline-offset: 2px; }
```

---

### BcFooter.razor (with Indigenous acknowledgment)

```razor
<footer role="contentinfo">
    <div class="bc-footer__indigenous">
        <p>The B.C. Public Service acknowledges the territories of First Nations around B.C.
        and is grateful to carry out our work on these lands. We acknowledge the rights,
        interests, priorities, and concerns of all Indigenous Peoples — First Nations,
        Métis, and Inuit — respecting and acknowledging their distinct cultures, histories,
        rights, laws, and governments.</p>
    </div>
    <div class="bc-footer__gov">
        <p>@ChildContent</p>
        <p class="bc-footer__copy">© @DateTime.Now.Year Government of British Columbia.</p>
    </div>
</footer>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
```

```css
/* BcFooter.razor.css */
.bc-footer__indigenous { background: var(--color-surface-dark); border-top: 3px solid var(--color-border-indigenous); padding: var(--space-5) var(--layout-px); }
.bc-footer__indigenous p { font-size: var(--text-label-sm); color: var(--color-text-invert); line-height: 1.6; max-width: 900px; margin: 0 auto; }
.bc-footer__gov { background: var(--color-surface-default); border-top: 1px solid var(--color-border-dark); padding: var(--space-3) var(--layout-px); }
.bc-footer__gov p, .bc-footer__copy { font-size: var(--text-label-sm); color: var(--color-text-secondary); max-width: var(--layout-content-width); margin: 0 auto; }
```

---

### BcAccordion.razor

```razor
<div class="bc-accordion @(IsOpen ? "bc-accordion--open" : "")">
    <button class="bc-accordion__trigger"
            aria-expanded="@IsOpen"
            aria-controls="@panelId"
            @onclick="Toggle">
        <span>@Title</span>
        <i class="fa-solid @(IsOpen ? "fa-chevron-up" : "fa-chevron-down")" aria-hidden="true"></i>
    </button>
    <div id="@panelId" class="bc-accordion__panel" role="region" aria-labelledby="@triggerId"
         hidden="@(!IsOpen)">
        <div class="bc-accordion__body">@ChildContent</div>
    </div>
</div>

@code {
    [Parameter, EditorRequired] public string Title { get; set; } = default!;
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter] public bool DefaultOpen { get; set; }

    private bool IsOpen;
    private string panelId   = $"panel-{Guid.NewGuid():N}";
    private string triggerId = $"trigger-{Guid.NewGuid():N}";

    protected override void OnInitialized() => IsOpen = DefaultOpen;
    private void Toggle() => IsOpen = !IsOpen;
}
```

```css
/* BcAccordion.razor.css */
.bc-accordion { border: 1px solid var(--color-border); border-radius: var(--radius-sm); margin-bottom: var(--space-2); }
.bc-accordion__trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: var(--space-4) var(--space-5); background: var(--color-surface-white); border: none; cursor: pointer; font-family: var(--font-primary); font-size: var(--text-body); font-weight: var(--fw-bold); color: var(--color-text-primary); text-align: left; }
.bc-accordion__trigger:hover { background: var(--color-surface-default); }
.bc-accordion__trigger:focus-visible { outline: 2px solid var(--color-brand-focus); outline-offset: 2px; }
.bc-accordion__panel { padding: 0 var(--space-5) var(--space-4); }
```

---

## Full page layout (MainLayout.razor)

```razor
@inherits LayoutComponentBase

<BcHeader ServiceName="Service name">
    <NavContent>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
    </NavContent>
</BcHeader>

<main class="bc-main">
    <div class="bc-main__content">
        @Body
    </div>
</main>

<BcFooter>
    <a href="/privacy">Privacy</a> ·
    <a href="/disclaimer">Disclaimer</a> ·
    <a href="/accessibility">Accessibility</a>
</BcFooter>
```

```css
/* MainLayout.razor.css */
.bc-main { flex: 1; }
.bc-main__content { max-width: var(--layout-content-width); margin: 0 auto; padding: var(--space-7) var(--layout-px); }
```

---

## Non-negotiable rules

1. **BC Sans font-face declarations required** — include all 4 weights before any component renders
2. **`colors_and_type.css` must be linked** — all `--color-*`, `--space-*`, `--font-*` tokens come from it
3. **Font Awesome 6 CDN** for icons — no emoji, no other icon sets
4. **`role="alert"` + `aria-live="assertive"`** on danger/warning alerts; `role="status"` on info/success
5. **`aria-expanded`** on accordion triggers — always reflects open state
6. **`aria-invalid` + `aria-describedby`** on invalid inputs — always link to error message element
7. **Sentence case** — "Submit application" not "Submit Application"
8. **Indigenous acknowledgment footer** mandatory on every page layout
9. **Focus rings** — `2px solid var(--color-brand-focus)` with `2px offset` on all interactive elements
10. **Scoped CSS** — use `.razor.css` files for component styles; never global class name collisions

## Do NOT
- Use raw hex — always use CSS custom properties from `colors_and_type.css`
- Create a component for something that plain HTML + CSS handles correctly
- Override `:focus-visible` styles to hide focus rings
- Use Title Case headings or button labels
- Add emoji anywhere in the UI
