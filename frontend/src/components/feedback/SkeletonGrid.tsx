import React from "react";
import { cn } from "@/lib/utils";
import { SkeletonProduct } from "./SkeletonProduct";

export interface SkeletonGridProps {
  count?: number;
  className?: string;
}

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({ count = 4, className }) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonProduct key={i} />
      ))}
    </div>
  );
};
