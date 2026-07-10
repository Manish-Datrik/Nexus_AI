import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-surface-elevated", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
