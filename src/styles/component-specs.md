# Component Design Specifications

These are design specifications only. Do not implement components in this milestone.

## Shared Rules

- Use semantic CSS variables for color, radius, shadow, spacing, focus, gradients, glass, glow, and motion values.
- Minimum touch target is 44px by 44px.
- Disabled controls use `--opacity-disabled` and remain readable.
- Focus states use `:focus-visible` with `--focus`.
- Hover and active states must preserve AA contrast.

## Component Specs

- Button: primary, secondary, subtle, danger, and ghost variants; sm, md, lg sizes; icon-only buttons need accessible labels.
- Input: default, hover, focus, error, disabled, and read-only states; labels and helper text sit outside the field.
- Card: flat, raised, elevated, glass, and interactive elevations; default radius is `--radius-md`.
- Badge: neutral, primary, info, success, warning, danger, and accent variants.
- Table: compact density, clear row separators, sticky header support, and semantic sort indicators.
- Dialog: constrained width, modal elevation, overlay layer, labelled title, and escape-key dismissal.
- Modal: same layering as dialog with larger content capacity and scroll-safe body.
- Toast: success, warning, danger, and neutral variants; appears on `--z-toast`.
- Tooltip: short text only, delayed open, escape dismissal, and `--z-tooltip`.
- Tabs: underline and contained variants; selected state must not rely on color alone.
- Dropdown: keyboard-navigable menu surface with dropdown elevation.
- Checkbox: checked, unchecked, indeterminate, disabled, focus, and error states.
- Radio: selected, unselected, disabled, focus, and error states.
- Avatar: image, initials, and fallback states; sizes xs through xl.
- Skeleton: tokenized shimmer or static block with reduced-motion fallback.
- Spinner: small, medium, and large sizes with reduced-motion fallback.
- Empty State: icon, title, optional copy, and optional action slot.
- Error State: severity-driven color, clear title, recovery action slot, and no stack traces in user UI.
