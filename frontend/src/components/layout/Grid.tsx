import React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: "sm" | "md" | "lg" | "none";
}

const gapClasses = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

const colClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-3 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6",
  7: "grid-cols-2 sm:grid-cols-4 md:grid-cols-7",
  8: "grid-cols-2 sm:grid-cols-4 md:grid-cols-8",
  9: "grid-cols-3 sm:grid-cols-5 md:grid-cols-9",
  10: "grid-cols-3 sm:grid-cols-5 md:grid-cols-10",
  11: "grid-cols-4 sm:grid-cols-6 md:grid-cols-11",
  12: "grid-cols-4 sm:grid-cols-8 lg:grid-cols-12",
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, cols = 1, gap = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid", colClasses[cols], gapClasses[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";
