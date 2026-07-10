# Nexus AI - Design System

This document outlines the **visual design language** and technical implementation details for **Nexus AI** – The HR Decision Intelligence Platform. 

Our philosophy is built around five core principles:
1. **Professional**: Built for the enterprise.
2. **Minimal & Calm**: Reduces cognitive load.
3. **Futuristic**: Uses subtle depth, glassmorphism, and glow.
4. **Trustworthy**: Secure, high-end look and feel.
5. **Layered Interfaces**: Physicality and depth instead of flat, neon elements.

---

## 1. Typography System

We use a modern, sans-serif stack driven by **Inter** (`var(--font-sans)`) to ensure crisp legibility on all displays, paired with a monospaced font for code (`var(--font-mono)`).

### Scales
- `text-display` (4rem / 64px): For massive hero numbers or empty states.
- `text-heading` (3rem / 48px): H1 page titles.
- `text-title` (2rem / 32px): H2 section titles.
- `text-subtitle` (1.5rem / 24px): H3 sub-section headers.
- `text-body` (1rem / 16px): Standard text, paragraphs, and lists.
- `text-caption` (0.875rem / 14px): Secondary text, timestamps.
- `text-label` (0.75rem / 12px): Very small text, tags, badges.
- `text-code` (0.8125rem / 13px): Monospace values, data points.

### Weights & Leading
Weights range from `light (300)` to `bold (700)`. Line height scales from `none (1)` to `loose (2)`. We rely heavily on `tight` (1.15) for headings and `normal` (1.5) for body. Letter spacing is slightly tighter on headings and slightly wider on all-caps labels.

---

## 2. Color System

Nexus AI defaults to **Dark Mode** for a high-tech, calm environment. All colors are mapped to CSS variables using RGB values to allow `alpha` manipulation in Tailwind.

### Core Palette (Dark)
- **Background** `rgb(10 10 12)`: Deepest black, mimicking physical space.
- **Surface** `rgb(16 16 20)`: Base application layer.
- **Surface Raised** `rgb(24 24 30)`: Standard Cards.
- **Surface Elevated** `rgb(32 32 40)`: Dropdowns.
- **Surface Floating** `rgb(40 40 48)`: Modals and Tooltips.

### Semantics
- **Primary** `rgb(99 102 241)`: Calm Indigo (Primary actions).
- **Secondary** `rgb(168 85 247)`: Premium Purple (AI elements).
- **Accent** `rgb(14 165 233)`: Light Sky Blue (Focus states, links).
- **Muted** `rgb(113 113 122)`: Inactive states.
- Standard **Success, Warning, Danger, Info** colors are included for system feedback.

### Glass & Glow
To avoid a "flat" dashboard look, we use:
- `--glass-surface`: Translucent background with blur for panels resting on top of content.
- `--glow-primary`: Subtle 40px blue/indigo glow for active AI components.

---

## 3. Theme System

The design system supports both dark (default) and light themes via `[data-theme="light"]`.
- The light mode reverses the surfaces (white to gray) while maintaining the indigo/purple semantic colors.
- Shadows in light mode rely purely on black alpha, whereas dark mode shadows are sharper and darker.

---

## 4. Spacing System

A mathematical scale to ensure perfect rhythm.
Based on a `4px` grid:
- `space-1` (4px), `space-2` (8px), `space-4` (16px), `space-8` (32px), etc.
- Used consistently for padding, margins, and gaps.

---

## 5. Radius System

Corners are subtly rounded to feel premium and friendly, but not toy-like.
- `xs` (2px): Checkboxes.
- `md` (8px): Inputs, buttons, small cards.
- `lg` (12px): Standard panels and dropdowns.
- `2xl` (24px): Large modal windows.
- `full`: Avatars, pill badges.

---

## 6. Shadow System

Our shadows imply physical stacking order:
- `shadow-sm` / `md`: Raised elements (Cards, Buttons).
- `shadow-lg` / `xl`: Floating elements (Dropdowns).
- `shadow-2xl`: High-elevation elements (Modals).
- `shadow-glass`: A specialized inner shadow mimicking a physical edge catch-light.
- `shadow-glow-*`: Used to emit a soft light behind active AI elements.

---

## 7. Motion System

Motion must be purposeful, swift, and never block the user.
- **Spring Animations**: `ease-spring` provides a gentle, premium bounce on scaling/hovering.
- **Hover Lift**: `.nx-hover-lift` lifts elements 2px and deepens the shadow.
- **Press Scale**: `.nx-press-scale` shrinks elements slightly (0.97) when clicked for tactile feedback.
- **Page Transitions**: Smooth fade and slide up (`.nx-page-transition-enter`).
- All animations respect `prefers-reduced-motion`.

---

## 8. Icon System

- **Library**: Lucide Icons.
- **Sizing**: 
  - 16px (`w-4 h-4`) for inline text.
  - 20px (`w-5 h-5`) for standard buttons/inputs.
  - 24px (`w-6 h-6`) for standalone actions/navigation.
- **Stroke**: Always `2px` (or `1.5px` for large decorative icons).

---

## 9. Chart Theme

Business logic charts are excluded, but the foundational variables exist:
- `chart-axis`: Muted text color for axis labels.
- `chart-grid`: Low opacity border color for grid lines.
- `chart-tooltip-bg`: Floating surface color.
- `chart-card-bg`: Glass surface for chart containers.

---

## 10. 3D Style Guide (Future Three.js)

When 3D scenes are introduced (e.g., node graphs, AI visuals), they must adhere to:
- **Lighting**: `var(--3d-light-ambient)` and directional lights to match the current theme.
- **Materials**: High transmission (0.9), low roughness (0.1) to match the glassmorphic CSS.
- **Camera**: 45deg FOV for a natural perspective.
- **Interactions**: Bound to spring physics (`tension: 170`, `friction: 26`).

---

## 11. Accessibility

- **Focus Rings**: Standardized outline using the `--accent` color for keyboard navigation (`:focus-visible`).
- **Contrast**: Text variables (`--text`, `--text-muted`) guarantee WCAG AA compliance against their respective backgrounds.
- **Touch Targets**: Minimum 40px/10rem spacing for interactive elements on mobile.

---

## 12. Responsive Design Rules

Breakpoints defined in Tailwind:
- `mobile`: 360px
- `tablet`: 768px
- `laptop`: 1024px
- `desktop`: 1280px
- `wide`: 1536px
- `ultrawide`: 1920px

Layouts should fluidly stack below `tablet`, utilize sidebars and multi-column grids from `laptop` onwards, and constrain maximum width at `ultrawide` to prevent infinitely stretching tables.
