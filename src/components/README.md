# Global UI Component Library

Milestone 3 implements reusable primitives only. These components have no product logic, routes, data fetching, HR behavior, authentication, dashboards, or layout systems.

## Shared API Rules

- All components are typed with exported props.
- All components accept `className` overrides where applicable.
- Colors, surfaces, shadows, radii, focus, and motion use existing design tokens through Tailwind or CSS variables.
- Disabled states use native disabled semantics where possible.
- Controlled overlays receive `open`; they do not own application state.

## Primitive Components

- `Button`: `variant`, `size`, `loading`, `leftIcon`, `rightIcon`, native button props.
- `IconButton`: `label`, `icon`, `variant`, `size`, `loading`, native button props.
- `Input`: `inputSize`, `invalid`, native input props.
- `TextArea`: `invalid`, native textarea props.
- `Label`: `required`, native label props.
- `Badge`: `tone`, `variant`, span props.
- `Avatar`: `src`, `alt`, `fallback`, `size`.
- `Divider`: `orientation`.
- `Spinner`: `size`, `label`.
- `Skeleton`: div props.
- `Checkbox`, `Radio`, `Switch`: native input props.

## Feedback Components

- `Toast`: `tone`, `title`, `description`.
- `Alert`: `tone`, `title`.
- `Progress`: `value`, `max`, `label`.
- `LoadingIndicator`: `label`.

## Overlay Components

- `Modal`: `open`, `title`, `children`.
- `Dialog`: `open`, `title`, `description`, `children`.
- `Drawer`: `open`, `side`, `title`, `children`.
- `Tooltip`: `content`, `children`.
- `Popover`: `trigger`, `open`, `children`.

## Navigation Components

- `Tabs` and `Tab`: tablist and tab primitives with `active` state.
- `Breadcrumb` and `BreadcrumbItem`: semantic breadcrumb primitives with `current` state.
- `Pagination` and `PaginationButton`: pagination container and page controls.

## Data Display Components

- `Card`: `elevated`, `glass`.
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`.
- `EmptyState`: `icon`, `title`, `description`, `action`.
- `ErrorState`: `title`, `description`, `action`.

## Accessibility Notes

Use native controls whenever possible. Icon-only buttons require a `label`. Dialog-like overlays set `role="dialog"` and `aria-modal`. Progress uses native `progress`. Tooltip exposes `role="tooltip"`. Tabs and pagination expose semantic roles and aria states. Future composition should add focus management when overlays are wired into app behavior.
