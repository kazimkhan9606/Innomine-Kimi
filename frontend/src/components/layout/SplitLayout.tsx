import React from "react";
import { cn } from "@/lib/utils";

interface SplitLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: "1:1" | "1:2" | "2:1" | "1:3" | "3:1";
  gap?: "sm" | "md" | "lg" | "xl";
}

const gapClasses = {
  sm: "gap-4",
  md: "gap-8",
  lg: "gap-12",
  xl: "gap-16",
};

const ratioClasses = {
  "1:1": "lg:grid-cols-2",
  "1:2": "lg:grid-cols-[1fr_2fr]",
  "2:1": "lg:grid-cols-[2fr_1fr]",
  "1:3": "lg:grid-cols-[1fr_3fr]",
  "3:1": "lg:grid-cols-[3fr_1fr]",
};

export const SplitLayout = React.forwardRef<HTMLDivElement, SplitLayoutProps>(
  ({ left, right, className, ratio = "1:1", gap = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1",
          ratioClasses[ratio],
          gapClasses[gap],
          className
        )}
        {...props}
      >
        <div>{left}</div>
        <div>{right}</div>
      </div>
    );
  }
);

SplitLayout.displayName = "SplitLayout";
