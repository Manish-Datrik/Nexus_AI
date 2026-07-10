import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type PaginationProps = HTMLAttributes<HTMLDivElement>;
export type PaginationButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};
export function Pagination({ className, ...props }: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}
export function PaginationButton({
  active = false,
  className,
  type = "button",
  ...props
}: PaginationButtonProps) {
  return (
    <button
      type={type}
      aria-current={active ? "page" : undefined}
      className={cn(
        "h-9 min-w-9 rounded-md border border-border px-3 text-sm text-muted transition duration-base ease-standard hover:bg-surface-raised hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-[var(--opacity-disabled)]",
        active && "bg-primary text-background",
        className
      )}
      {...props}
    />
  );
}
