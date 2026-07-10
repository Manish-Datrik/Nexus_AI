import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
};
export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-md border border-dashed border-border bg-surface p-8 text-center",
        className
      )}
      {...props}
    >
      {icon ? <div className="mb-3 text-muted">{icon}</div> : null}
      <h3 className="text-title font-semibold text-text">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-md text-sm text-muted">{description}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
