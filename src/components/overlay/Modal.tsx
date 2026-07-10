import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  title?: string;
  children: ReactNode;
};
export function Modal({
  open,
  title,
  children,
  className,
  ...props
}: ModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center bg-background/70 p-4 backdrop-blur-md"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "w-full max-w-lg rounded-lg border border-border bg-surface-elevated p-6 text-text shadow-modal",
          className
        )}
        {...props}
      >
        {title ? (
          <h2 className="mb-4 text-title font-semibold">{title}</h2>
        ) : null}
        {children}
      </div>
    </div>
  );
}
