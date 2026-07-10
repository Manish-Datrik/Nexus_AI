import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type DrawerProps = HTMLAttributes<HTMLElement> & {
  open: boolean;
  side?: "left" | "right" | "bottom";
  title?: string;
  children: ReactNode;
};
const sides = {
  left: "left-0 top-0 h-full w-80",
  right: "right-0 top-0 h-full w-80",
  bottom: "bottom-0 left-0 w-full"
};
export function Drawer({
  open,
  side = "right",
  title,
  children,
  className,
  ...props
}: DrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-modal bg-background/70 backdrop-blur-md">
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "fixed border border-border bg-surface-elevated p-5 text-text shadow-modal",
          sides[side],
          className
        )}
        {...props}
      >
        {title ? (
          <h2 className="mb-4 text-title font-semibold">{title}</h2>
        ) : null}
        {children}
      </aside>
    </div>
  );
}
