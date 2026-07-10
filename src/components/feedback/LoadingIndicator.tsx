import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";
import { Spinner } from "@/components/ui/Spinner";

export type LoadingIndicatorProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};
export function LoadingIndicator({
  label = "Loading",
  className,
  ...props
}: LoadingIndicatorProps) {
  return (
    <div
      role="status"
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted",
        className
      )}
      {...props}
    >
      <Spinner size="sm" label={label} />
      <span>{label}</span>
    </div>
  );
}
