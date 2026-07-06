import React from "react";
import { cn } from "@/lib/utils";
import { Price } from "./Price";
import { Rating } from "./Rating";

export interface HorizontalProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating?: number;
  reviews?: number;
}

export const HorizontalProductCard = React.forwardRef<HTMLDivElement, HorizontalProductCardProps>(
  ({ className, id, title, imageUrl, price, originalPrice, category, rating, reviews, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex flex-row overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-slate-900 border border-slate-100 dark:border-slate-800",
          className
        )}
        {...props}
      >
        <div className="relative h-32 w-32 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:h-40 sm:w-40">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-1 p-4 sm:p-5">
          <div className="mb-1 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {category}
          </div>
          <h3 className="mb-2 line-clamp-2 text-base sm:text-lg font-medium text-slate-900 dark:text-slate-50 flex-1">
            {title}
          </h3>
          {rating !== undefined && (
            <div className="mb-3 hidden sm:block">
              <Rating rating={rating} reviews={reviews} />
            </div>
          )}
          <div className="mt-auto">
            <Price amount={price} originalAmount={originalPrice} size="md" />
          </div>
        </div>
      </div>
    );
  }
);
HorizontalProductCard.displayName = "HorizontalProductCard";
