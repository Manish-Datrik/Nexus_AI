import type { InputHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

type InputSize = "sm" | "md" | "lg";
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: InputSize;
  invalid?: boolean;
};
const sizes: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-11 px-4 text-base"
};

export function Input({
  className,
  inputSize = "md",
  invalid = false,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-md border bg-surface text-text transition duration-base ease-standard placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        invalid
          ? "border-danger focus-visible:outline-danger"
          : "border-border focus-visible:outline-primary",
        sizes[inputSize],
        className
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
