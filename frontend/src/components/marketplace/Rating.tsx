import React from "react";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  maxRating?: number;
  reviews?: number;
  showReviews?: boolean;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({ className, rating, maxRating = 5, reviews, showReviews = true, ...props }, ref) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div ref={ref} className={cn("flex items-center gap-1.5", className)} {...props}>
        <div className="flex items-center text-amber-500">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={`full-${i}`} className="h-4 w-4 fill-current" />
          ))}
          {hasHalfStar && <StarHalf className="h-4 w-4 fill-current" />}
          {[...Array(maxRating - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <Star key={`empty-${i}`} className="h-4 w-4 text-slate-300 dark:text-slate-700" />
          ))}
        </div>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {rating.toFixed(1)}
        </span>
        {showReviews && reviews !== undefined && (
          <span className="text-sm text-slate-500 dark:text-slate-400">
            ({reviews.toLocaleString()})
          </span>
        )}
      </div>
    );
  }
);
Rating.displayName = "Rating";
