import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      aria-orientation={orientation}
      {...props}
    />
  );
}
