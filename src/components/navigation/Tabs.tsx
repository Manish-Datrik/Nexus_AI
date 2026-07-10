import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type TabsProps = HTMLAttributes<HTMLDivElement>;
export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};
export function Tabs({ className, ...props }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex rounded-md border border-border bg-surface p-1",
        className
      )}
      {...props}
    />
  );
}
export function Tab({
  active = false,
  className,
  type = "button",
  ...props
}: TabProps) {
  return (
    <button
      type={type}
      role="tab"
      aria-selected={active}
      className={cn(
        "rounded-sm px-3 py-1.5 text-sm font-medium text-muted transition duration-base ease-standard hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
        active && "bg-surface-elevated text-text shadow-card",
        className
      )}
      {...props}
    />
  );
}
