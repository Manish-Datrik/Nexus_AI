import type { InputHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Radio({ className, ...props }: RadioProps) {
  return (
    <input
      type="radio"
      className={cn(
        "h-4 w-4 border-border bg-surface text-primary accent-primary transition duration-base ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-[var(--opacity-disabled)]",
        className
      )}
      {...props}
    />
  );
}
