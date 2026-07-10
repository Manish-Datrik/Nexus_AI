import type { InputHTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <input
      type="checkbox"
      role="switch"
      className={cn(
        "h-6 w-11 cursor-pointer appearance-none rounded-full border border-border bg-surface-raised transition duration-base ease-standard before:block before:h-5 before:w-5 before:translate-x-0 before:rounded-full before:bg-text before:transition before:duration-base checked:bg-primary checked:before:translate-x-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        className
      )}
      {...props}
    />
  );
}
