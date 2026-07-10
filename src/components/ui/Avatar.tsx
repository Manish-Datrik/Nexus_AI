import Image from "next/image";
import type { HTMLAttributes } from "react";
import { cn } from "@/components/shared/cn";

type AvatarSize = "sm" | "md" | "lg" | "xl";

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
};

const sizes: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
};

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface-raised font-semibold text-muted",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="64px" className="object-cover" />
      ) : (
        <span aria-hidden={!fallback}>{fallback ?? "?"}</span>
      )}
    </div>
  );
}
