import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  size?: SpinnerSize;
  label?: string;
};
const sizes: Record<SpinnerSize, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
};

export function Spinner({
  size = "md",
  label = "Loading",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent text-primary",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
