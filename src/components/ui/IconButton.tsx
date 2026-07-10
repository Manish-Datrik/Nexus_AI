import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

type IconButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "danger";
type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  loading?: boolean;
  icon: ReactNode;
};

const variants: Record<IconButtonVariant, string> = {
  primary: "bg-primary text-background hover:bg-primary/90",
  secondary: "bg-secondary text-background hover:bg-secondary/90",
  outline: "border border-border bg-surface text-text hover:bg-surface-raised",
  ghost: "bg-transparent text-text hover:bg-surface-raised",
  danger: "bg-danger text-background hover:bg-danger/90"
};

const sizes: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-11 w-11"
};

export function IconButton({
  label,
  icon,
  className,
  variant = "ghost",
  size = "md",
  loading = false,
  disabled,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md transition duration-base ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-[var(--opacity-disabled)]",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      aria-label={label}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        icon
      )}
    </button>
  );
}
