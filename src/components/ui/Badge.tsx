import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";
import type { ComponentTone } from "@/components/shared/types";

type BadgeVariant = "soft" | "solid" | "outline";
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: ComponentTone;
  variant?: BadgeVariant;
};
const tones: Record<ComponentTone, string> = {
  neutral: "text-muted border-border bg-surface-raised",
  primary: "text-primary border-primary/30 bg-primary/10",
  secondary: "text-secondary border-secondary/30 bg-secondary/10",
  success: "text-success border-success/30 bg-success/10",
  info: "text-info border-info/30 bg-info/10",
  warning: "text-warning border-warning/30 bg-warning/10",
  danger: "text-danger border-danger/30 bg-danger/10"
};

export function Badge({
  className,
  tone = "neutral",
  variant = "soft",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        variant === "solid" && "border-transparent bg-current/20",
        variant === "outline" && "bg-transparent",
        className
      )}
      {...props}
    />
  );
}
