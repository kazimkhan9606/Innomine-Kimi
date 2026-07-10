import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

export interface TrendingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  rank?: number;
  label?: string;
}

export const TrendingBadge = React.forwardRef<HTMLDivElement, TrendingBadgeProps>(
  ({ className, rank, label = "Trending", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary-foreground border border-transparent",
          className
        )}
        {...props}
      >
        <TrendingUp className="h-3.5 w-3.5" />
        {rank && <span>#{rank}</span>}
        <span>{label}</span>
      </div>
    );
  }
);
TrendingBadge.displayName = "TrendingBadge";
