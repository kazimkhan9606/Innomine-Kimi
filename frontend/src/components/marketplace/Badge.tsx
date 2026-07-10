import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "innovation" | "verified" | "creator" | "category" | "discount" | "default";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants: Record<BadgeVariant, string> = {
      default: "bg-surface text-text-primary border-border",
      innovation: "bg-info text-primary-foreground border-transparent",
      verified: "bg-success text-primary-foreground border-transparent",
      creator: "bg-accent text-primary-foreground border-transparent",
      category: "bg-secondary text-text-secondary border-transparent",
      discount: "bg-danger text-primary-foreground border-transparent",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Badge.displayName = "Badge";
