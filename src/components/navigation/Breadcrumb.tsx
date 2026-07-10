import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type BreadcrumbProps = HTMLAttributes<HTMLOListElement>;
export type BreadcrumbItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  current?: boolean;
};
export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-sm text-muted",
          className
        )}
        {...props}
      />
    </nav>
  );
}
export function BreadcrumbItem({
  current = false,
  className,
  children,
  ...props
}: BreadcrumbItemProps) {
  return (
    <li className="flex items-center gap-2">
      <a
        aria-current={current ? "page" : undefined}
        className={cn(
          current ? "text-text" : "text-muted hover:text-text",
          className
        )}
        {...props}
      >
        {children}
      </a>
      <span aria-hidden="true" className="text-border">
        /
      </span>
    </li>
  );
}
