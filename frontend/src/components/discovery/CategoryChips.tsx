import React from "react";
import { cn } from "@/lib/utils";

export interface CategoryChipsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  categories: { id: string; label: string }[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

export const CategoryChips = React.forwardRef<HTMLDivElement, CategoryChipsProps>(
  ({ className, categories, activeId, onSelect, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap gap-2", className)}
        {...props}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect && onSelect(category.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeId === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-text-secondary hover:bg-hover"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    );
  }
);
CategoryChips.displayName = "CategoryChips";
