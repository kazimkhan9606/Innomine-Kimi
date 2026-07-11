import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface RecentlyViewedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

export const RecentlyViewedCard = React.forwardRef<HTMLDivElement, RecentlyViewedCardProps>(
  ({ className, title, imageUrl, price, ...props }, ref) => {
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
          "group block overflow-hidden rounded-xl bg-card shadow-surface transition-all hover:shadow-raised border border-border cursor-pointer w-32 shrink-0 sm:w-40",
          className
        )}
        {...props}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-surface">
          <Image src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
           fill sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="p-3">
          <h4 className="truncate text-xs font-medium text-text-primary mb-1">
            {title}
          </h4>
          <p className="text-sm font-semibold text-text-primary">
            {formatter.format(price)}
          </p>
        </div>
      </div>
    );
  }
);
RecentlyViewedCard.displayName = "RecentlyViewedCard";
