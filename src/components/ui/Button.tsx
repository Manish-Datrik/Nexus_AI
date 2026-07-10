import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/shared/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background shadow-glow-primary hover:bg-primary/90",
  secondary:
    "bg-secondary text-background shadow-glow-secondary hover:bg-secondary/90",
  outline: "border border-border bg-surface text-text hover:bg-surface-raised",
  ghost: "bg-transparent text-text hover:bg-surface-raised",
  danger: "bg-danger text-background shadow-glow-danger hover:bg-danger/90"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 gap-2 px-3 text-sm",
  md: "h-10 gap-2.5 px-4 text-sm",
  lg: "h-11 gap-3 px-5 text-base"
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition duration-base ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-[var(--opacity-disabled)]",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}
      {children}
      {rightIcon}
    </button>
  );
}
