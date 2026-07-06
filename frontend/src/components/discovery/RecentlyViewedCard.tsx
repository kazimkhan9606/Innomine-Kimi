import React from "react";
import { cn } from "@/lib/utils";

export interface RecentlyViewedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

export const RecentlyViewedCard = React.forwardRef<HTMLDivElement, RecentlyViewedCardProps>(
  ({ className, id, title, imageUrl, price, ...props }, ref) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return (
      <div
        ref={ref}
        className={cn(
          "group block overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer w-32 shrink-0 sm:w-40",
          className
        )}
        {...props}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h4 className="truncate text-xs font-medium text-slate-900 dark:text-slate-50 mb-1">
            {title}
          </h4>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            {formatter.format(price)}
          </p>
        </div>
      </div>
    );
  }
);
RecentlyViewedCard.displayName = "RecentlyViewedCard";
