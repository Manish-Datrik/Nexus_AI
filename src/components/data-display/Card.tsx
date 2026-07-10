import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
  glass?: boolean;
};
export function Card({
  elevated = false,
  glass = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface p-5 text-text shadow-card",
        elevated && "bg-surface-elevated shadow-floating",
        glass &&
          "border-[var(--glass-border)] bg-[var(--glass-surface)] backdrop-blur-[var(--glass-blur)]",
        className
      )}
      {...props}
    />
  );
}
