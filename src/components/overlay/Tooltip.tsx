import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type TooltipProps = HTMLAttributes<HTMLSpanElement> & {
  content: ReactNode;
  children: ReactNode;
};
export function Tooltip({
  content,
  children,
  className,
  ...props
}: TooltipProps) {
  return (
    <span className="group relative inline-flex" {...props}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 z-tooltip mb-2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-border bg-surface-elevated px-2 py-1 text-xs text-text opacity-0 shadow-popover transition duration-fast ease-standard group-hover:opacity-100 group-focus-within:opacity-100",
          className
        )}
      >
        {content}
      </span>
    </span>
  );
}
