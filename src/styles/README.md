# Nexus AI Design System

Milestone 2 defines the reusable visual language only. It does not introduce UI screens, feature modules, business logic, or component implementations.

## Visual Principles

- Enterprise first: the product should feel calm, trustworthy, premium, and operationally clear.
- AI second: AI expression should come through subtle glows, layered depth, and intelligent motion, not excessive neon.
- Depth through layers: prefer glass surfaces, elevation, and shadows over flashy effects.
- Consistent motion: every future interaction should use the same timing and easing language.
- 3D where it adds value: reserve 3D for high-signal experiences such as Candidate Digital Twin, AI Decision Flow, and hero moments, not every surface.

## Design Tokens

Tokens live in `tokens.css` as CSS variables. They cover semantic colors, typography, spacing, radii, shadows, blur, opacity, z-index, gradients, glass, glow, and motion timing.

Use semantic tokens such as `--background`, `--surface`, `--surface-raised`, `--surface-elevated`, `--primary`, `--border`, `--text`, `--text-muted`, `--success`, `--info`, `--warning`, and `--danger`. Avoid hardcoded colors in future components.

## Theme Rules

Dark theme is the default on `:root`. Light theme is enabled with `[data-theme="light"]`.

Every component should consume semantic variables rather than direct palette values so themes can change independently from implementation.

## Typography

The base font stack is a modern system sans stack with `Inter` first when available. Typography tokens define display, heading, title, subtitle, body, caption, label, code, line-height, weight, and letter-spacing rules.

Use large type only for true page-level hierarchy. Product surfaces should favor body, label, caption, title, and subtitle tokens.

## Color Usage

The palette is built around ink neutrals, enterprise cobalt, restrained aqua, amber, green, red, and semantic info blue. Primary actions use cobalt. Secondary emphasis uses aqua. Amber is reserved for attention and warnings. Info is reserved for neutral system guidance, status context, and educational notices.

Gradients are tokenized but should be used sparingly. `--gradient-primary`, `--gradient-surface`, and `--gradient-accent` exist for premium emphasis, not broad page backgrounds.

## Surface And Depth

Surface levels progress from `--background` to `--surface`, `--surface-raised`, `--surface-elevated`, and `--surface-overlay`. Use `--surface-elevated` for important layered surfaces that need more separation than regular cards.

Glass tokens include `--glass-surface`, `--glass-border`, and `--glass-blur`. Use them only when depth improves comprehension.

Glow tokens include `--glow-primary`, `--glow-secondary`, and `--glow-danger`. Glows should be subtle indicators of intelligence or status, not decoration.

## Spacing Rules

Spacing uses a 4px-based scale from `--space-1` through `--space-24`. Future components should choose from the scale and avoid arbitrary spacing values.

## Elevation

Elevation tokens define card, dropdown, popover, modal, floating, and glow layers. Use elevation to clarify interaction hierarchy, not as decoration.

## Motion Principles

Motion definitions live in `motion.css`. Supported primitives are fade, slide, scale, pulse, standard easing, emphasized easing, spring easing, and page-duration timing.

Respect `prefers-reduced-motion`; nonessential movement should collapse to near-instant transitions.

## Accessibility Standards

Focus rings use `--focus` through `:focus-visible`. Interactive targets should be at least 44px. Disabled states must remain readable. Do not rely on color alone for selected, warning, info, or error states.

## Responsive Rules

Breakpoints are defined in Tailwind:

- Mobile: 360px
- Tablet: 768px
- Laptop: 1024px
- Desktop: 1280px
- Wide: 1536px

These are rules only. No layouts are implemented in this milestone.
