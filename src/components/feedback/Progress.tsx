import type { ProgressHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & {
  label?: string;
};

export function Progress({
  value = 0,
  max = 100,
  label,
  className,
  ...props
}: ProgressProps) {
  const numericValue = typeof value === "number" ? value : 0;
  const numericMax = typeof max === "number" ? max : 100;
  const percentage = Math.max(
    0,
    Math.min(100, (numericValue / numericMax) * 100)
  );

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1 flex justify-between text-xs text-muted">
        {label ? <span>{label}</span> : null}
        <span>{Math.round(percentage)}%</span>
      </div>
      <progress
        className="h-2 w-full overflow-hidden rounded-full accent-primary"
        value={value}
        max={max}
        {...props}
      />
    </div>
  );
}
