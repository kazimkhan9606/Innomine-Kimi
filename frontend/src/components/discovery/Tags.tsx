import React from "react";
import { cn } from "@/lib/utils";

export interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
}

export const Tags = React.forwardRef<HTMLDivElement, TagsProps>(
  ({ className, tags, ...props }, ref) => {
    if (!tags || tags.length === 0) return null;

    return (
      <div ref={ref} className={cn("flex flex-wrap gap-1.5", className)} {...props}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-surface px-2 py-1 text-xs font-medium text-text-secondary"
          >
            #{tag}
          </span>
        ))}
      </div>
    );
  }
);
Tags.displayName = "Tags";
