import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Price } from "./Price";
import { Rating } from "./Rating";
import { ArrowRight } from "lucide-react";

export interface FeaturedProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  creatorName: string;
  isInnovation?: boolean;
}

export const FeaturedProductCard = React.forwardRef<HTMLDivElement, FeaturedProductCardProps>(
  ({ className, id, title, description, imageUrl, price, category, creatorName, isInnovation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-[24px] bg-slate-900 text-white shadow-xl md:flex md:h-[400px]",
          className
        )}
        {...props}
      >
        <div className="relative h-64 w-full md:h-full md:w-1/2 overflow-hidden bg-slate-800">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 hidden md:block" />
        </div>
        
        <div className="relative flex flex-col justify-center p-6 md:w-1/2 md:p-12 z-10 bg-slate-900">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="category" className="bg-slate-800 text-slate-300 border-slate-700">{category}</Badge>
            {isInnovation && <Badge variant="innovation">Innovation</Badge>}
          </div>
          
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-white">
            {title}
          </h2>
          
          <p className="mb-6 line-clamp-3 text-slate-400 text-sm md:text-base">
            {description}
          </p>
          
          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm text-slate-400">By {creatorName}</p>
              <Price amount={price} size="lg" className="text-white [&>span]:text-white" />
            </div>
            
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);
FeaturedProductCard.displayName = "FeaturedProductCard";
