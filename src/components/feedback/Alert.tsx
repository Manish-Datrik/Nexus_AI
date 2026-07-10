import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";
import type { ComponentTone } from "@/components/shared/types";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  tone?: ComponentTone;
  title?: string;
};
const tones: Record<ComponentTone, string> = {
  neutral: "border-border bg-surface text-text",
  primary: "border-primary/30 bg-primary/10 text-text",
  secondary: "border-secondary/30 bg-secondary/10 text-text",
  success: "border-success/30 bg-success/10 text-text",
  info: "border-info/30 bg-info/10 text-text",
  warning: "border-warning/30 bg-warning/10 text-text",
  danger: "border-danger/30 bg-danger/10 text-text"
};
export function Alert({
  tone = "neutral",
  title,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="status"
      className={cn("rounded-md border p-4 text-sm", tones[tone], className)}
      {...props}
    >
      {title ? <div className="mb-1 font-semibold">{title}</div> : null}
      <div className="text-muted">{children}</div>
    </div>
  );
}
