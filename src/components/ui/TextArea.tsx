import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function TextArea({
  className,
  invalid = false,
  rows = 4,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full rounded-md border bg-surface px-3 py-2 text-sm text-text transition duration-base ease-standard placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        invalid
          ? "border-danger focus-visible:outline-danger"
          : "border-border focus-visible:outline-primary",
        className
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
