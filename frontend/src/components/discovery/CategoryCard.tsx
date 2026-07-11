import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imageUrl: string;
  itemCount?: number;
}

export const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  ({ className, title, imageUrl, itemCount, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex h-32 cursor-pointer items-end overflow-hidden rounded-xl p-4 sm:h-40 sm:p-5",
          className
        )}
        {...props}
      >
        <Image src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
         fill sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity group-hover:from-background/90" />
        
        <div className="relative z-10 w-full text-text-primary">
          <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
          {itemCount !== undefined && (
            <p className="mt-1 text-xs font-medium text-text-muted">{itemCount} items</p>
          )}
        </div>
      </div>
    );
  }
);
CategoryCard.displayName = "CategoryCard";
