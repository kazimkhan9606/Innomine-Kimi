import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  label?: string;
  labelPosition?: "start" | "center" | "end";
}

export function Divider({
  className,
  orientation = "horizontal",
  label,
  labelPosition = "center",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        className={cn(
          "w-px h-full bg-slate-200 dark:bg-slate-800",
          className
        )}
      />
    );
  }

  if (label) {
    return (
      <div className={cn("flex items-center", className)}>
        <div className={cn("h-px bg-slate-200 dark:bg-slate-800", 
          labelPosition === "start" ? "w-8" : "flex-1"
        )} />
        <span className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
          {label}
        </span>
        <div className={cn("h-px bg-slate-200 dark:bg-slate-800", 
          labelPosition === "end" ? "w-8" : "flex-1"
        )} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      className={cn(
        "h-px w-full bg-slate-200 dark:bg-slate-800",
        className
      )}
    />
  );
}
