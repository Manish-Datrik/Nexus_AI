import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type ErrorStateProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  action?: ReactNode;
};
export function ErrorState({
  title,
  description,
  action,
  className,
  ...props
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-md border border-danger/40 bg-danger/10 p-6 text-center",
        className
      )}
      {...props}
    >
      <h3 className="text-title font-semibold text-text">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-muted">{description}</p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
