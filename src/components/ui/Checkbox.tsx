import type { InputHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border-border bg-surface text-primary accent-primary transition duration-base ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-[var(--opacity-disabled)]",
        className
      )}
      {...props}
    />
  );
}
