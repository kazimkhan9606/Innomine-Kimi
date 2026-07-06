import React from "react";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxHeight?: string | number;
  orientation?: "vertical" | "horizontal" | "both";
}

export function ScrollArea({
  className,
  children,
  maxHeight,
  orientation = "vertical",
  style,
  ...props
}: ScrollAreaProps) {
  
  const overflowClass = {
    vertical: "overflow-y-auto overflow-x-hidden",
    horizontal: "overflow-x-auto overflow-y-hidden",
    both: "overflow-auto",
  };

  return (
    <div
      className={cn(
        "relative",
        overflowClass[orientation],
        "scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent",
        className
      )}
      style={{ maxHeight, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
