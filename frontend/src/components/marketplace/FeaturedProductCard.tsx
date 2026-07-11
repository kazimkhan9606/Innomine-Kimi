import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Price } from "./Price";
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
  ({ className, title, description, imageUrl, price, category, creatorName, isInnovation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl bg-card text-text-primary shadow-floating md:flex md:h-[400px]",
          className
        )}
        {...props}
      >
        <div className="relative h-64 w-full md:h-full md:w-1/2 overflow-hidden bg-surface">
          <Image
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card hidden md:block" />
        </div>
        
        <div className="relative flex flex-col justify-center p-6 md:w-1/2 md:p-12 z-10 bg-card">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="category" className="bg-surface text-text-secondary border-border">{category}</Badge>
            {isInnovation && <Badge variant="innovation">Innovation</Badge>}
          </div>
          
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-text-primary">
            {title}
          </h2>
          
          <p className="mb-6 line-clamp-3 text-text-muted text-sm md:text-base">
            {description}
          </p>
          
          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm text-text-muted">By {creatorName}</p>
              <Price amount={price} size="lg" className="text-text-primary [&>span]:text-text-primary" />
            </div>
            
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-hover">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);
FeaturedProductCard.displayName = "FeaturedProductCard";
