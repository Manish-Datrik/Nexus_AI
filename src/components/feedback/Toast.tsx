import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";
import type { ComponentTone } from "@/components/shared/types";

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  tone?: ComponentTone;
  title?: string;
  description?: string;
};
const toneClass: Record<ComponentTone, string> = {
  neutral: "border-border",
  primary: "border-primary/40",
  secondary: "border-secondary/40",
  success: "border-success/40",
  info: "border-info/40",
  warning: "border-warning/40",
  danger: "border-danger/40"
};
export function Toast({
  tone = "neutral",
  title,
  description,
  className,
  children,
  ...props
}: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        "rounded-md border bg-surface-elevated p-4 text-sm text-text shadow-floating",
        toneClass[tone],
        className
      )}
      {...props}
    >
      {title ? <div className="font-semibold">{title}</div> : null}
      {description ? <p className="mt-1 text-muted">{description}</p> : null}
      {children}
    </div>
  );
}
