import type { LabelHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function Label({
  className,
  required = false,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-text",
        className
      )}
      {...props}
    >
      {children}
      {required ? (
        <span className="text-danger" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}
