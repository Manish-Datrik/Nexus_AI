import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
  trigger: ReactNode;
  open?: boolean;
  children: ReactNode;
};
export function Popover({
  trigger,
  open = false,
  children,
  className,
  ...props
}: PopoverProps) {
  return (
    <div className="relative inline-flex" {...props}>
      {trigger}
      {open ? (
        <div
          className={cn(
            "absolute left-0 top-full z-popover mt-2 min-w-48 rounded-md border border-border bg-surface-elevated p-3 text-sm text-text shadow-popover",
            className
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
