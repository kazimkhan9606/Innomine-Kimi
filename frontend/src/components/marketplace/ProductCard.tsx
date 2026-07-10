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
          "group flex flex-col overflow-hidden rounded-xl bg-card shadow-surface transition-all hover:shadow-raised border border-border",
          className
        )}
        {...props}
      >
        <div className="relative aspect-square overflow-hidden bg-surface">
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
          <div className="mb-2 text-xs font-medium text-text-secondary uppercase tracking-wider">
            {category}
          </div>
          <h3 className="mb-2 line-clamp-2 text-base font-medium text-text-primary flex-1">
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
