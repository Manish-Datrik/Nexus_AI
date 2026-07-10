import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type DialogProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  title: string;
  description?: string;
  children?: ReactNode;
};
export function Dialog({
  open,
  title,
  description,
  children,
  className,
  ...props
}: DialogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center bg-background/70 p-4 backdrop-blur-md">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby={description ? "dialog-description" : undefined}
        className={cn(
          "w-full max-w-md rounded-lg border border-border bg-surface-elevated p-5 text-text shadow-modal",
          className
        )}
        {...props}
      >
        <h2 id="dialog-title" className="text-title font-semibold">
          {title}
        </h2>
        {description ? (
          <p id="dialog-description" className="mt-2 text-sm text-muted">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-5">{children}</div> : null}
      </section>
    </div>
  );
}
