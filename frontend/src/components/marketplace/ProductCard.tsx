import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Price } from "./Price";
import { Rating } from "./Rating";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating?: number;
  reviews?: number;
  isInnovation?: boolean;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, id, title, imageUrl, price, originalPrice, category, rating, reviews, isInnovation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-slate-900 dark:hover:bg-slate-800/50 border border-slate-100 dark:border-slate-800",
          className
        )}
        {...props}
      >
        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {isInnovation && <Badge variant="innovation">Innovation</Badge>}
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {category}
          </div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium text-slate-900 dark:text-slate-50 flex-1">
            {title}
          </h3>
          {rating !== undefined && (
            <div className="mb-3">
              <Rating rating={rating} reviews={reviews} />
            </div>
          )}
          <div className="mt-auto">
            <Price amount={price} originalAmount={originalPrice} size="lg" />
          </div>
        </div>
      </div>
    );
  }
);
ProductCard.displayName = "ProductCard";
