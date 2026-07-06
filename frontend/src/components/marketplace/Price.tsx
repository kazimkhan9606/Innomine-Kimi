import React from "react";
import { cn } from "@/lib/utils";

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  originalAmount?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
}

export const Price = React.forwardRef<HTMLDivElement, PriceProps>(
  ({ className, amount, originalAmount, currency = "USD", size = "md", ...props }, ref) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    });

    const sizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg md:text-xl font-semibold",
    };

    return (
      <div ref={ref} className={cn("flex items-baseline gap-2", className)} {...props}>
        <span className={cn("font-medium text-slate-900 dark:text-slate-50", sizes[size])}>
          {formatter.format(amount)}
        </span>
        {originalAmount && originalAmount > amount && (
          <span className="text-sm text-slate-500 line-through dark:text-slate-400">
            {formatter.format(originalAmount)}
          </span>
        )}
      </div>
    );
  }
);
Price.displayName = "Price";
