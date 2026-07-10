import type {
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
  HTMLAttributes
} from "react";
import { cn } from "@/components/shared/cn";

export function Table({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn(
          "w-full border-collapse text-left text-sm text-text",
          className
        )}
        {...props}
      />
    </div>
  );
}
export function TableHeader(props: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className="border-b border-border bg-surface-raised" {...props} />
  );
}
export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className="divide-y divide-border" {...props} />;
}
export function TableRow(props: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className="transition duration-base ease-standard hover:bg-surface-raised"
      {...props}
    />
  );
}
export function TableHead({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted",
        className
      )}
      {...props}
    />
  );
}
export function TableCell({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-4 py-3", className)} {...props} />;
}
