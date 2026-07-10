import React from "react";
import { cn } from "@/lib/utils";
import { Price } from "./Price";

export interface CompactProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

export const CompactProductCard = React.forwardRef<HTMLDivElement, CompactProductCardProps>(
  ({ className, id, title, imageUrl, price, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-hover cursor-pointer",
          className
        )}
        {...props}
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-surface">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <h4 className="truncate text-sm font-medium text-text-primary mb-1">
            {title}
          </h4>
          <Price amount={price} size="sm" />
        </div>
      </div>
    );
  }
);
CompactProductCard.displayName = "CompactProductCard";
